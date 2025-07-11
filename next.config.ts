import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "picsum.photos", // 
        port: "",
      },


      {
        protocol: "https",
        hostname: "source.unsplash.com", // 
        port: "",
      },
    ],
  },
};

export default nextConfig;
