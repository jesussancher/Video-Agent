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

const contactItems = [
  { icon: "🌐", label: "lait.com.co" },
  { icon: "✉️", label: "contacto@lait.com.co" },
  { icon: "📱", label: "+57 (350) 219 0068" },
];

export const Contact: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const isVertical = height > width;

  // Logo entrance with bounce
  const logoSpring = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 80, mass: 0.8 },
  });
  const logoScale = interpolate(logoSpring, [0, 1], [0.2, 1]);
  const logoOpacity = interpolate(logoSpring, [0, 1], [0, 1]);
  const logoRotate = interpolate(logoSpring, [0, 1], [180, 0]);

  // Logo floating
  const logoFloat = Math.sin(frame * 0.04) * 5;

  // CTA text
  const ctaSpring = spring({
    frame,
    fps,
    delay: Math.round(0.5 * fps),
    config: { damping: 12, stiffness: 80 },
  });
  const ctaY = interpolate(ctaSpring, [0, 1], [60, 0]);
  const ctaOpacity = interpolate(ctaSpring, [0, 1], [0, 1]);
  const ctaScale = interpolate(ctaSpring, [0, 1], [0.7, 1]);

  // Subtitle
  const subSpring = spring({
    frame,
    fps,
    delay: Math.round(0.8 * fps),
    config: { damping: 200 },
  });
  const subOpacity = interpolate(subSpring, [0, 1], [0, 1]);

  // Accent line
  const lineWidth = interpolate(
    frame,
    [1 * fps, 1.8 * fps],
    [0, isVertical ? 250 : 300],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.quad),
    }
  );

  // Pulsing glow
  const pulsePhase = 0.25 + 0.12 * Math.sin(frame * 0.07);

  // Ring animation
  const ringRotation = frame * 0.2;
  const ringOpacity = interpolate(
    frame,
    [0.3 * fps, 0.8 * fps],
    [0, 0.4],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Location
  const locationSpring = spring({
    frame,
    fps,
    delay: Math.round(2.2 * fps),
    config: { damping: 200 },
  });
  const locationOpacity = interpolate(locationSpring, [0, 1], [0, 1]);

  const logoSize = isVertical ? 160 : 160;
  const ctaFontSize = isVertical ? 38 : 44;

  // Vertical layout positions
  const logoTop = isVertical ? "25%" : "35%";
  const contentTop = isVertical ? "48%" : undefined;

  return (
    <AbsoluteFill style={{ fontFamily }}>
      <AnimatedBackground showGrid={false} showImage={true} imageOpacity={0.1} />
      <FloatingParticles color="#9DFF20" count={15} />

      {/* Central glow */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: logoTop,
          transform: "translate(-50%, -50%)",
          width: isVertical ? 450 : 600,
          height: isVertical ? 450 : 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(157,255,32,0.2) 0%, transparent 70%)",
          opacity: pulsePhase,
          filter: "blur(60px)",
        }}
      />

      {/* Decorative rings */}
      {[
        { size: isVertical ? 260 : 280, border: "1px solid rgba(157,255,32,0.15)", rot: ringRotation },
        { size: isVertical ? 320 : 340, border: "1px dashed rgba(157,255,32,0.08)", rot: -ringRotation * 0.6 },
        { size: isVertical ? 380 : 400, border: "1px solid rgba(157,255,32,0.04)", rot: ringRotation * 0.3 },
      ].map((ring, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            left: "50%",
            top: logoTop,
            transform: `translate(-50%, -50%) rotate(${ring.rot}deg)`,
            width: ring.size,
            height: ring.size,
            borderRadius: "50%",
            border: ring.border,
            opacity: ringOpacity * (1 - idx * 0.2),
          }}
        />
      ))}

      {/* Logo */}
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
            filter: "drop-shadow(0 0 30px rgba(157,255,32,0.4))",
          }}
        />
      </div>

      {/* Content area */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: isVertical ? contentTop : "58%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: isVertical ? "90%" : "auto",
        }}
      >
        {/* CTA */}
        <div
          style={{
            opacity: ctaOpacity,
            transform: `translateY(${ctaY}px) scale(${ctaScale})`,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: ctaFontSize,
              fontWeight: 900,
              color: "#FFFFFF",
              letterSpacing: 2,
            }}
          >
            Apostamos a{" "}
            <span
              style={{
                color: "#9DFF20",
                textShadow: "0 0 30px rgba(157,255,32,0.5)",
              }}
            >
              LATAM
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <div
          style={{
            opacity: subOpacity,
            fontSize: isVertical ? 17 : 20,
            fontWeight: 400,
            color: "rgba(255,255,255,0.6)",
            marginTop: 10,
            letterSpacing: 1,
            textAlign: "center",
          }}
        >
          Para cerrar la brecha tecnológica del continente
        </div>

        {/* Accent line */}
        <div
          style={{
            width: lineWidth,
            height: 2,
            marginTop: 30,
            background:
              "linear-gradient(90deg, transparent, #9DFF20, transparent)",
            boxShadow: "0 0 15px rgba(157,255,32,0.3)",
          }}
        />

        {/* Contact info */}
        <div
          style={{
            display: "flex",
            flexDirection: isVertical ? "column" : "row",
            gap: isVertical ? 16 : 50,
            marginTop: 36,
            alignItems: "center",
          }}
        >
          {contactItems.map((item, i) => {
            const itemSpring = spring({
              frame,
              fps,
              delay: Math.round(1.5 * fps + i * 0.15 * fps),
              config: { damping: 12, stiffness: 80 },
            });
            const itemScale = interpolate(itemSpring, [0, 1], [0.5, 1]);
            const itemOpacity = interpolate(itemSpring, [0, 1], [0, 1]);
            const itemX = interpolate(
              itemSpring,
              [0, 1],
              [isVertical ? (i % 2 === 0 ? -200 : 200) : 0, 0]
            );

            return (
              <div
                key={i}
                style={{
                  transform: `scale(${itemScale}) translateX(${itemX}px)`,
                  opacity: itemOpacity,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: isVertical ? "12px 30px" : "10px 20px",
                  borderRadius: 30,
                  backgroundColor: "rgba(157,255,32,0.05)",
                  border: "1px solid rgba(157,255,32,0.12)",
                  minWidth: isVertical ? 300 : undefined,
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: 16 }}>{item.icon}</span>
                <span
                  style={{
                    fontSize: isVertical ? 15 : 15,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.85)",
                    letterSpacing: 0.5,
                  }}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Location */}
      <div
        style={{
          position: "absolute",
          bottom: isVertical ? 80 : 50,
          left: 0,
          right: 0,
          opacity: locationOpacity,
          textAlign: "center",
          padding: isVertical ? "0 40px" : 0,
        }}
      >
        <div
          style={{
            fontSize: isVertical ? 13 : 14,
            fontWeight: 600,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: isVertical ? 2 : 3,
            textTransform: "uppercase",
          }}
        >
          800 Brickell Ave, Miami FL · Presencia en 8 países
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 4,
          background:
            "linear-gradient(90deg, transparent, #9DFF20, transparent)",
          opacity: interpolate(
            frame,
            [3 * fps, 3.5 * fps],
            [0, 0.6],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
          ),
        }}
      />
    </AbsoluteFill>
  );
};
