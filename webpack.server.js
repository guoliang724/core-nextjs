const path = require("path");
const excludeNodeModules = require("webpack-node-externals");
const { merge } = require("webpack-merge");

const baseConfig = require("./webpack.base");
const serverConfig = {
  devtool: "source-map",
  entry: "./src/server",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath:"/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "isomorphic-style-loader",
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
          emit: false,
        },
      }
    ],
  },
  target: "node",
  externals: [excludeNodeModules()],
};

module.exports = merge(baseConfig, serverConfig);
