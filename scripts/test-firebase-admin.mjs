/**
 * Prueba la conexión de Firebase Admin.
 * Ejecutar: node scripts/test-firebase-admin.mjs
 */
import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import path from "path";
import fs from "fs";

const defaultPath = path.join(
  process.cwd(),
  "lait-video-editor-firebase-adminsdk-fbsvc-feeabf3dcd.json"
);

if (!fs.existsSync(defaultPath)) {
  console.error("No se encuentra el archivo del service account.");
  process.exit(1);
}

const app = initializeApp({
  credential: cert(defaultPath),
  projectId: "lait-video-editor",
});

async function main() {
  console.log("Probando Firebase Admin...\n");

  try {
    await getAuth(app).listUsers(1);
    console.log("✓ Auth API: OK");
  } catch (e) {
    console.error("✗ Auth API:", e.message);
    console.log("\nSolución: (1) Sincroniza la hora del sistema. (2) Regenera la clave en Firebase Console.");
    process.exit(1);
  }

  try {
    const db = getFirestore(app);
    const snap = await db.collection("users").limit(1).get();
    console.log("✓ Firestore: OK");
  } catch (e) {
    console.error("✗ Firestore:", e.message);
    process.exit(1);
  }

  console.log("\nTodo correcto.");
}

main();
