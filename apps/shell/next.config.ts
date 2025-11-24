import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    externalDir: true,
  },

  async rewrites() {
    return [
      {
        source: '/products/:path*',
        destination: 'http://localhost:3001/:path*',
      },
      {
        source: '/cart/:path*',
        destination: 'http://localhost:3002/:path*',
      },
      {
        source: '/auth/:path*',
        destination: 'http://localhost:3003/:path*',
      },
    ];
  },
};

export default nextConfig;
