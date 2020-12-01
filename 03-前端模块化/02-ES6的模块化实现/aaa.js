var name="admin";
var age=20;
var flag=true;

function sum(num1,num2){
    console.log(num1+num2)
}

//1、导出方式一
export {flag,sum}

//2、导出方式二  直接将定义好的变量导出
export var str1="aaa";
export var str2="bbb";

//3、导出方式三 函数/类
export function print(arg){
    console.log(arg);
}

export class Person{
    run(){
        console.log("在奔跑");
    }
}

//4、导出方式四 默认导出 没有名字，可以让用户自己定义名字
//默认导出在一个js文件中只能存在一个
export default function (arg){
    console.log(arg);
}