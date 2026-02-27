import { Composition } from "remotion";
import { MyComposition } from "./Composition";

// 6 scenes: 130 + 150 + 180 + 150 + 150 + 150 = 910
// 5 transitions: 5 × 25 = 125
// Total: 910 - 125 = 785 frames (~26.2 seconds)
const TOTAL_DURATION = 785;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* 16:9 Landscape */}
      <Composition
        id="LaitPresentation"
        component={MyComposition}
        durationInFrames={TOTAL_DURATION}
        fps={30}
        width={1920}
        height={1080}
      />
      {/* 9:16 Vertical (Reels / TikTok / Shorts) */}
      {/* <Composition
        id="LaitPresentation-Vertical"
        component={MyComposition}
        durationInFrames={TOTAL_DURATION}
        fps={30}
        width={1080}
        height={1920}
      /> */}
    </>
  );
};
