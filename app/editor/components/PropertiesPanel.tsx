"use client";

import React from "react";
import type {
  Sequence,
  SceneTransition,
  TransitionType,
  TransitionDirection,
  TransitionTiming,
  AnimationConfig,
  EntranceExitConfig,
  LayoutConfig,
  LayoutAnchor,
  SceneData,
  ImageData,
  VideoData,
  AudioData,
  TextData,
  GifData,
  LottieData,
} from "../../../src/types";
import { EasingPicker } from "./EasingPicker";

const PANEL_STYLE: React.CSSProperties = {
  width: 280,
  minWidth: 280,
  backgroundColor: "#0d0d0f",
  borderLeft: "1px solid rgba(157,255,32,0.15)",
  padding: 16,
  overflowY: "auto",
};

const SECTION_STYLE: React.CSSProperties = {
  marginBottom: 24,
};

const SECTION_TITLE: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 600,
  color: "rgba(157,255,32,0.8)",
  letterSpacing: 1,
  textTransform: "uppercase",
  marginBottom: 12,
};

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  padding: "8px 10px",
  borderRadius: 6,
  border: "1px solid rgba(157,255,32,0.2)",
  backgroundColor: "rgba(0,0,0,0.3)",
  color: "#fff",
  fontSize: 13,
  marginBottom: 8,
};

const LABEL_STYLE: React.CSSProperties = {
  fontSize: 11,
  color: "rgba(255,255,255,0.6)",
  marginBottom: 4,
};

export interface PropertiesPanelProps {
  sequence: Sequence | null;
  onChange: (sequence: Sequence) => void;
}

