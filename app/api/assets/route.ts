import { NextResponse } from "next/server";
import { requireAuth, isAuthError } from "../_lib/session";
import { listAssets } from "@/lib/db";

// GET /api/assets — Lista los assets del usuario autenticado
export async function GET() {
  const auth = await requireAuth();
  if (isAuthError(auth)) return auth.error;

  try {
    const assets = await listAssets(auth.uid);
    return NextResponse.json({ assets });
  } catch (err) {
    console.error("[GET /api/assets]", err);
    return NextResponse.json(
      { error: "Error al obtener assets" },
      { status: 500 }
    );
  }
}
