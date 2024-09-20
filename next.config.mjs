/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.ghost.org",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "http://localhost:2368",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
