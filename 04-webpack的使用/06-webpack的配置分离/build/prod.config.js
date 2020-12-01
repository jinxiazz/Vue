//生产时配置文件
//引入js压缩插件
const UglifyjsWebpackPlugin=require("uglifyjs-webpack-plugin");
//引入配置文件合并插件
const WebpackMerge=require("webpack-merge");
//引入baseConfig
const baseConfig=require("./base.config");

module.exports=WebpackMerge(baseConfig,{
    plugins:[
        new UglifyjsWebpackPlugin(),
    ]
})
