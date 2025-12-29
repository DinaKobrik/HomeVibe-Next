import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        port: "", // пустая строка (необязательно, но для ясности)
        pathname: "/**", // позволяет все пути под этим доменом
      },
    ],
  },
};

export default nextConfig;
