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
import { loadFont } from "@remotion/google-fonts/Montserrat";
import { AnimatedBackground } from "../components/Background";
import { FloatingParticles } from "../components/Particles";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const isVertical = height > width;

  // === LOGO ANIMATIONS ===
  const logoRevealSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });
  const logoScale = interpolate(logoRevealSpring, [0, 1], [0.3, 1]);
  const logoOpacity = interpolate(logoRevealSpring, [0, 1], [0, 1]);
  const logoRotate = interpolate(logoRevealSpring, [0, 1], [-10, 0]);

  // Logo floating
  const logoFloat = Math.sin(frame * 0.04) * 6;

  // Logo ring animation
  const ringScale = spring({
    frame,
    fps,
    delay: 8,
    config: { damping: 20, stiffness: 80 },
  });
  const ringOpacity = interpolate(
    frame,
    [0.2 * fps, 0.6 * fps],
    [0, 0.6],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
  const ringRotation = frame * 0.3;

  // === TEXT ANIMATIONS ===
  const titleText = "TECHNOLOGY";
  // Subtitle with spring
  const subtitleSpring = spring({
    frame,
    fps,
    delay: Math.round(1.4 * fps),
    config: { damping: 12, stiffness: 80 },
  });
  const subtitleOpacity = interpolate(subtitleSpring, [0, 1], [0, 1]);
  const subtitleY = interpolate(subtitleSpring, [0, 1], [40, 0]);
  const subtitleScale = interpolate(subtitleSpring, [0, 1], [0.8, 1]);

  // Accent lines
  const lineWidth = interpolate(
    frame,
    [1 * fps, 1.8 * fps],
    [0, isVertical ? 300 : 400],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.quad),
    }
  );

  // Glow pulse
  const glowIntensity = 0.2 + 0.1 * Math.sin(frame * 0.06);

  // Bottom tagline with spring
  const taglineSpring = spring({
    frame,
    fps,
    delay: Math.round(2.5 * fps),
    config: { damping: 200 },
  });
  const taglineOpacity = interpolate(taglineSpring, [0, 1], [0, 1]);
  const taglineY = interpolate(taglineSpring, [0, 1], [20, 0]);

  // Scan line effect
  const scanY = (frame * 4) % height;

  // Hexagon decorative elements
  const hexOpacity = interpolate(
    frame,
    [0.5 * fps, 1 * fps],
    [0, 0.15],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const logoSize = isVertical ? 200 : 220;
  const titleFontSize = isVertical ? 38 : 42;
  const subtitleFontSize = isVertical ? 22 : 24;
  const ringSize1 = isVertical ? 300 : 320;
  const ringSize2 = isVertical ? 360 : 370;
  const ringSize3 = isVertical ? 420 : 430;

  // Vertical layout: logo at ~30%, text at ~55%, tagline at bottom
  const logoTop = isVertical ? "32%" : "40%";
  const contentTop = isVertical ? "55%" : undefined;

  return (
    <AbsoluteFill style={{ fontFamily }}>
      <AnimatedBackground showGrid={true} showImage={true} imageOpacity={0.12} />
      <FloatingParticles color="#9DFF20" count={20} />

      {/* Central glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: logoTop,
          transform: "translate(-50%, -50%)",
          width: isVertical ? 500 : 700,
          height: isVertical ? 500 : 700,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(157,255,32,0.25) 0%, rgba(157,255,32,0.05) 40%, transparent 70%)",
          opacity: glowIntensity,
          filter: "blur(40px)",
        }}
      />

      {/* Scan line */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: scanY,
          height: 2,
          background:
            "linear-gradient(90deg, transparent, rgba(157,255,32,0.15), transparent)",
        }}
      />

      {/* Rotating rings behind logo */}
      {[
        { size: ringSize1, border: "1.5px solid rgba(157,255,32,0.25)", rot: ringRotation, dash: false },
        { size: ringSize2, border: "1px dashed rgba(157,255,32,0.1)", rot: -ringRotation * 0.7, dash: true },
        { size: ringSize3, border: "1px solid rgba(157,255,32,0.06)", rot: ringRotation * 0.4, dash: false },
      ].map((ring, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            left: "50%",
            top: logoTop,
            transform: `translate(-50%, -50%) scale(${ringScale}) rotate(${ring.rot}deg)`,
            width: ring.size,
            height: ring.size,
            borderRadius: "50%",
            border: ring.border,
            opacity: ringOpacity * (1 - idx * 0.25),
          }}
        />
      ))}

      {/* Decorative corner hexagons */}
      {isVertical && (
        <>
          <div
            style={{
              position: "absolute",
              top: 80,
              right: 60,
              width: 60,
              height: 60,
              border: "1px solid rgba(157,255,32,0.1)",
              borderRadius: 8,
              transform: `rotate(${45 + frame * 0.15}deg)`,
              opacity: hexOpacity,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 200,
              left: 50,
              width: 40,
              height: 40,
              border: "1px solid rgba(157,255,32,0.08)",
              borderRadius: 6,
              transform: `rotate(${-30 + frame * 0.1}deg)`,
              opacity: hexOpacity,
            }}
          />
        </>
      )}

      {/* Logo - positioned absolutely for vertical */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: logoTop,
          transform: `translate(-50%, -50%) scale(${logoScale}) rotate(${logoRotate}deg) translateY(${logoFloat}px)`,
          opacity: logoOpacity,
        }}
      >
        <Img
          src={staticFile("logo.png")}
          style={{
            width: logoSize,
            height: logoSize,
            filter: `drop-shadow(0 0 40px rgba(157,255,32,0.5))`,
          }}
        />
      </div>

      {/* Text content area */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: isVertical ? contentTop : "60%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* TECHNOLOGY title - letter by letter */}
        <div
          style={{
            display: "flex",
            gap: isVertical ? 4 : 6,
            overflow: "hidden",
          }}
        >
          {titleText.split("").map((char, i) => {
            const charSpring = spring({
              frame,
              fps,
              delay: Math.round(0.9 * fps + i * 2),
              config: { damping: 15, stiffness: 120 },
            });
            const charY = interpolate(charSpring, [0, 1], [60, 0]);
            const charOpacity = interpolate(charSpring, [0, 1], [0, 1]);
            const charScale = interpolate(charSpring, [0, 0.5, 1], [0.5, 1.1, 1]);

            return (
              <div
                key={i}
                style={{
                  fontSize: titleFontSize,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  letterSpacing: isVertical ? 5 : 8,
                  transform: `translateY(${charY}px) scale(${charScale})`,
                  opacity: charOpacity,
                  textShadow: "0 0 20px rgba(157,255,32,0.3)",
                }}
              >
                {char}
              </div>
            );
          })}
        </div>

        {/* Accent line */}
        <div
          style={{
            width: lineWidth,
            height: 2,
            marginTop: 20,
            background:
              "linear-gradient(90deg, transparent, #9DFF20, transparent)",
            boxShadow: "0 0 20px rgba(157,255,32,0.4)",
          }}
        />

        {/* Subtitle */}
        <div
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleY}px) scale(${subtitleScale})`,
            fontSize: subtitleFontSize,
            fontWeight: 600,
            color: "#9DFF20",
            marginTop: 24,
            letterSpacing: isVertical ? 2 : 3,
            textAlign: "center",
            padding: isVertical ? "0 40px" : 0,
            textShadow: "0 0 30px rgba(157,255,32,0.4)",
          }}
        >
          Fábrica de Inteligencia Artificial
        </div>
      </div>

      {/* Bottom tagline */}
      <div
        style={{
          position: "absolute",
          bottom: isVertical ? 140 : 60,
          left: "50%",
          transform: `translateX(-50%) translateY(${taglineY}px)`,
          opacity: taglineOpacity,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: isVertical ? "0 40px" : 0,
          whiteSpace: "nowrap",
        }}
      >
        <div
          style={{
            width: 40,
            height: 1,
            backgroundColor: "rgba(157,255,32,0.4)",
            flexShrink: 0,
          }}
        />
        <div
          style={{
            fontSize: isVertical ? 13 : 14,
            fontWeight: 400,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: isVertical ? 2 : 4,
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Cerrando la brecha tecnológica en LATAM
        </div>
        <div
          style={{
            width: 40,
            height: 1,
            backgroundColor: "rgba(157,255,32,0.4)",
            flexShrink: 0,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
