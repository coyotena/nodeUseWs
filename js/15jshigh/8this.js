/**
 * Created by Administrator on 2017-8-8.
 */
/**
 * 1. 当函数没有返回值的时候，new的时候会返回this
 * 2. 当函数有返回值的时候，
 */
function say(){
    this.name ="coyote";
    console.log(this);
    //当return的是一个非对象类型的话，那么也返回this
    // return 3;
    //如果返回的是一个对象类型的话
    return {age:3}
}
// say();
var s = new say();
console.log("s是",s);

say.prototype.getName = function(){
    console.log(this.name);
};
p.getName();
