import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getStorage } from "firebase-admin/storage";
import path from "path";
import fs from "fs";

const PROJECT_ID = process.env.FIREBASE_PROJECT_ID ?? "lait-video-editor";
const STORAGE_BUCKET =
  process.env.FIREBASE_STORAGE_BUCKET?.trim() ||
  "lait-video-editor.firebasestorage.app";

/** Mensaje de ayuda cuando las credenciales fallan (reloj o clave revocada) */
export const FIREBASE_CREDENTIAL_HELP =
  "Si ves 'Invalid JWT Signature' o 'UNAUTHENTICATED': (1) Sincroniza la hora del sistema. (2) Regenera la clave en Firebase Console → Configuración → Cuentas de servicio → Generar nueva clave privada.";

function getCredential() {
  // 1. GOOGLE_APPLICATION_CREDENTIALS — estándar de Google Cloud
  const adcPath =
    process.env.GOOGLE_APPLICATION_CREDENTIALS ??
    "lait-video-editor-firebase-adminsdk-fbsvc-423ef0596b.json";
  const resolvedPath = path.isAbsolute(adcPath)
    ? adcPath
    : path.resolve(process.cwd(), adcPath);
  if (fs.existsSync(resolvedPath)) {
    return cert(resolvedPath);
  }
  if (process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    throw new Error(
      `GOOGLE_APPLICATION_CREDENTIALS apunta a un archivo inexistente: ${resolvedPath}`
    );
  }

  // 2. Archivo de service account (FIREBASE_SERVICE_ACCOUNT_PATH o *-adminsdk-*.json)
  const candidates = process.env.FIREBASE_SERVICE_ACCOUNT_PATH
    ? [process.env.FIREBASE_SERVICE_ACCOUNT_PATH]
    : [
        "lait-video-editor-firebase-adminsdk-fbsvc-423ef0596b.json",
        "lait-video-editor-firebase-adminsdk-fbsvc-feeabf3dcd.json",
      ];
  for (const name of candidates) {
    const p = path.join(process.cwd(), name);
    if (fs.existsSync(p)) {
      try {
        return cert(p);
      } catch {
        continue;
      }
    }
  }

  // 3. Variables de entorno (FIREBASE_PRIVATE_KEY, etc.)
  const raw = process.env.FIREBASE_PRIVATE_KEY;
  if (!raw) {
    throw new Error(
      "Configura Firebase Admin: GOOGLE_APPLICATION_CREDENTIALS, el archivo JSON del service account, o FIREBASE_PRIVATE_KEY en .env"
    );
  }
  const privateKey = raw.replace(/\\n/g, "\n").trim();
  return cert({
    projectId: process.env.FIREBASE_PROJECT_ID!,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
    privateKey,
  });
}

export const adminApp =
  getApps().length === 0
    ? initializeApp({
        credential: getCredential(),
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
      })
    : getApps()[0];

export const adminAuth = getAuth(adminApp);

/** Bucket principal: gs://lait-video-editor.firebasestorage.app */
export const adminStorage = getStorage(adminApp);
