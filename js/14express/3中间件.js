/**
 * Created by Administrator on 2017-8-2.
 */
var express = require("express");
var app = express();
//使用中间件
//计算一个处理请求一共花了多少时间
/*
开始时间
默认的send方法包含end结束方法
 */
//中央
console.log(1);
app.use(function(req, res, next){
    // res.start = Date.now();
    console.time("cost");//参数随意，只要与timeEnd对应即可
    //暂存原来的end方法
    var endS = res.end;
    //为res.end 重新赋值为我们自定义函数
    res.end = function(){
        //先把原来的end方法调用一次
        endS.apply(res, Array.prototype.slice.call(arguments));
        // endS.call(res, arguments);//报错
        //加入自己的小逻辑
        // console.log("时间",Date.now() - res.start)
        console.timeEnd("cost");
    }
    next();
});
app.use("/money", function(req, res, next){
    // var start = Date.now();
    console.log(2);
    res.mny = 100;
    next();
});
console.log(3);
//省里
app.use("/hello", function(req, res, next){
    console.log(4);
    res.mny = res.mny - 10;
    next();
});
console.log(5);
//市里
app.use("/money", function(req, res, next){
    console.log(6);
    res.mny = res.mny - 30;
    next();
});
console.log(7);
//村里
app.use(function(req, res, next){
    console.log(8);
    res.mny = res.mny - 10;
    next();
    // res.send('0');//send放除数字之外的，如果放数字，他会当做是状态码
});
console.log(9);
//发送补贴
app.get("/money", function(req, res){
    console.log(10);
    res.send("实际到手" + res.mny);
});
console.log(11);
app.listen(8080);

