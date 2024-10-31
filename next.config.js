const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['next/image'] = path.resolve(__dirname, 'node_modules/next/dist/client/image.js');
    return config;
  },
};
