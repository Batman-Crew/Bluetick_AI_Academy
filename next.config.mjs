/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Required for static export
        formats: ['image/webp'], // Use WebP format
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    trailingSlash: true,
    // Performance optimizations
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,
    // Optimize production build
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production' ? {
            exclude: ['error', 'warn'],
        } : false,
    },
    // Enable experimental features for better performance
    experimental: {
        optimizePackageImports: ['react-icons', 'lucide-react', 'framer-motion'],
    },
};

export default nextConfig;
