"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";
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
  currentFrame: number;
  onSeek: (frame: number) => void;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  onDrop: (type: SceneType) => void;
  onChange: (sequences: Sequence[]) => void;
}

const PADDING_LEFT = 8;

export function Timeline({
  sequences,
  fps,
  totalDurationInFrames,
  currentFrame,
  onSeek,
  selectedId,
  onSelect,
  onDrop,
  onChange,
}: TimelineProps) {
  const fromFrames = useMemo(() => computeFromFrames(sequences), [sequences]);
  const width = totalDurationInFrames * PIXELS_PER_FRAME;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const getFrameFromClientX = useCallback(
    (clientX: number) => {
      const el = scrollRef.current;
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const contentX = clientX - rect.left + el.scrollLeft - PADDING_LEFT;
      const frame = Math.round(contentX / PIXELS_PER_FRAME);
      return Math.max(0, Math.min(frame, Math.max(0, totalDurationInFrames - 1)));
    },
    [totalDurationInFrames]
  );

  const handlePlayheadMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
      onSeek(getFrameFromClientX(e.clientX));
    },
    [getFrameFromClientX, onSeek]
  );

  const handlePlayheadClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onSeek(getFrameFromClientX(e.clientX));
    },
    [getFrameFromClientX, onSeek]
  );

  const handleRulerClick = useCallback(
    (e: React.MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-playhead]")) return;
      onSeek(getFrameFromClientX(e.clientX));
    },
    [getFrameFromClientX, onSeek]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      onSeek(getFrameFromClientX(e.clientX));
    },
    [isDragging, getFrameFromClientX, onSeek]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  React.useEffect(() => {
    if (!isDragging) return;
    const prevSelect = document.body.style.userSelect;
    document.body.style.userSelect = "none";
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.body.style.userSelect = prevSelect;
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

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
      {/* Ruler + Tracks + Playhead (scroll together) */}
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflowX: "auto",
          overflowY: "auto",
          position: "relative",
        }}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div
          style={{
            minWidth: width + PADDING_LEFT * 2,
            position: "relative",
            padding: PADDING_LEFT,
          }}
        >
          {/* Ruler */}
          <div
            onClick={handleRulerClick}
            style={{
              height: RULER_HEIGHT,
              position: "relative",
              display: "flex",
              alignItems: "center",
              fontSize: 10,
              color: "rgba(255,255,255,0.5)",
              borderBottom: "1px solid rgba(157,255,32,0.1)",
              cursor: "pointer",
            }}
          >
            {Array.from({ length: Math.ceil(totalDurationInFrames / fps) + 1 }).map(
              (_, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: PADDING_LEFT + i * fps * PIXELS_PER_FRAME,
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
                right: PADDING_LEFT,
              }}
            >
              {(totalDurationInFrames / fps).toFixed(1)}s
            </span>
          </div>

          {/* Playhead */}
          <div
            data-playhead
            onMouseDown={handlePlayheadMouseDown}
            onClick={handlePlayheadClick}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: PADDING_LEFT + currentFrame * PIXELS_PER_FRAME,
              width: 2,
              marginLeft: -1,
              backgroundColor: "#9DFF20",
              pointerEvents: "auto",
              cursor: "ew-resize",
              zIndex: 10,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -2,
                left: "50%",
                transform: "translateX(-50%)",
                width: 10,
                height: 10,
                backgroundColor: "#9DFF20",
                borderRadius: 2,
              }}
            />
          </div>

          {/* Tracks */}
          <div style={{ marginTop: 8 }}>
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
      </div>
    </div>
  );
}
