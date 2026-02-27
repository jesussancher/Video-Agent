import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

function getPrivateKey(): string {
  const raw = process.env.FIREBASE_PRIVATE_KEY;
  if (!raw) throw new Error("FIREBASE_PRIVATE_KEY no está definida en .env");

  // El JSON del service account usa \n literales; los convertimos a saltos reales.
  // Si ya contiene saltos reales (multilinea), trim() lo limpia sin romperlo.
  const key = raw.replace(/\\n/g, "\n").trim();

  if (!key.includes("BEGIN PRIVATE KEY")) {
    throw new Error(
      "FIREBASE_PRIVATE_KEY tiene formato incorrecto. Pega el valor completo del campo 'private_key' del JSON del service account, incluyendo '-----BEGIN PRIVATE KEY-----' y '-----END PRIVATE KEY-----'."
    );
  }

  return key;
}

const adminApp =
  getApps().length === 0
    ? initializeApp({
        credential: cert({
          projectId: process.env.FIREBASE_PROJECT_ID!,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
          privateKey: getPrivateKey(),
        }),
      })
    : getApps()[0];

export const adminAuth = getAuth(adminApp);
