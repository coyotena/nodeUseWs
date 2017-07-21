/**
 * Created by Administrator on 2017-7-21.
 */
var http = require("http");
var fs = require("fs");
var path = require("path");
/*var mime ={
    ".html" : "text/html",
    ".js" : "text/javascript",
    ".css" : "text/css"
};*/
var mime = require("mime");
var server = http.createServer(function(request, response){
    var url = request.url;
    if(url == "/"){
        url = "/index.html";
    }
    console.log(path.extname(url));
    // response.setHeader("Content-Type",mime[path.extname(url)]+";charset=utf-8");
    response.setHeader("Content-Type",mime.lookup(url)+";charset=utf-8");
    fs.readFile("." + url,"utf8",function(err,data){
        if(!err){
            response.write(data);
            response.end();
        }
    });
});

server.listen(8080,"localhost");
