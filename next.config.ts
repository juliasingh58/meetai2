import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {

    ignoreBuildErrors: true,
  },
  eslint: {

    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/sign-in",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
