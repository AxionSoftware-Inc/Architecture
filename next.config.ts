import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // ISR uchun buni olib tashladik (SSG/ISR rejimida ishlaydi)
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
