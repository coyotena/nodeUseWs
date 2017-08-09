/**
 * Created by Administrator on 2017-8-9.
 */
var express = require("express");
var app = express();
//存放所有的用户
var users = [{id:1,name:"coyote"},{id:2,name:"coyote2"}];
//1获取所有的用户
app.get("/users", function(req, res){
    //Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
    var accept = req.header["accept"];
    var acceptType = accept.split(",").map(function(item){//item表示每个字符串
        var values = item.split(";");
        return {
            type: values[0],//需要的文件类型
            q:values[1] ? values[1].split("=")[1] : 1//权重 默认是1
        };
    }).sort(function(a, b){
        return b.q - a.q;//降序
    });
    res.send(users);
});



app.listen(8080);

