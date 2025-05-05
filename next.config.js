const path = require('path');

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
      allowedOrigins: ['localhost:3000'],
    },
  },
  webpack(config, { isServer }) {
    config.resolve = {
      ...config.resolve,
      modules: [path.resolve('./node_modules')],
      fallback: {
        fs: false,
        path: false,
      },
    };

    config.watchOptions = {
      ...config.watchOptions,
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/.*/**',
        '**/dist/**',
        '**/build/**',
        '**/Application Data/**',   // Exclude Application Data folder
        '**/Users/*/Application Data/**',   // Exclude Application Data folder
        '**/Users/Application Data/**',   // Exclude Application Data folder
        '**/AppData/**',            // Exclude AppData folder
        '**/Cookies/**',            // Exclude Cookies folder
        '**/Program Files/**',      // Exclude Program Files folder
        '**/Windows/**',            // Exclude Windows folder
        '**/Local Settings/**',     // Exclude Local Settings folder
        '**/Temp/**',               // Exclude Temp folder
        '**/Users/*/AppData/**',    // More explicit exclusion for AppData
        '**/Users/*/Cookies/**',    // More explicit exclusion for Cookies
        '**/Users/Cookies/**',    // More explicit exclusion for Cookies
        '**/Users/*/Local Settings/**', // More explicit exclusion for Local Settings
        '**/Users/*/Temp/**',       // More explicit exclusion for Temp
      ],
    };

    if (isServer) {
      config.externals = [
        ...(config.externals || []),
        { '@prisma/client': 'commonjs @prisma/client' },
      ];
    }

    return config;
  },
  poweredByHeader: false,
  generateEtags: false,
  compress: false,
  productionBrowserSourceMaps: false,
};

module.exports = nextConfig;
