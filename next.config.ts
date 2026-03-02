import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // ISR/SSG (Server features) uchun o'chirildi
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;