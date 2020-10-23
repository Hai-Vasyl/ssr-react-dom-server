const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const isDev = process.env.NODE_ENV === "development"

module.exports = {
  mode: isDev ? "development" : "production",

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
              publicPath: "/public/",
              hmr: isDev,
              reloadAll: true,
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
}
