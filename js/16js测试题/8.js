/**
 * Created by Administrator on 2017-8-9.
 */
var f = (function f(){ return "1"; }, function g(){ return 2; })();
var s = typeof f;
console.log(s);