/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
        
      },
      // {
      //   protocol: 'https',
      //   hostname: 'other.com',
      //   port: '',
      //   pathname: '/**',
        
      // },
    ],
  },
};

export default nextConfig;
