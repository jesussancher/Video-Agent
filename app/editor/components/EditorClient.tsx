"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Player } from "@remotion/player";
import { DynamicComposition } from "../../../src/Composition";
import { ComponentPalette } from "./ComponentPalette";
import { Timeline } from "./Timeline";
import { PropertiesPanel } from "./PropertiesPanel";
import { createSequenceFromType } from "../../../src/constants/componentPalette";
import { calcTotalDuration } from "../../../src/utils/duration";
import type { CompositionDTO, Sequence } from "../../../src/types";

const API_URL =
  (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_API_URL) ||
  "http://localhost:3000";

export interface EditorClientProps {
  composition: CompositionDTO | null;
}

let idCounter = 0;
function generateId() {
  return `seq-${Date.now()}-${++idCounter}`;
}

export function EditorClient({ composition: initialComposition }: EditorClientProps) {
  const [composition, setComposition] = useState<CompositionDTO | null>(
    initialComposition
  );
  const [sequences, setSequences] = useState<Sequence[]>(
    initialComposition?.sequences ?? []
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [currentFrame, setCurrentFrame] = useState(0);
  const playerRef = useRef<ReturnType<typeof Player> | null>(null);

  const totalDurationInFrames = useMemo(
    () => calcTotalDuration(sequences),
    [sequences]
  );

  const inputProps = useMemo(
    () => ({ sequences }),
    [sequences]
  );

  const handleDrop = useCallback(
    (type: Parameters<typeof createSequenceFromType>[0]) => {
      const newSeq = createSequenceFromType(type, sequences.length, generateId);
      const next = [...sequences, newSeq].map((s, i) => ({ ...s, order: i }));
      setSequences(next);
      setSelectedId(newSeq.id);
    },
    [sequences]
  );

  const handleSequencesChange = useCallback((next: Sequence[]) => {
    const reordered = next.map((s, i) => ({ ...s, order: i }));
    setSequences(reordered);
  }, []);

  const handleSequenceChange = useCallback((updated: Sequence) => {
    setSequences((prev) =>
      prev.map((s) => (s.id === updated.id ? updated : s))
    );
  }, []);

  const handleSave = useCallback(async () => {
    if (!composition?.id) return;
    try {
      const res = await fetch(`${API_URL}/api/compositions/${composition.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ sequences }),
      });
      if (res.ok) {
        const data = await res.json();
        setComposition(data.composition);
      }
    } catch (err) {
      console.error("Error saving:", err);
    }
  }, [composition?.id, sequences]);

  const handleSeek = useCallback((frame: number) => {
    const maxFrame = Math.max(0, totalDurationInFrames - 1);
    const clamped = Math.max(0, Math.min(frame, maxFrame));
    setCurrentFrame(clamped);
    playerRef.current?.seekTo(clamped);
  }, [totalDurationInFrames]);

  useEffect(() => {
    const maxFrame = Math.max(0, totalDurationInFrames - 1);
    if (currentFrame > maxFrame) {
      setCurrentFrame(maxFrame);
      playerRef.current?.seekTo(maxFrame);
    }
  }, [totalDurationInFrames, currentFrame]);

  const selectedSequence = useMemo(
    () => sequences.find((s) => s.id === selectedId) ?? null,
    [sequences, selectedId]
  );

  const fps = composition?.fps ?? 30;
  const width = composition?.width ?? 1920;
  const height = composition?.height ?? 1080;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#050508",
      }}
    >
      {/* Top bar */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 20px",
          borderBottom: "1px solid rgba(157,255,32,0.15)",
          flexShrink: 0,
        }}
      >
        <div>
          <h1
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: "#9DFF20",
              letterSpacing: 2,
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            {composition?.title ?? "Editor"}
          </h1>
          <p
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.4)",
              margin: "2px 0 0",
            }}
          >
            {!composition
              ? "Sin composición — crea una desde el dashboard para guardar"
              : `${sequences.length} secuencias · ${(totalDurationInFrames / fps).toFixed(1)}s`}
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="/dashboard"
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.6)",
              textDecoration: "none",
            }}
          >
            Dashboard
          </a>
          <button
            type="button"
            onClick={handleSave}
            disabled={!composition?.id}
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              border: "1px solid rgba(157,255,32,0.4)",
              background: composition?.id
                ? "rgba(157,255,32,0.1)"
                : "rgba(255,255,255,0.05)",
              color: composition?.id ? "#9DFF20" : "rgba(255,255,255,0.4)",
              fontSize: 12,
              cursor: composition?.id ? "pointer" : "not-allowed",
            }}
          >
            Guardar
          </button>
          <a
            href={process.env.NEXT_PUBLIC_STUDIO_URL ?? "http://localhost:3001"}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 12,
              color: "rgba(157,255,32,0.8)",
              textDecoration: "none",
            }}
          >
            Remotion Studio →
          </a>
        </div>
      </header>

      {/* Main layout */}
      <div
        style={{
          flex: 1,
          display: "flex",
          minHeight: 0,
        }}
      >
        <ComponentPalette />

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          {/* Preview */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
              minHeight: 0,
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: 960,
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 0 0 1px rgba(157,255,32,0.15)",
              }}
            >
              <Player
                ref={playerRef as React.RefObject<never>}
                component={DynamicComposition}
                inputProps={inputProps}
                durationInFrames={Math.max(1, totalDurationInFrames)}
                fps={fps}
                compositionWidth={width}
                compositionHeight={height}
                style={{ width: "100%" }}
                controls
                loop
                clickToPlay
                acknowledgeRemotionLicense
              />
            </div>
          </div>

          <Timeline
            sequences={sequences}
            fps={fps}
            totalDurationInFrames={Math.max(1, totalDurationInFrames)}
            currentFrame={currentFrame}
            onSeek={handleSeek}
            selectedId={selectedId}
            onSelect={setSelectedId}
            onDrop={handleDrop}
            onChange={handleSequencesChange}
          />
        </div>

        <PropertiesPanel
          sequence={selectedSequence}
          onChange={handleSequenceChange}
        />
      </div>
    </div>
  );
}
