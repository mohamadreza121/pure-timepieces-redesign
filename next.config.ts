import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
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
    optimizePackageImports: ["lucide-react", "motion", "gsap"]
  }
};

export default nextConfig;
