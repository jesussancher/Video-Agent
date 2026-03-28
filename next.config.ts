import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Remotion to bundle its dependencies
  transpilePackages: ["remotion", "@remotion/player", "@remotion/transitions", "@remotion/google-fonts"],
  // Keep native Node packages external — do not bundle with Next.js webpack
  serverExternalPackages: [
    "@remotion/renderer",
    "@remotion/bundler",
    "firebase-admin",
    "@google-cloud/storage",
    "@google-cloud/firestore",
    "@grpc/grpc-js",
    "@grpc/proto-loader",
  ],
};

export default nextConfig;
