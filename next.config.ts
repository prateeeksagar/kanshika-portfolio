import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 uses Turbopack by default.
  // canvas alias is not needed for Turbopack (react-pdf handles it at runtime via worker URL).
  turbopack: {},
};

export default nextConfig;

