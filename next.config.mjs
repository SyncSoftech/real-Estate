/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos", "lavenderblush-dog-942964.hostingersite.com"], // ✅ allow external images
  },
};


export default nextConfig;
