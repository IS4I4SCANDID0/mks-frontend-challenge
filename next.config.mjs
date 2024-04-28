/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [{
      protocol: "https", 
      hostname: "https://mks-sistemas.nyc3.digitaloceanspaces.com"
    }],
    domains: [
      "https://mks-sistemas.nyc3.digitaloceanspaces.com",
    ]
  }
};

export default nextConfig;
