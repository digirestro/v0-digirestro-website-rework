/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/become-a-partner",
        destination: "/become-a-reseller",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
