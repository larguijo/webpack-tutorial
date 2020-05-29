const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[hash].js",
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "style.[hash].css" }),
    new HtmlWebpackPlugin({
      hash: true,
      filename: "index.html",
      template: "public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env"] },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
