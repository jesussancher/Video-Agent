"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      style={{
        padding: "8px 16px",
        borderRadius: 8,
        border: "1px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.06)",
        color: loading ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.7)",
        fontSize: 13,
        cursor: loading ? "not-allowed" : "pointer",
        transition: "all 0.2s ease",
      }}
    >
      {loading ? "Saliendo..." : "Cerrar sesión"}
    </button>
  );
}
