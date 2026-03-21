import { z } from "zod";

/**
 * Zod schema for DynamicComposition props.
 * Enables visual editing in Remotion Studio.
 * @see https://www.remotion.dev/docs/schemas
 */

const sceneTransitionSchema = z.object({
  type: z.enum(["fade", "slide", "wipe", "flip", "clock-wipe", "none"]),
  durationInFrames: z.number(),
  direction: z
    .enum(["from-left", "from-right", "from-top", "from-bottom"])
    .optional(),
  timing: z.enum(["linear", "spring"]),
  springConfig: z
    .object({
      damping: z.number().optional(),
      stiffness: z.number().optional(),
    })
    .optional(),
});

const layoutConfigSchema = z.object({
  x: z.number(),
  y: z.number(),
  width: z.number().optional(),
  height: z.number().optional(),
  anchor: z
    .enum([
      "top-left",
      "top-center",
      "top-right",
      "center-left",
      "center",
      "center-right",
      "bottom-left",
      "bottom-center",
      "bottom-right",
    ])
    .optional(),
});

const entranceExitConfigSchema = z.object({
  type: z.enum(["fade", "slide", "scale", "spring"]),
  durationInFrames: z.number(),
  delayInFrames: z.number().optional(),
  easing: z
    .enum([
      "linear",
      "quad",
      "cubic",
      "sin",
      "exp",
      "circle",
      "elastic",
      "bounce",
      "back",
      "bezier",
    ])
    .optional(),
  easingVariant: z.enum(["in", "out", "inOut"]).optional(),
  springConfig: z
    .object({
      damping: z.number().optional(),
      stiffness: z.number().optional(),
      mass: z.number().optional(),
    })
    .optional(),
  bezierParams: z.tuple([z.number(), z.number(), z.number(), z.number()]).optional(),
});

const animationConfigSchema = z.object({
  entrance: entranceExitConfigSchema.optional(),
  exit: entranceExitConfigSchema.optional(),
  layout: layoutConfigSchema.optional(),
});

const sequenceSchema = z.object({
  id: z.string(),
  order: z.number(),
  from: z.number().optional(),
  sceneType: z.enum([
    "logo-curtain",
    "intro",
    "services",
    "products",
    "metrics",
    "contact",
    "image",
    "video",
    "audio",
    "gif",
    "animated-image",
    "lottie",
    "three-canvas",
    "text",
    "captions",
    "light-leak",
    "reel-hook",
    "reel-text-card",
    "reel-cta",
  ]),
  durationInFrames: z.number(),
  sceneData: z.record(z.string(), z.unknown()),
  transition: sceneTransitionSchema.optional(),
  animationConfig: animationConfigSchema.optional(),
});

export const compositionInputPropsSchema = z.object({
  sequences: z.array(sequenceSchema),
});

export type CompositionInputPropsSchema = z.infer<
  typeof compositionInputPropsSchema
>;
