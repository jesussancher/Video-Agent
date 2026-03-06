import { NextRequest, NextResponse } from "next/server";
import { requireAuth, isAuthError } from "../../_lib/session";
import { adminStorage } from "@/firebase-admin";
import { createAsset } from "@/lib/db";
import { STORAGE_BUCKET, STORAGE_PATHS, mimeToAssetType } from "@/lib/storage-paths";
import { randomUUID } from "crypto";
import path from "path";

/**
 * POST /api/assets/upload-url
 *
 * Body: { filename: string; mimeType: string; sizeBytes: number }
 *
 * Responde con:
 *   - uploadUrl  → URL firmada de GCS para hacer PUT desde el cliente
 *   - storagePath → ruta dentro del bucket
 *   - assetId     → ID del documento creado en Firestore (estado "pending")
 *
 * Flujo:
 *   1. Cliente pide URL firmada → este endpoint
 *   2. Cliente sube el archivo con PUT a uploadUrl
 *   3. Cliente notifica que terminó (o usamos un Cloud Function trigger)
 */
export async function POST(request: NextRequest) {
  const auth = await requireAuth();
  if (isAuthError(auth)) return auth.error;

  let body: { filename?: string; mimeType?: string; sizeBytes?: number };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const { filename, mimeType, sizeBytes } = body;

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
  const storagePath = STORAGE_PATHS.userAsset(auth.uid, assetType, uniqueName);

  try {
    const bucket = adminStorage.bucket(STORAGE_BUCKET);
    const file = bucket.file(storagePath);

    // URL firmada válida por 15 minutos para subir el archivo
    const [uploadUrl] = await file.getSignedUrl({
      version: "v4",
      action: "write",
      expires: Date.now() + 15 * 60 * 1000,
      contentType: mimeType,
    });

    // Crear el registro del asset en Firestore (downloadUrl se actualizará post-upload)
    const [downloadUrl] = await file.getSignedUrl({
      version: "v4",
      action: "read",
      expires: Date.now() + 365 * 24 * 60 * 60 * 1000, // 1 año
    });

    const asset = await createAsset(auth.uid, {
      name: filename,
      type: assetType,
      mimeType,
      sizeBytes,
      storagePath,
      downloadUrl,
    });

    return NextResponse.json({ uploadUrl, storagePath, asset }, { status: 201 });
  } catch (err) {
    console.error("[POST /api/assets/upload-url]", err);
    return NextResponse.json(
      { error: "Error al generar URL de subida" },
      { status: 500 }
    );
  }
}
