/**
 * Created by Administrator on 2017-8-9.
 */
var express = require("express");
var app = express();
//存放所有的用户
var users = [{id:1,name:"coyote"},{id:2,name:"coyote2"}];
app.set("view engine","ejs");
//path.resolve 取当前目录的绝对路径
app.set("views",__dirname);
//1获取所有的用户
app.get("/users", function(req, res){
    //Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
    var accept = req.headers['accept'];//客户端需要的类型
    var acceptType = accept.split(",").map(function(item){//item表示每个字符串
        var values = item.split(";");
        return {
            type: values[0],//需要的文件类型
            q:values[1] ? values[1].split("=")[1] : 1//权重 默认是1
        };
    //    用优先级进行排序，取排名最高那个
    }).sort(function(a, b){
        return b.q - a.q;//降序
    })[0].type;
    console.log(acceptType);
    if(acceptType == "text/plain"){
        res.send(users);
    }else if(acceptType == "text/html"){
        res.render("users.ejs",{users:users});
    }else{
        res.send(users);
    }
    // console.log(accept);
    // res.send(users);

});



app.listen(8080);

