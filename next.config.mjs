/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.akselskaar.no' }],
        destination: 'https://akselskaar.no/:path*',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'akselskaar.blob.core.windows.net',
        port: '',
        pathname: '/portfolio/**',
      },
    ],
  },
}

export default nextConfig
