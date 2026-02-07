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
import { FloatingParticles } from "../components/Particles";
import {
  BotIcon,
  NetworkIcon,
  GlobeIcon,
  DatabaseIcon,
} from "../components/Icons";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

const products = [
  {
    Icon: BotIcon,
    name: "NexAI",
    desc: "Plataforma no-code para crear agentes inteligentes humanizados en minutos",
    tags: ["No-Code", "Agentes IA", "Humanizados"],
    accent: "#9DFF20",
  },
  {
    Icon: NetworkIcon,
    name: "MASIVE",
    desc: "Smart Funnels multicanal: WhatsApp, Telegram, Facebook, Instagram, X",
    tags: ["Multicanal", "Smart Funnels", "Social"],
    accent: "#7ACC1A",
  },
  {
    Icon: GlobeIcon,
    name: "CityWise AI",
    desc: "Mapeo geográfico en tiempo real con conversaciones inteligentes de datos",
    tags: ["Geolocalización", "Real-Time", "Data"],
    accent: "#9DFF20",
  },
  {
    Icon: DatabaseIcon,
    name: "Data Engine",
    desc: "Web scraping inteligente y analítica avanzada, compatible GDPR",
    tags: ["Scraping", "Analytics", "GDPR"],
    accent: "#7ACC1A",
  },
];

