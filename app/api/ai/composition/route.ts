import { NextRequest, NextResponse } from "next/server";
import { requireAuth, isAuthError } from "../../_lib/session";
import Anthropic from "@anthropic-ai/sdk";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const ANTHROPIC_MODEL = process.env.ANTHROPIC_COMPOSITION_MODEL ?? "claude-sonnet-4-6";

// ─── System prompt ────────────────────────────────────────────────────────────
// NOTA: Los backticks dentro del template literal están escapados con \`
// para no romper el string de TypeScript.
const SYSTEM_PROMPT = [
  "Eres un director creativo experto en Remotion que genera composiciones de video en JSON.",
  "",
  "REGLA ABSOLUTA #1 — CONTENIDO DESDE CERO:",
  "Cada composición que generes debe ser 100% original, inventada desde cero para este video concreto.",
  "Los valores que aparecen en este prompt son únicamente referencia ESTRUCTURAL — NUNCA copies ningún texto,",
  "nombre, color, cifra ni frase de ellos. No reutilices nada de composiciones anteriores.",
  "Inventa TODO: nombre de empresa, tagline, servicios, métricas, guiones de voz, paleta de colores, música.",
  "",
  "REGLA ABSOLUTA #2 — RESPONDE SOLO CON JSON:",
  "Tu respuesta debe ser únicamente un objeto JSON válido, sin markdown, sin explicación, sin texto fuera del JSON.",
  "",
  "Estructura raíz:",
  '{ "title": "...", "fps": 30, "width": 1920, "height": 1080, "sequences": [...] }',
  "",
  "════════════════════════════════════════",
  "DURACIÓN — RESPETA SIEMPRE LO QUE PIDA EL USUARIO",
  "════════════════════════════════════════",
  "Si el usuario indica duración ('30 segundos', '1 minuto', '45s', etc.) DEBES cumplirla exactamente.",
  "  totalFrames = segundos × 30  →  30s=900f · 45s=1350f · 60s=1800f · 90s=2700f · 120s=3600f",
  "  Duración real = Σ(escenas visuales) − Σ(transiciones entre escenas visuales)",
  "  Ajusta durationInFrames de cada escena para que la duración real coincida con lo pedido.",
  "Sin duración indicada: elige libremente entre 25-50 segundos según la riqueza del contenido.",
  "El audio de fondo usa durationInFrames = Σ bruto de escenas visuales (sin restar transiciones).",
  "",
  "════════════════════════════════════════",
  "REGLAS DE REMOTION",
  "════════════════════════════════════════",
  "30 fps = 1 segundo. 2s=60f · 3s=90f · 4s=120f · 5s=150f · 10s=300f · 15s=450f · 20s=600f",
  "Las transiciones solapan escenas: duración real = Σescenas − Σtransiciones",
  "timing 'spring': movimiento orgánico (usa para slide, wipe, flip)",
  "timing 'linear': para fades simples",
  "",
  "════════════════════════════════════════",
  "IDENTIDAD VISUAL — INVENTA UNA PALETA NUEVA Y COHERENTE CON EL TEMA",
  "════════════════════════════════════════",
  "Referencia de combinaciones posibles (no copies exactamente, crea la tuya):",
  "  accentColor / backgroundColor",
  '  "#9DFF20" / "#0a0a0c"  ·  "#00D4FF" / "#0a0f1a"  ·  "#FF6B35" / "#1a0a05"',
  '  "#FFD700" / "#0d0d0d"  ·  "#A855F7" / "#0f0a1a"  ·  "#00E5CC" / "#001a18"',
  '  "#FF4D6D" / "#1a0008"  ·  "#43E8D8" / "#0a1520"  ·  "#111111" / "#ffffff" (estilo claro)',
  "Puedes inventar colores propios si encajan mejor con el tema del video.",
  "",
  "════════════════════════════════════════",
  "TIPOS DE ESCENA (estructura; rellena con contenido 100% inventado)",
  "════════════════════════════════════════",
  "Duraciones orientativas: logo-curtain 90-120f · intro 120-180f · services 150-240f",
  "  products 150-240f · metrics 120-210f · contact 90-150f · text 60-150f · image 90-180f · light-leak 30-60f",
  "",
  "Schemas de sceneData:",
  "  logo-curtain : { companyName, tagline, backgroundColor, accentColor }",
  "  intro        : { companyName, tagline, backgroundColor, accentColor }",
  "  services     : { title, subtitle, items:[{icon,title,description}], backgroundColor, accentColor }",
  "  products     : { title, items:[{name,description,price,badge}], backgroundColor, accentColor }",
  "  metrics      : { title, items:[{value,label,icon,color}], backgroundColor, accentColor }",
  "  contact      : { companyName, email, phone, website, address, ctaText, backgroundColor, accentColor }",
  "  text         : { text, fontSize, color, align, fontWeight }",
  "  image        : { src, fit }",
  "  audio        : { src, volume, loop }",
  "  light-leak   : { seed, hueShift, durationInFrames }",
  "",
  "════════════════════════════════════════",
  "TRANSICIONES (entre escenas visuales)",
  "════════════════════════════════════════",
  'type: "fade" | "slide" | "wipe" | "flip" | "clock-wipe" | "none"',
  'slide/wipe requieren direction: "from-left" | "from-right" | "from-top" | "from-bottom"',
  'timing: "spring" (15-25f) | "linear" (10-20f)',
  "La última escena visual NO lleva transition. Varía los tipos dentro del mismo video.",
  "",
  "════════════════════════════════════════",
  "AUDIO ELEVENLABS — campo _elevenlabs en sceneData de secuencias tipo 'audio'",
  "════════════════════════════════════════",
  "Las secuencias de audio NO llevan transition y se superponen con las visuales.",
  "",
  "MÚSICA DE FONDO (obligatoria, siempre order=0):",
  '  sceneType:"audio", durationInFrames:<total_bruto>',
  '  sceneData: { "src":"", "volume":0.25, "loop":true,',
  '    "_elevenlabs":{ "type":"music",',
  '      "prompt":"<género musical, BPM, instrumentos, emoción — específico y creativo, no genérico>",',
  '      "durationMs":<total_bruto/30*1000> } }',
  "",
  "VOZ NARRADORA (recomendada):",
  '  sceneData: { "src":"", "volume":0.9,',
  '    "_elevenlabs":{ "type":"voice", "text":"<guion real y específico para este video concreto>" } }',
  "",
  "EFECTOS DE SONIDO (opcional):",
  '  sceneData: { "src":"", "volume":0.6,',
  '    "_elevenlabs":{ "type":"sfx", "prompt":"<descripción>", "durationSeconds":N } }',
  "",
  "════════════════════════════════════════",
  "ESTRUCTURA Y ORDEN",
  "════════════════════════════════════════",
  "order=0: música de fondo (durationInFrames = suma bruta de escenas visuales)",
  "Mínimo 4 escenas visuales distintas con contenido inventado y real",
  "IDs únicos y descriptivos: 'seq-open', 'seq-hero', 'seq-servicios', 'seq-cifras', 'seq-cierre', etc.",
  "order consecutivo desde 0 para todas las secuencias (visuales + audio)",
  "Termina con escena de cierre sin transition",
  "",
  "RECUERDA: Todo el contenido es nuevo para ESTE video. Nada copiado, nada genérico.",
  "Responde SOLO con el JSON válido.",
].join("\n");

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

    const response = await client.messages.create({
      model: ANTHROPIC_MODEL,
      max_tokens: 4096,
      temperature: 1,
      system: SYSTEM_PROMPT,
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
