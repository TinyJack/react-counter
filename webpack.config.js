var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: { index: './src/js/index.js' },
  output: {
    path: __dirname,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  module: {
    loaders: [ { test: /\.js?$/, loader: 'babel' } ],
    query: {
          presets: [
              require.resolve('babel-preset-es2015'),
              require.resolve('babel-preset-react'),
          ]
      },
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  ]
};