/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com','mcsgroupsrl.com','backend-api.mcsgroupsrl.com','placeholder.com','127.0.0.1'],
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://backend-api.mcsgroupsrl.com/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
