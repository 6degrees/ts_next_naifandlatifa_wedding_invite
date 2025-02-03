import type { NextConfig } from 'next'

const config: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '/',
  trailingSlash: true,
}

export default config
