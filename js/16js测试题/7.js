/**
 * Created by Administrator on 2017-8-8.
 */
var foo = {
    bar: function(){ return this.baz; },
    baz: 1
};
//括号f = foo.bar，运算符
var s =typeof (f = foo.bar)();
console.log(s);

var i = 0;
//逗号隔开的多个表达式，然后这些表达式从左往右依次执行，返回最后一个执行结果
var j = (i++,i++,i++);
console.log(j);
