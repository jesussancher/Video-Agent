/**
 * Rutas canónicas dentro del bucket:
 *   gs://lait-video-editor.firebasestorage.app
 *
 * Estructura:
 *   users/{uid}/
 *     assets/
 *       images/     → imágenes subidas por el usuario
 *       videos/     → clips de video
 *       audio/      → pistas de audio / música
 *       fonts/      → fuentes personalizadas
 *     exports/
 *       {compositionId}.mp4  → video renderizado final
 *   templates/
 *     thumbnails/   → thumbnails de plantillas (públicas)
 */

export const STORAGE_BUCKET = "lait-video-editor.firebasestorage.app";

export const STORAGE_PATHS = {
  // ── Assets del usuario ───────────────────────────────────────────────────
  userImage: (uid: string, filename: string) =>
    `users/${uid}/assets/images/${filename}`,

  userVideo: (uid: string, filename: string) =>
    `users/${uid}/assets/videos/${filename}`,

  userAudio: (uid: string, filename: string) =>
    `users/${uid}/assets/audio/${filename}`,

  userFont: (uid: string, filename: string) =>
    `users/${uid}/assets/fonts/${filename}`,

  /** Devuelve la ruta correcta según el tipo de asset */
  userAsset: (uid: string, type: "image" | "video" | "audio" | "font", filename: string) =>
    `users/${uid}/assets/${type}s/${filename}`,

  // ── Exports / renders finales ─────────────────────────────────────────────
  compositionExport: (uid: string, compositionId: string) =>
    `users/${uid}/exports/${compositionId}.mp4`,

  // ── Templates (escritura solo desde Admin SDK) ────────────────────────────
  templateThumbnail: (templateId: string) =>
    `templates/thumbnails/${templateId}.jpg`,
} as const;

/** Infiere el AssetType a partir del MIME type */
export function mimeToAssetType(
  mimeType: string
): "image" | "video" | "audio" | "font" {
  if (mimeType.startsWith("image/")) return "image";
  if (mimeType.startsWith("video/")) return "video";
  if (mimeType.startsWith("audio/")) return "audio";
  if (
    mimeType === "font/woff2" ||
    mimeType === "font/woff" ||
    mimeType === "font/ttf" ||
    mimeType === "font/otf"
  )
    return "font";
  throw new Error(`Tipo MIME no soportado: ${mimeType}`);
}
