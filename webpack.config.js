const path = require("path");
const excludeNodeModules = require("webpack-node-externals");

module.exports = {
    mode:"development",
    devtool:"source-map",
    entry:"./src/server",
    output:{
      filename:"server.js"
    },
    watch:true,
    target:"node",
    module:{
        rules:[
            {
                test:/\.jsx?/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-react"]
                    }
                },
                exclude:/node_modules/
            }
        ]
    },
    resolve:{
        alias:{
            "@":path.resolve(__dirname,"src")
        },
        extensions:[".js",".jsx",".css"]
    },
    externals:[excludeNodeModules()],
}
