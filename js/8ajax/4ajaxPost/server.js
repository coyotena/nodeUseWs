/**
 * Created by Administrator on 2017-7-25.
 */
var http = require("http");
var url = require("url");
var fs = require("fs");
var querystring = require("querystring");
var server = http.createServer(function(request, response){
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    var urlObj = url.parse(request.url,true);
    //路径名
    var pathname = urlObj.pathname;
    if(pathname == "/"){
        fs.readFile("./books.html",function(err,data){
            if(!err){
                response.end(data);
            }
        });
    }else if(pathname == "/reg"){
        var result = "";
        //请求体接收数据
        request.on("data",function(data){
            result += data;
        });
        request.on("end",function(){
            var obj = querystring.parse(result);
            console.log(obj);
            response.end("ok");
        });
    }
});
server.listen(8080,"localhost");