/**
 * Created by Administrator on 2017-8-9.
 */
/*
如果函数声明多次，后面的会覆盖前面的定义
如果函数表达式的话，多次声明，后面的会被忽略
*/
var s =(function f(){
    function f(){ return 1; }
    return f();
    function f(){ return 2; }
})();
console.log(s);//考预解释       2