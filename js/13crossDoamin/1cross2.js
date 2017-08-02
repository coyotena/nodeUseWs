/**
 * Created by Administrator on 2017-8-1.
 */
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req, res){
    if(req.url == "/"){
        fs.createReadStream("./1index.html").pipe(res);
    }else if(req.url == "/reg"){
        //1.获取请求里的请求体一个
        //2.构建指向8080的请求，把请求体传递过去
        //3.得到8080的响应，然后再传回客户端
    }

}).listen(9090);
