const path = require('path');

module.exports = {
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
