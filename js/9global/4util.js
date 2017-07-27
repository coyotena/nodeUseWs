/**
 * Created by Administrator on 2017-7-27.
 */
var util = require("util");
function parent(){
    this.name = "father";
    this.age = 50;
    this.say = function(){
        console.log(this.name);
    }
}
parent.prototype.showName = function(){
    console.log("show",this.name);
}
function child(){
    parent.call(this);
    this.name = "child";
}
util.inherits(child,parent);
var c = new child;
/*console.log(c);
c.showName();*/
/**
将任意一个对象转成字符串
 */
c.hobby = {
    name:"play",
    price:{
        name : "ripce"
    }
}
/*
console.log(util.inspect(c,{depth:0}));
console.log(0);
console.log(util.inspect(c,{depth:1}));
console.log(1);

*/
console.log(util.isArray([]));
