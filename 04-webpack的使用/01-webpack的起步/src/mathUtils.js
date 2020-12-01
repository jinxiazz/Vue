function add(num1,num2){
    console.log(num1+num2)
}

function avg(num1,num2){
    console.log(num1*num2)
}

//1、使用common.js导出
/*module.exports={
    add,avg
}*/

//2、使用es6导出
export {add,avg};