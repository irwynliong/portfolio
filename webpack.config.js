const path = require('path');

module.exports = {
  resolve: {
    alias: {
      'next/image': path.resolve(__dirname, 'node_modules/next/dist/client/image.js'),
    },
  },
};
