import VideoPlayer from "./VideoPlayer";

export default function Home() {
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
      <header style={{ textAlign: "center" }}>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: "#9DFF20",
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 8,
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
      </header>

      <VideoPlayer />

      <footer
        style={{
          color: "rgba(255,255,255,0.2)",
          fontSize: 12,
          letterSpacing: 1,
        }}
      >
        Powered by Remotion · Next.js
      </footer>
    </main>
  );
}
