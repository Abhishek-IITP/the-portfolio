/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'seeklogo.com',
      // add other domains as needed
    ],
    remotePatterns: [
      {
        hostname: "portfolio-image-store.s3.ap-south-1.amazonaws.com",
      },
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
