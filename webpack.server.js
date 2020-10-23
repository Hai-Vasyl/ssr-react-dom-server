const path = require("path")
const webpack = require("webpack")
const { merge } = require("webpack-merge")
const baseConfig = require("./webpack.base")

const serverConfig = merge(baseConfig, {
  mode: "development",
  target: "node",
  entry: "./server/index.js",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist", "server"),
  },
  devServer: {
    post: 5000,
    hot: true,
    open: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist", "server"),
  },
  devtool: "inline-source-map",
  plugins: [new webpack.HotModuleReplacementPlugin()],
})

module.exports = [serverConfig]
