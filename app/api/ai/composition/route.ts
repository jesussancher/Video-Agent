import { NextRequest, NextResponse } from "next/server";
import { requireAuth, isAuthError } from "../../_lib/session";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_COMPOSITION_MODEL ?? "gpt-4o-mini";

const SYSTEM_PROMPT = `Eres un experto en Remotion (librería de video en React) que genera composiciones de video en JSON.

El usuario describe el video que quiere y tú generas el JSON completo y profesional para renderizarlo con Remotion.
Tu respuesta debe ser ÚNICAMENTE un objeto JSON válido, sin markdown ni texto alrededor, con esta estructura:

{
  "title": "string - título descriptivo de la composición",
  "fps": 30,
  "width": 1920,
  "height": 1080,
  "sequences": [
    {
      "id": "seq-0",
      "order": 0,
      "sceneType": "logo-curtain",
      "durationInFrames": 120,
      "sceneData": { "companyName": "Nombre", "accentColor": "#9DFF20", "backgroundColor": "#0a0a0c" },
      "transition": { "type": "fade", "durationInFrames": 20, "timing": "spring" }
    }
  ]
}

## REGLAS DE REMOTION (críticas):
- 30 fps = 1 segundo. Ejemplos: 2s = 60f, 3s = 90f, 4s = 120f, 5s = 150f, 8s = 240f
- Las transiciones solapan las escenas: duración total = suma(duraciones) - suma(transiciones)
- Usa timing "spring" con damping 200 para movimientos suaves y profesionales
- Usa timing "linear" para transiciones de fade simples

## DURACIONES RECOMENDADAS POR ESCENA:
- logo-curtain: 90-120 frames (3-4s) — apertura/cierre dramático con el logo
- intro: 120-150 frames (4-5s) — presentación de la empresa con tagline
- services: 150-210 frames (5-7s) — lista de servicios con tiempo para leer
- products: 150-210 frames (5-7s) — showcase de productos
- metrics: 120-180 frames (4-6s) — KPIs y estadísticas animadas
- contact: 90-120 frames (3-4s) — cierre con datos de contacto
- text: 60-120 frames (2-4s) — texto puro o título
- image: 90-150 frames (3-5s) — imagen con posible animación
- video: según duración del clip
- light-leak: 30-60 frames (1-2s) — efecto de destello entre escenas

## TIPOS DE ESCENA DISPONIBLES:
- logo-curtain: { companyName?, logoUrl?, tagline?, backgroundColor?, accentColor? }
- intro: { companyName?, tagline?, logoUrl?, backgroundColor?, accentColor? }
- services: { title?, subtitle?, items?: [{icon?, title, description}], backgroundColor?, accentColor? }
- products: { title?, items?: [{imageUrl?, name, description, price?, badge?}], backgroundColor?, accentColor? }
- metrics: { title?, items?: [{value, label, icon?, color?}], backgroundColor?, accentColor? }
- contact: { companyName?, email?, phone?, website?, address?, logoUrl?, backgroundColor?, accentColor?, ctaText? }
- image: { src, fit?: "cover"|"contain"|"fill", objectPosition? }
- video: { src, volume?, playbackRate?, loop?, trimBefore?, trimAfter? }
- audio: { src, volume?, loop? }
- gif: { src, width?, height? }
- text: { text, fontFamily?, fontSize?, color?, align?: "left"|"center"|"right", fontWeight? }
- lottie: { src, loop? }
- light-leak: { seed?, hueShift?, durationInFrames? }

## TRANSICIONES (entre cada par de escenas):
- type: "fade" | "slide" | "wipe" | "flip" | "clock-wipe" | "none"
- Para slide/wipe añade: direction: "from-left"|"from-right"|"from-top"|"from-bottom"
- timing: "spring" (recomendado, movimiento orgánico) | "linear" (constante)
- durationInFrames: 15-25 frames para spring, 10-20 para linear
- La última secuencia NO lleva transition
- Varía las transiciones para dar dinamismo (no uses siempre fade)

## AUDIO CON ELEVENLABS (MUY IMPORTANTE):
Siempre incluye al menos 1 secuencia de audio generada por ElevenLabs. Usa el campo \`_elevenlabs\` en sceneData para marcar qué hay que generar.

### Tipos de audio disponibles:

**Música de fondo (type: "music"):**
- Usa sceneType: "audio" con \`_elevenlabs: { type: "music", prompt: "descripción de la música", durationMs: N }\`
- durationMs = durationInFrames / 30 * 1000 (convierte frames a milisegundos)
- Ejemplo: 300 frames → durationMs: 10000
- Siempre añade \`volume: 0.25\` y \`loop: true\` para música de fondo
- Coloca esta secuencia al inicio (order: 0) con la duración total del video

**Narración de voz (type: "voice"):**
- Usa sceneType: "audio" con \`_elevenlabs: { type: "voice", text: "texto a narrar en voz alta" }\`
- Escribe el texto completo que debe narrar el locutor para esa escena
- Añade \`volume: 0.9\`
- Coloca la narración justo después de la escena a la que corresponde

**Efectos de sonido (type: "sfx"):**
- Usa sceneType: "audio" con \`_elevenlabs: { type: "sfx", prompt: "descripción del efecto", durationSeconds: N }\`
- Añade \`volume: 0.6\`
- Úsalos para transitions especiales o momentos de impacto

### Ejemplo de secuencias de audio:
\`\`\`json
{
  "id": "seq-music",
  "order": 0,
  "sceneType": "audio",
  "durationInFrames": 600,
  "sceneData": {
    "src": "",
    "volume": 0.25,
    "loop": true,
    "_elevenlabs": { "type": "music", "prompt": "inspirational corporate background music, professional and uplifting", "durationMs": 20000 }
  }
},
{
  "id": "seq-narration-1",
  "order": 2,
  "sceneType": "audio",
  "durationInFrames": 120,
  "sceneData": {
    "src": "",
    "volume": 0.9,
    "_elevenlabs": { "type": "voice", "text": "Bienvenidos a nuestra empresa. Somos líderes en soluciones tecnológicas." }
  }
}
\`\`\`

Nota: las secuencias de audio no tienen transición visual. Pueden superponerse con escenas visuales.

## DISEÑO PROFESIONAL:
- Usa paletas de colores coherentes: elige un accentColor y mantenlo en todas las escenas
- backgroundColor oscuro (#0a0a0c, #111, #1a1a2e) o claro (#fff, #f8f8f8) según el estilo
- Para videos corporativos: fade y slide son las más profesionales
- Para videos creativos/modernos: wipe, flip y clock-wipe dan más dinamismo
- Añade light-leak entre escenas importantes para efecto cinematográfico

## ESTRUCTURA TÍPICA (adapta según el pedido):
0. audio/música de fondo (toda la duración) — sin transición
1. logo-curtain (apertura) → slide
2. audio/narración de bienvenida → sin transición visual
3. intro (presentación) → fade
4. services/products/metrics (contenido principal) → wipe o slide
5. contact (cierre) — sin transición

Genera siempre mínimo 3 escenas visuales + 1 audio de música. Cada secuencia debe tener id único y order consecutivo desde 0.
Responde SOLO con el JSON válido, sin explicación ni markdown.`;

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

  const apiKey = OPENAI_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "OPENAI_API_KEY no configurada. Añádela en .env y reinicia el servidor (npm run dev).",
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
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: OPENAI_MODEL,
        messages: apiMessages,
        temperature: 0.3,
        max_tokens: 4096,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("[ai/composition] OpenAI error:", res.status, errText);

      let userMessage = "Error al interpretar la petición con OpenAI.";
      if (res.status === 401) {
        userMessage =
          "API key de OpenAI inválida o no configurada. Revisa OPENAI_API_KEY en el archivo .env.";
      } else if (res.status === 429) {
        userMessage = "Límite de uso de OpenAI alcanzado. Intenta más tarde.";
      } else {
        try {
          const errJson = JSON.parse(errText) as { error?: { message?: string } };
          const msg = errJson?.error?.message;
          if (msg && typeof msg === "string" && msg.length < 200) {
            userMessage = msg;
          }
        } catch {
          // usar userMessage por defecto
        }
      }

      const status = res.status === 401 ? 401 : res.status >= 500 ? 502 : 502;
      return NextResponse.json({ error: userMessage }, { status });
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
