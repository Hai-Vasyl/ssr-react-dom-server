const path = require("path")
const webpack = require("webpack")
const TerserPlugin = require("terser-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { StatsWriterPlugin } = require("webpack-stats-plugin")
const nodeExternals = require("webpack-node-externals")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const CompressionPlugin = require("compression-webpack-plugin")
const optimization = {
  minimize: true,
  minimizer: [new TerserPlugin()],
}

const clientProdConfig = {
  mode: "production",
  target: "web",
  entry: "./client/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist", "client"),
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
  optimization,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CleanWebpackPlugin(),
    new OptimizeCssAssetsPlugin(),
    new CompressionPlugin(),
    new StatsWriterPlugin({
      stats: {
        all: false,
        assets: true,
      },
    }),
  ],
}

const serverProdConfig = {
  mode: "production",
  target: "node",
  entry: "./server/index.js",
  externals: [nodeExternals()],
  optimization,
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
  plugins: [
    new CleanWebpackPlugin(),
    new CompressionPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: "production",
      },
    }),
  ],
}

module.exports = [serverProdConfig, clientProdConfig]
