import type { SceneType, Sequence, SceneData } from "../types";

export interface PaletteItem {
  type: SceneType;
  label: string;
  category: "media" | "text" | "3d" | "effects" | "scenes";
  icon?: string;
}

export const COMPONENT_PALETTE_ITEMS: PaletteItem[] = [
  { type: "image", label: "Imagen", category: "media" },
  { type: "video", label: "Video", category: "media" },
  { type: "audio", label: "Audio", category: "media" },
  { type: "gif", label: "GIF", category: "media" },
  { type: "animated-image", label: "Imagen animada", category: "media" },
  { type: "lottie", label: "Lottie", category: "media" },
  { type: "text", label: "Texto", category: "text" },
  { type: "captions", label: "Subtítulos", category: "text" },
  { type: "three-canvas", label: "Three.js 3D", category: "3d" },
  { type: "light-leak", label: "Light Leak", category: "effects" },
  { type: "logo-curtain", label: "Logo / Cortinilla", category: "scenes" },
  { type: "intro", label: "Intro", category: "scenes" },
  { type: "services", label: "Servicios", category: "scenes" },
  { type: "products", label: "Productos", category: "scenes" },
  { type: "metrics", label: "Métricas", category: "scenes" },
  { type: "contact", label: "Contacto", category: "scenes" },
];

const CATEGORY_LABELS: Record<PaletteItem["category"], string> = {
  media: "Media",
  text: "Texto",
  "3d": "3D",
  effects: "Efectos",
  scenes: "Escenas",
};

export function getCategoryLabel(cat: PaletteItem["category"]) {
  return CATEGORY_LABELS[cat];
}

function getDefaultSceneData(type: SceneType): SceneData {
  switch (type) {
    case "image":
      return { src: "" };
    case "video":
      return { src: "", volume: 1, loop: false };
    case "audio":
      return { src: "", volume: 1, loop: false };
    case "gif":
      return { src: "", width: 400, height: 400 };
    case "animated-image":
      return { src: "", width: 400, height: 400, fit: "contain" };
    case "lottie":
      return { src: "", loop: true };
    case "text":
      return { text: "Nuevo texto", fontSize: 48, color: "#ffffff", align: "center" };
    case "captions":
      return { src: "" };
    case "light-leak":
      return { seed: 5, hueShift: 240 };
    case "logo-curtain":
      return { companyName: "Mi Empresa", accentColor: "#9DFF20" };
    case "intro":
      return { companyName: "Mi Empresa", tagline: "Innovación", accentColor: "#9DFF20" };
    case "services":
      return { title: "Servicios", accentColor: "#9DFF20" };
    case "products":
      return { title: "Productos", accentColor: "#9DFF20" };
    case "metrics":
      return { title: "Métricas", accentColor: "#9DFF20" };
    case "contact":
      return { companyName: "Contacto", ctaText: "Contáctanos", accentColor: "#9DFF20" };
    default:
      return {};
  }
}

export function createSequenceFromType(
  type: SceneType,
  order: number,
  idGenerator: () => string,
  startFrame?: number
): Sequence {
  return {
    id: idGenerator(),
    order,
    from: startFrame,
    sceneType: type,
    durationInFrames: 90,
    sceneData: getDefaultSceneData(type),
    transition: { type: "fade", durationInFrames: 15, timing: "linear" },
  };
}
