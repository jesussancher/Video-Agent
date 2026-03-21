// ─────────────────────────────────────────────────────────────────────────────
// Scene & Transition types
// ─────────────────────────────────────────────────────────────────────────────

export type SceneType =
  | "logo-curtain"
  | "intro"
  | "services"
  | "products"
  | "metrics"
  | "contact"
  | "image"
  | "video"
  | "audio"
  | "gif"
  | "animated-image"
  | "lottie"
  | "three-canvas"
  | "text"
  | "captions"
  | "light-leak"
  | "reel-hook"
  | "reel-text-card"
  | "reel-cta";

export type TransitionType = "fade" | "slide" | "wipe" | "flip" | "clock-wipe" | "none";

export type TransitionDirection =
  | "from-left"
  | "from-right"
  | "from-top"
  | "from-bottom";

export type TransitionTiming = "linear" | "spring";

export interface SceneTransition {
  type: TransitionType;
  durationInFrames: number;
  direction?: TransitionDirection;
  timing: TransitionTiming;
  /** Spring config when timing === "spring" */
  springConfig?: { damping?: number; stiffness?: number };
}

// ─────────────────────────────────────────────────────────────────────────────
// Animation config (entrance/exit per component)
// ─────────────────────────────────────────────────────────────────────────────

export type EasingType =
  | "linear"
  | "quad"
  | "cubic"
  | "sin"
  | "exp"
  | "circle"
  | "elastic"
  | "bounce"
  | "back"
  | "bezier";

export type EasingVariant = "in" | "out" | "inOut";

export type EntranceExitType = "fade" | "slide" | "scale" | "spring";

export interface EntranceExitConfig {
  type: EntranceExitType;
  durationInFrames: number;
  delayInFrames?: number;
  easing?: EasingType;
  easingVariant?: EasingVariant;
  springConfig?: { damping?: number; stiffness?: number; mass?: number };
  /** For bezier: x1, y1, x2, y2 */
  bezierParams?: [number, number, number, number];
}

export type LayoutAnchor =
  | "top-left"
  | "top-center"
  | "top-right"
  | "center-left"
  | "center"
  | "center-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface LayoutConfig {
  x: number;
  y: number;
  width?: number;
  height?: number;
  anchor?: LayoutAnchor;
}

export interface AnimationConfig {
  entrance?: EntranceExitConfig;
  exit?: EntranceExitConfig;
  layout?: LayoutConfig;
}

// ─────────────────────────────────────────────────────────────────────────────
// Scene-specific data interfaces
// ─────────────────────────────────────────────────────────────────────────────

export interface LogoCurtainData {
  logoUrl?: string;
  companyName?: string;
  tagline?: string;
  backgroundColor?: string;
  accentColor?: string;
}

export interface IntroData {
  companyName?: string;
  tagline?: string;
  logoUrl?: string;
  backgroundColor?: string;
  accentColor?: string;
}

export interface ServicesData {
  title?: string;
  subtitle?: string;
  items?: Array<{
    icon?: string;
    title: string;
    description: string;
  }>;
  backgroundColor?: string;
  accentColor?: string;
}

export interface ProductsData {
  title?: string;
  items?: Array<{
    imageUrl?: string;
    name: string;
    description: string;
    price?: string;
    badge?: string;
  }>;
  backgroundColor?: string;
  accentColor?: string;
}

export interface MetricsData {
  title?: string;
  items?: Array<{
    value: string;
    label: string;
    icon?: string;
    color?: string;
  }>;
  backgroundColor?: string;
  accentColor?: string;
}

