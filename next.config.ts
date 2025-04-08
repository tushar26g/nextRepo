import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Uncomment if using App Router
    // appDir: true,
  },

  // Optional redirects
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/mcqs/dec-2018-Math",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = {
  typescript: {
    ignoreBuildErrors: true, // 👈 Skip TypeScript errors during build
  },
};

export default nextConfig;
