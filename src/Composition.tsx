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

const TRANSITION_DURATION = 25;

export const MyComposition: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#050508" }}>
      <TransitionSeries>
        {/* Scene 0: Logo Curtain - Opening animation */}
        <TransitionSeries.Sequence durationInFrames={130}>
          <LogoCurtain />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({
            config: { damping: 200 },
            durationInFrames: TRANSITION_DURATION,
          })}
        />

        {/* Scene 1: Intro - Cinematic logo reveal */}
        <TransitionSeries.Sequence durationInFrames={150}>
          <Intro />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({
            config: { damping: 200 },
            durationInFrames: TRANSITION_DURATION,
          })}
        />

        {/* Scene 2: Services - What we do */}
        <TransitionSeries.Sequence durationInFrames={180}>
          <Services />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
        />

        {/* Scene 3: Products - Star products */}
        <TransitionSeries.Sequence durationInFrames={150}>
          <Products />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-left" })}
          timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
        />

        {/* Scene 4: Metrics - Business impact */}
        <TransitionSeries.Sequence durationInFrames={150}>
          <Metrics />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({
            config: { damping: 200 },
            durationInFrames: TRANSITION_DURATION,
          })}
        />

        {/* Scene 5: Contact - CTA */}
        <TransitionSeries.Sequence durationInFrames={150}>
          <Contact />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
