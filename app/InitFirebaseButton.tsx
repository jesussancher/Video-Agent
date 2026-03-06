"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function InitFirebaseButton() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleInit = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/compositions/init", {
        method: "POST",
        credentials: "include",
      });
      let data: { error?: string; details?: string };
      try {
        data = await res.json();
      } catch {
        data = { error: `HTTP ${res.status}`, details: await res.text() };
      }
      if (!res.ok) {
        const msg = data.details
          ? `${data.error}: ${data.details}`
          : data.error ?? "Error al inicializar";
        throw new Error(msg);
      }
      setMessage("Colección inicializada correctamente");
      router.refresh();
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 8,
      }}
    >
      {message && (
        <span
          style={{
            fontSize: 12,
            color: message.startsWith("Colección") ? "#9DFF20" : "#ff4444",
            padding: "4px 8px",
            borderRadius: 6,
            background: "rgba(0,0,0,0.6)",
          }}
        >
          {message}
        </span>
      )}
      <button
        onClick={handleInit}
        disabled={loading}
        title="Inicializar colección en Firebase con el proyecto actual"
        style={{
          width: 56,
          height: 56,
          borderRadius: "50%",
          border: "2px solid rgba(157,255,32,0.5)",
          background: "rgba(157,255,32,0.12)",
          color: "#9DFF20",
          cursor: loading ? "not-allowed" : "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          transition: "all 0.2s ease",
        }}
      >
        {loading ? (
          <span style={{ fontSize: 18 }}>⋯</span>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
          </svg>
        )}
      </button>
    </div>
  );
}
