/**
 * Created by Administrator on 2017-8-9.
 */
var express = require("express");
var app = express();
var bodyParser = require("body-parser")
//存放所有的用户
var users = [{id:1,name:"coyote"},{id:2,name:"coyote2"}];
/**
 * 查询所有用户
 */

app.set("view engine","ejs");
//path.resolve 取当前目录的绝对路径
app.set("views",__dirname);

app.use(bodyParser.urlencoded({extended:true}));

//1.获取所有的用户  get/collection，collection数据数组，此处是users
//请求地址     http://localhost:8080/users
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
//2.返回单个用户
//请求地址  http://localhost:8080/users/1
app.get("/users/:id", function(req, res){
    var id = req.params.id;
    console.log(id);
    var fileterdUsers = users.filter(function(user){
        return user.id == id;
    });
    console.log(fileterdUsers.length > 0 ? fileterdUsers[0] : "此用户不存在");
    res.send(fileterdUsers.length > 0 ? fileterdUsers[0] : "此用户不存在");
});
//3.新增用户
//请求地址  http://localhost:8080/users
//-X 指定请求方法    --data 指定请求体数据
//curl -X POST --data "name=coyote3" http://localhost:8080/users
app.post("/users", function(req, res){
    var addUser = req.body;
    console.log(addUser);
    if(addUser){
        //为新增加的用户赋一个最大的id
        addUser.id = users[users.length -1].id + 1;
        users.push(addUser);
        //当新增加一个资源的时候，要返回新生成的资源完整对象
        res.send(addUser);
        console.log(users);
    }else{
        res.send({msg:"增加资源失败"});
    }
});

app.listen(8080);

