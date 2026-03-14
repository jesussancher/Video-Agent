"use client";

import { useState, useRef, useEffect } from "react";
import type { Sequence } from "../../../src/types";

const API_URL =
  (typeof process !== "undefined" && process.env?.NEXT_PUBLIC_API_URL) || "";

export interface GeneratedComposition {
  title: string;
  sequences: Sequence[];
  fps: number;
  width: number;
  height: number;
}

export interface CompositionChatProps {
  open: boolean;
  onClose: () => void;
  onCreated: (compositionId: string) => void;
}

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  composition?: GeneratedComposition | null;
};

export function CompositionChat({
  open,
  onClose,
  onCreated,
}: CompositionChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastComposition, setLastComposition] =
    useState<GeneratedComposition | null>(null);
  const [creating, setCreating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (open) {
      setMessages([]);
      setLastComposition(null);
      setError(null);
      setInput("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text,
    };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);
    setError(null);

    const conversation = [...messages, userMsg].map((m) => ({
      role: m.role,
      content: m.content,
    }));

    try {
      const res = await fetch(`${API_URL}/api/ai/composition`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ messages: conversation }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Error al interpretar la petición");
      }

      const comp = data.composition as GeneratedComposition;
      setLastComposition(comp);

      const assistantMsg: ChatMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content:
          data.message ||
          `Composición "${comp.title}" con ${comp.sequences.length} escenas. Puedes refinar con otro mensaje o pulsar "Concretar y abrir editor".`,
        composition: comp,
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  const handleConcretar = async () => {
    if (!lastComposition || creating) return;

    setCreating(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/api/compositions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          title: lastComposition.title,
          sequences: lastComposition.sequences,
          fps: lastComposition.fps,
          width: lastComposition.width,
          height: lastComposition.height,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? "Error al crear composición");
      }
      onCreated(data.composition.id);
      onClose();
      // Abrir editor de Remotion (nuestra app) en la misma ventana
      window.location.href = `/editor?id=${data.composition.id}`;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al crear");
    } finally {
      setCreating(false);
    }
  };

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.7)",
        padding: 24,
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 560,
          maxHeight: "85vh",
          backgroundColor: "#0a0a0c",
          borderRadius: 16,
          border: "1px solid rgba(157,255,32,0.2)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            padding: "16px 20px",
            borderBottom: "1px solid rgba(157,255,32,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 16,
              fontWeight: 600,
              color: "#9DFF20",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            Nueva composición con IA
          </h2>
          <button
            type="button"
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "rgba(255,255,255,0.5)",
              fontSize: 20,
              cursor: "pointer",
              padding: "0 4px",
              lineHeight: 1,
            }}
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        <div
          style={{
            flex: 1,
            overflow: "auto",
            padding: 16,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            minHeight: 200,
          }}
        >
          {messages.length === 0 && (
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: 13,
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Describe el video que quieres. Ej: &quot;Video de presentación de
              Lait Technology con logo, intro, servicios y contacto&quot;
            </p>
          )}
          {messages.map((m) => (
            <div
              key={m.id}
              style={{
                alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                maxWidth: "90%",
                padding: "10px 14px",
                borderRadius: 12,
                backgroundColor:
                  m.role === "user"
                    ? "rgba(157,255,32,0.12)"
                    : "rgba(255,255,255,0.06)",
                border:
                  m.role === "user"
                    ? "1px solid rgba(157,255,32,0.25)"
                    : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.9)",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
              >
                {m.content}
              </p>
              {m.composition && (
                <p
                  style={{
                    margin: "8px 0 0",
                    fontSize: 11,
                    color: "rgba(157,255,32,0.8)",
                  }}
                >
                  → {m.composition.sequences.length} escenas ·{" "}
                  {m.composition.title}
                </p>
              )}
            </div>
          ))}
          {loading && (
            <div
              style={{
                alignSelf: "flex-start",
                padding: "10px 14px",
                borderRadius: 12,
                backgroundColor: "rgba(255,255,255,0.06)",
                fontSize: 12,
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Generando composición…
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {error && (
          <div
            style={{
              margin: "0 16px",
              padding: "8px 12px",
              borderRadius: 8,
              backgroundColor: "rgba(255,100,100,0.15)",
              border: "1px solid rgba(255,100,100,0.3)",
              color: "#ff6b6b",
              fontSize: 12,
            }}
          >
            {error}
          </div>
        )}

        <div
          style={{
            padding: 16,
            borderTop: "1px solid rgba(157,255,32,0.15)",
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", gap: 8 }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Describe tu video..."
              rows={2}
              disabled={loading}
              style={{
                flex: 1,
                padding: "10px 14px",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.2)",
                backgroundColor: "rgba(255,255,255,0.05)",
                color: "#fff",
                fontSize: 13,
                resize: "none",
                fontFamily: "inherit",
              }}
            />
            <button
              type="button"
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              style={{
                padding: "10px 18px",
                borderRadius: 10,
                border: "1px solid rgba(157,255,32,0.5)",
                background: "rgba(157,255,32,0.15)",
                color: "#9DFF20",
                fontSize: 13,
                fontWeight: 600,
                cursor: loading || !input.trim() ? "not-allowed" : "pointer",
                alignSelf: "flex-end",
              }}
            >
              Enviar
            </button>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                padding: "8px 16px",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
                color: "rgba(255,255,255,0.7)",
                fontSize: 12,
                cursor: "pointer",
              }}
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleConcretar}
              disabled={!lastComposition || creating}
              style={{
                padding: "8px 20px",
                borderRadius: 8,
                border: "1px solid rgba(157,255,32,0.5)",
                background: lastComposition
                  ? "rgba(157,255,32,0.2)"
                  : "rgba(255,255,255,0.05)",
                color: lastComposition ? "#9DFF20" : "rgba(255,255,255,0.4)",
                fontSize: 13,
                fontWeight: 600,
                cursor:
                  lastComposition && !creating ? "pointer" : "not-allowed",
              }}
            >
              {creating
                ? "Creando…"
                : "Concretar y abrir editor"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
