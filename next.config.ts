import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Set by the GitHub Pages workflow when the site is served from a sub-path.
  basePath: process.env.PAGES_BASE_PATH || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
