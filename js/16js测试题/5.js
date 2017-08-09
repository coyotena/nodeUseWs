/**
 * Created by Administrator on 2017-8-8.
 */

var s =(function f(f){
    return typeof f();
})(function(){ return 1; });
console.log(s);