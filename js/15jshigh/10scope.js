/**
 * Created by Administrator on 2017-8-8.
 */
/*
function one() {
    var a = Math.random();
    console.log(a);
}
one();
one();
*/
function one() {
    var a = Math.random();
    return function(){
        return a;
    }
}
var s1 = one();
var s2 = one();
console.log(s1());
console.log(s2());

//js中没有块级作用域
if(true){
    var a = 100;
}
console.log(a);

for(var i = 0; i < 10; i++){

}
console.log(i);

