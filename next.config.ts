import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default nextConfig;

module.exports = {
  experimental: {
    appDir: true,
  },
};

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: "/",
//         destination: "/mcqs/dec-2018-Math", // Replace `1` with a default or dynamic ID
//         permanent: true, // Use true for permanent redirect (HTTP 308), false for temporary (HTTP 307)
//       },
//     ];
//   },
// };
