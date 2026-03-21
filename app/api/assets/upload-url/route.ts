import { NextRequest, NextResponse } from "next/server";
import { requireAuth, isAuthError } from "../../_lib/session";
import { adminStorage } from "@/firebase-admin";
import { createAsset } from "@/lib/db";
import { STORAGE_BUCKET, STORAGE_PATHS, mimeToAssetType } from "@/lib/storage-paths";
import { randomUUID } from "crypto";
import path from "path";

/**
 * Construye una URL permanente de Firebase Storage usando un download token.
 * No expira mientras el token no sea revocado.
 */
function firebaseStorageUrl(bucket: string, storagePath: string, token: string): string {
  const encodedPath = storagePath.split("/").map(encodeURIComponent).join("%2F");
  return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodedPath}?alt=media&token=${token}`;
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

  try {
    const bucket = adminStorage.bucket(STORAGE_BUCKET);
    const file = bucket.file(storagePath);

    const [uploadUrl] = await file.getSignedUrl({
      version: "v4",
      action: "write",
      expires: Date.now() + 15 * 60 * 1000,
      contentType: mimeType,
    });

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
    console.error("[POST /api/assets/upload-url]", err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      {
        error: "Error al generar URL de subida",
        ...(process.env.NODE_ENV !== "production" && { details: message.slice(0, 500) }),
      },
      { status: 500 }
    );
  }
}
