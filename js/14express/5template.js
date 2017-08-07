/**
 * Created by Administrator on 2017-8-3.
 */
var express = require("express");
var app = express();
var path = require("path");
/**
 1.动态内容 当前时间
 2.静态内容
 3.动静结合
 */
//设置配置属性值
//配置模板引擎
app.set("view engine","ejs");
//指定模板存放目录
// app.set("views",process.cwd() + "/views");//process.cwd获取当前的工作目录
//resolve 现货区当前文件的所在绝对目录，然后再拼上后面的路径
app.set("views",path.resolve("views"));

app.get("/",function(req, res){
    res.render("index",{title:"首页", books:{name:"node.js"}})
});

app.get("/reg",function(req, res){
    res.render("index",{title:"注册"})
});
app.listen(8080);
