const nextConfig = {
  output: 'export',
  images: {
    domains: ["img.freepik.com", "veterinaire-tour-hassan.com"],
    unoptimized: true, // Required for static export
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.node/,
      use: "raw-loader",
    });
    return config;
  },
  // Remove these if you had them:
  // assetPrefix: '/raymond-chii.github.io/',
  // basePath: '/raymond-chii.github.io',
};

export default nextConfig;