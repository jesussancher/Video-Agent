import { NextResponse } from "next/server";
import { requireAuth, isAuthError } from "../../_lib/session";
import {
  createComposition,
  calcTotalDuration,
  upsertUserProfile,
} from "@/lib/db";
import { DEFAULT_SEQUENCES } from "@/constants/defaultSequences";

/**
 * POST /api/compositions/init
 *
 * Inicializa la colección de composiciones en Firebase con el proyecto actual
 * (DEFAULT_SEQUENCES). Crea una nueva composición "draft" para el usuario.
 */
export async function POST() {
  const auth = await requireAuth();
  if (isAuthError(auth)) return auth.error;

  try {
    // Asegurar que el perfil del usuario existe en Firestore
    await upsertUserProfile(auth.uid, {
      email: auth.email ?? "",
      displayName: auth.name ?? undefined,
      photoUrl: auth.picture ?? undefined,
    });

    const composition = await createComposition(auth.uid, {
      title: "Lait Technology — Presentation",
      description: "Composición inicial del proyecto",
      status: "draft",
      fps: 30,
      width: 1920,
      height: 1080,
      sequences: DEFAULT_SEQUENCES,
      totalDurationInFrames: calcTotalDuration(DEFAULT_SEQUENCES),
    });

    return NextResponse.json({ composition }, { status: 201 });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : String(err);
    console.error("[POST /api/compositions/init]", err);
    return NextResponse.json(
      {
        error: "Error al inicializar la colección en Firebase",
        details: message,
      },
      { status: 500 }
    );
  }
}
