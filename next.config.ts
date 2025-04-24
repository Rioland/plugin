import type { NextConfig } from "next";
const withFlowbiteReact = require("flowbite-react/plugin/nextjs");

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**', // allows all image paths
      },
    ],
  },
};

export default withFlowbiteReact(nextConfig);



module.exports = withFlowbiteReact(nextConfig);