/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wkztpceowgpsbflkyktb.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
    qualities: [75, 80, 100],
  },
};

export default nextConfig;
