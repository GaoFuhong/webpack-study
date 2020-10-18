const { resolve } = require('path');

module.exports = {
  entry: './webpack4/src/js/index.js',
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'build'),
  },
  mode: 'production',
};
