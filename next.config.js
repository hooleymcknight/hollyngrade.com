/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    experimental: {
        serverActions: true,
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