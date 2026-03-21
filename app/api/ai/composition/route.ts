import { NextRequest, NextResponse } from "next/server";
import { requireAuth, isAuthError } from "../../_lib/session";
import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_PROMPT } from "./systemPrompt.generated";
import { getRemotionBestPracticesForSystemPrompt } from "./remotionSkillContext";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const ANTHROPIC_MODEL = process.env.ANTHROPIC_COMPOSITION_MODEL ?? "claude-sonnet-4-6";

// ─── Valid scene types ─────────────────────────────────────────────────────────
const VALID_SCENE_TYPES = [
  "logo-curtain",
  "intro",
  "services",
  "products",
  "metrics",
  "contact",
  "image",
  "video",
  "audio",
  "gif",
  "animated-image",
  "lottie",
  "three-canvas",
  "text",
  "captions",
  "light-leak",
  "reel-hook",
  "reel-text-card",
  "reel-cta",
] as const;

function normalizeSceneType(s: string): (typeof VALID_SCENE_TYPES)[number] {
  const lower = s.toLowerCase().replace(/_/g, "-");
  const found = VALID_SCENE_TYPES.find(
    (t) => t === lower || t.replace(/-/g, "") === lower.replace(/-/g, "")
  );
  return found ?? "intro";
}

// ─── Route handler ─────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  const auth = await requireAuth();
  if (isAuthError(auth)) return auth.error;

  const apiKey = ANTHROPIC_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "ANTHROPIC_API_KEY no configurada. Añádela en .env y reinicia el servidor (npm run dev).",
      },
      { status: 503 }
    );
  }

  let body: { messages?: Array<{ role: string; content: string }> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const messages = (body.messages ?? [])
    .filter((m) => m.role && m.content)
    .map((m) => ({
      role: m.role as "user" | "assistant",
      content: String(m.content),
    }));

  if (!messages.some((m) => m.role === "user")) {
    return NextResponse.json(
      { error: "Se necesita al menos un mensaje de usuario" },
      { status: 400 }
    );
  }

  try {
    const client = new Anthropic({ apiKey });

    const systemWithRemotionSkill = [
      SYSTEM_PROMPT,
      getRemotionBestPracticesForSystemPrompt(),
    ].join("\n\n");

    const response = await client.messages.create({
      model: ANTHROPIC_MODEL,
      max_tokens: 4096,
      temperature: 1,
      system: systemWithRemotionSkill,
      messages,
    });

    const textBlock = response.content.find((b) => b.type === "text");
    const content = textBlock?.type === "text" ? textBlock.text.trim() : "";

    if (!content) {
      return NextResponse.json(
        { error: "Claude no devolvió contenido" },
        { status: 502 }
      );
    }

    // Extraer JSON si viene envuelto en ```json ... ```
    let raw = content;
    const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) raw = jsonMatch[1].trim();

    const parsed = JSON.parse(raw) as {
      title?: string;
      sequences?: unknown[];
      fps?: number;
      width?: number;
      height?: number;
    };

    const title =
      typeof parsed.title === "string" && parsed.title.trim()
        ? parsed.title.trim()
        : "Composición generada";
    const sequences = Array.isArray(parsed.sequences) ? parsed.sequences : [];
    const fps = typeof parsed.fps === "number" ? parsed.fps : 30;
    const width = typeof parsed.width === "number" ? parsed.width : 1920;
    const height = typeof parsed.height === "number" ? parsed.height : 1080;

    const normalized = (sequences as unknown[]).map((seq: unknown, i: number) => {
      const s = seq as Record<string, unknown>;
      const sceneType = normalizeSceneType(String(s.sceneType ?? "intro"));
      const durationInFrames = Number(s.durationInFrames) || 90;
      const sceneData =
        s.sceneData && typeof s.sceneData === "object" && !Array.isArray(s.sceneData)
          ? (s.sceneData as Record<string, unknown>)
          : {};
      const transition =
        s.transition && typeof s.transition === "object" && !Array.isArray(s.transition)
          ? (s.transition as Record<string, unknown>)
          : { type: "fade", durationInFrames: 20, timing: "linear" as const };

      return {
        id: String(s.id ?? `seq-${i}`),
        order: i,
        sceneType,
        durationInFrames,
        sceneData,
        transition: {
          type: String(transition.type ?? "fade"),
          durationInFrames: Number(transition.durationInFrames ?? 20),
          timing: String(transition.timing ?? "linear"),
          direction: transition.direction ? String(transition.direction) : undefined,
        },
      };
    });

    return NextResponse.json({
      message: content,
      composition: { title, sequences: normalized, fps, width, height },
    });
  } catch (err) {
    console.error("[ai/composition]", err);

    if (err instanceof Anthropic.APIError) {
      let userMessage = "Error al conectar con Claude.";
      if (err.status === 401) {
        userMessage = "ANTHROPIC_API_KEY inválida o no configurada. Revísala en .env.";
      } else if (err.status === 429) {
        userMessage = "Límite de uso de Claude alcanzado. Intenta más tarde.";
      } else if (err.message) {
        userMessage = err.message.slice(0, 200);
      }
      return NextResponse.json({ error: userMessage }, { status: err.status ?? 502 });
    }

    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Error al generar composición" },
      { status: 500 }
    );
  }
}
