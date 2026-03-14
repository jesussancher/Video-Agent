"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import VideoPlayer from "../../VideoPlayer";
import { CompositionChat } from "./CompositionChat";
import type { CompositionDTO } from "../../../src/types";

export interface DashboardClientProps {
  compositions: CompositionDTO[];
  firebaseCredentialError: boolean;
}

export function DashboardClient({
  compositions: initialCompositions,
  firebaseCredentialError,
}: DashboardClientProps) {
  const router = useRouter();
  const [compositions, setCompositions] = useState(initialCompositions);
  const [selectedId, setSelectedId] = useState<string | null>(
    initialCompositions[0]?.id ?? null
  );
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    setCompositions(initialCompositions);
    setSelectedId((prev) => {
      const exists = initialCompositions.some((c) => c.id === prev);
      return exists ? prev : initialCompositions[0]?.id ?? null;
    });
  }, [initialCompositions]);

  const handleCompositionCreated = (compositionId: string) => {
    router.refresh();
    setSelectedId(compositionId);
  };

  const selected = compositions.find((c) => c.id === selectedId) ?? compositions[0];

  return (
    <>
      {firebaseCredentialError && (
        <div
          style={{
            width: "100%",
            maxWidth: 960,
            padding: 16,
            borderRadius: 8,
            background: "rgba(255,100,100,0.15)",
            border: "1px solid rgba(255,100,100,0.3)",
            color: "#ff6b6b",
            fontSize: 13,
            lineHeight: 1.5,
          }}
        >
          <strong>Error de credenciales Firebase</strong>
          <p style={{ margin: "8px 0 0", opacity: 0.9 }}>
            (1) Sincroniza la hora del sistema. (2) Regenera la clave en Firebase
            Console → Configuración → Cuentas de servicio → Generar nueva clave
            privada. Sustituye el archivo JSON en la raíz del proyecto.
          </p>
        </div>
      )}

      <div
        style={{
          width: "100%",
          maxWidth: 960,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {/* Lista de composiciones + botón Nueva */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 12,
          }}
        >
          <button
            onClick={() => setChatOpen(true)}
            style={{
              padding: "10px 20px",
              borderRadius: 8,
              border: "1px solid rgba(157,255,32,0.5)",
              background: "rgba(157,255,32,0.15)",
              color: "#9DFF20",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: 1,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 18 }}>+</span>
            Nueva composición
          </button>
          {compositions.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {compositions.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedId(c.id)}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 8,
                    border:
                      selectedId === c.id
                        ? "1px solid #9DFF20"
                        : "1px solid rgba(255,255,255,0.2)",
                    background:
                      selectedId === c.id
                        ? "rgba(157,255,32,0.15)"
                        : "rgba(255,255,255,0.05)",
                    color: selectedId === c.id ? "#9DFF20" : "rgba(255,255,255,0.8)",
                    fontSize: 12,
                    cursor: "pointer",
                  }}
                >
                  {c.title}
                </button>
              ))}
            </div>
          )}
        </div>

        <VideoPlayer composition={selected} />

        {selected && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <a
              href={`/editor?id=${selected.id}`}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: "1px solid rgba(157,255,32,0.3)",
                background: "rgba(157,255,32,0.08)",
                color: "#9DFF20",
                fontSize: 13,
                textDecoration: "none",
                letterSpacing: 1,
              }}
            >
              Editar en Remotion Studio
            </a>
            <p
              style={{
                color: "rgba(255,255,255,0.2)",
                fontSize: 11,
                letterSpacing: 1,
                margin: 0,
              }}
            >
              {selected.sequences.length} escenas ·{" "}
              {(selected.totalDurationInFrames / selected.fps).toFixed(1)}s ·{" "}
              {selected.width}×{selected.height} · {selected.fps}fps
            </p>
          </div>
        )}

        {compositions.length === 0 && (
          <p
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: 13,
              textAlign: "center",
            }}
          >
            No hay composiciones. Haz clic en &quot;Nueva composición&quot; y describe tu video en el chat.
          </p>
        )}
      </div>

      <CompositionChat
        open={chatOpen}
        onClose={() => setChatOpen(false)}
        onCreated={handleCompositionCreated}
      />
    </>
  );
}
