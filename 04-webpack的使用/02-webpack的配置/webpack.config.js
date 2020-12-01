//1、引入node的path模块
const path=require("path");

//2、定义入口以及出口
module.exports={
    entry:'./src/main.js',//入口
    output: {//出口
        path: path.resolve(__dirname, 'dist'),//绝对路径
        filename:'bundle.js'
    }
}