/**
 * Created by Administrator on 2017-8-9.
 */
// with (function(x, undefined){}) length;
//写法相当于
with (function(x, undefined){}){
    var s = length;
}
console.log(s);