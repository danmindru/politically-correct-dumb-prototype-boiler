var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: './index.js',
  output: {
    path: __dirname + '/build',
    filename: 'proto.min.js'
  },
  plugins: []
};