/**
 * Created by Administrator on 2017-7-27.
 */
//setImmediate是nodejs特有的，js没有

//它每次都要比对时间
setTimeout(function(){
    console.log("setTimeout,0,前");
},0);
/*
 在下一个事件环中执行此函数
 */
//效率高直接执行
setImmediate(function(){
    console.log("setImmediate");
});
setTimeout(function(){
    console.log("setTimeout,0,后");
},0);
//把这个函数放在当前的任务的末尾
process.nextTick(function(){
    console.log("process.nextTick");
});
console.log(6);
console.log(7);

