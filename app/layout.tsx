import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lait Technology - Video Agent",
  description: "AI-powered video creation for Lait Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
