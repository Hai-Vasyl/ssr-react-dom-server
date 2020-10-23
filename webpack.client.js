const path = require("path")
const webpack = require("webpack")
const HTMLWebPackPlugin = require("html-webpack-plugin")
const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.base")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const clientConfig = merge(baseConfig, {
  mode: "development",
  target: "web",
  entry: "./client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist", "client"),
  },
  devServer: {
    contentBase: path.join(__dirname, "dist", "client"),
    compress: true,
    port: 9000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  devtool: "inline-source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HTMLWebPackPlugin({
      template: "./client/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
})

module.exports = clientConfig
