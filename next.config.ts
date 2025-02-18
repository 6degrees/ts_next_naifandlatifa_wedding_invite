import type { NextConfig } from 'next'
import path from 'path';

const config: NextConfig = {
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '/',
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.alias['@radix-ui/react-tabs'] = path.resolve(__dirname, 'node_modules/@radix-ui/react-tabs');
    return config;
  },

}

export default config
