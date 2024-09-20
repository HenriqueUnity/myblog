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
        protocol: "https",
        hostname: "static.ghost.org",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
