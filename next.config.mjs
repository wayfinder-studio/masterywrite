/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/masterywrite",
  assetPrefix: "/masterywrite/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
