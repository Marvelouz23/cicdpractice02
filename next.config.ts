import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/cicdpractice02",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
