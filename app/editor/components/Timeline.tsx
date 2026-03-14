"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";
import type { Sequence, SceneType } from "../../../src/types";
import type { ContextMenuTarget } from "./EditorClient";
import { COMPONENT_PALETTE_ITEMS } from "../../../src/constants/componentPalette";

const TIMELINE_HEIGHT = 180;
const TRACK_HEIGHT = 32;
const PIXELS_PER_FRAME = 2;
const RULER_HEIGHT = 24;

function getSequenceLabel(seq: Sequence): string {
  const item = COMPONENT_PALETTE_ITEMS.find((i) => i.type === seq.sceneType);
  return item?.label ?? seq.sceneType;
}

/** Compute start frame for each sequence (for display). Usa seq.from si existe. */
function computeFromFrames(sequences: Sequence[]): Map<string, number> {
  const sorted = [...sequences].sort((a, b) => a.order - b.order);
  const map = new Map<string, number>();
  let acc = 0;
  for (let i = 0; i < sorted.length; i++) {
    const seq = sorted[i];
    const from = seq.from !== undefined ? seq.from : acc;
    map.set(seq.id, from);
    const overlap =
      i < sorted.length - 1 && seq.transition
        ? seq.transition!.durationInFrames
        : 0;
    acc = from + seq.durationInFrames - overlap;
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
  onReorder?: (draggedId: string, targetOrder: number) => void;
  onMoveInTime?: (sequenceId: string, newFromFrame: number) => void;
  onContextMenu?: (e: React.MouseEvent, target: ContextMenuTarget) => void;
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
  onReorder,
  onMoveInTime,
  onContextMenu,
}: TimelineProps) {
  const fromFrames = useMemo(() => computeFromFrames(sequences), [sequences]);
  const width = totalDurationInFrames * PIXELS_PER_FRAME;
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dropIndicatorOrder, setDropIndicatorOrder] = useState<number | null>(null);
  const dragSourceIdRef = useRef<string | null>(null);
  const [timeDrag, setTimeDrag] = useState<{
    sequenceId: string;
    startFrom: number;
    startClientX: number;
    durationInFrames: number;
  } | null>(null);

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
    const isReorder = dragSourceIdRef.current !== null;
    e.dataTransfer.dropEffect = isReorder ? "move" : "copy";
    if (isReorder) {
      const target = e.target as HTMLElement;
      const tracksContainer = target.closest("[data-tracks-container]");
      if (!tracksContainer) {
        setDropIndicatorOrder(sequences.length);
      }
    } else {
      setDropIndicatorOrder(null);
    }
  }, [sequences.length]);

  const handleDropAny = useCallback(
    (e: React.DragEvent, targetOrder: number) => {
      e.preventDefault();
      e.stopPropagation();
      setDropIndicatorOrder(null);
      dragSourceIdRef.current = null;
      try {
        const data = JSON.parse(e.dataTransfer.getData("application/json"));
        if (data?.type === "timeline-clip" && data?.sequenceId && onReorder) {
          onReorder(data.sequenceId, targetOrder);
        } else if (data?.type && typeof data.type === "string") {
          onDrop(data.type);
        }
      } catch {
        // ignore
      }
    },
    [onDrop, onReorder]
  );

  const handleTrackDragStart = useCallback(
    (e: React.DragEvent, sequenceId: string) => {
      dragSourceIdRef.current = sequenceId;
      e.dataTransfer.setData(
        "application/json",
        JSON.stringify({ type: "timeline-clip", sequenceId })
      );
      e.dataTransfer.effectAllowed = "move";
      // Usar imagen de arrastre mínima para que el indicador de drop sea la referencia principal
      const img = document.createElement("div");
      img.style.cssText = "width:1px;height:1px;opacity:0;pointer-events:none;position:absolute;top:-9999px";
      document.body.appendChild(img);
      e.dataTransfer.setDragImage(img, 0, 0);
      requestAnimationFrame(() => document.body.removeChild(img));
    },
    []
  );

  const handleTrackDragEnd = useCallback(() => {
    dragSourceIdRef.current = null;
    setDropIndicatorOrder(null);
  }, []);

  const handleDragOverTrack = useCallback(
    (e: React.DragEvent, idx: number) => {
      e.preventDefault();
      e.stopPropagation();
      const isReorder = dragSourceIdRef.current !== null && onReorder;
      if (isReorder) {
        e.dataTransfer.dropEffect = "move";
        const rect = e.currentTarget.getBoundingClientRect();
        const relY = e.clientY - rect.top;
        const targetOrder = relY < rect.height / 2 ? idx : idx + 1;
        setDropIndicatorOrder(Math.min(targetOrder, sequences.length));
      } else {
        e.dataTransfer.dropEffect = "copy";
        setDropIndicatorOrder(null);
      }
    },
    [onReorder, sequences.length]
  );

  const handleDragLeaveTrack = useCallback((e: React.DragEvent) => {
    const related = e.relatedTarget as Node | null;
    const current = e.currentTarget as HTMLElement;
    if (!related || !current.contains(related)) {
      setDropIndicatorOrder(null);
    }
  }, []);

  const handleContainerDragLeave = useCallback((e: React.DragEvent) => {
    const related = e.relatedTarget as Node | null;
    const scrollEl = scrollRef.current;
    if (scrollEl && (!related || !scrollEl.contains(related))) {
      setDropIndicatorOrder(null);
    }
  }, []);

  const handleTrackClick = useCallback(
    (id: string) => {
      onSelect(selectedId === id ? null : id);
    },
    [selectedId, onSelect]
  );

  const handleClipBarMouseDown = useCallback(
    (e: React.MouseEvent, seq: Sequence) => {
      if (!onMoveInTime) return;
      e.preventDefault();
      e.stopPropagation();
      setTimeDrag({
        sequenceId: seq.id,
        startFrom: fromFrames.get(seq.id) ?? 0,
        startClientX: e.clientX,
        durationInFrames: seq.durationInFrames,
      });
    },
    [onMoveInTime, fromFrames]
  );

  const handleTimeDragMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!timeDrag || !onMoveInTime) return;
      const deltaX = e.clientX - timeDrag.startClientX;
      const deltaFrames = Math.round(deltaX / PIXELS_PER_FRAME);
      const rawFrom = timeDrag.startFrom + deltaFrames;
      const minFrom = 0;
      const maxFrom = Math.max(0, totalDurationInFrames - timeDrag.durationInFrames);
      const newFrom = Math.max(minFrom, Math.min(rawFrom, maxFrom));
      onMoveInTime(timeDrag.sequenceId, newFrom);
    },
    [timeDrag, onMoveInTime, totalDurationInFrames]
  );

  const handleTimeDragMouseUp = useCallback(() => {
    setTimeDrag(null);
  }, []);

  React.useEffect(() => {
    if (!timeDrag) return;
    const prevSelect = document.body.style.userSelect;
    document.body.style.userSelect = "none";
    document.body.style.cursor = "ew-resize";
    window.addEventListener("mousemove", handleTimeDragMouseMove);
    window.addEventListener("mouseup", handleTimeDragMouseUp);
    return () => {
      document.body.style.userSelect = prevSelect;
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", handleTimeDragMouseMove);
      window.removeEventListener("mouseup", handleTimeDragMouseUp);
    };
  }, [timeDrag, handleTimeDragMouseMove, handleTimeDragMouseUp]);

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

  const getInsertOrderFromFrame = useCallback(
    (frame: number) => {
      let order = 0;
      for (const s of sorted) {
        const from = fromFrames.get(s.id) ?? 0;
        if (frame < from) break;
        order++;
      }
      return order;
    },
    [sorted, fromFrames]
  );

  const handleRulerContextMenu = useCallback(
    (e: React.MouseEvent) => {
      if (!onContextMenu) return;
      e.preventDefault();
      e.stopPropagation();
      const frame = getFrameFromClientX(e.clientX);
      const insertOrder = getInsertOrderFromFrame(frame);
      onContextMenu(e, { type: "timeline-empty", insertOrder, frame });
    },
    [onContextMenu, getFrameFromClientX, getInsertOrderFromFrame]
  );

  const handleTrackContextMenu = useCallback(
    (e: React.MouseEvent, sequenceId: string) => {
      if (!onContextMenu) return;
      e.preventDefault();
      e.stopPropagation();
      onContextMenu(e, { type: "track", sequenceId });
    },
    [onContextMenu]
  );

  const handleEmptyAreaContextMenu = useCallback(
    (e: React.MouseEvent) => {
      if (!onContextMenu) return;
      e.preventDefault();
      e.stopPropagation();
      onContextMenu(e, { type: "timeline-empty", insertOrder: sequences.length, frame: 0 });
    },
    [onContextMenu, sequences.length]
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
        onDragLeave={handleContainerDragLeave}
        onDrop={(e) => handleDropAny(e, dropIndicatorOrder ?? sequences.length)}
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
            onContextMenu={handleRulerContextMenu}
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
          <div style={{ marginTop: 8, position: "relative" }}>
        {sorted.length === 0 ? (
          <div
            onContextMenu={handleEmptyAreaContextMenu}
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
          <div
            data-tracks-container
            style={{ display: "flex", flexDirection: "column", gap: 6, position: "relative" }}
          >
            {/* Línea indicadora de drop (solo vertical, ancho completo) */}
            {dropIndicatorOrder !== null && onReorder && (
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: dropIndicatorOrder * (TRACK_HEIGHT + 6) - 2,
                  height: 4,
                  borderTop: "2px solid #9DFF20",
                  boxShadow: "0 0 8px rgba(157,255,32,0.6)",
                  pointerEvents: "none",
                  zIndex: 20,
                }}
              />
            )}
            {sorted.map((seq, idx) => {
              const from = fromFrames.get(seq.id) ?? 0;
              const trackWidth = seq.durationInFrames * PIXELS_PER_FRAME;
              const isSelected = selectedId === seq.id;

              return (
                <div
                  key={seq.id}
                  onDragOver={(e) => handleDragOverTrack(e, idx)}
                  onDragLeave={handleDragLeaveTrack}
                  onDrop={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const relY = e.clientY - rect.top;
                    const targetOrder = relY < rect.height / 2 ? idx : idx + 1;
                    handleDropAny(e, Math.min(targetOrder, sorted.length));
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: TRACK_HEIGHT,
                  }}
                >
                  <div
                    draggable={!!onReorder}
                    onDragStart={(e) => onReorder && handleTrackDragStart(e, seq.id)}
                    onDragEnd={handleTrackDragEnd}
                    style={{
                      width: 120,
                      fontSize: 12,
                      color: "rgba(255,255,255,0.7)",
                      flexShrink: 0,
                      cursor: onReorder ? "grab" : undefined,
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
                      onMouseDown={(e) => handleClipBarMouseDown(e, seq)}
                      onContextMenu={(e) => handleTrackContextMenu(e, seq.id)}
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
                        cursor: onMoveInTime ? "ew-resize" : "pointer",
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
