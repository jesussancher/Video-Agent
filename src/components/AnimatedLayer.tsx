import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";
import type {
  AnimationConfig,
  EntranceExitConfig,
  LayoutConfig,
  LayoutAnchor,
} from "../types";

// ─────────────────────────────────────────────────────────────────────────────
// Easing helpers — map our EasingType to Remotion Easing
// ─────────────────────────────────────────────────────────────────────────────

function getEasingFn(config: EntranceExitConfig) {
  const base =
    config.easing === "bezier" && config.bezierParams
      ? Easing.bezier(
          config.bezierParams[0],
          config.bezierParams[1],
          config.bezierParams[2],
          config.bezierParams[3]
        )
      : config.easing === "quad"
        ? Easing.quad
        : config.easing === "cubic"
          ? Easing.cubic
          : config.easing === "sin"
            ? Easing.sin
            : config.easing === "exp"
              ? Easing.exp
              : config.easing === "circle"
                ? Easing.circle
                : config.easing === "elastic"
                  ? Easing.elastic(1)
                  : config.easing === "bounce"
                    ? Easing.bounce
                    : config.easing === "back"
                      ? Easing.back(1)
                      : Easing.linear;

  const variant = config.easingVariant ?? "in";
  if (variant === "out") return Easing.out(base);
  if (variant === "inOut") return Easing.inOut(base);
  return Easing.in(base);
}

// ─────────────────────────────────────────────────────────────────────────────
// Layout helpers
// ─────────────────────────────────────────────────────────────────────────────

function getLayoutStyle(layout: LayoutConfig, width: number, height: number): React.CSSProperties {
  const w = layout.width ?? 200;
  const h = layout.height ?? 200;
  const anchor = layout.anchor ?? "center";

  const anchorOffsets: Record<LayoutAnchor, { x: number; y: number }> = {
    "top-left": { x: 0, y: 0 },
    "top-center": { x: -w / 2, y: 0 },
    "top-right": { x: -w, y: 0 },
    "center-left": { x: 0, y: -h / 2 },
    center: { x: -w / 2, y: -h / 2 },
    "center-right": { x: -w, y: -h / 2 },
    "bottom-left": { x: 0, y: -h },
    "bottom-center": { x: -w / 2, y: -h },
    "bottom-right": { x: -w, y: -h },
  };

  const { x: ax, y: ay } = anchorOffsets[anchor];
  return {
    position: "absolute" as const,
    left: layout.x + ax,
    top: layout.y + ay,
    width: w,
    height: h,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// AnimatedLayer — applies entrance/exit animations and layout
// ─────────────────────────────────────────────────────────────────────────────

export interface AnimatedLayerProps {
  config?: AnimationConfig;
  durationInFrames: number;
  children: React.ReactNode;
  /** Override to use full fill (e.g. for full-screen scenes) */
  fullFill?: boolean;
}

export const AnimatedLayer: React.FC<AnimatedLayerProps> = ({
  config,
  durationInFrames,
  children,
  fullFill = false,
}) => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();

  const entrance = config?.entrance;
  const exit = config?.exit;
  const layout = config?.layout;

  let opacity = 1;
  let scale = 1;
  let translateX = 0;
  let translateY = 0;

  // Entrance animation
  if (entrance) {
    const delay = entrance.delayInFrames ?? 0;
    const dur = entrance.durationInFrames;
    const start = delay;
    const end = delay + dur;

    if (entrance.type === "spring") {
      const driver = spring({
        frame: Math.max(0, frame - delay),
        fps,
        config: {
          damping: entrance.springConfig?.damping ?? 20,
          stiffness: entrance.springConfig?.stiffness ?? 100,
          mass: entrance.springConfig?.mass ?? 1,
        },
      });
      opacity = driver;
      scale = driver;
    } else {
      const inputFrame = Math.max(0, Math.min(frame - delay, dur));
      const progress = interpolate(
        inputFrame,
        [0, dur],
        [0, 1],
        {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: entrance.easing ? getEasingFn(entrance) : undefined,
        }
      );

      if (entrance.type === "fade") opacity = progress;
      else if (entrance.type === "scale") scale = progress;
      else if (entrance.type === "slide") {
        translateY = interpolate(progress, [0, 1], [30, 0]);
      }
    }
  }

  // Exit animation (at end of sequence)
  if (exit) {
    const exitStart = durationInFrames - exit.durationInFrames - (exit.delayInFrames ?? 0);
    const exitEnd = durationInFrames;

    if (frame >= exitStart) {
      const localFrame = frame - exitStart;
      const dur = exit.durationInFrames;

      if (exit.type === "spring") {
        const driver = spring({
          frame: localFrame,
          fps,
          config: {
            damping: exit.springConfig?.damping ?? 20,
            stiffness: exit.springConfig?.stiffness ?? 100,
          },
          reverse: true,
        });
        opacity = Math.min(opacity, driver);
        scale = Math.min(scale, driver);
      } else {
        const progress = interpolate(
          localFrame,
          [0, dur],
          [0, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: exit.easing ? getEasingFn(exit) : undefined,
          }
        );

        if (exit.type === "fade") opacity = Math.min(opacity, 1 - progress);
        else if (exit.type === "scale") scale = Math.min(scale, 1 - progress);
        else if (exit.type === "slide") {
          translateY = interpolate(progress, [0, 1], [0, -30]);
        }
      }
    }
  }

  const transform = `scale(${scale}) translateY(${translateY}px) translateX(${translateX}px)`;

  if (fullFill) {
    return (
      <AbsoluteFill
        style={{
          opacity,
          transform,
        }}
      >
        {children}
      </AbsoluteFill>
    );
  }

  if (layout) {
    const layoutStyle = getLayoutStyle(layout, width, height);
    return (
      <div
        style={{
          ...layoutStyle,
          opacity,
          transform,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <AbsoluteFill
      style={{
        opacity,
        transform,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
