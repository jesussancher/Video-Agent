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
import {
  BrainIcon,
  ZapIcon,
  EyeIcon,
  FlaskIcon,
  CpuIcon,
  ShieldIcon,
} from "../components/Icons";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

const services = [
  {
    Icon: BrainIcon,
    title: "IA Predictiva",
    desc: "Analítica avanzada para optimización de flujos de trabajo",
  },
  {
    Icon: ZapIcon,
    title: "Automatización RPA",
    desc: "Algoritmos robóticos que reducen costos y errores",
  },
  {
    Icon: EyeIcon,
    title: "Computer Vision",
    desc: "Deep Learning y visión artificial de última generación",
  },
  {
    Icon: FlaskIcon,
    title: "Datos Sintéticos",
    desc: "Generación avanzada con IA para Machine Learning",
  },
  {
    Icon: CpuIcon,
    title: "Microchips IA",
    desc: "Hardware evolutivo con modelos de IA embebidos",
  },
  {
    Icon: ShieldIcon,
    title: "Consultoría IP",
    desc: "Patentes, propiedad intelectual e innovación",
  },
];

export const Services: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const isVertical = height > width;

  // Title animation
  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });
  const titleX = interpolate(titleSpring, [0, 1], [-300, 0]);
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);

  // Decorative line
  const lineWidth = interpolate(
    frame,
    [0.3 * fps, 1 * fps],
    [0, 160],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.quad),
    }
  );

  // Subtitle
  const subtitleSpring = spring({
    frame,
    fps,
    delay: Math.round(0.4 * fps),
    config: { damping: 200 },
  });
  const subtitleOpacity = interpolate(subtitleSpring, [0, 1], [0, 1]);

  const cols = isVertical ? 2 : 3;
  const cardWidth = isVertical ? 460 : 560;
  const titleFontSize = isVertical ? 42 : 54;
  const cardGap = isVertical ? 20 : 20;

  // For vertical: use absolute positioning to fill full height
  const headerHeight = isVertical ? 220 : 180;
  const availableHeight = isVertical ? height - headerHeight - 80 : undefined;
  const rowHeight = availableHeight ? (availableHeight - cardGap * 2) / 3 : undefined;

  return (
    <AbsoluteFill style={{ fontFamily }}>
      <AnimatedBackground showGrid={true} showImage={true} imageOpacity={0.08} />

      {/* Section header - positioned at top */}
      <div
        style={{
          position: "absolute",
          top: isVertical ? 50 : 70,
          left: isVertical ? 50 : 70,
          right: isVertical ? 50 : 70,
        }}
      >
        <div
          style={{
            transform: `translateX(${titleX}px)`,
            opacity: titleOpacity,
          }}
        >
          <div
            style={{
              fontSize: isVertical ? 13 : 15,
              fontWeight: 600,
              color: "#9DFF20",
              letterSpacing: 6,
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Lo que hacemos
          </div>
          <div
            style={{
              fontSize: titleFontSize,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: 1,
              lineHeight: 1.1,
            }}
          >
            Nuestros Servicios
          </div>
          <div
            style={{
              width: lineWidth,
              height: 3,
              marginTop: 12,
              background:
                "linear-gradient(90deg, #9DFF20, rgba(157,255,32,0.2))",
              borderRadius: 2,
            }}
          />
          <div
            style={{
              opacity: subtitleOpacity,
              fontSize: isVertical ? 14 : 16,
              fontWeight: 400,
              color: "rgba(255,255,255,0.5)",
              marginTop: 12,
              letterSpacing: 1,
            }}
          >
            Soluciones de IA de extremo a extremo para empresas en LATAM
          </div>
        </div>
      </div>

      {/* Services grid - fills remaining space */}
      <div
        style={{
          position: "absolute",
          top: headerHeight,
          left: isVertical ? 40 : 70,
          right: isVertical ? 40 : 70,
          bottom: isVertical ? 40 : 40,
          display: "flex",
          flexWrap: "wrap",
          gap: cardGap,
          alignContent: isVertical ? "space-between" : "flex-start",
          paddingTop: isVertical ? 10 : 40,
        }}
      >
        {services.map((service, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          const delay = Math.round(0.5 * fps + (row * cols + col) * 0.12 * fps);

          const cardSpring = spring({
            frame,
            fps,
            delay,
            config: { damping: 12, stiffness: 80 },
          });
          const cardScale = interpolate(cardSpring, [0, 1], [0.6, 1]);
          const cardOpacity = interpolate(cardSpring, [0, 1], [0, 1]);
          const cardY = interpolate(cardSpring, [0, 1], [60, 0]);
          const cardRotateX = interpolate(cardSpring, [0, 1], [15, 0]);

          // Icon glow animation
          const iconGlow =
            0.3 + 0.2 * Math.sin(frame * 0.05 + i * 1.2);

          // Hover-like highlight on card border
          const borderGlow = interpolate(
            Math.sin(frame * 0.04 + i * 0.8),
            [-1, 1],
            [0.08, 0.25]
          );

          // Progress bar that fills on entry
          const barProgress = interpolate(
            frame,
            [delay + 0.3 * fps, delay + 1.2 * fps],
            [0, 1],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.quad) }
          );

          return (
            <div
              key={i}
              style={{
                width: cardWidth,
                height: isVertical && rowHeight ? rowHeight - 4 : undefined,
                padding: isVertical ? "18px 22px" : "26px 28px",
                backgroundColor: `rgba(157, 255, 32, 0.03)`,
                border: `1px solid rgba(157, 255, 32, ${borderGlow})`,
                borderRadius: 16,
                transform: `scale(${cardScale}) translateY(${cardY}px) perspective(800px) rotateX(${cardRotateX}deg)`,
                opacity: cardOpacity,
                display: "flex",
                alignItems: "center",
                gap: isVertical ? 16 : 20,
                backdropFilter: "blur(10px)",
                boxSizing: "border-box",
              }}
            >
              {/* Icon container */}
              <div
                style={{
                  width: isVertical ? 50 : 56,
                  height: isVertical ? 50 : 56,
                  borderRadius: 12,
                  backgroundColor: "rgba(157,255,32,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: `0 0 ${20 * iconGlow}px rgba(157,255,32,${iconGlow * 0.3})`,
                }}
              >
                <service.Icon size={isVertical ? 26 : 30} color="#9DFF20" />
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: isVertical ? 18 : 20,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: 4,
                  }}
                >
                  {service.title}
                </div>
                <div
                  style={{
                    fontSize: isVertical ? 12 : 14,
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.4,
                  }}
                >
                  {service.desc}
                </div>
                {/* Animated progress bar */}
                <div
                  style={{
                    width: "100%",
                    height: 2,
                    backgroundColor: "rgba(255,255,255,0.06)",
                    borderRadius: 1,
                    marginTop: 10,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${barProgress * 100}%`,
                      height: "100%",
                      backgroundColor: "#9DFF20",
                      borderRadius: 1,
                      boxShadow: "0 0 8px rgba(157,255,32,0.4)",
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
