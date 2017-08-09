/**
 * Created by Administrator on 2017-8-9.
 */
var x = 1;
if (function f(){}) {//这里f放在表达式里，会被忽略掉
    x += typeof f;
}
var s = x;
console.log(s);//1undefined

