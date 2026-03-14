/** Convert a hex color string to [r, g, b] tuple. Falls back to #9DFF20 if invalid. */
export function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace(/^#/, "");
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return [isNaN(r) ? 157 : r, isNaN(g) ? 255 : g, isNaN(b) ? 32 : b];
}

/** Returns a CSS rgba() string: rgba(r,g,b,alpha) */
export function rgba(hex: string, alpha: number): string {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r},${g},${b},${alpha})`;
}
