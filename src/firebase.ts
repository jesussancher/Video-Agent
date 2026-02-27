import { initializeApp, getApps } from "firebase/app";
import type { Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD35avrv9uT7V9OkbshAa2WHUgg_VicikU",
  authDomain: "lait-video-editor.firebaseapp.com",
  projectId: "lait-video-editor",
  storageBucket: "lait-video-editor.firebasestorage.app",
  messagingSenderId: "1086842554610",
  appId: "1:1086842554610:web:58c97d24872a8d1007e86b",
  measurementId: "G-TE2ZP1EQVC",
};

export const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export async function getAnalyticsInstance(): Promise<Analytics | null> {
  if (typeof window === "undefined") return null;
  const { getAnalytics } = await import("firebase/analytics");
  return getAnalytics(app);
}
