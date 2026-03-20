const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/history-explorer-card.js',
  output: {
    filename: '../history-explorer-card.js',
  },
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
};