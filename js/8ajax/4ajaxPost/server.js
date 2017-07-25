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
        //当读到客户端提交过来的数据时会触发data事件，然后调用回调函数
        request.on("data",function(data){
            result += data;
        });
        request.on("end",function(){
            //把查询字符串转成对象
            var obj = querystring.parse(result);
            //发送响应
            console.log(obj);
            response.end("ok");
        });
    }
});
server.listen(8080,"localhost");