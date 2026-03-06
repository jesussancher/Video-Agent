"use client";

import React from "react";
import {
  COMPONENT_PALETTE_ITEMS,
  getCategoryLabel,
  type PaletteItem,
} from "../../../src/constants/componentPalette";
import type { SceneType } from "../../../src/types";

const PALETTE_STYLE: React.CSSProperties = {
  width: 240,
  minWidth: 240,
  backgroundColor: "#0d0d0f",
  borderRight: "1px solid rgba(157,255,32,0.15)",
  padding: 12,
  overflowY: "auto",
};

const CATEGORY_STYLE: React.CSSProperties = {
  fontSize: 10,
  fontWeight: 600,
  color: "rgba(157,255,32,0.6)",
  letterSpacing: 2,
  textTransform: "uppercase",
  marginTop: 16,
  marginBottom: 8,
};

const ITEM_STYLE: React.CSSProperties = {
  padding: "10px 12px",
  borderRadius: 8,
  backgroundColor: "rgba(157,255,32,0.06)",
  border: "1px solid rgba(157,255,32,0.12)",
  color: "#e0e0e0",
  fontSize: 13,
  cursor: "grab",
  marginBottom: 6,
  userSelect: "none",
};

const ITEM_DRAGGING: React.CSSProperties = {
  ...ITEM_STYLE,
  opacity: 0.6,
  cursor: "grabbing",
};

export interface ComponentPaletteProps {
  onDragStart?: (type: SceneType) => void;
  onDragEnd?: () => void;
  onContextMenu?: (e: React.MouseEvent, sceneType: SceneType) => void;
}

export function ComponentPalette({ onDragStart, onDragEnd, onContextMenu }: ComponentPaletteProps) {
  const [dragging, setDragging] = React.useState<SceneType | null>(null);

  const handleDragStart = (e: React.DragEvent, item: PaletteItem) => {
    e.dataTransfer.setData("application/json", JSON.stringify({ type: item.type }));
    e.dataTransfer.effectAllowed = "copy";
    setDragging(item.type);
    onDragStart?.(item.type);
  };

  const handleDragEnd = () => {
    setDragging(null);
    onDragEnd?.();
  };

  const categories = Array.from(
    new Set(COMPONENT_PALETTE_ITEMS.map((i) => i.category))
  ) as PaletteItem["category"][];

  return (
    <div style={PALETTE_STYLE}>
      <div style={{ ...CATEGORY_STYLE, marginTop: 0 }}>Componentes</div>
      <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", margin: "0 0 12px" }}>
        Arrastra al timeline para agregar
      </p>

      {categories.map((cat) => (
        <div key={cat}>
          <div style={CATEGORY_STYLE}>{getCategoryLabel(cat)}</div>
          {COMPONENT_PALETTE_ITEMS.filter((i) => i.category === cat).map((item) => (
            <div
              key={item.type}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              onDragEnd={handleDragEnd}
              onContextMenu={(e) => {
                e.preventDefault();
                onContextMenu?.(e, item.type);
              }}
              style={dragging === item.type ? ITEM_DRAGGING : ITEM_STYLE}
            >
              {item.label}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
