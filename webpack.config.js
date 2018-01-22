var path = require('path');
var webpack = require('webpack');

var version = require('./package.json').version;
var name = require('./package.json').name;

module.exports = {
  entry: path.resolve(__dirname + '/src/index.js'),
  output: {
    path: path.resolve(__dirname + '/build'),
    filename: name + '.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins() {
                return [require('autoprefixer')];
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'html-loader',
      },
    ],
  },
  externals: {
    jquery: '$',
    angular: 'angular',
    lodash: '_',
  },
  devtool: 'sourcemap',
  plugins: [
    new webpack.BannerPlugin(
      '\
' +
        name +
        '\n\
author: Bret Little\n\
copyright: 2015\n\
license: MIT\n\
version: ' +
        version
    ),
  ],
};
