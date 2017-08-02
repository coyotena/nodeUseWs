/**
 * Created by Administrator on 2017-8-2.
 */
var express = require("express");
var app = express();
//遇到匹配的路径，就结束，不再进行匹配
app.get("/hello",function(req, res){
    res.send("get hello");
});

app.post("/hello", function(req, res){
    res.send("post hello");
});

app.all("/hello", function(req, res){
    res.send("all hello");
});

app.listen(3000);