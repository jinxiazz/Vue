//1、使用common.js导入
/*const {add,avg} = require("./mathUtils");

add(10,20);
avg(2,5);*/

//2、使用es6导入
import {add,avg,num} from "./js/mathUtils";

add(20,20);
avg(20,5);

console.log(num)

//3、引入css文件
require("./css/normal.css");

//4、引入less文件
require("./css/special.less");

//5、引入vue
import Vue from "vue";
// import app from './vue/app.js';
import App from './vue/App.vue';

const vue=new Vue({
    el:"#app",
    template:"<App/>",
    components:{
        App
    }
})