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

// ─── Transition helpers ───────────────────────────────────────────────────────

function getPresentation(
  t: SceneTransition,
  width: number,
  height: number
): ReturnType<typeof fade> {
  switch (t.type) {
    case "slide":
      return slide({ direction: t.direction ?? "from-right" }) as unknown as ReturnType<typeof fade>;
    case "wipe":
      return wipe({ direction: t.direction ?? "from-left" }) as unknown as ReturnType<typeof fade>;
    case "flip":
      return flip() as unknown as ReturnType<typeof fade>;
    case "clock-wipe":
      return clockWipe({ width, height }) as unknown as ReturnType<typeof fade>;
    case "none":
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

// ─── Scene registry ───────────────────────────────────────────────────────────

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
    case "gif":
    case "animated-image":
    case "lottie":
    case "text":
      return <MediaScene sequence={sequence} />;
    case "light-leak":
    case "captions":
    case "three-canvas":
    case "audio":
      return null;
    default:
      return null;
  }
}

// ─── DynamicComposition ───────────────────────────────────────────────────────
//
// Audio sequences are rendered as absolute RemotionSequence overlays so they
// don't affect the TransitionSeries visual timeline. Their `from` frame is
// computed by finding the first visual sequence whose order >= audio.order
// (i.e. the scene the audio should accompany). Background music (order=0) maps
// to frame 0 of the visual timeline.
//

export const DynamicComposition: React.FC<Partial<CompositionInputProps>> = ({
  sequences = [],
}) => {
  const { width, height } = useVideoConfig();

  const sorted = useMemo(
    () => [...sequences].sort((a, b) => a.order - b.order),
    [sequences]
  );

  // Split into visual and audio layers
  const { visualSeqs, audioSeqs } = useMemo(() => ({
    visualSeqs: sorted.filter((s) => s.sceneType !== "audio"),
    audioSeqs: sorted.filter((s) => s.sceneType === "audio"),
  }), [sorted]);

  // Build the visual-only sequential timeline (frame positions)
  const visualFromMap = useMemo(() => {
    const map = new Map<string, number>();
    let acc = 0;
    for (let i = 0; i < visualSeqs.length; i++) {
      const seq = visualSeqs[i];
      map.set(seq.id, acc);
      const overlap =
        i < visualSeqs.length - 1 && seq.transition
          ? seq.transition.durationInFrames
          : 0;
      acc += seq.durationInFrames - overlap;
    }
    return map;
  }, [visualSeqs]);

  // Map each audio sequence to a visual start frame
  const audioFromMap = useMemo(() => {
    const map = new Map<string, number>();
    for (const audio of audioSeqs) {
      // Find the first visual seq whose order >= audio.order
      const anchor = visualSeqs.find((v) => v.order >= audio.order);
      map.set(audio.id, anchor ? (visualFromMap.get(anchor.id) ?? 0) : 0);
    }
    return map;
  }, [audioSeqs, visualSeqs, visualFromMap]);

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

  return (
    <AbsoluteFill style={{ backgroundColor: "#050508" }}>
      {/* ── Visual layer (sequential with transitions) ── */}
      <TransitionSeries>
        {visualSeqs.map((seq, index) => (
          <React.Fragment key={seq.id}>
            <TransitionSeries.Sequence durationInFrames={seq.durationInFrames}>
              <SceneRenderer sequence={seq} />
            </TransitionSeries.Sequence>

            {seq.transition &&
              seq.transition.type !== "none" &&
              index < visualSeqs.length - 1 && (
                <TransitionSeries.Transition
                  presentation={getPresentation(seq.transition, width, height)}
                  timing={getTiming(seq.transition)}
                />
              )}
          </React.Fragment>
        ))}
      </TransitionSeries>

      {/* ── Audio layer (absolute overlays, don't affect visual timeline) ── */}
      {audioSeqs.map((seq) => (
        <RemotionSequence
          key={seq.id}
          from={audioFromMap.get(seq.id) ?? 0}
          durationInFrames={seq.durationInFrames}
          layout="none"
        >
          <MediaScene sequence={seq} />
        </RemotionSequence>
      ))}
    </AbsoluteFill>
  );
};

/**
 * MyComposition — alias para Remotion Studio (sin datos locales).
 */
export const MyComposition: React.FC = () => (
  <DynamicComposition sequences={[]} />
);
