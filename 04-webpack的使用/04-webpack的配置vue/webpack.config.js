//1、引入node的path模块
const path=require("path");

//2、定义入口以及出口
module.exports={
    entry:'./src/main.js',//入口
    output: {//出口
        path: path.resolve(__dirname, 'dist'),//绝对路径
        filename:'bundle.js',
        publicPath:'dist/',//与url有关的都会在路径前加上 dist/
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                /*
                * css-loader    只负责css文件进行加载
                * style-loader  只负责将样式添加到DOM中
                * 多个loader时执行顺序是从右到左
                * */
                use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            /*
                            * limit 默认8kb
                            * 图片大小<limit  则将图片编译成base64字符串形式
                            * 图片大小>limit  则需要使用file-loader模块进行转换
                            * */
                            limit: 25000,
                            /*
                            * 防止命名重复：  .是连接符
                            *   name:'文件夹名/[name->原来图片名字].[hash->hash值 :8->保留8位].[ext->图片原来的扩展名]'
                            * */
                            name:'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                /*
                * exclude  排除
                * include  包含
                * */
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test:/\.vue$/,
                use:['vue-loader']
            },
        ]
    },
    resolve:{
        extensions:['.js','.css','.vue'],
        //alias：别名  resolve:解决路径问题   extensions:扩展名
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    }
}