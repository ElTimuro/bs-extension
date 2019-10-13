const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    filename: "main.bundle.js",
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyWebpackPlugin(
      [
        { from: "./_locales/", to: "./_locales", force: true },
        { from: "./manifest.json", force: true }
      ]
    ),
    new webpack.HotModuleReplacementPlugin()
  ]
};