const path = require("path");



module.exports = {
    mode:"development",
    watch:true,
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
}
