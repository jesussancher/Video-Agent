"use client";

import React, { useCallback, useMemo } from "react";
import type { Sequence, SceneType } from "../../../src/types";
import { COMPONENT_PALETTE_ITEMS } from "../../../src/constants/componentPalette";

const TIMELINE_HEIGHT = 180;
const TRACK_HEIGHT = 32;
const PIXELS_PER_FRAME = 2;
const RULER_HEIGHT = 24;

function getSequenceLabel(seq: Sequence): string {
  const item = COMPONENT_PALETTE_ITEMS.find((i) => i.type === seq.sceneType);
  return item?.label ?? seq.sceneType;
}

/** Compute start frame for each sequence (for display) */
function computeFromFrames(sequences: Sequence[]): Map<string, number> {
  const sorted = [...sequences].sort((a, b) => a.order - b.order);
  const map = new Map<string, number>();
  let acc = 0;
  for (let i = 0; i < sorted.length; i++) {
    map.set(sorted[i].id, acc);
    const overlap =
      i < sorted.length - 1 && sorted[i].transition
        ? sorted[i].transition!.durationInFrames
        : 0;
    acc += sorted[i].durationInFrames - overlap;
  }
  return map;
}

export interface TimelineProps {
  sequences: Sequence[];
  fps: number;
  totalDurationInFrames: number;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  onDrop: (type: SceneType) => void;
  onChange: (sequences: Sequence[]) => void;
}

export function Timeline({
  sequences,
  fps,
  totalDurationInFrames,
  selectedId,
  onSelect,
  onDrop,
  onChange,
}: TimelineProps) {
  const fromFrames = useMemo(() => computeFromFrames(sequences), [sequences]);
  const width = totalDurationInFrames * PIXELS_PER_FRAME;

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      try {
        const data = JSON.parse(e.dataTransfer.getData("application/json"));
        if (data?.type) onDrop(data.type);
      } catch {
        // ignore
      }
    },
    [onDrop]
  );

  const handleTrackClick = useCallback(
    (id: string) => {
      onSelect(selectedId === id ? null : id);
    },
    [selectedId, onSelect]
  );

  const handleTrackDurationChange = useCallback(
    (id: string, delta: number) => {
      onChange(
        sequences.map((s) =>
          s.id === id
            ? { ...s, durationInFrames: Math.max(30, s.durationInFrames + delta) }
            : s
        )
      );
    },
    [sequences, onChange]
  );

  const sorted = useMemo(
    () => [...sequences].sort((a, b) => a.order - b.order),
    [sequences]
  );

  return (
    <div
      style={{
        flex: 1,
        minHeight: 0,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0a0a0c",
        borderTop: "1px solid rgba(157,255,32,0.15)",
      }}
    >
      {/* Ruler */}
      <div
        style={{
          height: RULER_HEIGHT,
          position: "relative",
          display: "flex",
          alignItems: "center",
          paddingLeft: 8,
          fontSize: 10,
          color: "rgba(255,255,255,0.5)",
          borderBottom: "1px solid rgba(157,255,32,0.1)",
        }}
      >
        {Array.from({ length: Math.ceil(totalDurationInFrames / fps) + 1 }).map(
          (_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: 8 + i * fps * PIXELS_PER_FRAME,
                width: 1,
                height: RULER_HEIGHT,
                backgroundColor: "rgba(255,255,255,0.2)",
              }}
            />
          )
        )}
        <span>0s</span>
        <span
          style={{
            position: "absolute",
            right: 8,
          }}
        >
          {(totalDurationInFrames / fps).toFixed(1)}s
        </span>
      </div>

      {/* Tracks */}
      <div
        style={{
          flex: 1,
          overflowX: "auto",
          overflowY: "auto",
          padding: 8,
        }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {sorted.length === 0 ? (
          <div
            style={{
              height: 80,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px dashed rgba(157,255,32,0.2)",
              borderRadius: 8,
              color: "rgba(255,255,255,0.4)",
              fontSize: 13,
            }}
          >
            Arrastra componentes aquí
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {sorted.map((seq) => {
              const from = fromFrames.get(seq.id) ?? 0;
              const trackWidth = seq.durationInFrames * PIXELS_PER_FRAME;
              const isSelected = selectedId === seq.id;

              return (
                <div
                  key={seq.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: TRACK_HEIGHT,
                  }}
                >
                  <div
                    style={{
                      width: 120,
                      fontSize: 12,
                      color: "rgba(255,255,255,0.7)",
                      flexShrink: 0,
                    }}
                  >
                    {getSequenceLabel(seq)}
                  </div>
                  <div
                    style={{
                      position: "relative",
                      width: `${width}px`,
                      minWidth: width,
                      height: TRACK_HEIGHT - 4,
                    }}
                  >
                    <div
                      onClick={() => handleTrackClick(seq.id)}
                      style={{
                        position: "absolute",
                        left: from * PIXELS_PER_FRAME,
                        width: trackWidth,
                        height: "100%",
                        backgroundColor: isSelected
                          ? "rgba(157,255,32,0.25)"
                          : "rgba(157,255,32,0.12)",
                        border: `1px solid ${isSelected ? "#9DFF20" : "rgba(157,255,32,0.3)"}`,
                        borderRadius: 6,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: 8,
                        fontSize: 11,
                        color: `${seq.durationInFrames / fps}s`,
                      }}
                    >
                      {(seq.durationInFrames / fps).toFixed(1)}s
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
