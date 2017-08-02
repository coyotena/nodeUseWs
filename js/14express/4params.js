/**
 * Created by Administrator on 2017-8-2.
 */
var express = require("express");
var app = express();

app.get("/hello", function(req, res){
    console.log(req.host);
    console.log(req.path);
    console.log(req.query);
    res.end("hello");
});
//路径参数 把向服务器端传递的参数放在路径里
app.get("/user/:id/:age", function(req, res){
    console.log(req.host);
    console.log(req.path);
    console.log(req.query);
    console.log(req.params.id)
    console.log(req.params.age)
    res.end("user");
});
app.listen(8080);
