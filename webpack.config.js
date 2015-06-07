var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [path.resolve(__dirname, 'app', 'main.js')],
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'app.dev.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          optional: ['runtime'],
        },
      }
    ],
  },
  eslint: {
    failOnWarning: false,
    failOnError: false,
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Button Clicker',
  })],
};
