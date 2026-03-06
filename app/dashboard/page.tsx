import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";
import VideoPlayer from "../VideoPlayer";
import LogoutButton from "../LogoutButton";
import InitFirebaseButton from "../InitFirebaseButton";
import { listCompositions } from "../../src/lib/db";
import type { CompositionDTO } from "../../src/types";

const SESSION_SECRET = new TextEncoder().encode(process.env.SESSION_SECRET!);

async function getUser() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("session")?.value;
  if (!sessionToken) return null;
  try {
    const { payload } = await jwtVerify(sessionToken, SESSION_SECRET);
    return payload as { uid: string; email: string; name: string; picture: string };
  } catch {
    return null;
  }
}

export default async function DashboardPage() {
  const user = await getUser();
  if (!user) redirect("/login");

  // Carga las composiciones del usuario desde Firestore
  let composition: CompositionDTO | undefined;
  let firebaseCredentialError = false;
  try {
    const compositions = await listCompositions(user.uid);
    composition = compositions[0]; // Muestra la más reciente
  } catch (err) {
    console.error("[dashboard] Error cargando composiciones:", err);
    const msg = err instanceof Error ? err.message : String(err);
    firebaseCredentialError =
      msg.includes("UNAUTHENTICATED") ||
      msg.includes("Invalid JWT Signature") ||
      msg.includes("invalid authentication credentials");
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#050508",
        padding: "40px 20px",
        gap: 32,
      }}
    >
      {firebaseCredentialError && (
        <div
          style={{
            width: "100%",
            maxWidth: 960,
            padding: 16,
            borderRadius: 8,
            background: "rgba(255,100,100,0.15)",
            border: "1px solid rgba(255,100,100,0.3)",
            color: "#ff6b6b",
            fontSize: 13,
            lineHeight: 1.5,
          }}
        >
          <strong>Error de credenciales Firebase</strong>
          <p style={{ margin: "8px 0 0", opacity: 0.9 }}>
            (1) Sincroniza la hora del sistema. (2) Regenera la clave en Firebase
            Console → Configuración → Cuentas de servicio → Generar nueva clave
            privada. Sustituye el archivo JSON en la raíz del proyecto.
          </p>
        </div>
      )}

      <header
        style={{
          width: "100%",
          maxWidth: 960,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#9DFF20",
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            Lait Technology
          </h1>
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {composition ? composition.title : "Sin composiciones"}
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="/editor"
            style={{
              padding: "8px 16px",
              borderRadius: 8,
              border: "1px solid rgba(157,255,32,0.3)",
              background: "rgba(157,255,32,0.08)",
              color: "#9DFF20",
              fontSize: 13,
              textDecoration: "none",
              letterSpacing: 1,
            }}
          >
            Remotion Studio
          </a>
          {user.picture && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={user.picture}
              alt={user.name}
              width={36}
              height={36}
              style={{ borderRadius: "50%", border: "2px solid rgba(157,255,32,0.3)" }}
            />
          )}
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: 13, color: "#ffffff", margin: 0 }}>{user.name}</p>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", margin: 0 }}>
              {user.email}
            </p>
          </div>
          <LogoutButton />
        </div>
      </header>

      <VideoPlayer composition={composition} />

      {composition && (
        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 11, letterSpacing: 1 }}>
          {composition.sequences.length} escenas ·{" "}
          {(composition.totalDurationInFrames / composition.fps).toFixed(1)}s ·{" "}
          {composition.width}×{composition.height} · {composition.fps}fps
        </p>
      )}

      <footer
        style={{
          color: "rgba(255,255,255,0.2)",
          fontSize: 12,
          letterSpacing: 1,
        }}
      >
        Powered by Remotion · Next.js · Firebase
      </footer>

      <InitFirebaseButton />
    </main>
  );
}
