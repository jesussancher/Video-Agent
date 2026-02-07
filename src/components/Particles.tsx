import { AbsoluteFill, useCurrentFrame } from "remotion";

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  phase: number;
  opacity: number;
}

// Deterministic particles (no random at render time)
const PARTICLES: Particle[] = Array.from({ length: 30 }, (_, i) => ({
  x: ((i * 73 + 17) % 100),
  y: ((i * 41 + 29) % 100),
  size: 1.5 + (i % 4) * 0.8,
  speed: 0.3 + (i % 5) * 0.15,
  phase: (i * 2.1) % (Math.PI * 2),
  opacity: 0.15 + (i % 3) * 0.12,
}));

export const FloatingParticles: React.FC<{
  color?: string;
  count?: number;
}> = ({ color = "#9DFF20", count = 30 }) => {
  const frame = useCurrentFrame();
  const particles = PARTICLES.slice(0, count);

  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      {particles.map((p, i) => {
        const x = p.x + Math.sin(frame * 0.02 * p.speed + p.phase) * 3;
        const y = p.y + Math.cos(frame * 0.015 * p.speed + p.phase) * 4;
        const currentOpacity =
          p.opacity * (0.5 + 0.5 * Math.sin(frame * 0.04 + p.phase));

        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              backgroundColor: color,
              opacity: currentOpacity,
              boxShadow: `0 0 ${p.size * 4}px ${color}`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
