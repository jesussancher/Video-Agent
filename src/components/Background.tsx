import { AbsoluteFill, Img, staticFile, useCurrentFrame } from "remotion";

export const AnimatedBackground: React.FC<{
  showGrid?: boolean;
  showImage?: boolean;
  imageOpacity?: number;
}> = ({ showGrid = true, showImage = true, imageOpacity = 0.15 }) => {
  const frame = useCurrentFrame();

  // Subtle floating movement for the background
  const bgX = Math.sin(frame * 0.01) * 8;
  const bgY = Math.cos(frame * 0.008) * 6;

  return (
    <AbsoluteFill>
      {/* Base dark background */}
      <AbsoluteFill style={{ backgroundColor: "#050508" }} />

      {/* BG.png image with subtle movement */}
      {showImage && (
        <AbsoluteFill
          style={{
            opacity: imageOpacity,
            transform: `translate(${bgX}px, ${bgY}px) scale(1.05)`,
          }}
        >
          <Img
            src={staticFile("BG.png")}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </AbsoluteFill>
      )}

      {/* Animated grid overlay */}
      {showGrid && (
        <AbsoluteFill
          style={{
            backgroundImage:
              "linear-gradient(rgba(157,255,32,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(157,255,32,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            opacity: 0.6,
          }}
        />
      )}

      {/* Vignette effect */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
