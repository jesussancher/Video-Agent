import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";

const COLS = 6;
const ROWS = 8;

// Deterministic grid of logos
const logoGrid = Array.from({ length: COLS * ROWS }, (_, i) => {
  const col = i % COLS;
  const row = Math.floor(i / COLS);
  return {
    col,
    row,
    // Stagger: top-center logos fall first, edges fall later
    delayFactor:
      Math.abs(col - (COLS - 1) / 2) * 0.12 + row * 0.06,
    rotateInit: ((i * 37 + 11) % 30) - 15,
    scaleJitter: 0.85 + ((i * 13) % 20) / 100,
  };
});

export const LogoCurtain: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const isVertical = height > width;

  const logoSize = isVertical ? 110 : 130;
  const gapX = isVertical
    ? (width - COLS * logoSize) / (COLS + 1)
    : (width - COLS * logoSize) / (COLS + 1);
  const gapY = isVertical
    ? (height - ROWS * logoSize) / (ROWS + 1)
    : (height - ROWS * logoSize) / (ROWS + 1);

  // Phase 1: Logos fall into grid (frames 0 → 2s)
  // Phase 2: Hold briefly (2s → 2.5s)
  // Phase 3: Curtain splits open (2.5s → 4s)

  // Global brightness pulse
  const globalPulse = 0.6 + 0.4 * Math.sin(frame * 0.08);

  // Flash at the end
  const flashOpacity = interpolate(
    frame,
    [3.2 * fps, 3.5 * fps, 3.8 * fps, 4.2 * fps],
    [0, 0.8, 0.3, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Central glow that grows
  const centralGlow = interpolate(
    frame,
    [1.5 * fps, 3 * fps],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.in(Easing.quad) }
  );

  // Title fade in at the end
  const titleOpacity = interpolate(
    frame,
    [3 * fps, 3.8 * fps],
    [0, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const titleScale = interpolate(
    frame,
    [3 * fps, 3.8 * fps],
    [0.5, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.back(1.5)) }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: "#050508" }}>
      {/* Subtle background grid */}
      <AbsoluteFill
        style={{
          backgroundImage:
            "linear-gradient(rgba(157,255,32,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(157,255,32,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          opacity: 0.5,
        }}
      />

      {/* Central glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: isVertical ? 600 : 900,
          height: isVertical ? 600 : 900,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(157,255,32,0.3) 0%, rgba(157,255,32,0.05) 50%, transparent 70%)",
          opacity: centralGlow * 0.6,
          filter: "blur(80px)",
        }}
      />

      {/* Logo grid */}
      {logoGrid.map((item, i) => {
        const baseDelay = Math.round(item.delayFactor * fps * 0.8);

        // Phase 1: Fall into position
        const fallSpring = spring({
          frame,
          fps,
          delay: baseDelay,
          config: { damping: 12, stiffness: 80, mass: 0.8 },
        });

        const startY = -logoSize * 2 - item.row * 50;
        const targetX = gapX + item.col * (logoSize + gapX);
        const targetY = gapY + item.row * (logoSize + gapY);

        const currentY = interpolate(fallSpring, [0, 1], [startY, targetY]);
        const currentRotation = interpolate(
          fallSpring,
          [0, 1],
          [item.rotateInit * 2, 0]
        );
        const currentScale = interpolate(
          fallSpring,
          [0, 1],
          [item.scaleJitter * 0.5, item.scaleJitter]
        );
        const currentOpacity = interpolate(fallSpring, [0, 0.3, 1], [0, 0.6, 0.7]);

        // Phase 3: Curtain split - logos fly outward
        const splitStart = 2.8 * fps;
        const splitProgress = interpolate(
          frame,
          [splitStart, splitStart + 1.2 * fps],
          [0, 1],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.in(Easing.quad) }
        );

        const centerX = width / 2;
        const centerY = height / 2;
        const dx = targetX + logoSize / 2 - centerX;
        const dy = targetY + logoSize / 2 - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const flyX = (dx / dist) * splitProgress * (isVertical ? 1200 : 1600);
        const flyY = (dy / dist) * splitProgress * (isVertical ? 1400 : 1000);
        const flyRotate = splitProgress * item.rotateInit * 8;
        const flyOpacity = interpolate(splitProgress, [0, 0.5, 1], [1, 0.6, 0]);

        // Individual glow
        const itemGlow =
          0.2 + 0.15 * Math.sin(frame * 0.06 + i * 0.7);

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: targetX + flyX,
              top: currentY + flyY,
              width: logoSize,
              height: logoSize,
              transform: `rotate(${currentRotation + flyRotate}deg) scale(${currentScale})`,
              opacity: currentOpacity * flyOpacity,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: logoSize * 0.75,
                height: logoSize * 0.75,
                borderRadius: 16,
                backgroundColor: `rgba(157,255,32,${0.04 + itemGlow * 0.06})`,
                border: `1px solid rgba(157,255,32,${0.1 + itemGlow * 0.15})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 ${20 * itemGlow}px rgba(157,255,32,${itemGlow * 0.3})`,
              }}
            >
              <Img
                src={staticFile("logo.png")}
                style={{
                  width: logoSize * 0.5,
                  height: logoSize * 0.5,
                  filter: `drop-shadow(0 0 ${8 * globalPulse}px rgba(157,255,32,0.4)) brightness(${0.7 + itemGlow * 0.3})`,
                }}
              />
            </div>
          </div>
        );
      })}

      {/* Center flash */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(circle, rgba(157,255,32,0.9) 0%, rgba(157,255,32,0.3) 30%, transparent 60%)",
          opacity: flashOpacity,
        }}
      />

      {/* Title reveal at end */}
      <AbsoluteFill
        style={{
          justifyContent: "center",
          alignItems: "center",
          opacity: titleOpacity,
        }}
      >
        <div
          style={{
            transform: `scale(${titleScale})`,
            textAlign: "center",
          }}
        >
          <Img
            src={staticFile("logo.png")}
            style={{
              width: isVertical ? 120 : 150,
              height: isVertical ? 120 : 150,
              filter: "drop-shadow(0 0 40px rgba(157,255,32,0.6))",
              marginBottom: 16,
            }}
          />
        </div>
      </AbsoluteFill>

      {/* Vignette */}
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.8) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
