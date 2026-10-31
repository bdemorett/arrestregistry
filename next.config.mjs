/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.arrestregistry.com" }],
        destination: "https://arrestregistry.com/:path*",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
