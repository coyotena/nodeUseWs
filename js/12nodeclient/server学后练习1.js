/**
 * Created by Administrator on 2017-8-1.
 */
var http = require("http");
var users = [];
console.log("发送几次请求，此处只执行一次");
http.createServer(function(req, res){
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    console.log(req.httpVersion);
    var result = "";
    var contentType = req.headers['content-type'];
    req.on("data",function(data){
        result += data;
    });
    req.on("end",function(){
        if(contentType == "application/json"){
            users.push(JSON.parse(result));
        }else if(contentType == "application/x-www-form-urlencoded"){
            users.push(require("querystring").parse(result));
        }else if(contentType == "application/coyote"){
            users.push(require("querystring").parse(result,"|","@"));
        }
        console.log(users);
        res.end(JSON.stringify(users));
    });
    // res.end("over");
}).listen(8080);