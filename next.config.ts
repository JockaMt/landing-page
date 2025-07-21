import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.brilliantsoftware.com.br',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.brilliantsoftware.com.br',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
