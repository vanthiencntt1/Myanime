/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  basePath: process.env.NODE_ENV === "production" ? "" : "",
  publicRuntimeConfig: {
    apiPath: "http://mqsoft.ddns.net:9998",
    contextPath: process.env.NODE_ENV === "production" ? "" : "",
    uploadPath:
      process.env.NODE_ENV === "production" ? "/upload.php" : "/api/upload",
  },
};

export default nextConfig;
