import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Disable static export for development
  // output: 'export',
  
  // Configure images
  images: { 
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "tribesunite.vercel.app" },
      { protocol: "https", hostname: "localhost" }
    ]
  },
  
  // Enable experimental features
  experimental: {
    optimizePackageImports: ['lucide-react'],
    // Enable CSS optimizations
    optimizeCss: true,
  },
  
  // Configure compiler
  compiler: {
    // Remove styledComponents if not using it
    // styledComponents: true,
  },
  
  // Enable React Strict Mode
  reactStrictMode: true,
  
  // Configure webpack for better CSS handling
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
  
  // Configure webpack
  webpack: (config, { isServer }) => {
    // Important: return the modified config
    return config;
  }
};

export default nextConfig;
