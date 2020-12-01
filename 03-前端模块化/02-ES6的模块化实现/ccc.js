//1、导入方式一 {}中的变量名必须要和导出时的变量名一致
import {flag,sum} from "./aaa.js";

if (flag){
    console.log("我想用aaa.js里面的flag");
}

sum(50,100);

//2、导入方式二
import {str1,str2} from "./aaa.js";

console.log(str1,str2)

//3、导入方式三 函数/类
import {print,Person} from "./aaa.js";

print("这是一个函数啦");
var p=new Person();
p.run();

//4、导入方式四  默认导入 优：不用写{}啦，名字可以自己起
import fn from "./aaa.js";
fn("这是默认导出的函数哟")

//5、导入方式五  导入所有导出
import * as obj from "./aaa.js";

console.log(obj);
console.log(obj.str1);