/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    experimental: {
        serverActions: true,
        windowHistorySupport: true,
        serverActions: {
            bodySizeLimit: '10mb',
        },
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