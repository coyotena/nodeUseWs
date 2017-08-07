/**
 * Created by Administrator on 2017-8-7.
 */
/**
 * 对象都是通过函数来创建的
 * 函数是对象的一种
 */
var obj = new Object();
var arr = new Array();
console.log(typeof (Object));//function
console.log(typeof (Array));//function
//js提供给我们的语法糖
var obj2 = {};
var arr2 = [1,2,3];

/*function fn(a, b){
    console.log(a+b);
}*/
/*
函数由什么组成的
    1.函数名
    2.函数参数
    3.函数体 最后一个参数
 */
var fn = new Function('a', 'b', "console.log(a+b)");
fn(1,3)
