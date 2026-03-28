import type { Sequence } from "../types";

/**
 * Secuencias de ejemplo para SocialCognitive — reporte de analytics Q1 2025.
 */
export const DEFAULT_SEQUENCES: Sequence[] = [
  {
    id: "seq-intro",
    order: 0,
    sceneType: "sc-intro",
    durationInFrames: 90,
    sceneData: {
      title: "Resultados de Campaña",
      subtitle: "Reporte mensual de rendimiento",
      period: "Q1 2025 | Meta Ads",
    },
    transition: { type: "fade", durationInFrames: 20, timing: "spring" },
  },
  {
    id: "seq-stat-hero",
    order: 1,
    sceneType: "stat-hero",
    durationInFrames: 120,
    sceneData: {
      value: "3.2M",
      label: "Impresiones totales",
      icon: "sc:eye",
      change: "+24%",
      changePositive: true,
      context: "vs Q4 2024",
    },
    transition: { type: "slide", direction: "from-right", durationInFrames: 20, timing: "spring" },
  },
  {
    id: "seq-stat-grid",
    order: 2,
    sceneType: "stat-grid",
    durationInFrames: 150,
    sceneData: {
      title: "Métricas clave",
      period: "Enero – Marzo 2025",
      items: [
        { icon: "sc:heart",    value: "148K",  label: "Me gusta",          change: "+18%", changePositive: true },
        { icon: "sc:users",    value: "42K",   label: "Nuevos seguidores", change: "+31%", changePositive: true },
        { icon: "sc:share",    value: "8.4K",  label: "Compartidos",       change: "+9%",  changePositive: true },
        { icon: "sc:percent",  value: "4.6%",  label: "Tasa engagement" },
      ],
    },
    transition: { type: "wipe", direction: "from-left", durationInFrames: 20, timing: "linear" },
  },
  {
    id: "seq-bar-chart",
    order: 3,
    sceneType: "bar-chart",
    durationInFrames: 150,
    sceneData: {
      title: "Impresiones por plataforma",
      subtitle: "Q1 2025",
      bars: [
        { label: "Instagram", value: 1800000 },
        { label: "TikTok",    value: 950000  },
        { label: "LinkedIn",  value: 430000  },
        { label: "YouTube",   value: 200000  },
      ],
    },
    transition: { type: "fade", durationInFrames: 20, timing: "spring" },
  },
  {
    id: "seq-insight",
    order: 4,
    sceneType: "insight",
    durationInFrames: 120,
    sceneData: {
      insight: "El contenido en video genera 3× más engagement que los carruseles en esta audiencia.",
      stat: "3×",
      statLabel: "más engagement",
      icon: "sc:zap",
      source: "Meta Ads Manager · Q1 2025",
    },
    transition: { type: "fade", durationInFrames: 20, timing: "spring" },
  },
  {
    id: "seq-outro",
    order: 5,
    sceneType: "sc-outro",
    durationInFrames: 90,
    sceneData: {
      tagline: "Inteligencia que convierte",
      website: "socialcognitive.com",
      handle: "@socialcognitive",
      ctaText: "Agenda tu consulta gratis",
    },
  },
];
