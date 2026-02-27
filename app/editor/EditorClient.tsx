"use client";

import { Player } from "@remotion/player";
import { MyComposition } from "../../src/Composition";
import LogoutButton from "../LogoutButton";

// 6 scenes: 130 + 150 + 180 + 150 + 150 + 150 = 910
// 5 transitions: 5 × 25 = 125
// Total: 910 - 125 = 785 frames (~26.2 seconds)
const TOTAL_DURATION = 785;
const FPS = 30;

interface User {
  uid: string;
  email: string;
  name: string;
  picture: string;
}

export default function EditorClient({ user }: { user: User }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#0a0a0f",
        overflow: "hidden",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Top navbar */}
      <header
        style={{
          height: 52,
          backgroundColor: "#111118",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          flexShrink: 0,
          zIndex: 10,
        }}
      >
        {/* Left: logo + project name */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "#9DFF20",
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Lait
          </span>
          <div
            style={{
              width: 1,
              height: 18,
              backgroundColor: "rgba(255,255,255,0.1)",
            }}
          />
          <span
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: 0.5,
            }}
          >
            Video Agent
          </span>
          <div
            style={{
              padding: "2px 8px",
              borderRadius: 4,
              backgroundColor: "rgba(157,255,32,0.1)",
              border: "1px solid rgba(157,255,32,0.2)",
            }}
          >
            <span style={{ fontSize: 10, color: "#9DFF20", letterSpacing: 1, textTransform: "uppercase" }}>
              Editor
            </span>
          </div>
        </div>

        {/* Right: user + logout */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {user.picture && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.picture}
              alt={user.name}
              width={28}
              height={28}
              style={{
                borderRadius: "50%",
                border: "1.5px solid rgba(157,255,32,0.3)",
              }}
            />
          )}
          <div style={{ lineHeight: 1.3 }}>
            <p style={{ fontSize: 12, color: "#ffffff", margin: 0 }}>{user.name}</p>
            <p style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", margin: 0 }}>
              {user.email}
            </p>
          </div>
          <LogoutButton />
        </div>
      </header>

      {/* Main editor area */}
      <div
        style={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
        }}
      >
        {/* Left sidebar */}
        <aside
          style={{
            width: 200,
            backgroundColor: "#0e0e16",
            borderRight: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              padding: "12px 14px",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <p
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.3)",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Escenas
            </p>
          </div>
          <div style={{ padding: "8px 8px", display: "flex", flexDirection: "column", gap: 4 }}>
            {SCENES.map((scene, i) => (
              <div
                key={i}
                style={{
                  padding: "8px 10px",
                  borderRadius: 6,
                  backgroundColor: i === 0 ? "rgba(157,255,32,0.08)" : "transparent",
                  border: `1px solid ${i === 0 ? "rgba(157,255,32,0.2)" : "transparent"}`,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    color: i === 0 ? "#9DFF20" : "rgba(255,255,255,0.5)",
                    margin: 0,
                    fontWeight: i === 0 ? 500 : 400,
                  }}
                >
                  {scene.name}
                </p>
                <p
                  style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,0.25)",
                    margin: "2px 0 0",
                  }}
                >
                  {scene.duration}s
                </p>
              </div>
            ))}
          </div>
        </aside>

        {/* Canvas */}
        <main
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0a0a0f",
            padding: 32,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 900,
              borderRadius: 10,
              overflow: "hidden",
              boxShadow:
                "0 0 0 1px rgba(157,255,32,0.12), 0 32px 80px rgba(0,0,0,0.7)",
            }}
          >
            <Player
              component={MyComposition}
              durationInFrames={TOTAL_DURATION}
              fps={FPS}
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
        </main>

        {/* Right sidebar */}
        <aside
          style={{
            width: 220,
            backgroundColor: "#0e0e16",
            borderLeft: "1px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              padding: "12px 14px",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <p
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.3)",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Propiedades
            </p>
          </div>

          <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: 16 }}>
            <PropertyItem label="Duración total" value={`${(TOTAL_DURATION / FPS).toFixed(1)}s`} />
            <PropertyItem label="FPS" value={`${FPS}`} />
            <PropertyItem label="Resolución" value="1920 × 1080" />
            <PropertyItem label="Escenas" value={`${SCENES.length}`} />

            <div
              style={{
                height: 1,
                backgroundColor: "rgba(255,255,255,0.06)",
                margin: "4px 0",
              }}
            />

            <div>
              <p
                style={{
                  fontSize: 10,
                  color: "rgba(255,255,255,0.3)",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  margin: "0 0 10px",
                }}
              >
                Exportar
              </p>
              <button
                style={{
                  width: "100%",
                  padding: "10px 0",
                  borderRadius: 7,
                  border: "1px solid rgba(157,255,32,0.3)",
                  background: "rgba(157,255,32,0.08)",
                  color: "#9DFF20",
                  fontSize: 12,
                  fontWeight: 500,
                  cursor: "pointer",
                  letterSpacing: 0.5,
                  transition: "all 0.15s ease",
                }}
              >
                Renderizar video
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Bottom timeline bar */}
      <div
        style={{
          height: 44,
          backgroundColor: "#0e0e16",
          borderTop: "1px solid rgba(255,255,255,0.07)",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          gap: 8,
          flexShrink: 0,
        }}
      >
        <span
          style={{ fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: 1 }}
        >
          TIMELINE
        </span>
        <div style={{ flex: 1, display: "flex", gap: 2, alignItems: "center" }}>
          {SCENES.map((scene, i) => (
            <div
              key={i}
              style={{
                flex: scene.frames,
                height: 18,
                borderRadius: 3,
                backgroundColor: i % 2 === 0 ? "rgba(157,255,32,0.15)" : "rgba(157,255,32,0.08)",
                border: "1px solid rgba(157,255,32,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <span
                style={{
                  fontSize: 9,
                  color: "rgba(157,255,32,0.7)",
                  letterSpacing: 0.5,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  padding: "0 4px",
                }}
              >
                {scene.name}
              </span>
            </div>
          ))}
        </div>
        <span
          style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: 0.5 }}
        >
          {(TOTAL_DURATION / FPS).toFixed(1)}s
        </span>
      </div>
    </div>
  );
}

function PropertyItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", margin: "0 0 3px", letterSpacing: 0.5 }}>
        {label}
      </p>
      <p style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", margin: 0, fontWeight: 500 }}>
        {value}
      </p>
    </div>
  );
}

const SCENES = [
  { name: "Intro",        frames: 130, duration: "4.3" },
  { name: "Servicios",    frames: 150, duration: "5.0" },
  { name: "Productos",    frames: 180, duration: "6.0" },
  { name: "Métricas",     frames: 150, duration: "5.0" },
  { name: "Contacto",     frames: 150, duration: "5.0" },
  { name: "Logo Curtain", frames: 150, duration: "5.0" },
];
