/**
 * Created by Administrator on 2017-7-21.
 */
var http = require("http");
var mime = require("mime");
var url = require("url");
var fs = require("fs");
var server = http.createServer(function(request, response){
    var urlObj = url.parse(request.url,true);
    response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    if(urlObj.pathname == "/"){
        fs.readFile("./clock.html",function(err,data){
            response.end(data);
        });
    }else if(urlObj.pathname == "/clock"){
        response.end(new Date().toLocaleString());
    }

});
server.listen(8080,"localhost");
