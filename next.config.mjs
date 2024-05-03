import { isServer } from '@tanstack/react-query';
import { config } from 'process';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    // domains: [
    //   "mks-sistemas.nyc3.digitaloceanspaces.com",
    // ]
    remotePatterns: [{
      protocol: "https", 
      hostname: "mks-sistemas.nyc3.digitaloceanspaces.com"
    }],
  },
};

export default nextConfig;


