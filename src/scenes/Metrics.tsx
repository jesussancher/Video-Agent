import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Montserrat";
import { AnimatedBackground } from "../components/Background";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

const metrics = [
  {
    value: 45,
    prefix: "+",
    suffix: "%",
    label: "Ventas",
    sublabel: "Incremento promedio",
    color: "#9DFF20",
  },
  {
    value: 30,
    prefix: "+",
    suffix: "%",
    label: "Recaudo",
    sublabel: "Mejora en ingresos",
    color: "#7ACC1A",
  },
  {
    value: 69,
    prefix: "+",
    suffix: "%",
    label: "Conversión",
    sublabel: "Optimización de leads",
    color: "#9DFF20",
  },
  {
    value: 600,
    prefix: "",
    suffix: "%",
    label: "Productividad",
    sublabel: "Con agentes distribuidos",
    color: "#7ACC1A",
  },
];

export const Metrics: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const isVertical = height > width;

  // Title
  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 80 },
  });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleScale = interpolate(titleSpring, [0, 1], [0.8, 1]);

  // Bottom tagline
  const taglineSpring = spring({
    frame,
    fps,
    delay: Math.round(3 * fps),
    config: { damping: 200 },
  });
  const taglineOpacity = interpolate(taglineSpring, [0, 1], [0, 1]);

  const numberFontSize = isVertical ? 64 : 72;
  const titleFontSize = isVertical ? 40 : 48;

  // For vertical: spread metrics across full height
  const headerHeight = isVertical ? 200 : 160;

  return (
    <AbsoluteFill style={{ fontFamily }}>
      <AnimatedBackground showGrid={true} showImage={true} imageOpacity={0.05} />

      {/* Horizontal decorative lines */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(157,255,32,0.06), transparent)",
        }}
      />

      {/* Title section - positioned at top */}
      <div
        style={{
          position: "absolute",
          top: isVertical ? 60 : 50,
          left: 0,
          right: 0,
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: isVertical ? 13 : 15,
            fontWeight: 600,
            color: "#9DFF20",
            letterSpacing: 8,
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          Resultados reales
        </div>
        <div
          style={{
            fontSize: titleFontSize,
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: 1,
          }}
        >
          Impacto en tu Negocio
        </div>
      </div>

      {/* Metrics - spread to fill vertical space */}
      <div
        style={{
          position: "absolute",
          top: headerHeight,
          left: isVertical ? 40 : 60,
          right: isVertical ? 40 : 60,
          bottom: isVertical ? 100 : 80,
          display: "flex",
          flexWrap: "wrap",
          gap: isVertical ? 20 : 40,
          alignContent: isVertical ? "space-between" : "center",
          justifyContent: "center",
        }}
      >
        {metrics.map((metric, i) => {
          const delay = Math.round(0.5 * fps + i * 0.25 * fps);

          // Card entrance with bounce
          const cardSpring = spring({
            frame,
            fps,
            delay,
            config: { damping: 10, stiffness: 80, mass: 0.8 },
          });
          const cardScale = interpolate(cardSpring, [0, 1], [0.3, 1]);
          const cardY = interpolate(cardSpring, [0, 1], [100, 0]);
          const cardOpacity = interpolate(cardSpring, [0, 1], [0, 1]);
          const cardRotate = interpolate(cardSpring, [0, 1], [10, 0]);

          // Counting animation
          const countProgress = interpolate(
            frame,
            [delay, delay + 1.5 * fps],
            [0, 1],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }
          );
          const displayValue = Math.round(metric.value * countProgress);

          // Progress bar animation
          const barProgress = interpolate(
            frame,
            [delay + 0.3 * fps, delay + 1.8 * fps],
            [0, 1],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.quad),
            }
          );

          // Glow pulse
          const glowIntensity =
            0.3 + 0.15 * Math.sin(frame * 0.05 + i * 1.3);

          // Ring animation around number
          const ringProgress = interpolate(
            frame,
            [delay + 0.5 * fps, delay + 2 * fps],
            [0, 360],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.quad) }
          );

          const cardWidth = isVertical ? 460 : 340;
          const cardPadding = isVertical ? "36px 28px" : "40px 30px";

          return (
            <div
              key={i}
              style={{
                textAlign: "center",
                transform: `scale(${cardScale}) translateY(${cardY}px) rotate(${cardRotate}deg)`,
                opacity: cardOpacity,
                width: cardWidth,
                padding: cardPadding,
                borderRadius: 20,
                backgroundColor: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(157,255,32,0.08)",
                position: "relative",
                boxSizing: "border-box",
              }}
            >
              {/* Circular progress indicator */}
              <div
                style={{
                  position: "absolute",
                  top: 12,
                  right: 16,
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: `conic-gradient(${metric.color}44 ${ringProgress}deg, transparent ${ringProgress}deg)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundColor: "rgba(5,5,8,0.9)",
                  }}
                />
              </div>

              {/* Number */}
              <div
                style={{
                  fontSize: numberFontSize,
                  fontWeight: 900,
                  color: metric.color,
                  lineHeight: 1,
                  textShadow: `0 0 ${40 * glowIntensity}px ${metric.color}66`,
                }}
              >
                {metric.prefix}
                {displayValue}
                {metric.suffix}
              </div>

              {/* Label */}
              <div
                style={{
                  fontSize: isVertical ? 18 : 20,
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginTop: 14,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                {metric.label}
              </div>

              {/* Progress bar */}
              <div
                style={{
                  width: "100%",
                  height: 3,
                  backgroundColor: "rgba(255,255,255,0.06)",
                  borderRadius: 2,
                  marginTop: 16,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${barProgress * 100}%`,
                    height: "100%",
                    backgroundColor: metric.color,
                    borderRadius: 2,
                    boxShadow: `0 0 10px ${metric.color}66`,
                  }}
                />
              </div>

              {/* Sublabel */}
              <div
                style={{
                  fontSize: isVertical ? 12 : 12,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.4)",
                  marginTop: 12,
                  letterSpacing: 1,
                }}
              >
                {metric.sublabel}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom tagline */}
      <div
        style={{
          position: "absolute",
          bottom: isVertical ? 50 : 30,
          left: 0,
          right: 0,
          opacity: taglineOpacity,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          padding: isVertical ? "0 30px" : 0,
        }}
      >
        <div
          style={{
            width: 30,
            height: 1,
            backgroundColor: "rgba(157,255,32,0.3)",
            flexShrink: 0,
          }}
        />
        <div
          style={{
            fontSize: isVertical ? 12 : 14,
            fontWeight: 400,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: isVertical ? 2 : 3,
            textTransform: "uppercase",
            textAlign: "center",
          }}
        >
          Presencia en 8 países · Operaciones desde Miami, FL
        </div>
        <div
          style={{
            width: 30,
            height: 1,
            backgroundColor: "rgba(157,255,32,0.3)",
            flexShrink: 0,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
