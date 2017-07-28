/**
 * Created by Administrator on 2017-7-28.
 */
var EventEmitter = require("./3EventEmitter");
var util = require("util");
// var e = new EventEmitter();
function Gril(name){
    EventEmitter.call(this);
    this.name = name;
}
util.inherits(Gril,EventEmitter);
var gril = new Gril("lucy");
function Boy(name){
    this.name = name;
    this.say = function(world){
        console.log("Boy",this.name,world);
    }
}
var xiaoming = new Boy("小明");
var xiaohua = new Boy("小花");
/*gril.addListener("look",function(){
 console.log("look",this.name);
 });*/
//注册监听 事件 订阅
var m =xiaoming.say.bind(xiaoming,"看上就买吧");
gril.addListener("look",m);
//注册监听 事件 订阅
gril.on("look",xiaohua.say.bind(xiaohua,"喜欢就多看看"));//看EventEmitter底层，on就是addListener
//发射时间 发布
gril.emit("look");
// gril.removeListener("look", m);
gril.removeAllListeners("look")
gril.emit("look");

//使用once注册，如果发射多次，只会触发一次
/*gril.once("饿了",function(){
    console.log("吃饭");
});*/
gril.on("饿了",function(){
    console.log("吃饭on");
});
/*gril.once("饿了",function(){
    console.log("吃啥饭");
});*/
/*gril.emit("饿了");
gril.emit("饿了");*/

