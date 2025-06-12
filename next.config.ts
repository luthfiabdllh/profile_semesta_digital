import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Mengizinkan semua domain
      },
    ],
  },
};

export default nextConfig;
