/**
 * Created by Administrator on 2017-8-8.
 */
var foo = {
    bar: function() { return this.baz; },
    baz: 1
};
var s =(function(){
    return typeof arguments[0]();
})(foo.bar);
console.log(s);

/*
//当从一个对象上取出一个函数属性并执行的时候，函数里的this指向当前对象
var obj = {
    "0":function(){
        console.log(this);
        console.log(this === obj);//true
    }
};
obj[0]();
*/

