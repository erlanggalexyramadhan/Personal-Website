/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/Personal-Website",
    assetPrefix: "/Personal-Website",
    images: {
    loader: 'imgix',
    path: '/',
  },
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
