/**
 * Created by Administrator on 2017-8-8.
 */
/**
 * 函数执行上下文环境
 *  this
 *  作用域链 找自由变量（没有在当前作用域下生命的变量）
 *  VO（活动对象）先用arguments初始化
 *      {
 *          x:1
 *      }
 */
/*
(function(x){
    delete x;
    return x;
})(1);
*/

var s = (function(x){
 // 如果是参数的话，是不能删除掉的，因为他是不可配置的
 delete x;
 return x;
 })(1);
 console.log(s);

/*
var obj = {name : "coyote"};
with(obj){
    delete name;
    console.log(name)
}
*/

/*
var obj = {};
Object.defineProperty(obj,"name",{
    value:"coyote",
    writable:true,//是否只读，是否可修改
    enumerable:true,//是否可枚举
    configurable:true//是否可以配置 是否可删除此属性
});
with(obj){
    delete name;
    console.log(name)
}
*/

