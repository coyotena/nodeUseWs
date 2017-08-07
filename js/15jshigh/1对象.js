/**
 * Created by Administrator on 2017-8-7.
 */
//声明对象的两种方式
var obj = {name:"coyote"};
var obj2 = new Object();

obj2.age = 18;
console.log(obj2);

var arr = [1,2,3];
var arr2 = new Array(3,2);
arr2.age = 5;
console.log(arr2);

//函数声明
function fn(){
    console.log("hello");
}
//函数是对象的一种，函数是一种对象
console.log(fn instanceof Object);

/**
 判断变量类型的几种方法
     1.typeof 基本类型和function
     2.instanceof 原型链来判断 判断不同的对象类型
     3.toString.call(fn); 判断不同的对象类型
     4.通过这个变量的一些特征来判断
     5.通过constructor来判断
 */
console.log(Object.prototype.toString.call(fn))

console.log(fn.__proto__.constructor)
