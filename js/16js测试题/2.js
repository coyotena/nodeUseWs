/**
 * Created by Administrator on 2017-8-8.
 */
//函数表达式
var f = function g(){ return 23; };
//就相当于下面的定义，g无意义了，所以会忽略g
// var f = function(){ return 23; };

console.log(typeof g());//会报错，因为g本身undefined
// console.log(typeof f());