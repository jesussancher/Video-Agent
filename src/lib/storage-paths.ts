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

/** Debe coincidir con `storageBucket` en `firebase-admin` (env FIREBASE_STORAGE_BUCKET). */
export const STORAGE_BUCKET =
  process.env.FIREBASE_STORAGE_BUCKET?.trim() ||
  "lait-video-editor.firebasestorage.app";

/**
 * Subcarpeta bajo `users/{uid}/assets/...` y `.../sessions/{id}/...`.
 * Debe coincidir con `storage.rules` (p. ej. audio → `audio`, no `audios`).
 */
const ASSET_DIR: Record<"image" | "video" | "audio" | "font", string> = {
  image: "images",
  video: "videos",
  audio: "audio",
  font: "fonts",
};

/** URL de descarga con token (mismo patrón que subida server-side en /api/ai/audio). */
export function firebaseStorageUrl(
  bucket: string,
  storagePath: string,
  token: string
): string {
  const encodedPath = storagePath.split("/").map(encodeURIComponent).join("%2F");
  return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodedPath}?alt=media&token=${token}`;
}

export const STORAGE_PATHS = {
  // ── Assets del usuario ───────────────────────────────────────────────────
  userImage: (uid: string, filename: string) =>
    `users/${uid}/assets/${ASSET_DIR.image}/${filename}`,

  userVideo: (uid: string, filename: string) =>
    `users/${uid}/assets/${ASSET_DIR.video}/${filename}`,

  userAudio: (uid: string, filename: string) =>
    `users/${uid}/assets/${ASSET_DIR.audio}/${filename}`,

  userFont: (uid: string, filename: string) =>
    `users/${uid}/assets/${ASSET_DIR.font}/${filename}`,

  /** Devuelve la ruta correcta según el tipo de asset */
  userAsset: (uid: string, type: "image" | "video" | "audio" | "font", filename: string) =>
    `users/${uid}/assets/${ASSET_DIR[type]}/${filename}`,

  /**
   * Asset asociado a una sesión de composición (pre-creación).
   * Misma estructura de carpetas que assets de usuario (reglas en storage.rules).
   */
  sessionAsset: (uid: string, sessionId: string, type: "image" | "video" | "audio" | "font", filename: string) =>
    `users/${uid}/compositions/sessions/${sessionId}/${ASSET_DIR[type]}/${filename}`,

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
