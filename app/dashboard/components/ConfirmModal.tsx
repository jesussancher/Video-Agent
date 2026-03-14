"use client";

export interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  /** "confirm" = dos botones (Cancelar + acción). "alert" = solo Cerrar */
  variant: "confirm" | "alert";
  /** Etiqueta del botón principal (ej. "Eliminar"). Solo en variant="confirm" */
  confirmLabel?: string;
  /** Si true, el botón principal usa estilo destructivo (rojo) */
  destructive?: boolean;
  /** Al confirmar. Solo en variant="confirm". Si devuelve Promise, el modal puede cerrar al resolver */
  onConfirm?: () => void | Promise<void>;
  /** Deshabilitar botón de confirmar mientras se ejecuta onConfirm */
  confirmLoading?: boolean;
}

const overlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  padding: 24,
};

const boxStyle: React.CSSProperties = {
  background: "#0d0d10",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 12,
  maxWidth: 400,
  width: "100%",
  padding: 24,
  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
};

const titleStyle: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 600,
  color: "#fff",
  margin: "0 0 12px",
  letterSpacing: 0.5,
};

const messageStyle: React.CSSProperties = {
  fontSize: 14,
  color: "rgba(255,255,255,0.75)",
  lineHeight: 1.5,
  margin: "0 0 24px",
};

const actionsStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "flex-end",
  gap: 12,
  flexWrap: "wrap",
};

const buttonBase: React.CSSProperties = {
  padding: "10px 18px",
  borderRadius: 8,
  fontSize: 13,
  fontWeight: 500,
  cursor: "pointer",
  letterSpacing: 0.5,
  border: "none",
};

export function ConfirmModal({
  open,
  onClose,
  title,
  message,
  variant,
  confirmLabel = "Aceptar",
  destructive,
  onConfirm,
  confirmLoading = false,
}: ConfirmModalProps) {
  if (!open) return null;

  const handleConfirm = async () => {
    if (variant === "alert") {
      onClose();
      return;
    }
    if (onConfirm) {
      try {
        await onConfirm();
        onClose();
      } catch {
        onClose();
      }
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-modal-title"
      aria-describedby="confirm-modal-desc"
      style={overlayStyle}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div style={boxStyle} onClick={(e) => e.stopPropagation()}>
        <h2 id="confirm-modal-title" style={titleStyle}>
          {title}
        </h2>
        <p id="confirm-modal-desc" style={messageStyle}>
          {message}
        </p>
        <div style={actionsStyle}>
          {variant === "confirm" && (
            <button
              type="button"
              onClick={onClose}
              style={{
                ...buttonBase,
                background: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.9)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Cancelar
            </button>
          )}
          <button
            type="button"
            onClick={handleConfirm}
            disabled={confirmLoading}
            style={{
              ...buttonBase,
              background: destructive ? "rgba(255,100,100,0.2)" : "rgba(157,255,32,0.15)",
              color: destructive ? "#ff7878" : "#9DFF20",
              border: destructive ? "1px solid rgba(255,120,120,0.5)" : "1px solid rgba(157,255,32,0.4)",
              opacity: confirmLoading ? 0.8 : 1,
              cursor: confirmLoading ? "wait" : "pointer",
            }}
          >
            {variant === "alert" ? "Cerrar" : confirmLoading ? "…" : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
