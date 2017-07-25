/**
 * Created by Administrator on 2017-7-25.
 */
var http = require("http");
var fs = require("fs");
var url = require("url");
var querystring = require("querystring");
var server = http.createServer(function(request, response){
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    var urlObj = url.parse(request.url,true);
    var pathname = urlObj.pathname;
    if(pathname == "/"){
        fs.readFile("./1form.html",function(err,data){
            if(!err){
                response.end(data);
            }
        });
    }else if(pathname == "/reg"){
        var result = "";
        request.on("data",function(data){
            result += data;
        });
        request.on("end",function(){
            //取出请求体的内容类型
            var contentType = request.headers["content-type"];
            //如果请求体发过来的是序列化表单
            if(contentType == "application/x-www-form-urlencoded"){
                console.log("string");
                var obj = querystring.parse(result);
                console.log(obj);
                response.end("ok");
            }else if(contentType == "application/json"){
                console.log("json")
                var obj = JSON.parse(result);
                console.log(obj);
                response.end("ok");
            }
        });
    }

});

server.listen(8080,"localhost");