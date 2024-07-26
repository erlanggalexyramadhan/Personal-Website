/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/Personal-Website",
    assetPrefix: "/Personal-Website/",
    images: {
    loader: 'default',
    path: '/Personal-Website/_next/image',
    disableStaticImages: true,
    domains: ['erlanggalexyramadhan.github.com'],
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
