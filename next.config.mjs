/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/Personal-Website",
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
