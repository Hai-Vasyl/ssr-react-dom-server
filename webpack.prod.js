const path = require("path")
const webpack = require("webpack")
const HTMLWebPackPlugin = require("html-webpack-plugin")
const {merge} = require("webpack-merge")
const baseConfig = require("./webpack.base")
const TerserPlugin = require("terser-webpack-plugin")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const optimization = {
  minimize: true,
  minimizer: [new TerserPlugin()],
},

const clientProdConfig = merge(baseConfig, {
  mode: "production",
  target: "web",
  entry: "./client/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist", "client"),
  },
  optimization,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HTMLWebPackPlugin({
      template: "./client/index.html",
    }),
    new CleanWebpackPlugin(),
    new CompressionPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
})

const serverProdConfig = merge(baseConfig, {
  mode: "production",
  target: "node",
  entry: "./server/index.js",
  optimization,
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist", "server"),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
     new CleanWebpackPlugin(), new CompressionPlugin(), new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: "production"
    }
  })],
})

module.exports = [serverProdConfig, clientProdConfig]
