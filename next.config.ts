import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "uwjmkfyhjkzicglfdsvz.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/various-pics/**",
      },
    ],
  },
};

export default nextConfig;
