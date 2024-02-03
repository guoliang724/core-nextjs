const path = require("path");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const baseConfig = require("./webpack.base");
const clientConfig = {
  devtool: "source-map",
  entry: "./src/client",
  output: {
    filename: "js/bundle[hash:5].js",
    path: path.resolve(__dirname, "./public"),
    publicPath:"/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { 
            loader: "css-loader",
            options: {
                modules:{
                    mode: "local",
                    auto: true,
                    localIdentName: "[local]--[hash:5]",
                },
               
            },
          },
        ],
      },
      {
        test:/.(png)|(jpeg)|(jpg)|(gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:5].[ext]'
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!favicon.ico"],
    }),
    new MiniCssExtractPlugin({
      filename: "css/bundle.[hash:5].css",
    }),
    //  new HtmlWebpackPlugin(),
  ],
};

module.exports = merge(baseConfig, clientConfig);
