import { NextRequest, NextResponse } from "next/server";
import { requireAuth, isAuthError } from "../../_lib/session";
import {
  getComposition,
  updateComposition,
  deleteComposition,
  calcTotalDuration,
} from "@/lib/db";
import type { Sequence, CompositionStatus } from "@/types";

type Params = { params: Promise<{ id: string }> };

// GET /api/compositions/:id
export async function GET(_req: NextRequest, { params }: Params) {
  const auth = await requireAuth();
  if (isAuthError(auth)) return auth.error;

  const { id } = await params;

  try {
    const composition = await getComposition(auth.uid, id);
    if (!composition) {
      return NextResponse.json(
        { error: "Composición no encontrada" },
        { status: 404 }
      );
    }
    return NextResponse.json({ composition });
  } catch (err) {
    console.error("[GET /api/compositions/:id]", err);
    return NextResponse.json(
      { error: "Error al obtener composición" },
      { status: 500 }
    );
  }
}

// PATCH /api/compositions/:id — Actualización parcial
export async function PATCH(request: NextRequest, { params }: Params) {
  const auth = await requireAuth();
  if (isAuthError(auth)) return auth.error;

  const { id } = await params;

  let body: {
    title?: string;
    description?: string;
    status?: CompositionStatus;
    thumbnailUrl?: string;
    fps?: number;
    width?: number;
    height?: number;
    sequences?: Sequence[];
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const patch: Parameters<typeof updateComposition>[2] = {};

  if (body.title !== undefined) patch.title = body.title.trim();
  if (body.description !== undefined) patch.description = body.description;
  if (body.status !== undefined) patch.status = body.status;
  if (body.thumbnailUrl !== undefined) patch.thumbnailUrl = body.thumbnailUrl;
  if (body.fps !== undefined) patch.fps = body.fps;
  if (body.width !== undefined) patch.width = body.width;
  if (body.height !== undefined) patch.height = body.height;
  if (body.sequences !== undefined) {
    patch.sequences = body.sequences;
    patch.totalDurationInFrames = calcTotalDuration(body.sequences);
  }

  try {
    const composition = await updateComposition(auth.uid, id, patch);
    if (!composition) {
      return NextResponse.json(
        { error: "Composición no encontrada" },
        { status: 404 }
      );
    }
    return NextResponse.json({ composition });
  } catch (err) {
    console.error("[PATCH /api/compositions/:id]", err);
    return NextResponse.json(
      { error: "Error al actualizar composición" },
      { status: 500 }
    );
  }
}

// DELETE /api/compositions/:id
export async function DELETE(_req: NextRequest, { params }: Params) {
  const auth = await requireAuth();
  if (isAuthError(auth)) return auth.error;

  const { id } = await params;

  try {
    const deleted = await deleteComposition(auth.uid, id);
    if (!deleted) {
      return NextResponse.json(
        { error: "Composición no encontrada" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[DELETE /api/compositions/:id]", err);
    return NextResponse.json(
      { error: "Error al eliminar composición" },
      { status: 500 }
    );
  }
}
