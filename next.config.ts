import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: "./", // relative path to your Next.js root
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // allow all paths under this host
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // allow all paths under this host
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        pathname: "/**", // allow all paths under this host
      },
    ],
    disableStaticImages: false,
    minimumCacheTTL: 60, // cache images for 60 seconds
  },
};

export default nextConfig;
