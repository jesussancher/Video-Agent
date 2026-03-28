import { NextRequest, NextResponse } from "next/server";
import { requireAuth, isAuthError } from "../../_lib/session";
import { getComposition } from "@/lib/db";
import path from "path";
import os from "os";
import fs from "fs/promises";

// Allow up to 5 min on Vercel
export const maxDuration = 300;

// Bundle cache — persists across requests in the same Node.js worker
let bundleCache: string | null = null;

async function getBundle(): Promise<string> {
  if (bundleCache) return bundleCache;
  const { bundle } = await import("@remotion/bundler");
  const entryPoint = path.join(process.cwd(), "src", "render-root.tsx");
  bundleCache = await bundle({ entryPoint });
  return bundleCache;
}

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: Params) {
  const auth = await requireAuth();
  if (isAuthError(auth)) return auth.error;

  const { id } = await params;

  const composition = await getComposition(auth.uid, id);
  if (!composition) {
    return NextResponse.json({ error: "Composición no encontrada" }, { status: 404 });
  }

  let serveUrl: string;
  try {
    serveUrl = await getBundle();
  } catch (err) {
    console.error("[Render] Bundle failed:", err);
    return NextResponse.json({ error: "Error al compilar la composición" }, { status: 500 });
  }

  // Pre-check audio sequences: strip any audio with a src that returns non-200
  // to prevent Remotion from crashing on 404 asset downloads.
  const sequences = await Promise.all(
    composition.sequences.map(async (seq) => {
      if (seq.sceneType !== "audio") return seq;
      const src = (seq.sceneData as Record<string, unknown>)?.src;
      if (!src || typeof src !== "string") return { ...seq, sceneData: { ...seq.sceneData as object, src: "" } };
      try {
        const res = await fetch(src, { method: "HEAD" });
        if (!res.ok) {
          console.warn(`[Render] Audio src unreachable (${res.status}), skipping: ${src}`);
          return { ...seq, sceneData: { ...seq.sceneData as object, src: "" } };
        }
      } catch {
        console.warn(`[Render] Audio src fetch failed, skipping: ${src}`);
        return { ...seq, sceneData: { ...seq.sceneData as object, src: "" } };
      }
      return seq;
    })
  );

  const outPath = path.join(os.tmpdir(), `render-${id}-${Date.now()}.mp4`);

  try {
    const { selectComposition, renderMedia } = await import("@remotion/renderer");

    const comp = await selectComposition({
      serveUrl,
      id: "video",
      inputProps: { sequences },
    });

    await renderMedia({
      composition: {
        ...comp,
        durationInFrames: composition.totalDurationInFrames,
        fps: composition.fps,
        width: composition.width,
        height: composition.height,
      },
      serveUrl,
      codec: "h264",
      outputLocation: outPath,
      inputProps: { sequences },
    });

    const fileBuffer = await fs.readFile(outPath);
    const safeTitle = composition.title.replace(/[^a-zA-Z0-9_\-. ]/g, "_");

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "video/mp4",
        "Content-Disposition": `attachment; filename="${safeTitle}.mp4"`,
        "Content-Length": String(fileBuffer.length),
      },
    });
  } catch (err) {
    console.error("[Render] Render failed:", err);
    return NextResponse.json({ error: "Error al renderizar el video" }, { status: 500 });
  } finally {
    await fs.unlink(outPath).catch(() => {});
  }
}
