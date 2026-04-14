const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/history-explorer-card.js',
  output: {
    filename: 'history-explorer-card.js',
    path: __dirname + '/dist',
  },
  mode: 'production',
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
};
