var webpack = require('webpack');
var path = require('path');
var distPath = path.resolve(__dirname, '../dist');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'eval',
  context: path.resolve(__dirname, '../src'),
  entry: './index.js',
  output: {
    path: distPath,
    filename: 'proto.min.js'
  },
  plugins: [
    new CleanWebpackPlugin([distPath], {
      root: path.resolve(__dirname, '..'),
      verbose: true,
      dry: false
    })
  ]
};