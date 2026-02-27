import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD35avrv9uT7V9OkbshAa2WHUgg_VicikU",
  authDomain: "lait-video-editor.firebaseapp.com",
  projectId: "lait-video-editor",
  storageBucket: "lait-video-editor.firebasestorage.app",
  messagingSenderId: "1086842554610",
  appId: "1:1086842554610:web:58c97d24872a8d1007e86b",
  measurementId: "G-TE2ZP1EQVC",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
