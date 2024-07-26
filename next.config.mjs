/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/Personal-Website",
    images: {
        domains: ['github.com'],
    },
    images: {
        remotePatterns: [
            {
                hostname: 'github.com',
            }
        ]

    }

};

export default nextConfig;
