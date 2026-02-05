import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Buni yoqing!
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;