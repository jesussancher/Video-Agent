import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Montserrat";
import type { Sequence } from "../types";
import type {
  LogoCurtainData,
  IntroData,
  ServicesData,
  ProductsData,
  MetricsData,
  ContactData,
  ReelHookData,
  ReelTextCardData,
  ReelCtaData,
} from "../types";
import {
  BrainIcon,
  ZapIcon,
  EyeIcon,
  FlaskIcon,
  CpuIcon,
  ShieldIcon,
  BotIcon,
  NetworkIcon,
  GlobeIcon,
  DatabaseIcon,
} from "../components/Icons";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["latin"],
});

const ICON_MAP: Record<string, React.FC<{ size?: number; color?: string }>> = {
  brain: BrainIcon,
  zap: ZapIcon,
  eye: EyeIcon,
  flask: FlaskIcon,
  cpu: CpuIcon,
  shield: ShieldIcon,
  bot: BotIcon,
  network: NetworkIcon,
  globe: GlobeIcon,
  database: DatabaseIcon,
};

function getIconComponent(iconName: string) {
  const key = String(iconName || "").toLowerCase().replace(/\s+/g, "-");
  return ICON_MAP[key] ?? null;
}

// ─── CurtainScene (logo-curtain + intro) ─────────────────────────────────────

function getCurtainData(sequence: Sequence): LogoCurtainData | IntroData {
  const d = sequence.sceneData as Record<string, unknown>;
  return {
    companyName: typeof d.companyName === "string" ? d.companyName : "",
    tagline: typeof d.tagline === "string" ? d.tagline : "",
    logoUrl: typeof d.logoUrl === "string" ? d.logoUrl : undefined,
    backgroundColor: typeof d.backgroundColor === "string" ? d.backgroundColor : "#050508",
    accentColor: typeof d.accentColor === "string" ? d.accentColor : "#9DFF20",
  };
}

export function CurtainScene({ sequence }: { sequence: Sequence }) {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const data = getCurtainData(sequence);
  const bg = data.backgroundColor ?? "#050508";
  const accent = data.accentColor ?? "#9DFF20";

  const titleSpring = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleScale = interpolate(titleSpring, [0, 1], [0.8, 1]);
  const taglineSpring = spring({
    frame,
    fps,
    delay: Math.round(0.5 * fps),
    config: { damping: 200 },
  });
  const taglineOpacity = interpolate(taglineSpring, [0, 1], [0, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: bg, fontFamily }}>
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${accent}08 1px, transparent 1px), linear-gradient(90deg, ${accent}08 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.5,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 48,
        }}
      >
        {data.logoUrl ? (
          <div style={{ marginBottom: 24, opacity: titleOpacity, transform: `scale(${titleScale})` }}>
            <Img
              src={data.logoUrl}
              style={{ width: Math.min(200, width * 0.2), height: "auto", objectFit: "contain" }}
            />
          </div>
        ) : null}
        {data.companyName ? (
          <h1
            style={{
              fontSize: height > width ? 42 : 56,
              fontWeight: 900,
              color: accent,
              margin: 0,
              opacity: titleOpacity,
              transform: `scale(${titleScale})`,
              letterSpacing: 2,
            }}
          >
            {data.companyName}
          </h1>
        ) : null}
        {data.tagline ? (
          <p
            style={{
              fontSize: height > width ? 20 : 26,
              color: "rgba(255,255,255,0.85)",
              marginTop: 16,
              marginBottom: 0,
              opacity: taglineOpacity,
              maxWidth: width * 0.7,
            }}
          >
            {data.tagline}
          </p>
        ) : null}
      </div>
    </AbsoluteFill>
  );
}

// ─── ListCardsScene (services + products) ────────────────────────────────────

