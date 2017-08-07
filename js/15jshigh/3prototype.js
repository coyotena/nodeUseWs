/**
 * Created by Administrator on 2017-8-7.
 */
//通过调用new Function来创建一个函数的对象
var Add = new Function("a","b","return a+b");
//2.当创建add函数的时候，会自动送一个Add.prototype对象

var o1 = new Object();
//3.对象实例的__proto__等于构造函数的prototype
console.log(o1.__proto__ === Object.prototype)

/*
1. prototype叫原型     构造函数的属性
2. __proto叫隐式原型     构造函数构造出来的实例对象的属性
 */

var add = new Add();
//左侧是对象实例 右侧是构造函数
console.log(add instanceof Add);

