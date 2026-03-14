import { NextRequest, NextResponse } from "next/server";
import { requireAuth, isAuthError } from "../_lib/session";
import { listAssets, listAssetsBySession } from "@/lib/db";

// GET /api/assets?sessionId=xxx — Lista assets de una sesión de composición
// GET /api/assets                — Lista todos los assets del usuario
export async function GET(request: NextRequest) {
  const auth = await requireAuth();
  if (isAuthError(auth)) return auth.error;

  const sessionId = request.nextUrl.searchParams.get("sessionId");

  try {
    const assets = sessionId
      ? await listAssetsBySession(auth.uid, sessionId)
      : await listAssets(auth.uid);
    return NextResponse.json({ assets });
  } catch (err) {
    console.error("[GET /api/assets]", err);
    return NextResponse.json(
      { error: "Error al obtener assets" },
      { status: 500 }
    );
  }
}
