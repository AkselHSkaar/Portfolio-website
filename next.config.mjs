/** @type {import('next').NextConfig} */ 

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://www.akselskaar.no/:path*',
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'akselskaar.no',
          },
        ],
      },
    ]
  },
}

export default nextConfig
