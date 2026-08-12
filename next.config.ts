import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Nothing custom needed yet — this is the place to add image domains,
  // redirects, or experimental flags as the site grows.

  // Need to look into types
  typescript: {
    // Dangerously allow production builds to successfully complete even if
    // your project has TypeScript errors.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
