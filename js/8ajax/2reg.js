/**
 * Created by Administrator on 2017-7-24.
 */
var http = require("http");
var url = require("url");
var fs = require("fs");
var server = http.createServer(function(request, response){
    response.writeHead(200,{"Content-Type":"text/html;charset = utf-8"});
    var urlObj = url.parse(request.url,true);
    var users = [];
    if(urlObj.pathname == "/"){
        fs.readFile("./reg.html",function(err, data){
            if(!err){
                response.end(data);
            }
        });
    }else if(urlObj.pathname == "/reg"){
        //每当服务器收到客户端发过来的一段数据的时候就会触发data事件
        var str = "";
        request.on("data",function(data){
            str += data.toString();
        });
        //当所有的数据全部接收完毕的时候会触发end事件，这时请求体的数据接收完整了
        request.on("end",function(){
            console.log(str);
            //转成对象加到用户列表里
            users.push(JSON.parse(str));
            //最后返回用户列表
            // response.end(JSON.stringify(users));
            response.end(str);
        });
    }
});

server.listen(8080,"localhost");