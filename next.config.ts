import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  // Old v1 URLs. nginx also sends /az to /a-z-stream-gauntlet, which then lands here.
  async redirects() {
    return [
      { source: "/a-z-stream-gauntlet", destination: "/az-gauntlet", permanent: true },
      { source: "/az", destination: "/az-gauntlet", permanent: true },
      // hooleymcknight.com is sent to /hooleymcknight by nginx; that page is gone in v2.
      { source: "/hooleymcknight", destination: "/", permanent: false },
      // v1 gallery subpages (/koda-and-chasm/koda, /bbq, /view-all, ...). Temporary, since they may come back.
      { source: "/koda-and-chasm/:path+", destination: "/koda-and-chasm", permanent: false },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
