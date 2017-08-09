/**
 * Created by Administrator on 2017-8-9.
 */
/*
考原型链
new的时候，如果没有返回值或返回基本类型，返回this
如果返回一个引用类型
*/
function f(){ return f; }
var s = new f() instanceof f;
/*
1. instance of
    运算符左边的是实例，沿着__proto__
    右边的是构造函数，找到他的prototype
*/
console.log(s);
console.log(new f() instanceof Function)