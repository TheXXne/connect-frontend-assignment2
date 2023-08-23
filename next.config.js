/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'teststoragefiles.clo-set.com',
    ]
  }
}

module.exports = nextConfig
