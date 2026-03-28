import type { SceneType, Sequence, SceneData } from "../types";

export interface PaletteItem {
  type: SceneType;
  label: string;
  category: "analytics" | "media";
  icon?: string;
}

export const COMPONENT_PALETTE_ITEMS: PaletteItem[] = [
  // Analytics scenes
  { type: "sc-intro",    label: "Intro SC",          category: "analytics" },
  { type: "stat-hero",   label: "KPI grande",        category: "analytics" },
  { type: "stat-grid",   label: "Grid de métricas",  category: "analytics" },
  { type: "bar-chart",   label: "Gráfica de barras", category: "analytics" },
  { type: "line-chart",  label: "Gráfica de línea",  category: "analytics" },
  { type: "donut-chart", label: "Gráfica de dona",   category: "analytics" },
  { type: "comparison",  label: "Comparación",       category: "analytics" },
  { type: "leaderboard", label: "Leaderboard",       category: "analytics" },
  { type: "insight",     label: "Insight",           category: "analytics" },
  { type: "sc-outro",    label: "Outro SC",          category: "analytics" },
  // Media
  { type: "image",    label: "Imagen",     category: "media" },
  { type: "video",    label: "Video",      category: "media" },
  { type: "audio",    label: "Audio",      category: "media" },
  { type: "lottie",   label: "Lottie",     category: "media" },
  { type: "captions", label: "Subtítulos", category: "media" },
];

const CATEGORY_LABELS: Record<PaletteItem["category"], string> = {
  analytics: "Analytics",
  media: "Media",
};

export function getCategoryLabel(cat: PaletteItem["category"]) {
  return CATEGORY_LABELS[cat];
}

function getDefaultSceneData(type: SceneType): SceneData {
  switch (type) {
    case "sc-intro":
      return { title: "Resultados de Campaña", period: "Q1 2025" };
    case "stat-hero":
      return { value: "0", label: "Métrica", icon: "sc:bar-chart" };
    case "stat-grid":
      return {
        title: "Métricas clave",
        items: [
          { icon: "sc:eye",     value: "0", label: "Impresiones" },
          { icon: "sc:heart",   value: "0", label: "Me gusta" },
          { icon: "sc:users",   value: "0", label: "Seguidores" },
          { icon: "sc:percent", value: "0%", label: "Engagement" },
        ],
      };
    case "bar-chart":
      return {
        title: "Comparativa",
        bars: [
          { label: "A", value: 100 },
          { label: "B", value: 75 },
          { label: "C", value: 50 },
        ],
      };
    case "line-chart":
      return {
        title: "Tendencia",
        points: [
          { label: "Ene", value: 10 },
          { label: "Feb", value: 15 },
          { label: "Mar", value: 12 },
          { label: "Abr", value: 20 },
        ],
      };
    case "donut-chart":
      return {
        title: "Distribución",
        segments: [
          { label: "A", value: 50 },
          { label: "B", value: 30 },
          { label: "C", value: 20 },
        ],
      };
    case "comparison":
      return {
        title: "Este mes vs anterior",
        labelA: "Este mes",
        labelB: "Mes anterior",
        metrics: [
          { label: "Impresiones", valueA: "0", valueB: "0" },
        ],
      };
    case "leaderboard":
      return {
        title: "Top contenidos",
        items: [
          { label: "Contenido 1", value: 1000 },
          { label: "Contenido 2", value: 800 },
          { label: "Contenido 3", value: 600 },
        ],
      };
    case "insight":
      return {
        insight: "Escribe aquí el insight clave.",
        icon: "sc:zap",
      };
    case "sc-outro":
      return {
        tagline: "Inteligencia que convierte",
        website: "socialcognitive.com",
        handle: "@socialcognitive",
        ctaText: "Agenda tu consulta gratis",
      };
    case "image":
      return { src: "" };
    case "video":
      return { src: "", volume: 1, loop: false };
    case "audio":
      return { src: "", volume: 1, loop: false };
    case "lottie":
      return { src: "", loop: true };
    case "captions":
      return { src: "" };
    default:
      return {} as SceneData;
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
    durationInFrames: 120,
    sceneData: getDefaultSceneData(type),
    transition: { type: "fade", durationInFrames: 20, timing: "spring" },
  };
}
