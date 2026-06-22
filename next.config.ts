import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90, 95],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "puretimepiecesco.com"
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com"
      }
    ]
  },

  experimental: {
    optimizePackageImports: ["motion", "gsap"]
  }
};

export default nextConfig;