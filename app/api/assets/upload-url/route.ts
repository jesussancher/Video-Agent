import { NextRequest, NextResponse } from "next/server";
import { requireAuth, isAuthError } from "../../_lib/session";
import { adminStorage } from "@/firebase-admin";
import { createAsset } from "@/lib/db";
import {
  STORAGE_BUCKET,
  STORAGE_PATHS,
  mimeToAssetType,
  firebaseStorageUrl,
} from "@/lib/storage-paths";
import { randomUUID } from "crypto";
import path from "path";

/** Ref. a objeto de @google-cloud/storage (evita colisión con el tipo global `File` del DOM en TS). */
type BucketFileRef = {
  getSignedUrl: (config: {
    version?: "v2" | "v4";
    action: "read" | "write" | "delete" | "resumable";
    expires: number | string;
    contentType?: string;
  }) => Promise<[string]>;
};

async function getWriteSignedUrl(storageFile: BucketFileRef, mimeType: string): Promise<string> {
  const expires = Date.now() + 15 * 60 * 1000;
  try {
    const [url] = await storageFile.getSignedUrl({
      version: "v4",
      action: "write",
      expires,
      contentType: mimeType,
    });
    return url;
  } catch (v4Err) {
    console.warn("[POST /api/assets/upload-url] firma v4 falló, probando v2:", v4Err);
    const [url] = await storageFile.getSignedUrl({
      action: "write",
      expires,
      contentType: mimeType,
    });
    return url;
  }
}

/**
 * POST /api/assets/upload-url
 *
 * Body: { filename, mimeType, sizeBytes, sessionId?, description? }
 *
 * Flujo:
 *   1. URL firmada v4 de solo escritura (sin headers de extensión; evita fallos de firma con Firebase).
 *   2. Cliente hace PUT con Content-Type únicamente.
 *   3. Cliente llama POST /api/assets/{id}/finalize-upload para fijar firebaseStorageDownloadTokens con Admin SDK.
 */
export async function POST(request: NextRequest) {
  const auth = await requireAuth();
  if (isAuthError(auth)) return auth.error;

  let body: {
    filename?: string;
    mimeType?: string;
    sizeBytes?: number;
    description?: string;
    sessionId?: string;
  };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const { filename, mimeType, sizeBytes, description, sessionId } = body;

  if (!filename || !mimeType || !sizeBytes) {
    return NextResponse.json(
      { error: "Se requieren: filename, mimeType, sizeBytes" },
      { status: 400 }
    );
  }

  let assetType: ReturnType<typeof mimeToAssetType>;
  try {
    assetType = mimeToAssetType(mimeType);
  } catch {
    return NextResponse.json(
      { error: `Tipo MIME no soportado: ${mimeType}` },
      { status: 400 }
    );
  }

  const ext = path.extname(filename);
  const uniqueName = `${randomUUID()}${ext}`;
  const storagePath = sessionId
    ? STORAGE_PATHS.sessionAsset(auth.uid, sessionId, assetType, uniqueName)
    : STORAGE_PATHS.userAsset(auth.uid, assetType, uniqueName);

  // Token de descarga permanente (Firebase Storage)
  const downloadToken = randomUUID();
  const downloadUrl = firebaseStorageUrl(STORAGE_BUCKET, storagePath, downloadToken);

  const bucket = adminStorage.bucket(STORAGE_BUCKET);
  const gcsFile = bucket.file(storagePath) as BucketFileRef;

  let uploadUrl: string;
  try {
    uploadUrl = await getWriteSignedUrl(gcsFile, mimeType);
  } catch (err) {
    console.error("[POST /api/assets/upload-url] getSignedUrl:", err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      {
        error: "No se pudo firmar la URL de subida (revisa credenciales de Firebase Admin y FIREBASE_STORAGE_BUCKET).",
        step: "signedUrl",
        details: message.slice(0, 600),
      },
      { status: 500 }
    );
  }

  try {
    const asset = await createAsset(auth.uid, {
      name: filename,
      type: assetType,
      mimeType,
      sizeBytes,
      storagePath,
      downloadUrl,
      description: description?.trim() || undefined,
      sessionId: sessionId || undefined,
      pendingDownloadToken: downloadToken,
    });

    return NextResponse.json(
      { uploadUrl, storagePath, asset, downloadToken },
      { status: 201 }
    );
  } catch (err) {
    console.error("[POST /api/assets/upload-url] createAsset:", err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      {
        error: "URL firmada OK, pero falló registrar el asset en Firestore.",
        step: "firestore",
        details: message.slice(0, 600),
      },
      { status: 500 }
    );
  }
}
