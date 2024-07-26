/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['aceternity.com'],
    },
    images: {
        remotePatterns: [
            {
                hostname: 'firebasestorage.googleapis.com',
            }
        ]

    }

};

export default nextConfig;