export const Products: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const isVertical = height > width;

  // Title animation
  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleY = interpolate(titleSpring, [0, 1], [30, 0]);

  // Line animation
  const lineWidth = interpolate(
    frame,
    [0.3 * fps, 1 * fps],
    [0, 140],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.quad),
    }
  );

  const cols = isVertical ? 1 : 2;
  const cardWidth = isVertical ? 940 : 845;

  // Vertical: header + 4 cards spread across full height
  const headerHeight = isVertical ? 160 : 140;
  const availableHeight = isVertical ? height - headerHeight - 80 : undefined;
  const cardSpacing = availableHeight ? (availableHeight - 4 * 130) / 3 : undefined;

  return (
    <AbsoluteFill style={{ fontFamily }}>
      <AnimatedBackground showGrid={true} showImage={true} imageOpacity={0.06} />
      <FloatingParticles color="#9DFF20" count={12} />

      {/* Section header */}
      <div
        style={{
          position: "absolute",
          top: isVertical ? 50 : 60,
          left: isVertical ? 50 : 80,
          right: isVertical ? 50 : 80,
        }}
      >
        <div
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
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
            Plataformas
          </div>
          <div
            style={{
              fontSize: isVertical ? 44 : 50,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: 1,
            }}
          >
            Productos Estrella
          </div>
          <div
            style={{
              width: lineWidth,
              height: 3,
              marginTop: 10,
              background:
                "linear-gradient(90deg, #9DFF20, rgba(157,255,32,0.2))",
              borderRadius: 2,
            }}
          />
        </div>
      </div>

      {/* Product cards - spread vertically */}
      <div
        style={{
          position: "absolute",
          top: headerHeight,
          left: isVertical ? 40 : 80,
          right: isVertical ? 40 : 80,
          bottom: isVertical ? 40 : 40,
          display: "flex",
          flexDirection: isVertical ? "column" : "row",
          flexWrap: isVertical ? "nowrap" : "wrap",
          gap: isVertical ? (cardSpacing ?? 20) : 24,
          justifyContent: isVertical ? "space-between" : "flex-start",
          alignItems: isVertical ? "center" : "flex-start",
          paddingTop: isVertical ? 10 : 40,
        }}
      >
        {products.map((product, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          const delay = Math.round(0.5 * fps + (row * cols + col) * 0.2 * fps);

          const cardSpring = spring({
            frame,
            fps,
            delay,
            config: { damping: 12, stiffness: 80 },
          });
          const cardX = isVertical
            ? interpolate(cardSpring, [0, 1], [i % 2 === 0 ? -500 : 500, 0])
            : interpolate(
                cardSpring,
                [0, 1],
                [col === 0 ? -400 : 400, 0]
              );
          const cardOpacity = interpolate(cardSpring, [0, 1], [0, 1]);
          const cardRotateY = isVertical
            ? interpolate(cardSpring, [0, 1], [i % 2 === 0 ? -20 : 20, 0])
            : 0;

          // Animated accent bar
          const barWidth = interpolate(
            cardSpring,
            [0, 1],
            [0, 4]
          );

          // Tag stagger
          const tagDelay = delay + Math.round(0.4 * fps);

          // Subtle pulse on icon
          const iconPulse =
            1 + 0.05 * Math.sin(frame * 0.06 + i * 1.5);

          // Shimmer effect
          const shimmerX = interpolate(
            frame,
            [delay + fps, delay + 2 * fps],
            [-100, 200],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          );

          return (
            <div
              key={i}
              style={{
                width: cardWidth,
                transform: `translateX(${cardX}px) perspective(1000px) rotateY(${cardRotateY}deg)`,
                opacity: cardOpacity,
                display: "flex",
                alignItems: "stretch",
                borderRadius: 16,
                overflow: "hidden",
                backgroundColor: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(157,255,32,0.1)",
                position: "relative",
              }}
            >
              {/* Shimmer overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: shimmerX,
                  width: 60,
                  height: "100%",
                  background: "linear-gradient(90deg, transparent, rgba(157,255,32,0.06), transparent)",
                  transform: "skewX(-15deg)",
                  pointerEvents: "none",
                }}
              />

              {/* Left accent bar */}
              <div
                style={{
                  width: barWidth,
                  backgroundColor: product.accent,
                  boxShadow: `0 0 20px ${product.accent}55`,
                  flexShrink: 0,
                }}
              />

              {/* Content */}
              <div
                style={{
                  padding: isVertical ? "30px 24px" : "24px 28px",
                  display: "flex",
                  alignItems: "center",
                  gap: isVertical ? 20 : 24,
                  flex: 1,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: isVertical ? 64 : 64,
                    height: isVertical ? 64 : 64,
                    borderRadius: 14,
                    backgroundColor: `${product.accent}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transform: `scale(${iconPulse})`,
                    border: `1px solid ${product.accent}30`,
                  }}
                >
                  <product.Icon size={isVertical ? 32 : 32} color={product.accent} />
                </div>

                <div style={{ flex: 1 }}>
                  {/* Product name */}
                  <div
                    style={{
                      fontSize: isVertical ? 24 : 26,
                      fontWeight: 900,
                      color: product.accent,
                      letterSpacing: 1,
                      marginBottom: 4,
                    }}
                  >
                    {product.name}
                  </div>

                  {/* Description */}
                  <div
                    style={{
                      fontSize: isVertical ? 13 : 14,
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.4,
                      marginBottom: 10,
                    }}
                  >
                    {product.desc}
                  </div>

                  {/* Tags */}
                  <div style={{ display: "flex", gap: 8 }}>
                    {product.tags.map((tag, j) => {
                      const tagSpring = spring({
                        frame,
                        fps,
                        delay: tagDelay + j * 4,
                        config: { damping: 200 },
                      });
                      const tagOpacity = interpolate(
                        tagSpring,
                        [0, 1],
                        [0, 1]
                      );
                      const tagScale = interpolate(
                        tagSpring,
                        [0, 1],
                        [0.5, 1]
                      );

                      return (
                        <div
                          key={j}
                          style={{
                            opacity: tagOpacity,
                            transform: `scale(${tagScale})`,
                            fontSize: isVertical ? 10 : 11,
                            fontWeight: 600,
                            color: product.accent,
                            padding: "4px 10px",
                            borderRadius: 20,
                            backgroundColor: `${product.accent}12`,
                            border: `1px solid ${product.accent}30`,
                            letterSpacing: 0.5,
                          }}
                        >
                          {tag}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
