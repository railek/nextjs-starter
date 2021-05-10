const path = require('path');

module.exports = {
  future: {
    webpack5: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config) => {
    const configuration = config;
    configuration.optimization.providedExports = true;
    configuration.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './'),
    };
    return config;
  },
};
