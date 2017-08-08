/**
 * Created by Administrator on 2017-8-8.
 */
/**
 * 全局代码执行时会产生一个上下文环境
 * @type {number}
 */

/*
{
    this:"上下文对象",
    a:var 变量    预解释，但不赋值
    say:函数声明    预解释，并且赋值
    hello:函数表达式
    alert:全局对象
    Math:全局对象
}
*/

var a = 10;
//函数声明会预解释，会提取到最前面执行
function say(){

}
//函数表达式，var 会提前声明，但是不会赋值
var hello = function(){

}
console.log(a);

(function(){

})()