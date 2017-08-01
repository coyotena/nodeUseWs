/**
 * Created by Administrator on 2017-7-31.
 */
var http = require("http");
var users = [];

/**
 1.客户端把一个用户信息发送给服务器
 2.服务器接收到后追加到users数组中
 3.服务器返回users数组，在客户端打印出来
 */
/**
 requet 是一个可读流 ondata onend pipe
 response 是一个可读可写流 ondata onend pipe write end
 */
http.createServer(function(req, res){
    console.log(req.method);//方法
    console.log(req.headers);//请求头
    console.log(req.httpVersion);//http版本号
    console.log(req.url);//请求的url
    req.setEncoding("utf8");//设置编码
    var contentType = req.headers['content-type'];
    //每次接收到数据都会触发data事件
    var result = ""
    req.on("data",function(data){
        result += data;
        console.log("data", data);
    });
    req.on("end",function(){
        var user = "";
        if(contentType == 'application/json'){
            user = JSON.parse(result);
        }else if(contentType == 'application/x-www-form-urlencoded'){
            //name=名字&age=年龄
            user = require("querystring").parse(result);
        }else if(contentType == 'application/x-www-form-urlencoded'){
            //name@名字|age@年龄
            user = require("querystring").parse(result,'|',"@");
        }

        console.log("user",user);
        users.push(user);
        console.log(users);
        res.end(JSON.stringify(users));
    });
    /*res.setHeader("name","hahah");//自定义头
    res.setHeader("age","6");//自定义头*/

    // res.end("over");
}).listen(8080);
