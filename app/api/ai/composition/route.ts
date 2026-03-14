import { NextRequest, NextResponse } from "next/server";
import { requireAuth, isAuthError } from "../../_lib/session";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_COMPOSITION_MODEL ?? "gpt-4o-mini";

const SYSTEM_PROMPT = `Eres un asistente que genera composiciones de video en JSON para Remotion.

El usuario describe el video que quiere (ej: "video de presentación de mi empresa con logo, intro, servicios y contacto").
Tu respuesta debe ser ÚNICAMENTE un objeto JSON válido, sin markdown ni texto alrededor, con esta forma:

{
  "title": "string - título de la composición",
  "fps": 30,
  "width": 1920,
  "height": 1080,
  "sequences": [
    {
      "id": "seq-0",
      "order": 0,
      "sceneType": "logo-curtain",
      "durationInFrames": 130,
      "sceneData": { "companyName": "Nombre", "accentColor": "#9DFF20" },
      "transition": { "type": "fade", "durationInFrames": 25, "timing": "spring" }
    }
  ]
}

Tipos de escena (sceneType) permitidos:
- logo-curtain: sceneData: { companyName?, logoUrl?, tagline?, backgroundColor?, accentColor? }
- intro: sceneData: { companyName?, tagline?, logoUrl?, backgroundColor?, accentColor? }
- services: sceneData: { title?, subtitle?, items?: [{ icon?, title, description }], backgroundColor?, accentColor? }
- products: sceneData: { title?, items?: [{ imageUrl?, name, description, price?, badge? }], backgroundColor?, accentColor? }
- metrics: sceneData: { title?, items?: [{ value, label, icon?, color? }], backgroundColor?, accentColor? }
- contact: sceneData: { companyName?, email?, phone?, website?, address?, logoUrl?, backgroundColor?, accentColor?, ctaText? }
- image: sceneData: { src, fit?, objectPosition? }
- video: sceneData: { src, volume?, playbackRate?, loop?, trimBefore?, trimAfter? }
- audio: sceneData: { src, volume?, loop? }
- gif: sceneData: { src, width?, height? }
- text: sceneData: { text, fontFamily?, fontSize?, color?, align?, fontWeight? }
- lottie: sceneData: { src, loop? }
- light-leak: sceneData: { seed?, hueShift?, durationInFrames? }

Transiciones: type puede ser "fade", "slide", "wipe", "flip", "clock-wipe", "none". Para slide/wipe usa direction: "from-left"|"from-right"|"from-top"|"from-bottom". timing: "linear" o "spring". durationInFrames: número (ej 15-30).

Cada secuencia debe tener id único (seq-0, seq-1, ...), order consecutivo desde 0, durationInFrames en frames (30 fps = 1 segundo por 30 frames). La última secuencia puede omitir transition.
Responde SOLO con el JSON, sin explicación.`;

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
] as const;

function normalizeSceneType(s: string): (typeof VALID_SCENE_TYPES)[number] {
  const lower = s.toLowerCase().replace(/_/g, "-");
  const found = VALID_SCENE_TYPES.find((t) => t === lower || t.replace(/-/g, "") === lower.replace(/-/g, ""));
  return found ?? "intro";
}

export async function POST(request: NextRequest) {
  const auth = await requireAuth();
  if (isAuthError(auth)) return auth.error;

  if (!OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY no configurada" },
      { status: 503 }
    );
  }

  let body: { messages?: Array<{ role: string; content: string }> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const messages = body.messages ?? [];
  const apiMessages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
    { role: "system", content: SYSTEM_PROMPT },
    ...messages
      .filter((m: { role?: string; content?: string }) => m.role && m.content)
      .map((m: { role: string; content: string }) => ({
        role: m.role as "user" | "assistant",
        content: String(m.content),
      })),
  ];

  if (apiMessages.filter((m) => m.role === "user").length === 0) {
    return NextResponse.json(
      { error: "Se necesita al menos un mensaje de usuario" },
      { status: 400 }
    );
  }

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        messages: apiMessages,
        temperature: 0.3,
        max_tokens: 4096,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[ai/composition] OpenAI error:", res.status, err);
      return NextResponse.json(
        { error: "Error al interpretar la petición con OpenAI" },
        { status: 502 }
      );
    }

    const data = (await res.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const content = data.choices?.[0]?.message?.content?.trim() ?? "";
    if (!content) {
      return NextResponse.json(
        { error: "OpenAI no devolvió contenido" },
        { status: 502 }
      );
    }

    // Extraer JSON del contenido (puede venir envuelto en ```json ... ```)
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

    // Normalizar sequences: id, order, sceneType, durationInFrames, sceneData, transition
    const normalized = sequences.map((seq: Record<string, unknown>, i: number) => {
      const sceneType = normalizeSceneType(String(seq.sceneType ?? "intro"));
      const durationInFrames = Number(seq.durationInFrames) || 90;
      const sceneData =
        seq.sceneData && typeof seq.sceneData === "object" && !Array.isArray(seq.sceneData)
          ? (seq.sceneData as Record<string, unknown>)
          : {};
      const transition =
        seq.transition && typeof seq.transition === "object" && !Array.isArray(seq.transition)
          ? (seq.transition as Record<string, unknown>)
          : { type: "fade", durationInFrames: 20, timing: "linear" as const };

      return {
        id: String(seq.id ?? `seq-${i}`),
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
      composition: {
        title,
        sequences: normalized,
        fps,
        width,
        height,
      },
    });
  } catch (err) {
    console.error("[ai/composition]", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Error al generar composición" },
      { status: 500 }
    );
  }
}
