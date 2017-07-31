/**
 * Created by Administrator on 2017-7-28.
 */
var fs = require("fs");
var rs = fs.createReadStream("./index.txt",{
    encoding:"utf8",
    start:3,
    end:8,
    highWaterMark:2
});
//pause     停止
//resume        继续，恢复

rs.on("data", function(data){
    //吃一口先要求暂停
    console.log("外面",data);
    rs.pause();
    setTimeout(function(){
        console.log("settime",data);
        //要求接着喂
        rs.resume();
    },1000);
});
rs.on("end", function(){
    console.log("end");
});
rs.on("error", function(err){
    console.log(err);
});


