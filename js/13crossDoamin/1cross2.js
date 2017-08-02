/**
 * Created by Administrator on 2017-8-1.
 */
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req, res){
    if(req.url == "/"){
        fs.createReadStream("./1index.html").pipe(res);
    }else if(req.url == "/reg"){
        //1.获取请求里的请求体
        //2.构建一个指向8080的请求，把请求体传递过去
        //3.得到8080的响应，然后再传回客户端
        var result = "";
        req.on("data",function(data){
            result += data;
        });
        req.on("end",function(){
            var options = {
                method:"POST",
                port:8080,
                path:"/",
                headers:{}
            };
            var request = http.request(options,function(response){
                var users = [];
                var user = "";
                response.on("data",function(data){
                    user += data;
                });
                response.on("end",function(){
                    users.push(JSON.parse(user));
                    console.log(users)
                    res.end(JSON.stringify(users));
                });
            });
            request.write(result);
            request.end();
        });
    }

}).listen(9090);
