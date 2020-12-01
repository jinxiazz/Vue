//开发时配置文件
//引入配置文件合并插件
const WebpackMerge=require("webpack-merge");
//引入baseConfig
const baseConfig=require("./base.config")

module.exports=WebpackMerge(baseConfig,{
    devServer:{
        //指定文件夹提供本地服务 默认是根文件夹
        contentBase:'/dist',
        //是否要页面实时刷新
        inline:true,
    }
})
