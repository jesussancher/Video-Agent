import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow Remotion to bundle its dependencies
  transpilePackages: ["remotion", "@remotion/player", "@remotion/transitions", "@remotion/google-fonts"],
};

export default nextConfig;
