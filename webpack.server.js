/* eslint-disable import/no-extraneous-dependencies */
const path = require("path")
const nodeExternals = require("webpack-node-externals")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
// const { merge } = require("webpack-merge")
// const baseConfig = require("./webpack.base")

// const serverConfig = merge(baseConfig, {
//   mode: "development",
//   target: "node",
//   entry: "./server/index.js",
//   output: {
//     filename: "server.js",
//     path: path.resolve(__dirname, "dist", "server"),
//   },
//   devServer: {
//     post: 5000,
//     hot: true,
//     open: true,
//     historyApiFallback: true,
//     contentBase: path.resolve(__dirname, "dist", "server"),
//   },
//   devtool: "inline-source-map",
//   plugins: [new webpack.HotModuleReplacementPlugin()],
// })

const serverConfig = {
  mode: "development",
  target: "node",
  externals: [nodeExternals()],
  entry: "./server/index.js",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist", "server"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  // devServer: {
  //   post: 5000,
  //   hot: true,
  //   open: true,
  //   historyApiFallback: true,
  //   contentBase: path.resolve(__dirname, "dist", "server"),
  // },
  devtool: "inline-source-map",
  plugins: [
    // new webpack.HotModuleReplacementPlugin()
    new CleanWebpackPlugin(),
  ],
}

module.exports = serverConfig
