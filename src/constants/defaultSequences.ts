import type { Sequence } from "../types";

/**
 * Secuencias por defecto del proyecto Lait — compartidas entre Composition y API init.
 */
export const DEFAULT_SEQUENCES: Sequence[] = [
  {
    id: "seq-0",
    order: 0,
    sceneType: "logo-curtain",
    durationInFrames: 130,
    sceneData: { companyName: "Lait Technology", accentColor: "#9DFF20" },
    transition: { type: "fade", durationInFrames: 25, timing: "spring" },
  },
  {
    id: "seq-1",
    order: 1,
    sceneType: "intro",
    durationInFrames: 150,
    sceneData: {
      companyName: "Lait Technology",
      tagline: "Innovación que transforma",
      accentColor: "#9DFF20",
    },
    transition: { type: "fade", durationInFrames: 25, timing: "spring" },
  },
  {
    id: "seq-2",
    order: 2,
    sceneType: "services",
    durationInFrames: 180,
    sceneData: { title: "Nuestros Servicios", accentColor: "#9DFF20" },
    transition: {
      type: "slide",
      direction: "from-right",
      durationInFrames: 25,
      timing: "linear",
    },
  },
  {
    id: "seq-3",
    order: 3,
    sceneType: "products",
    durationInFrames: 150,
    sceneData: { title: "Productos Destacados", accentColor: "#9DFF20" },
    transition: {
      type: "wipe",
      direction: "from-left",
      durationInFrames: 25,
      timing: "linear",
    },
  },
  {
    id: "seq-4",
    order: 4,
    sceneType: "metrics",
    durationInFrames: 150,
    sceneData: { title: "Nuestro Impacto", accentColor: "#9DFF20" },
    transition: { type: "fade", durationInFrames: 25, timing: "spring" },
  },
  {
    id: "seq-5",
    order: 5,
    sceneType: "contact",
    durationInFrames: 150,
    sceneData: {
      companyName: "Lait Technology",
      ctaText: "Contáctanos",
      accentColor: "#9DFF20",
    },
  },
];
