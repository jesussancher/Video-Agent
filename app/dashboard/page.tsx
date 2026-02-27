import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { redirect } from "next/navigation";
import VideoPlayer from "../VideoPlayer";
import LogoutButton from "../LogoutButton";

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
            Video Agent — Presentation Preview
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
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

      <VideoPlayer />

      <footer
        style={{
          color: "rgba(255,255,255,0.2)",
          fontSize: 12,
          letterSpacing: 1,
        }}
      >
        Powered by Remotion · Next.js · Firebase
      </footer>
    </main>
  );
}
