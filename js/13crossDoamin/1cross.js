/**
 * Created by Administrator on 2017-8-1.
 */
var http = require("http");
var users = [];
var server = http.createServer(function(req, res){
    var result = "";
    req.on("data",function(data){
        result += data;
    });
    req.on("end",function(){
        users.push(JSON.parse(result));
        console.log(users);
        //设置响应头，允许哪个来源来访问我这个服务器
        // res.setHeader("Access-Control-Allow-Origin","http://localhost:9579");
        res.end(JSON.stringify(users));
    });
    // res.end(JSON.stringify('{name:"coyote"}'));
}).listen(8080);
