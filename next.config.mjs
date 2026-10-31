/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // the page script owns its DOM; strict-mode double effects are unnecessary
  poweredByHeader: false,
  async redirects() {
    // bragency.cc (apex) -> https://www.bragency.cc
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'bragency.cc' }],
        destination: 'https://www.bragency.cc/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
