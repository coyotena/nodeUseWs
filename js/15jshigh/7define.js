/**
 * Created by Administrator on 2017-8-8.
 */
var a =10;
function fn(){
    console.log(a);//a的取值实在定义时确定的，而非运行时确定
}
function bar(f){
    var a = 20;
    f();
}
bar(fn);