export function PropertiesPanel({ sequence, onChange }: PropertiesPanelProps) {
  if (!sequence) {
    return (
      <div style={PANEL_STYLE}>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
          Selecciona una secuencia en el timeline
        </div>
      </div>
    );
  }

  const update = (patch: Partial<Sequence>) => {
    onChange({ ...sequence, ...patch });
  };

  const updateSceneData = (patch: Partial<SceneData>) => {
    update({ sceneData: { ...sequence.sceneData, ...patch } });
  };

  const updateTransition = (patch: Partial<SceneTransition>) => {
    const base: SceneTransition = sequence.transition ?? {
      type: "fade",
      durationInFrames: 15,
      timing: "linear",
    };
    update({ transition: { ...base, ...patch } });
  };

  const updateAnimationConfig = (patch: Partial<AnimationConfig>) => {
    update({ animationConfig: { ...sequence.animationConfig, ...patch } });
  };

  const updateEntrance = (patch: Partial<EntranceExitConfig>) => {
    updateAnimationConfig({
      entrance: { ...sequence.animationConfig?.entrance, ...patch } as EntranceExitConfig,
    });
  };

  const updateExit = (patch: Partial<EntranceExitConfig>) => {
    updateAnimationConfig({
      exit: { ...sequence.animationConfig?.exit, ...patch } as EntranceExitConfig,
    });
  };

  const updateLayout = (patch: Partial<LayoutConfig>) => {
    updateAnimationConfig({
      layout: { ...sequence.animationConfig?.layout, ...patch } as LayoutConfig,
    });
  };

  const transition = sequence.transition ?? {
    type: "fade" as TransitionType,
    durationInFrames: 15,
    timing: "linear" as TransitionTiming,
  };

  return (
    <div style={PANEL_STYLE}>
      <div style={SECTION_STYLE}>
        <div style={SECTION_TITLE}>General</div>
        <div>
          <div style={LABEL_STYLE}>Duración (frames)</div>
          <input
            type="number"
            min={1}
            value={sequence.durationInFrames}
            onChange={(e) =>
              update({ durationInFrames: Math.max(1, parseInt(e.target.value, 10) || 0) })
            }
            style={INPUT_STYLE}
          />
        </div>
        <div>
          <div style={LABEL_STYLE}>Orden</div>
          <input
            type="number"
            min={0}
            value={sequence.order}
            readOnly
            style={{ ...INPUT_STYLE, opacity: 0.7 }}
          />
        </div>
      </div>

      <div style={SECTION_STYLE}>
        <div style={SECTION_TITLE}>Transición</div>
        <div>
          <div style={LABEL_STYLE}>Tipo</div>
          <select
            value={transition.type}
            onChange={(e) => updateTransition({ type: e.target.value as TransitionType })}
            style={INPUT_STYLE}
          >
            <option value="fade">Fade</option>
            <option value="slide">Slide</option>
            <option value="wipe">Wipe</option>
            <option value="flip">Flip</option>
            <option value="clock-wipe">Clock Wipe</option>
            <option value="none">Ninguna</option>
          </select>
        </div>
        {(transition.type === "slide" || transition.type === "wipe") && (
          <div>
            <div style={LABEL_STYLE}>Dirección</div>
            <select
              value={transition.direction ?? "from-right"}
              onChange={(e) =>
                updateTransition({ direction: e.target.value as TransitionDirection })
              }
              style={INPUT_STYLE}
            >
              <option value="from-left">Desde izquierda</option>
              <option value="from-right">Desde derecha</option>
              <option value="from-top">Desde arriba</option>
              <option value="from-bottom">Desde abajo</option>
            </select>
          </div>
        )}
        <div>
          <div style={LABEL_STYLE}>Duración (frames)</div>
          <input
            type="number"
            min={0}
            value={transition.durationInFrames}
            onChange={(e) =>
              updateTransition({
                durationInFrames: Math.max(0, parseInt(e.target.value, 10) || 0),
              })
            }
            style={INPUT_STYLE}
          />
        </div>
        <div>
          <div style={LABEL_STYLE}>Timing</div>
          <select
            value={transition.timing}
            onChange={(e) => updateTransition({ timing: e.target.value as TransitionTiming })}
            style={INPUT_STYLE}
          >
            <option value="linear">Linear</option>
            <option value="spring">Spring</option>
          </select>
        </div>
        {transition.timing === "spring" && (
          <>
            <div>
              <div style={LABEL_STYLE}>Damping</div>
              <input
                type="number"
                min={1}
                value={transition.springConfig?.damping ?? 200}
                onChange={(e) =>
                  updateTransition({
                    springConfig: {
                      ...transition.springConfig,
                      damping: parseInt(e.target.value, 10) || 200,
                    },
                  })
                }
                style={INPUT_STYLE}
              />
            </div>
            <div>
              <div style={LABEL_STYLE}>Stiffness</div>
              <input
                type="number"
                min={1}
                value={transition.springConfig?.stiffness ?? 100}
                onChange={(e) =>
                  updateTransition({
                    springConfig: {
                      ...transition.springConfig,
                      stiffness: parseInt(e.target.value, 10) || 100,
                    },
                  })
                }
                style={INPUT_STYLE}
              />
            </div>
          </>
        )}
      </div>

      <div style={SECTION_STYLE}>
        <div style={SECTION_TITLE}>Animación entrada</div>
        <div>
          <label style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <input
              type="checkbox"
              checked={!!sequence.animationConfig?.entrance}
              onChange={(e) =>
                updateAnimationConfig({
                  entrance: e.target.checked
                    ? {
                        type: "fade",
                        durationInFrames: 20,
                        easing: "quad",
                        easingVariant: "out",
                      }
                    : undefined,
                })
              }
            />
            <span style={{ fontSize: 12, color: "#ccc" }}>Activar</span>
          </label>
        </div>
        {sequence.animationConfig?.entrance && (
          <>
            <div>
              <div style={LABEL_STYLE}>Tipo</div>
              <select
                value={sequence.animationConfig.entrance.type}
                onChange={(e) =>
                  updateEntrance({
                    type: e.target.value as EntranceExitConfig["type"],
                  })
                }
                style={INPUT_STYLE}
              >
                <option value="fade">Fade</option>
                <option value="slide">Slide</option>
                <option value="scale">Scale</option>
                <option value="spring">Spring</option>
              </select>
            </div>
            <div>
              <div style={LABEL_STYLE}>Duración (frames)</div>
              <input
                type="number"
                min={1}
                value={sequence.animationConfig.entrance.durationInFrames}
                onChange={(e) =>
                  updateEntrance({
                    durationInFrames: Math.max(1, parseInt(e.target.value, 10) || 0),
                  })
                }
                style={INPUT_STYLE}
              />
            </div>
            <div>
              <div style={LABEL_STYLE}>Curva</div>
              <EasingPicker
                value={sequence.animationConfig.entrance.easing ?? "quad"}
                variant={sequence.animationConfig.entrance.easingVariant ?? "out"}
                bezierParams={sequence.animationConfig.entrance.bezierParams}
                onChange={(easing, variant, bezier) =>
                  updateEntrance({ easing, easingVariant: variant, bezierParams: bezier })
                }
              />
            </div>
          </>
        )}
      </div>

      <div style={SECTION_STYLE}>
        <div style={SECTION_TITLE}>Animación salida</div>
        <div>
          <label style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <input
              type="checkbox"
              checked={!!sequence.animationConfig?.exit}
              onChange={(e) =>
                updateAnimationConfig({
                  exit: e.target.checked
                    ? {
                        type: "fade",
                        durationInFrames: 20,
                        easing: "quad",
                        easingVariant: "in",
                      }
                    : undefined,
                })
              }
            />
            <span style={{ fontSize: 12, color: "#ccc" }}>Activar</span>
          </label>
        </div>
        {sequence.animationConfig?.exit && (
          <>
            <div>
              <div style={LABEL_STYLE}>Tipo</div>
              <select
                value={sequence.animationConfig.exit.type}
                onChange={(e) =>
                  updateExit({ type: e.target.value as EntranceExitConfig["type"] })
                }
                style={INPUT_STYLE}
              >
                <option value="fade">Fade</option>
                <option value="slide">Slide</option>
                <option value="scale">Scale</option>
                <option value="spring">Spring</option>
              </select>
            </div>
            <div>
              <div style={LABEL_STYLE}>Duración (frames)</div>
              <input
                type="number"
                min={1}
                value={sequence.animationConfig.exit.durationInFrames}
                onChange={(e) =>
                  updateExit({
                    durationInFrames: Math.max(1, parseInt(e.target.value, 10) || 0),
                  })
                }
                style={INPUT_STYLE}
              />
            </div>
            <div>
              <div style={LABEL_STYLE}>Curva</div>
              <EasingPicker
                value={sequence.animationConfig.exit.easing ?? "quad"}
                variant={sequence.animationConfig.exit.easingVariant ?? "in"}
                bezierParams={sequence.animationConfig.exit.bezierParams}
                onChange={(easing, variant, bezier) =>
                  updateExit({ easing, easingVariant: variant, bezierParams: bezier })
                }
              />
            </div>
          </>
        )}
      </div>

      {(sequence.sceneType === "image" ||
        sequence.sceneType === "video" ||
        sequence.sceneType === "text" ||
        sequence.sceneType === "gif" ||
        sequence.sceneType === "lottie") && (
        <div style={SECTION_STYLE}>
          <div style={SECTION_TITLE}>Layout</div>
          <label style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <input
              type="checkbox"
              checked={!!sequence.animationConfig?.layout}
              onChange={(e) =>
                updateAnimationConfig({
                  layout: e.target.checked
                    ? { x: 100, y: 100, width: 400, height: 300, anchor: "center" }
                    : undefined,
                })
              }
            />
            <span style={{ fontSize: 12, color: "#ccc" }}>Posición personalizada</span>
          </label>
          {sequence.animationConfig?.layout && (
            <>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ flex: 1 }}>
                  <div style={LABEL_STYLE}>X</div>
                  <input
                    type="number"
                    value={sequence.animationConfig.layout.x}
                    onChange={(e) =>
                      updateLayout({ x: parseInt(e.target.value, 10) || 0 })
                    }
                    style={INPUT_STYLE}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={LABEL_STYLE}>Y</div>
                  <input
                    type="number"
                    value={sequence.animationConfig.layout.y}
                    onChange={(e) =>
                      updateLayout({ y: parseInt(e.target.value, 10) || 0 })
                    }
                    style={INPUT_STYLE}
                  />
                </div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ flex: 1 }}>
                  <div style={LABEL_STYLE}>Ancho</div>
                  <input
                    type="number"
                    min={1}
                    value={sequence.animationConfig.layout.width ?? 400}
                    onChange={(e) =>
                      updateLayout({ width: parseInt(e.target.value, 10) || 400 })
                    }
                    style={INPUT_STYLE}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={LABEL_STYLE}>Alto</div>
                  <input
                    type="number"
                    min={1}
                    value={sequence.animationConfig.layout.height ?? 300}
                    onChange={(e) =>
                      updateLayout({ height: parseInt(e.target.value, 10) || 300 })
                    }
                    style={INPUT_STYLE}
                  />
                </div>
              </div>
              <div>
                <div style={LABEL_STYLE}>Ancla</div>
                <select
                  value={sequence.animationConfig.layout.anchor ?? "center"}
                  onChange={(e) =>
                    updateLayout({ anchor: e.target.value as LayoutAnchor })
                  }
                  style={INPUT_STYLE}
                >
                  <option value="top-left">Arriba izquierda</option>
                  <option value="top-center">Arriba centro</option>
                  <option value="top-right">Arriba derecha</option>
                  <option value="center-left">Centro izquierda</option>
                  <option value="center">Centro</option>
                  <option value="center-right">Centro derecha</option>
                  <option value="bottom-left">Abajo izquierda</option>
                  <option value="bottom-center">Abajo centro</option>
                  <option value="bottom-right">Abajo derecha</option>
                </select>
              </div>
            </>
          )}
        </div>
      )}

      {/* Type-specific props */}
      <div style={SECTION_STYLE}>
        <div style={SECTION_TITLE}>Contenido</div>
        {sequence.sceneType === "image" && (
          <div>
            <div style={LABEL_STYLE}>URL imagen</div>
            <input
              type="text"
              placeholder="https://..."
              value={(sequence.sceneData as ImageData).src}
              onChange={(e) => updateSceneData({ src: e.target.value })}
              style={INPUT_STYLE}
            />
          </div>
        )}
        {sequence.sceneType === "video" && (
          <>
            <div>
              <div style={LABEL_STYLE}>URL video</div>
              <input
                type="text"
                placeholder="https://..."
                value={(sequence.sceneData as VideoData).src}
                onChange={(e) => updateSceneData({ src: e.target.value })}
                style={INPUT_STYLE}
              />
            </div>
            <div>
              <div style={LABEL_STYLE}>Volumen</div>
              <input
                type="number"
                min={0}
                max={1}
                step={0.1}
                value={(sequence.sceneData as VideoData).volume ?? 1}
                onChange={(e) =>
                  updateSceneData({ volume: parseFloat(e.target.value) || 1 })
                }
                style={INPUT_STYLE}
              />
            </div>
          </>
        )}
        {sequence.sceneType === "audio" && (
          <>
            <div>
              <div style={LABEL_STYLE}>URL audio</div>
              <input
                type="text"
                placeholder="https://..."
                value={(sequence.sceneData as AudioData).src}
                onChange={(e) => updateSceneData({ src: e.target.value })}
                style={INPUT_STYLE}
              />
            </div>
          </>
        )}
        {sequence.sceneType === "text" && (
          <>
            <div>
              <div style={LABEL_STYLE}>Texto</div>
              <textarea
                rows={3}
                value={(sequence.sceneData as TextData).text}
                onChange={(e) => updateSceneData({ text: e.target.value })}
                style={{ ...INPUT_STYLE, resize: "vertical" }}
              />
            </div>
            <div>
              <div style={LABEL_STYLE}>Tamaño</div>
              <input
                type="number"
                min={8}
                value={(sequence.sceneData as TextData).fontSize ?? 48}
                onChange={(e) =>
                  updateSceneData({ fontSize: parseInt(e.target.value, 10) || 48 })
                }
                style={INPUT_STYLE}
              />
            </div>
            <div>
              <div style={LABEL_STYLE}>Color</div>
              <input
                type="text"
                value={(sequence.sceneData as TextData).color ?? "#ffffff"}
                onChange={(e) => updateSceneData({ color: e.target.value })}
                style={INPUT_STYLE}
              />
            </div>
          </>
        )}
        {sequence.sceneType === "gif" && (
          <div>
            <div style={LABEL_STYLE}>URL GIF</div>
            <input
              type="text"
              placeholder="https://..."
              value={(sequence.sceneData as GifData).src}
              onChange={(e) => updateSceneData({ src: e.target.value })}
              style={INPUT_STYLE}
            />
          </div>
        )}
        {sequence.sceneType === "lottie" && (
          <div>
            <div style={LABEL_STYLE}>URL Lottie JSON</div>
            <input
              type="text"
              placeholder="https://..."
              value={(sequence.sceneData as LottieData).src}
              onChange={(e) => updateSceneData({ src: e.target.value })}
              style={INPUT_STYLE}
            />
          </div>
        )}
      </div>
    </div>
  );
}