export interface ContactData {
  companyName?: string;
  email?: string;
  phone?: string;
  website?: string;
  address?: string;
  logoUrl?: string;
  backgroundColor?: string;
  accentColor?: string;
  ctaText?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Reels (vertical short-form: Instagram Reels, TikTok, etc.)
// ─────────────────────────────────────────────────────────────────────────────

export interface ReelHookData {
  /** Frase gancho que capta atención (corta, impactante) */
  hookText: string;
  /** Subtítulo o refuerzo opcional */
  subtitle?: string;
  backgroundColor?: string;
  accentColor?: string;
}

export interface ReelTextCardData {
  /** Texto principal (cita, tip, dato) */
  text: string;
  /** Texto secundario o atribución */
  subtext?: string;
  /** Estilo visual: "quote" | "fact" | "tip" */
  style?: "quote" | "fact" | "tip";
  backgroundColor?: string;
  accentColor?: string;
}

export interface ReelCtaData {
  /** Título de cierre (ej. "Síguenos", "Descarga la app") */
  title?: string;
  /** Texto del CTA (ej. "Síguenos para más") */
  ctaText: string;
  /** Handle o usuario (ej. @marca) */
  handle?: string;
  /** URL de perfil o enlace */
  link?: string;
  backgroundColor?: string;
  accentColor?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Media & component-specific data (new types)
// ─────────────────────────────────────────────────────────────────────────────

export interface ImageData {
  src: string;
  fit?: "fill" | "contain" | "cover";
  objectPosition?: string;
}

export interface VideoData {
  src: string;
  volume?: number;
  playbackRate?: number;
  loop?: boolean;
  trimBefore?: number;
  trimAfter?: number;
}

export interface AudioData {
  src: string;
  volume?: number;
  loop?: boolean;
}

export interface GifData {
  src: string;
  width?: number;
  height?: number;
}

export interface AnimatedImageData {
  src: string;
  width?: number;
  height?: number;
  fit?: "fill" | "contain" | "cover";
  playbackRate?: number;
  loopBehavior?: "loop" | "pause-after-finish" | "clear-after-finish";
}

export interface LottieData {
  src: string;
  loop?: boolean;
}

export interface TextData {
  text: string;
  fontFamily?: string;
  fontSize?: number;
  color?: string;
  align?: "left" | "center" | "right";
  fontWeight?: string;
}

export interface CaptionsData {
  src: string;
  /** SRT or JSON captions URL */
}

export interface LightLeakData {
  seed?: number;
  hueShift?: number;
  durationInFrames?: number;
}

export type SceneData =
  | LogoCurtainData
  | IntroData
  | ServicesData
  | ProductsData
  | MetricsData
  | ContactData
  | ReelHookData
  | ReelTextCardData
  | ReelCtaData
  | ImageData
  | VideoData
  | AudioData
  | GifData
  | AnimatedImageData
  | LottieData
  | TextData
  | CaptionsData
  | LightLeakData;

// ─────────────────────────────────────────────────────────────────────────────
// Sequence — una escena dentro de una composición
// ─────────────────────────────────────────────────────────────────────────────

export interface Sequence {
  id: string;
  /** Posición en el timeline (0-based, sin gaps) */
  order: number;
  /** Frame de inicio (para drag en timeline; si no existe, se calcula desde order) */
  from?: number;
  sceneType: SceneType;
  durationInFrames: number;
  sceneData: SceneData;
  /** Transición aplicada DESPUÉS de esta secuencia (hacia la siguiente). */
  transition?: SceneTransition;
  /** Animaciones de entrada/salida y layout (para media/texto) */
  animationConfig?: AnimationConfig;
}

// ─────────────────────────────────────────────────────────────────────────────
// Composition DTO — serializable para HTTP responses y props de cliente
// ─────────────────────────────────────────────────────────────────────────────

export type CompositionStatus = "draft" | "published" | "archived";

export interface CompositionDTO {
  id: string;
  ownerId: string;
  title: string;
  description?: string;
  status: CompositionStatus;
  thumbnailUrl?: string;
  fps: number;
  width: number;
  height: number;
  sequences: Sequence[];
  /**
   * Duración total calculada:
   * sum(seq.durationInFrames) − sum(seq.transition.durationInFrames para c/u excepto la última)
   */
  totalDurationInFrames: number;
  createdAt: string; // ISO 8601
  updatedAt: string; // ISO 8601
}

// ─────────────────────────────────────────────────────────────────────────────
// Asset DTO
// ─────────────────────────────────────────────────────────────────────────────

export type AssetType = "image" | "video" | "audio" | "font";

export interface AssetDTO {
  id: string;
  ownerId: string;
  name: string;
  type: AssetType;
  mimeType: string;
  sizeBytes: number;
  /** Ruta dentro del bucket: users/{uid}/assets/{type}/{filename} */
  storagePath: string;
  downloadUrl: string;
  /** Descripción de para qué y cómo debe usarse este asset en esta composición */
  description?: string;
  /**
   * ID de sesión temporal (generado al abrir "Nueva composición").
   * Agrupa assets antes de que exista la composición.
   */
  sessionId?: string;
  /** ID de la composición a la que pertenece este asset (se asigna al crear la composición) */
  compositionId?: string;
  width?: number;
  height?: number;
  durationSeconds?: number;
  createdAt: string;
  updatedAt: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// User profile DTO
// ─────────────────────────────────────────────────────────────────────────────

export type UserPlan = "free" | "pro" | "enterprise";

export interface UserProfileDTO {
  uid: string;
  email: string;
  displayName?: string;
  photoUrl?: string;
  plan: UserPlan;
  compositionsCount: number;
  storageUsedBytes: number;
  createdAt: string;
  updatedAt: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Remotion Player input props — lo que recibe DynamicComposition
// ─────────────────────────────────────────────────────────────────────────────

export interface CompositionInputProps {
  sequences: Sequence[];
}
