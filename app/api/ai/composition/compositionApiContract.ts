/**
 * Instrucciones finales para el modelo: esta API solo acepta composición en JSON.
 * Van al final del system prompt para prevalecer sobre cualquier instrucción de entregar .tsx.
 */
export const COMPOSITION_API_JSON_CONTRACT = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔒 CONTRATO DE SALIDA DE ESTA API (OBLIGATORIO — PREVALECE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tu respuesta a esta petición debe ser ÚNICAMENTE un objeto JSON válido que describa la composición para el editor del producto.

• NO incluyas código TypeScript, TSX, ni bloques \`\`\`tsx / \`\`\`typescript.
• NO expliques el video en prosa antes o después del JSON.
• Si usas fence, que sea un solo bloque \`\`\`json ... \`\`\` que envuelva exactamente el objeto raíz.

Las guías creativas anteriores (reel 9:16, motion, glassmorphism, gráficas, etc.) aplican al CONTENIDO:
elige sceneType y rellena sceneData (textos, colores, items, métricas) para que el reproductor las renderice.
NO entregues archivos Remotion fuente en la respuesta.

Estructura raíz obligatoria:
{
  "title": string,
  "fps": number,
  "width": number,
  "height": number,
  "sequences": [ ... ]
}

Para reels verticales del producto usa típicamente: "fps": 30, "width": 1080, "height": 1920.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ DURACIÓN QUE PIDE EL USUARIO (PRIORIDAD MÁXIMA)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• Si el mensaje del usuario indica un tiempo explícito (ej. "30 segundos", "1 minuto", "45s", "2 min", "90 segundos"), DEBES respetarlo: la duración total del vídeo (línea de tiempo visual efectiva, teniendo en cuenta solapes de transición) debe coincidir con esa petición salvo desviación mínima (±1–2 s por redondeo de frames).
• Objetivo: totalFramesObjetivo = segundosPedidos × fps (redondeado). Reparte durationInFrames entre escenas visuales (y ajusta transiciones) hasta encajar ese total.
• Si con el material que el usuario dio no alcanzas ese tiempo: AMPLÍA el contenido de forma coherente:
  – Más escenas o más duración por escena (texto, bullets, contexto histórico, datos relacionados, comparaciones, conclusiones, CTA extendido).
  – Narración de voz más densa o en varios bloques que sumen el tiempo (sin relleno vacío: siempre información útil o storytelling).
  – Cuando hagan falta hechos actuales, fechas, cifras o contexto que no tengas seguros, USA la búsqueda web disponible en esta conversación para fundamentar y luego vuelca eso en sceneData y guiones de voz.
  – Si no puedes verificar algo en línea, INTERPRETA y razona con conocimiento general de forma plausible y clara (sin inventar cifras exactas como si fueran citas verificadas); prefiero escenas de contexto cualitativo bien escritas a silencios largos.
• Si el usuario NO indica duración, elige una duración razonable para el tema (suele 20–60 s para reels) sin estirar artificialmente.

Cada elemento de "sequences":
• "id": string único (ej. "seq-intro", "seq-metrics")
• "sceneType": uno de:
  logo-curtain | intro | services | products | metrics | contact |
  image | video | audio | gif | animated-image | lottie | three-canvas |
  text | captions | light-leak |
  reel-hook | reel-text-card | reel-cta
• "durationInFrames": número > 0
• "sceneData": objeto (campos según el tipo; usa strings para valores mostrados)
• "transition": { "type": "fade"|"slide"|"wipe"|"flip"|"clock-wipe"|"none", "durationInFrames": number, "timing": "linear"|"spring", "direction"?: "from-left"|"from-right"|"from-top"|"from-bottom" }
  La última escena visual suele llevar transition hacia "none" o fade con duración corta según convenga.

sceneData orientativo:
• intro | logo-curtain: companyName, tagline, backgroundColor, accentColor, logoUrl?
• metrics: title, items: [{ value, label, icon?, color? }], backgroundColor, accentColor
• services: title, subtitle?, items: [{ icon, title, description }], ...
• products: title, items: [{ name, description, price?, badge?, imageUrl? }], ...
• contact: companyName, email?, phone?, website?, ctaText?, ...
• reel-hook: hookText, subtitle?, backgroundColor, accentColor
• reel-text-card: text, subtext?, style?: "quote"|"fact"|"tip", ...
• reel-cta: ctaText, title?, handle?, link?, ...
• text: text, fontSize?, color?, align?, fontWeight?
• image | video | audio: ver sección ElevenLabs más abajo

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎧 ELEVENLABS — OBLIGATORIO (música + voz; SFX recomendados)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

El cliente genera el audio real a partir de sceneData._elevenlabs y rellena src con la URL.
Sin _elevenlabs no habrá música ni voz automática.

Proceso que debes seguir al armar el JSON (en este orden mental, un solo JSON final):

1) Diseña solo las escenas VISUALES: tipos, textos, métricas, duración de cada una en frames y transiciones.
2) Calcula la línea de tiempo visual:
   - totalBrutoFrames ≈ suma de durationInFrames de cada escena visual (sin restar solapes), en la misma orden en que aparecerán.
   - Para alinear mejor con TransitionSeries: duración útil ≈ suma(durationInFrames) − suma(durationInFrames de transiciones entre escenas consecutivas, excepto "none").
   - Usa el mismo fps que declares en la raíz (típico 30).
3) Ajusta durationInFrames de cada visual para que encaje con la narración: si un bloque de voz durará ~8 s, esa escena ≈ 240 frames a 30 fps (más margen si hay mucho texto en pantalla).
4) Añade secuencias sceneType: "audio" con _elevenlabs, volumes y duraciones coherentes con el paso 2.

Sincronización (el reproductor usa "order" = posición en el array):

• Cada pista empieza en el mismo frame que la **primera escena visual** con order ≥ order de la pista.
• **Música de fondo:** primera entrada del array (índice 0, order 0). Así arranca con la primera escena visual.
• **Voz / SFX ligados a una escena:** coloca la secuencia \`sceneType: "audio"\` **inmediatamente antes** de esa escena visual en el array. Ejemplo: [ música(0), intro_visual(1), audio_voz_A(2), escena_A(3), audio_voz_B(4), escena_B(5) ] → voz A entra con escena A; voz B con escena B.

sceneType "audio" — sceneData obligatorio:

• "src": "" (vacío mientras se genera; el backend lo rellena)
• "volume": número 0–1 (música ~0.22–0.32, voz ~0.85–1, SFX ~0.35–0.7)
• "loop": true solo para música de fondo que debe cubrir todo el vídeo
• "durationInFrames": para música, al menos la duración total del vídeo en frames (puede ser totalBrutoFrames); para voz/SFX, la ventana en la que debe sonar (suele coincidir con la escena visual que acompaña)
• Sin "transition" problemática: puedes omitir transition en audio o usar type "none"

Marcador _elevenlabs (hermano de src dentro de sceneData):

• Música:
  "_elevenlabs": {
    "type": "music",
    "prompt": "<género, BPM aproximado, instrumentos, mood alineado al tema del video — específico, no genérico>",
    "durationMs": <totalBrutoFrames / fps * 1000, clamp 3000–300000>
  }

• Voz (narración, por escena o por bloque):
  "_elevenlabs": {
    "type": "voice",
    "text": "<guion hablado, mismo idioma que el video, conciso para caber en durationInFrames/fps segundos>"
  }

• Efectos (golpes, whoosh, notificación, ambiente corto):
  "_elevenlabs": {
    "type": "sfx",
    "prompt": "<descripción del sonido, en inglés o español>",
    "durationSeconds": <0.5–8, acorde a durationInFrames>
  }

Paquete mínimo recomendado:
• 1× music en índice 0, loop true, prompt y durationMs alineados al tono y longitud total.
• 1× voice por cada bloque narrativo importante (intro, desarrollo, CTA), con text que cuadre con lo que se muestra en pantalla en esos frames.
• Opcional: 1–3× sfx en picos (transición fuerte, reveal de dato, CTA).

Las animaciones en escenas visuales deben usar el mismo fps; diseña entradas (delayInFrames implícito vía duración de escena) para que los picos visuales coincidan con cambios de música o con el inicio de cada clip de voz.

Responde solo con el JSON (o un único bloque \`\`\`json con ese objeto).
`.trim();
