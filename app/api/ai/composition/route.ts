import { NextRequest, NextResponse } from "next/server";
import { requireAuth, isAuthError } from "../../_lib/session";
import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_PROMPT } from "./systemPrompt.generated";
import { getRemotionBestPracticesForSystemPrompt } from "./remotionSkillContext";
import { COMPOSITION_API_JSON_CONTRACT } from "./compositionApiContract";
import { extractCompositionJson } from "./compositionParse";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const ANTHROPIC_MODEL = process.env.ANTHROPIC_COMPOSITION_MODEL ?? "claude-sonnet-4-6";

/** Si es "false", no se envía la herramienta web_search (ahorra uso de búsqueda en Anthropic). */
const COMPOSITION_WEB_SEARCH =
  String(process.env.ANTHROPIC_COMPOSITION_WEB_SEARCH ?? "true").toLowerCase() !== "false";

function assistantMessageText(
  content: Anthropic.Messages.ContentBlockParam[] | Anthropic.Messages.ContentBlock[]
): string {
  const parts: string[] = [];
  for (const block of content) {
    if (block.type === "text" && "text" in block && typeof block.text === "string") {
      parts.push(block.text);
    }
  }
  return parts.join("\n").trim();
}

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
      COMPOSITION_API_JSON_CONTRACT,
    ].join("\n\n");

    const response = await client.messages.create({
      model: ANTHROPIC_MODEL,
      max_tokens: 8192,
      temperature: 1,
      system: systemWithRemotionSkill,
      messages,
      ...(COMPOSITION_WEB_SEARCH
        ? {
            tools: [
              {
                type: "web_search_20250305" as const,
                name: "web_search",
                max_uses: 10,
              },
            ],
          }
        : {}),
    });

    const content = assistantMessageText(response.content);

    if (!content) {
      return NextResponse.json(
        { error: "Claude no devolvió contenido" },
        { status: 502 }
      );
    }

    const raw = extractCompositionJson(content);
    if (!raw) {
      return NextResponse.json(
        {
          error:
            "La respuesta del modelo no contiene un JSON de composición válido (se esperaba { title, fps, width, height, sequences }).",
          hint: "El system prompt exige solo JSON; si ves código TSX en message, el modelo ignoró el contrato.",
          message: content,
        },
        { status: 422 }
      );
    }

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
      const rawTransition =
        s.transition && typeof s.transition === "object" && !Array.isArray(s.transition)
          ? (s.transition as Record<string, unknown>)
          : { type: "fade", durationInFrames: 20, timing: "linear" as const };

      const transition =
        sceneType === "audio"
          ? { type: "none", durationInFrames: 0, timing: "linear" as const }
          : {
              type: String(rawTransition.type ?? "fade"),
              durationInFrames: Number(rawTransition.durationInFrames ?? 20),
              timing: String(rawTransition.timing ?? "linear"),
              direction: rawTransition.direction ? String(rawTransition.direction) : undefined,
            };

      return {
        id: String(s.id ?? `seq-${i}`),
        order: i,
        sceneType,
        durationInFrames,
        sceneData,
        transition,
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
