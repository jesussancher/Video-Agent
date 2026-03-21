import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { requireAuth, isAuthError } from "../../../_lib/session";
import { adminStorage } from "@/firebase-admin";
import { assetRef, assetToDTO } from "@/lib/db";
import { STORAGE_BUCKET } from "@/lib/storage-paths";
import type { AssetDoc } from "@/lib/db";

type Params = { params: Promise<{ id: string }> };

/**
 * POST /api/assets/:id/finalize-upload
 *
 * Tras un PUT exitoso a la URL firmada (sin headers de metadata), aplica el token
 * de descarga de Firebase en el objeto con Admin SDK.
 */
export async function POST(_req: Request, { params }: Params) {
  const auth = await requireAuth();
  if (isAuthError(auth)) return auth.error;

  const { id } = await params;

  try {
    const snap = await assetRef(auth.uid, id).get();
    if (!snap.exists) {
      return NextResponse.json({ error: "Asset no encontrado" }, { status: 404 });
    }

    const doc = snap.data() as AssetDoc;
    const token = doc.pendingDownloadToken;
    if (!token) {
      const refreshed = await assetRef(auth.uid, id).get();
      return NextResponse.json({
        ok: true,
        alreadyFinalized: true,
        asset: assetToDTO(id, refreshed.data() as AssetDoc),
      });
    }

    const bucket = adminStorage.bucket(STORAGE_BUCKET);
    const file = bucket.file(doc.storagePath);

    // Tras el PUT a la URL firmada, GCS puede tardar un instante en exponer el objeto
    // (mismo criterio que subida atómica con Admin en /api/ai/audio).
    const maxAttempts = 25;
    const delayMs = 200;
    let exists = false;
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const [ok] = await file.exists();
      if (ok) {
        exists = true;
        break;
      }
      await new Promise((r) => setTimeout(r, delayMs));
    }
    if (!exists) {
      return NextResponse.json(
        { error: "El archivo aún no está en Storage. Completa el PUT primero." },
        { status: 409 }
      );
    }

    await file.setMetadata({
      metadata: {
        firebaseStorageDownloadTokens: token,
      },
    });

    await assetRef(auth.uid, id).update({
      pendingDownloadToken: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp(),
    });

    const after = await assetRef(auth.uid, id).get();
    return NextResponse.json({
      ok: true,
      asset: assetToDTO(id, after.data() as AssetDoc),
    });
  } catch (err) {
    console.error("[POST /api/assets/:id/finalize-upload]", err);
    return NextResponse.json(
      {
        error: "No se pudo finalizar la subida (metadata del archivo)",
        ...(process.env.NODE_ENV !== "production" && {
          details: err instanceof Error ? err.message : String(err),
        }),
      },
      { status: 500 }
    );
  }
}
