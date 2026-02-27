"use client";

import { Player } from "@remotion/player";
import { MyComposition } from "../src/Composition";

// 6 scenes: 130 + 150 + 180 + 150 + 150 + 150 = 910
// 5 transitions: 5 × 25 = 125
// Total: 910 - 125 = 785 frames (~26.2 seconds)
const TOTAL_DURATION = 785;

export default function VideoPlayer() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 960,
        borderRadius: 12,
        overflow: "hidden",
        boxShadow:
          "0 0 0 1px rgba(157,255,32,0.15), 0 24px 80px rgba(0,0,0,0.6)",
      }}
    >
      <Player
        component={MyComposition}
        durationInFrames={TOTAL_DURATION}
        fps={30}
        compositionWidth={1920}
        compositionHeight={1080}
        style={{ width: "100%" }}
        controls
        loop
        autoPlay={false}
        clickToPlay
        acknowledgeRemotionLicense
      />
    </div>
  );
}
