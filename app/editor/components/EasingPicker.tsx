"use client";

import React from "react";
import type { EasingType, EasingVariant } from "../../../src/types";

const EASING_OPTIONS: { value: EasingType; label: string }[] = [
  { value: "linear", label: "Linear" },
  { value: "quad", label: "Quad" },
  { value: "cubic", label: "Cubic" },
  { value: "sin", label: "Sin" },
  { value: "exp", label: "Exp" },
  { value: "circle", label: "Circle" },
  { value: "elastic", label: "Elastic" },
  { value: "bounce", label: "Bounce" },
  { value: "back", label: "Back" },
  { value: "bezier", label: "Bezier" },
];

const VARIANT_OPTIONS: { value: EasingVariant; label: string }[] = [
  { value: "in", label: "In" },
  { value: "out", label: "Out" },
  { value: "inOut", label: "In-Out" },
];

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  padding: "8px 10px",
  borderRadius: 6,
  border: "1px solid rgba(157,255,32,0.2)",
  backgroundColor: "rgba(0,0,0,0.3)",
  color: "#fff",
  fontSize: 13,
};

const LABEL_STYLE: React.CSSProperties = {
  fontSize: 11,
  color: "rgba(255,255,255,0.6)",
  marginBottom: 4,
};

export interface EasingPickerProps {
  value?: EasingType;
  variant?: EasingVariant;
  bezierParams?: [number, number, number, number];
  onChange: (easing: EasingType, variant?: EasingVariant, bezier?: [number, number, number, number]) => void;
}

export function EasingPicker({
  value = "linear",
  variant = "in",
  bezierParams = [0.42, 0, 0.58, 1],
  onChange,
}: EasingPickerProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div>
        <div style={LABEL_STYLE}>Curva</div>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as EasingType, variant, bezierParams)}
          style={INPUT_STYLE}
        >
          {EASING_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>

      {value !== "bezier" && (
        <div>
          <div style={LABEL_STYLE}>Variante</div>
          <select
            value={variant}
            onChange={(e) => onChange(value, e.target.value as EasingVariant, bezierParams)}
            style={INPUT_STYLE}
          >
            {VARIANT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {value === "bezier" && (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {([0, 1, 2, 3] as const).map((i) => (
            <div key={i} style={{ flex: 1, minWidth: 60 }}>
              <div style={LABEL_STYLE}>{["x1", "y1", "x2", "y2"][i]}</div>
              <input
                type="number"
                min={0}
                max={1}
                step={0.01}
                value={bezierParams[i]}
                onChange={(e) => {
                  const v = parseFloat(e.target.value) || 0;
                  const next = [...bezierParams] as [number, number, number, number];
                  next[i] = Math.max(0, Math.min(1, v));
                  onChange(value, variant, next);
                }}
                style={INPUT_STYLE}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
