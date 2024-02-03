const path = require("path");
const excludeNodeModules = require("webpack-node-externals");
const {merge} = require("webpack-merge");


const baseConfig = require("./webpack.base")
const serverConfig = {
    devtool:"source-map",
    entry:"./src/server",
    output:{
      filename:"server.js",
    },
    target:"node",
    externals:[excludeNodeModules()],
}

module.exports = merge(baseConfig,serverConfig);
