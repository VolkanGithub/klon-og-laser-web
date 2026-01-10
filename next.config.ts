/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Statik exportta resim optimizasyonunu kapatmalıyız
  },
};

export default nextConfig;