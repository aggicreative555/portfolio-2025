/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/Projects/SwanCom',
        destination: '/Projects/swancom',
        permanent: true,
      },
      {
        source: '/Projects/Swancom',
        destination: '/Projects/swancom',
        permanent: true,
      },
      {
        source: '/Projects/swanCom',
        destination: '/Projects/swancom',
        permanent: true,
      },
      {
        source: '/Projects/SWANCOM',
        destination: '/Projects/swancom',
        permanent: true,
      },
      {
        source: '/Projects/SwanCom/:path*',
        destination: '/Projects/swancom/:path*',
        permanent: true,
      },
      {
        source: '/Projects/Swancom/:path*',
        destination: '/Projects/swancom/:path*',
        permanent: true,
      },
      {
        source: '/Projects/swanCom/:path*',
        destination: '/Projects/swancom/:path*',
        permanent: true,
      },
      {
        source: '/Projects/SWANCOM/:path*',
        destination: '/Projects/swancom/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
