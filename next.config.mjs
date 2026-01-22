/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '9091',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '9091',
        pathname: '/**',
      },
    ],
    // Also allow any hostname if needed (for production)
    // uncomment the following if you need to allow images from other domains
    // domains: ['localhost'],
  },
};

export default nextConfig;