function getListCardsData(sequence: Sequence): ServicesData | ProductsData {
  const d = sequence.sceneData as Record<string, unknown>;
  const items = Array.isArray(d.items) ? d.items : [];
  return {
    title: typeof d.title === "string" ? d.title : "",
    subtitle: typeof d.subtitle === "string" ? d.subtitle : undefined,
    items,
    backgroundColor: typeof d.backgroundColor === "string" ? d.backgroundColor : "#050508",
    accentColor: typeof d.accentColor === "string" ? d.accentColor : "#9DFF20",
  };
}

export function ListCardsScene({ sequence }: { sequence: Sequence }) {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const data = getListCardsData(sequence);
  const isProducts = sequence.sceneType === "products";
  const bg = data.backgroundColor ?? "#050508";
  const accent = data.accentColor ?? "#9DFF20";
  const isVertical = height > width;

  const titleSpring = spring({ frame, fps, config: { damping: 14, stiffness: 100 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const lineWidth = interpolate(
    frame,
    [0.3 * fps, 1 * fps],
    [0, 160],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.quad) }
  );

  const items = (data.items ?? []).slice(0, 6).filter((item) => item && typeof item === "object");
  const cols = isVertical ? 2 : 3;
  const cardGap = 20;

  return (
    <AbsoluteFill style={{ backgroundColor: bg, fontFamily }}>
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${accent}06 1px, transparent 1px), linear-gradient(90deg, ${accent}06 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          opacity: 0.6,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: isVertical ? 40 : 50,
          left: 48,
          right: 48,
        }}
      >
        {data.title ? (
          <div style={{ opacity: titleOpacity }}>
            <div
              style={{
                fontSize: isVertical ? 32 : 42,
                fontWeight: 700,
                color: accent,
                marginBottom: 8,
              }}
            >
              {data.title}
            </div>
            <div
              style={{
                width: lineWidth,
                height: 3,
                backgroundColor: accent,
                borderRadius: 2,
                opacity: 0.8,
              }}
            />
            {data.subtitle ? (
              <div
                style={{
                  fontSize: isVertical ? 16 : 18,
                  color: "rgba(255,255,255,0.7)",
                  marginTop: 8,
                }}
              >
                {data.subtitle}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>

      <div
        style={{
          position: "absolute",
          top: isVertical ? 180 : 160,
          left: 48,
          right: 48,
          bottom: 48,
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: cardGap,
          alignContent: "start",
        }}
      >
        {items.map((item: Record<string, unknown>, i: number) => {
          const cardSpring = spring({
            frame,
            fps,
            delay: 12 + i * 8,
            config: { damping: 20, stiffness: 90 },
          });
          const cardOpacity = interpolate(cardSpring, [0, 1], [0, 1]);
          const cardY = interpolate(cardSpring, [0, 1], [30, 0]);

          if (isProducts) {
            const name = String(item.name ?? "");
            const description = String(item.description ?? "");
            const price = item.price != null ? String(item.price) : "";
            const badge = item.badge != null ? String(item.badge) : "";
            const Icon = getIconComponent(String(item.icon ?? ""));
            return (
              <div
                key={i}
                style={{
                  opacity: cardOpacity,
                  transform: `translateY(${cardY}px)`,
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${accent}30`,
                  borderRadius: 12,
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                }}
              >
                {Icon ? (
                  <div style={{ color: accent }}>
                    <Icon size={36} color={accent} />
                  </div>
                ) : null}
                {name ? (
                  <div style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>{name}</div>
                ) : null}
                {description ? (
                  <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", flex: 1 }}>
                    {description}
                  </div>
                ) : null}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
                  {price ? <span style={{ fontSize: 16, fontWeight: 600, color: accent }}>{price}</span> : null}
                  {badge ? (
                    <span
                      style={{
                        fontSize: 11,
                        padding: "4px 8px",
                        background: `${accent}22`,
                        color: accent,
                        borderRadius: 6,
                      }}
                    >
                      {badge}
                    </span>
                  ) : null}
                </div>
              </div>
            );
          }

          const title = String(item.title ?? "");
          const description = String(item.description ?? "");
          const Icon = getIconComponent(String(item.icon ?? ""));
          return (
            <div
              key={i}
              style={{
                opacity: cardOpacity,
                transform: `translateY(${cardY}px)`,
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${accent}30`,
                borderRadius: 12,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {Icon ? (
                <div style={{ color: accent }}>
                  <Icon size={36} color={accent} />
                </div>
              ) : null}
              {title ? (
                <div style={{ fontSize: 18, fontWeight: 700, color: "#fff" }}>{title}</div>
              ) : null}
              {description ? (
                <div style={{ fontSize: 14, color: "rgba(255,255,255,0.8)" }}>{description}</div>
              ) : null}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

// ─── MetricsScene ───────────────────────────────────────────────────────────

function getMetricsData(sequence: Sequence): MetricsData {
  const d = sequence.sceneData as Record<string, unknown>;
  const items = Array.isArray(d.items) ? d.items : [];
  return {
    title: typeof d.title === "string" ? d.title : "",
    items,
    backgroundColor: typeof d.backgroundColor === "string" ? d.backgroundColor : "#050508",
    accentColor: typeof d.accentColor === "string" ? d.accentColor : "#9DFF20",
  };
}

export function MetricsScene({ sequence }: { sequence: Sequence }) {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const data = getMetricsData(sequence);
  const bg = data.backgroundColor ?? "#050508";
  const accent = data.accentColor ?? "#9DFF20";
  const isVertical = height > width;

  const titleSpring = spring({ frame, fps, config: { damping: 12, stiffness: 80 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const titleScale = interpolate(titleSpring, [0, 1], [0.8, 1]);

  const items = (data.items ?? []).slice(0, 4).filter((item) => item && typeof item === "object");
  const numberFontSize = isVertical ? 56 : 64;
  const labelFontSize = isVertical ? 16 : 18;

  return (
    <AbsoluteFill style={{ backgroundColor: bg, fontFamily }}>
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${accent}06 1px, transparent 1px), linear-gradient(90deg, ${accent}06 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          opacity: 0.5,
        }}
      />
      {data.title ? (
        <div
          style={{
            position: "absolute",
            top: isVertical ? 50 : 60,
            left: 48,
            right: 48,
            opacity: titleOpacity,
            transform: `scale(${titleScale})`,
            fontSize: isVertical ? 36 : 44,
            fontWeight: 700,
            color: accent,
          }}
        >
          {data.title}
        </div>
      ) : null}

      <div
        style={{
          position: "absolute",
          left: 48,
          right: 48,
          top: isVertical ? 160 : 140,
          bottom: 48,
          display: "grid",
          gridTemplateColumns: isVertical ? "1fr 1fr" : "repeat(4, 1fr)",
          gap: 32,
          alignContent: "center",
        }}
      >
        {items.map((item: Record<string, unknown>, i: number) => {
          const valueSpring = spring({
            frame,
            fps,
            delay: 15 + i * 10,
            config: { damping: 15, stiffness: 100 },
          });
          const valueOpacity = interpolate(valueSpring, [0, 1], [0, 1]);
          const valueScale = interpolate(valueSpring, [0, 1], [0.5, 1]);
          const value = String(item.value ?? "");
          const label = String(item.label ?? "");
          const color = typeof item.color === "string" ? item.color : accent;

          return (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                opacity: valueOpacity,
                transform: `scale(${valueScale})`,
              }}
            >
              <div
                style={{
                  fontSize: numberFontSize,
                  fontWeight: 900,
                  color,
                  lineHeight: 1.1,
                  marginBottom: 8,
                }}
              >
                {value}
              </div>
              <div
                style={{
                  fontSize: labelFontSize,
                  color: "rgba(255,255,255,0.8)",
                  textAlign: "center",
                }}
              >
                {label}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
}

// ─── ContactScene ───────────────────────────────────────────────────────────

function getContactData(sequence: Sequence): ContactData {
  const d = sequence.sceneData as Record<string, unknown>;
  return {
    companyName: typeof d.companyName === "string" ? d.companyName : "",
    email: typeof d.email === "string" ? d.email : undefined,
    phone: typeof d.phone === "string" ? d.phone : undefined,
    website: typeof d.website === "string" ? d.website : undefined,
    address: typeof d.address === "string" ? d.address : undefined,
    ctaText: typeof d.ctaText === "string" ? d.ctaText : undefined,
    logoUrl: typeof d.logoUrl === "string" ? d.logoUrl : undefined,
    backgroundColor: typeof d.backgroundColor === "string" ? d.backgroundColor : "#050508",
    accentColor: typeof d.accentColor === "string" ? d.accentColor : "#9DFF20",
  };
}

export function ContactScene({ sequence }: { sequence: Sequence }) {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const data = getContactData(sequence);
  const bg = data.backgroundColor ?? "#050508";
  const accent = data.accentColor ?? "#9DFF20";
  const isVertical = height > width;

  const logoSpring = spring({ frame, fps, config: { damping: 10, stiffness: 80 } });
  const logoOpacity = interpolate(logoSpring, [0, 1], [0, 1]);
  const logoScale = interpolate(logoSpring, [0, 1], [0.5, 1]);
  const ctaSpring = spring({
    frame,
    fps,
    delay: Math.round(0.5 * fps),
    config: { damping: 12, stiffness: 80 },
  });
  const ctaOpacity = interpolate(ctaSpring, [0, 1], [0, 1]);
  const lineWidth = interpolate(
    frame,
    [1 * fps, 1.8 * fps],
    [0, isVertical ? 250 : 300],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.quad) }
  );

  const contactItems: Array<{ label: string; value?: string }> = [];
  if (data.website) contactItems.push({ label: "Web", value: data.website });
  if (data.email) contactItems.push({ label: "Email", value: data.email });
  if (data.phone) contactItems.push({ label: "Teléfono", value: data.phone });
  if (data.address) contactItems.push({ label: "Dirección", value: data.address });

  return (
    <AbsoluteFill style={{ backgroundColor: bg, fontFamily }}>
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${accent}06 1px, transparent 1px), linear-gradient(90deg, ${accent}06 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          opacity: 0.5,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: 48,
        }}
      >
        {data.logoUrl ? (
          <div style={{ marginBottom: 20, opacity: logoOpacity, transform: `scale(${logoScale})` }}>
            <Img
              src={data.logoUrl}
              style={{ width: Math.min(140, width * 0.15), height: "auto", objectFit: "contain" }}
            />
          </div>
        ) : null}
        {data.companyName ? (
          <h1
            style={{
              fontSize: isVertical ? 36 : 48,
              fontWeight: 900,
              color: accent,
              margin: 0,
              opacity: logoOpacity,
              transform: `scale(${logoScale})`,
            }}
          >
            {data.companyName}
          </h1>
        ) : null}
        <div
          style={{
            width: lineWidth,
            height: 3,
            backgroundColor: accent,
            borderRadius: 2,
            marginTop: 16,
            opacity: 0.8,
          }}
        />
        <div
          style={{
            marginTop: 24,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            opacity: ctaOpacity,
          }}
        >
          {contactItems.map((row, i) => (
            <div key={i} style={{ fontSize: isVertical ? 16 : 18, color: "rgba(255,255,255,0.9)" }}>
              {row.value ? (
                <>
                  <span style={{ color: accent, marginRight: 8 }}>{row.label}:</span>
                  {row.value}
                </>
              ) : (
                row.label
              )}
            </div>
          ))}
        </div>
        {data.ctaText ? (
          <div
            style={{
              marginTop: 28,
              fontSize: isVertical ? 20 : 24,
              fontWeight: 600,
              color: accent,
              opacity: ctaOpacity,
            }}
          >
            {data.ctaText}
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
}

// ─── ReelHookScene ───────────────────────────────────────────────────────────

function getReelHookData(sequence: Sequence): ReelHookData {
  const d = sequence.sceneData as Record<string, unknown>;
  return {
    hookText: typeof d.hookText === "string" ? d.hookText : "",
    subtitle: typeof d.subtitle === "string" ? d.subtitle : undefined,
    backgroundColor: typeof d.backgroundColor === "string" ? d.backgroundColor : "#050508",
    accentColor: typeof d.accentColor === "string" ? d.accentColor : "#9DFF20",
  };
}

export function ReelHookScene({ sequence }: { sequence: Sequence }) {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const data = getReelHookData(sequence);
  const bg = data.backgroundColor ?? "#050508";
  const accent = data.accentColor ?? "#9DFF20";
  const isVertical = height > width;

  const hookSpring = spring({ frame, fps, config: { damping: 12, stiffness: 120 } });
  const hookOpacity = interpolate(hookSpring, [0, 1], [0, 1]);
  const hookScale = interpolate(hookSpring, [0, 1], [0.85, 1]);
  const subSpring = spring({
    frame,
    fps,
    delay: Math.round(0.3 * fps),
    config: { damping: 200 },
  });
  const subOpacity = interpolate(subSpring, [0, 1], [0, 1]);

  const hookSize = isVertical ? Math.min(48, width / 12) : Math.min(56, height / 12);
  const subSize = isVertical ? Math.min(22, width / 18) : Math.min(26, height / 18);

  return (
    <AbsoluteFill style={{ backgroundColor: bg, fontFamily }}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: isVertical ? width * 0.9 : 720,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: 24,
        }}
      >
        {data.hookText ? (
          <h1
            style={{
              fontSize: hookSize,
              fontWeight: 900,
              color: "#fff",
              margin: 0,
              lineHeight: 1.15,
              opacity: hookOpacity,
              transform: `scale(${hookScale})`,
              textShadow: `0 0 40px ${accent}40`,
            }}
          >
            {data.hookText}
          </h1>
        ) : null}
        {data.subtitle ? (
          <p
            style={{
              fontSize: subSize,
              color: accent,
              marginTop: 16,
              marginBottom: 0,
              opacity: subOpacity,
              fontWeight: 600,
            }}
          >
            {data.subtitle}
          </p>
        ) : null}
      </div>
    </AbsoluteFill>
  );
}

// ─── ReelTextCardScene ───────────────────────────────────────────────────────

function getReelTextCardData(sequence: Sequence): ReelTextCardData {
  const d = sequence.sceneData as Record<string, unknown>;
  const style = d.style === "quote" || d.style === "fact" || d.style === "tip" ? d.style : "quote";
  return {
    text: typeof d.text === "string" ? d.text : "",
    subtext: typeof d.subtext === "string" ? d.subtext : undefined,
    style,
    backgroundColor: typeof d.backgroundColor === "string" ? d.backgroundColor : "#050508",
    accentColor: typeof d.accentColor === "string" ? d.accentColor : "#9DFF20",
  };
}

export function ReelTextCardScene({ sequence }: { sequence: Sequence }) {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const data = getReelTextCardData(sequence);
  const bg = data.backgroundColor ?? "#050508";
  const accent = data.accentColor ?? "#9DFF20";
  const isVertical = height > width;

  const cardSpring = spring({ frame, fps, config: { damping: 18, stiffness: 100 } });
  const cardOpacity = interpolate(cardSpring, [0, 1], [0, 1]);
  const cardScale = interpolate(cardSpring, [0, 1], [0.92, 1]);
  const subSpring = spring({
    frame,
    fps,
    delay: Math.round(0.4 * fps),
    config: { damping: 200 },
  });
  const subOpacity = interpolate(subSpring, [0, 1], [0, 1]);

  const textSize = isVertical ? Math.min(32, width / 11) : Math.min(38, height / 14);
  const subSize = isVertical ? Math.min(18, width / 20) : Math.min(22, height / 22);
  const isQuote = data.style === "quote";
  const isTip = data.style === "tip";

  return (
    <AbsoluteFill style={{ backgroundColor: bg, fontFamily }}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -50%) scale(${cardScale})`,
          width: "88%",
          maxWidth: isVertical ? width * 0.88 : 640,
          opacity: cardOpacity,
          padding: isVertical ? 32 : 40,
          borderLeft: isQuote ? `4px solid ${accent}` : "none",
          borderRight: isTip ? `4px solid ${accent}` : "none",
          borderRadius: data.style === "fact" ? 16 : 0,
          background: data.style === "fact" ? `${accent}12` : "transparent",
          boxSizing: "border-box",
        }}
      >
        {data.text ? (
          <p
            style={{
              fontSize: textSize,
              fontWeight: isQuote ? 600 : 700,
              color: "#fff",
              margin: 0,
              lineHeight: 1.35,
              fontStyle: isQuote ? "italic" : "normal",
            }}
          >
            {data.text}
          </p>
        ) : null}
        {data.subtext ? (
          <p
            style={{
              fontSize: subSize,
              color: accent,
              marginTop: 16,
              marginBottom: 0,
              opacity: subOpacity,
              fontWeight: 500,
            }}
          >
            {data.subtext}
          </p>
        ) : null}
      </div>
    </AbsoluteFill>
  );
}

// ─── ReelCtaScene ────────────────────────────────────────────────────────────

function getReelCtaData(sequence: Sequence): ReelCtaData {
  const d = sequence.sceneData as Record<string, unknown>;
  return {
    title: typeof d.title === "string" ? d.title : undefined,
    ctaText: typeof d.ctaText === "string" ? d.ctaText : "",
    handle: typeof d.handle === "string" ? d.handle : undefined,
    link: typeof d.link === "string" ? d.link : undefined,
    backgroundColor: typeof d.backgroundColor === "string" ? d.backgroundColor : "#050508",
    accentColor: typeof d.accentColor === "string" ? d.accentColor : "#9DFF20",
  };
}

export function ReelCtaScene({ sequence }: { sequence: Sequence }) {
  const frame = useCurrentFrame();
  const { fps, width, height } = useVideoConfig();
  const data = getReelCtaData(sequence);
  const bg = data.backgroundColor ?? "#050508";
  const accent = data.accentColor ?? "#9DFF20";
  const isVertical = height > width;

  const titleSpring = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });
  const titleOpacity = interpolate(titleSpring, [0, 1], [0, 1]);
  const ctaSpring = spring({
    frame,
    fps,
    delay: Math.round(0.35 * fps),
    config: { damping: 14, stiffness: 120 },
  });
  const ctaOpacity = interpolate(ctaSpring, [0, 1], [0, 1]);
  const ctaScale = interpolate(ctaSpring, [0, 1], [0.9, 1]);
  const handleSpring = spring({
    frame,
    fps,
    delay: Math.round(0.6 * fps),
    config: { damping: 200 },
  });
  const handleOpacity = interpolate(handleSpring, [0, 1], [0, 1]);

  const titleSize = isVertical ? Math.min(36, width / 10) : 42;
  const ctaSize = isVertical ? Math.min(28, width / 13) : 32;
  const handleSize = isVertical ? Math.min(22, width / 16) : 26;

  return (
    <AbsoluteFill style={{ backgroundColor: bg, fontFamily }}>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: 32,
        }}
      >
        {data.title ? (
          <div
            style={{
              fontSize: titleSize,
              fontWeight: 800,
              color: accent,
              marginBottom: 16,
              opacity: titleOpacity,
            }}
          >
            {data.title}
          </div>
        ) : null}
        {data.ctaText ? (
          <div
            style={{
              fontSize: ctaSize,
              fontWeight: 700,
              color: "#fff",
              opacity: ctaOpacity,
              transform: `scale(${ctaScale})`,
              padding: "12px 28px",
              border: `2px solid ${accent}`,
              borderRadius: 999,
              background: `${accent}18`,
            }}
          >
            {data.ctaText}
          </div>
        ) : null}
        {data.handle ? (
          <div
            style={{
              fontSize: handleSize,
              color: accent,
              marginTop: 20,
              opacity: handleOpacity,
              fontWeight: 600,
            }}
          >
            {data.handle}
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
}
