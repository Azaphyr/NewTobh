/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000']
    }
  },
  // Configure Prisma for Edge Runtime
  webpack: (config, { isServer }) => {
    // Only look in the project directory and node_modules
    config.resolve = {
      ...config.resolve,
      modules: ['node_modules'],
      fallback: {
        fs: false,
        path: false
      }
    }
    
    // Ignore system directories
    config.watchOptions = {
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/.*/**',
        'C:/**'
      ]
    }

    // Handle Prisma client
    if (isServer) {
      config.externals = [...(config.externals || []), { '@prisma/client': 'commonjs @prisma/client' }]
    }
    
    return config
  },
  // Disable automatic static optimization
  poweredByHeader: false,
  generateEtags: false,
  compress: false,
  productionBrowserSourceMaps: false
}

export default nextConfig
