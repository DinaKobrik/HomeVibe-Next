import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dummyjson.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  output: "export",
  trailingSlash: true,
  experimental: {
    serverComponentsExternalPackages: ["next/navigation"],
    optimizeCss: false,
  },
};

export default nextConfig;
