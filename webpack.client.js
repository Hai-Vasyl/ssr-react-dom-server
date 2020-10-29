const path = require("path")
// const webpack = require("webpack")
// const HTMLWebPackPlugin = require("html-webpack-plugin")
// const { merge } = require("webpack-merge")
// const baseConfig = require("./webpack.base")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { StatsWriterPlugin } = require("webpack-stats-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

const clientConfig = {
  mode: "development",
  target: "web",
  entry: "./client/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist", "client"),
  },
  // devServer: {
  //   contentBase: path.join(__dirname, "dist", "client"),
  //   compress: true,
  //   port: 9000,
  //   hot: true,
  //   open: true,
  //   historyApiFallback: true,
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(c|sc|sa)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "/dist/client",
              hmr: true,
              reloadAll: true,
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  devtool: "inline-source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    // new HTMLWebPackPlugin({
    //   template: "./client/index.html",
    // }),
    new CleanWebpackPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    new StatsWriterPlugin({
      stats: {
        all: false,
        assets: true,
      },
    }),
  ],
}

module.exports = clientConfig
