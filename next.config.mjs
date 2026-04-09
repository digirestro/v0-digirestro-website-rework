/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "cdn.jsdelivr.net", pathname: "/**" },
      { protocol: "https", hostname: "ik.imagekit.io", pathname: "/**" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/become-a-partner",
        destination: "/become-a-reseller",
        permanent: true,
      },
      {
        source: "/testimonials",
        destination: "/#testimonials",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
