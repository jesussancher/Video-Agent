// ─────────────────────────────────────────────────────────────────────────────
// Scene & Transition types
// ─────────────────────────────────────────────────────────────────────────────

export type SceneType =
  | "logo-curtain"
  | "intro"
  | "services"
  | "products"
  | "metrics"
  | "contact";

export type TransitionType = "fade" | "slide" | "wipe" | "none";

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

export type SceneData =
  | LogoCurtainData
  | IntroData
  | ServicesData
  | ProductsData
  | MetricsData
  | ContactData;

// ─────────────────────────────────────────────────────────────────────────────
// Sequence — una escena dentro de una composición
// ─────────────────────────────────────────────────────────────────────────────

export interface Sequence {
  id: string;
  /** Posición en el timeline (0-based, sin gaps) */
  order: number;
  sceneType: SceneType;
  durationInFrames: number;
  sceneData: SceneData;
  /** Transición aplicada DESPUÉS de esta secuencia (hacia la siguiente). */
  transition?: SceneTransition;
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
