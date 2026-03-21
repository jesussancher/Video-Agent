/**
 * Extrae el primer objeto JSON válido de la respuesta del modelo (texto puro, ```json, o JSON incrustado tras TSX).
 */
export function extractCompositionJson(content: string): string | null {
  const trimmed = content.trim();

  for (const m of content.matchAll(/```(?:json)?\s*([\s\S]*?)```/gi)) {
    const inner = m[1].trim();
    if (inner.startsWith("{") && safeJsonParse(inner)) return inner;
  }

  for (const m of content.matchAll(/```\w*\s*([\s\S]*?)```/g)) {
    const inner = m[1].trim();
    if (inner.startsWith("{") && safeJsonParse(inner)) return inner;
  }

  if (trimmed.startsWith("{") && safeJsonParse(trimmed)) return trimmed;

  return extractFirstBalancedJsonObject(content);
}

function safeJsonParse(s: string): boolean {
  try {
    const v = JSON.parse(s) as unknown;
    return typeof v === "object" && v !== null && !Array.isArray(v);
  } catch {
    return false;
  }
}

/** Primer subcadena balanceada {...} que sea JSON objeto válido (strings con " y escapes). */
function extractFirstBalancedJsonObject(content: string): string | null {
  const start = content.indexOf("{");
  if (start === -1) return null;

  let depth = 0;
  let inString = false;
  let escape = false;

  for (let i = start; i < content.length; i++) {
    const c = content[i];

    if (escape) {
      escape = false;
      continue;
    }

    if (inString) {
      if (c === "\\") escape = true;
      else if (c === '"') inString = false;
      continue;
    }

    if (c === '"') {
      inString = true;
      continue;
    }

    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) {
        const candidate = content.slice(start, i + 1);
        if (safeJsonParse(candidate)) return candidate;
        return null;
      }
    }
  }

  return null;
}
