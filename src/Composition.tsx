import React, { useMemo } from "react";
import { AbsoluteFill, Sequence as RemotionSequence, useVideoConfig } from "remotion";
import {
  TransitionSeries,
  linearTiming,
  springTiming,
} from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { flip } from "@remotion/transitions/flip";
import { clockWipe } from "@remotion/transitions/clock-wipe";
import { LogoCurtain } from "./scenes/LogoCurtain";
import { Intro } from "./scenes/Intro";
import { Services } from "./scenes/Services";
import { Products } from "./scenes/Products";
import { Metrics } from "./scenes/Metrics";
import { Contact } from "./scenes/Contact";
import { MediaScene } from "./scenes/MediaScene";
import type {
  CompositionInputProps,
  SceneTransition,
  Sequence as SequenceType,
} from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Presentation helpers
// ─────────────────────────────────────────────────────────────────────────────

function getPresentation(
  t: SceneTransition,
  width: number,
  height: number
): ReturnType<typeof fade> {
  switch (t.type) {
    case "slide":
      return slide({
        direction: t.direction ?? "from-right",
      }) as unknown as ReturnType<typeof fade>;
    case "wipe":
      return wipe({
        direction: t.direction ?? "from-left",
      }) as unknown as ReturnType<typeof fade>;
    case "flip":
      return flip() as unknown as ReturnType<typeof fade>;
    case "clock-wipe":
      return clockWipe({ width, height }) as unknown as ReturnType<typeof fade>;
    case "none":
      return fade(); // unused when type is none (transition skipped)
    case "fade":
    default:
      return fade();
  }
}

function getTiming(t: SceneTransition) {
  return t.timing === "spring"
    ? springTiming({
        config: {
          damping: t.springConfig?.damping ?? 200,
          stiffness: t.springConfig?.stiffness ?? 100,
        },
        durationInFrames: t.durationInFrames,
      })
    : linearTiming({ durationInFrames: t.durationInFrames });
}

// ─────────────────────────────────────────────────────────────────────────────
// Scene registry
// TODO: pasar sceneData como props cuando cada escena sea parametrizable
// ─────────────────────────────────────────────────────────────────────────────

function SceneRenderer({ sequence }: { sequence: SequenceType }) {
  switch (sequence.sceneType) {
    case "logo-curtain":
      return <LogoCurtain />;
    case "intro":
      return <Intro />;
    case "services":
      return <Services />;
    case "products":
      return <Products />;
    case "metrics":
      return <Metrics />;
    case "contact":
      return <Contact />;
    case "image":
    case "video":
    case "audio":
    case "gif":
    case "animated-image":
    case "lottie":
    case "text":
      return <MediaScene sequence={sequence} />;
    case "captions":
    case "three-canvas":
    case "light-leak":
      // TODO: implement captions, three-canvas, light-leak
      return null;
    default:
      return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// DynamicComposition — renderiza sequences desde Firestore vía inputProps
// Solo recibe datos de la DB (VideoPlayer) o vacío (Remotion Studio)
// ─────────────────────────────────────────────────────────────────────────────

/** Obtiene el frame de inicio de una secuencia (explícito o calculado desde order) */
function getSequenceFrom(
  seq: SequenceType,
  _sorted: SequenceType[],
  computedFromMap: Map<string, number>
): number {
  if (seq.from !== undefined) return seq.from;
  return computedFromMap.get(seq.id) ?? 0;
}

export const DynamicComposition: React.FC<Partial<CompositionInputProps>> = ({
  sequences = [],
}) => {
  const { width, height } = useVideoConfig();
  const sorted = useMemo(
    () => [...sequences].sort((a, b) => a.order - b.order),
    [sequences]
  );

  const computedFromMap = useMemo(() => {
    const map = new Map<string, number>();
    let acc = 0;
    for (let i = 0; i < sorted.length; i++) {
      const seq = sorted[i];
      const from = seq.from ?? acc;
      map.set(seq.id, from);
      const overlap =
        i < sorted.length - 1 && seq.transition
          ? seq.transition!.durationInFrames
          : 0;
      acc = from + seq.durationInFrames - overlap;
    }
    return map;
  }, [sorted]);

  const hasExplicitFrom = sequences.some((s) => s.from !== undefined);

  if (sorted.length === 0) {
    return (
      <AbsoluteFill
        style={{
          backgroundColor: "#050508",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(255,255,255,0.3)",
          fontSize: 14,
        }}
      >
        Sin secuencias — carga datos desde Firestore
      </AbsoluteFill>
    );
  }

  if (hasExplicitFrom) {
    return (
      <AbsoluteFill style={{ backgroundColor: "#050508" }}>
        {sorted.map((seq) => {
          const fromFrame = getSequenceFrom(seq, sorted, computedFromMap);
          return (
            <RemotionSequence
              key={seq.id}
              from={fromFrame}
              durationInFrames={seq.durationInFrames}
            >
              <SceneRenderer sequence={seq} />
            </RemotionSequence>
          );
        })}
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill style={{ backgroundColor: "#050508" }}>
      <TransitionSeries>
        {sorted.map((seq, index) => (
          <>
            <TransitionSeries.Sequence
              key={seq.id}
              durationInFrames={seq.durationInFrames}
            >
              <SceneRenderer sequence={seq} />
            </TransitionSeries.Sequence>

            {seq.transition &&
              seq.transition.type !== "none" &&
              index < sorted.length - 1 && (
                <TransitionSeries.Transition
                  key={`t-${seq.id}`}
                  presentation={getPresentation(seq.transition, width, height)}
                  timing={getTiming(seq.transition)}
                />
              )}
          </>
        ))}
      </TransitionSeries>
    </AbsoluteFill>
  );
};

/**
 * MyComposition — alias para Remotion Studio (sin datos locales).
 */
export const MyComposition: React.FC = () => (
  <DynamicComposition sequences={[]} />
);
