import { AbsoluteFill } from "remotion";
import {
  TransitionSeries,
  linearTiming,
  springTiming,
} from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { LogoCurtain } from "./scenes/LogoCurtain";
import { Intro } from "./scenes/Intro";
import { Services } from "./scenes/Services";
import { Products } from "./scenes/Products";
import { Metrics } from "./scenes/Metrics";
import { Contact } from "./scenes/Contact";
import type {
  CompositionInputProps,
  SceneTransition,
  Sequence,
} from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Presentation helpers
// ─────────────────────────────────────────────────────────────────────────────

function getPresentation(t: SceneTransition): ReturnType<typeof fade> {
  switch (t.type) {
    case "slide":
      return slide({
        direction: t.direction ?? "from-right",
      }) as unknown as ReturnType<typeof fade>;
    case "wipe":
      return wipe({
        direction: t.direction ?? "from-left",
      }) as unknown as ReturnType<typeof fade>;
    case "fade":
    default:
      return fade();
  }
}

function getTiming(t: SceneTransition) {
  return t.timing === "spring"
    ? springTiming({
        config: { damping: 200 },
        durationInFrames: t.durationInFrames,
      })
    : linearTiming({ durationInFrames: t.durationInFrames });
}

// ─────────────────────────────────────────────────────────────────────────────
// Scene registry
// TODO: pasar sceneData como props cuando cada escena sea parametrizable
// ─────────────────────────────────────────────────────────────────────────────

function SceneRenderer({ sequence }: { sequence: Sequence }) {
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
    default:
      return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// DynamicComposition — renderiza sequences desde Firestore vía inputProps
// Solo recibe datos de la DB (VideoPlayer) o vacío (Remotion Studio)
// ─────────────────────────────────────────────────────────────────────────────

export const DynamicComposition: React.FC<Partial<CompositionInputProps>> = ({
  sequences = [],
}) => {
  const sorted = [...sequences].sort((a, b) => a.order - b.order);

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
      <TransitionSeries>
        {sorted.map((seq, index) => (
          <>
            <TransitionSeries.Sequence
              key={seq.id}
              durationInFrames={seq.durationInFrames}
            >
              <SceneRenderer sequence={seq} />
            </TransitionSeries.Sequence>

            {seq.transition && index < sorted.length - 1 && (
              <TransitionSeries.Transition
                key={`t-${seq.id}`}
                presentation={getPresentation(seq.transition)}
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
