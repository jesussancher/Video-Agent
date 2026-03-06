import { NextRequest, NextResponse } from "next/server";
import { requireAuth, isAuthError } from "../../_lib/session";
import { assetRef, deleteAsset } from "@/lib/db";
import { adminStorage } from "@/firebase-admin";
import { STORAGE_BUCKET } from "@/lib/storage-paths";
import type { AssetDoc } from "@/lib/db";

type Params = { params: Promise<{ id: string }> };

// DELETE /api/assets/:id — Elimina el asset de Firestore y del bucket
export async function DELETE(_req: NextRequest, { params }: Params) {
  const auth = await requireAuth();
  if (isAuthError(auth)) return auth.error;

  const { id } = await params;

  try {
    // Leer el documento antes de borrar para obtener storagePath
    const snap = await assetRef(auth.uid, id).get();
    if (!snap.exists) {
      return NextResponse.json({ error: "Asset no encontrado" }, { status: 404 });
    }

    const doc = snap.data() as AssetDoc;

    // Eliminar archivo del bucket
    try {
      await adminStorage
        .bucket(STORAGE_BUCKET)
        .file(doc.storagePath)
        .delete({ ignoreNotFound: true });
    } catch (storageErr) {
      console.warn("[DELETE /api/assets/:id] Error borrando del bucket:", storageErr);
    }

    // Eliminar documento de Firestore
    await deleteAsset(auth.uid, id);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[DELETE /api/assets/:id]", err);
    return NextResponse.json(
      { error: "Error al eliminar asset" },
      { status: 500 }
    );
  }
}
