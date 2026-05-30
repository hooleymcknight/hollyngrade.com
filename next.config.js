/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    experimental: {
        serverActions: {
            bodySizeLimit: '150mb',
        },
        windowHistorySupport: true,
    },
    reactStrictMode: false,
    distDir: 'build',
    // outputFileTracing: false,
    images: {
        unoptimized: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

// module.exports = nextConfig;
export default nextConfig;