/**
 * Created by Administrator on 2017-7-21.
 */
var http = require("http");
var server = http.createServer(function(request, response){
    console.log(request.method);//请求的方法
    console.log(request.url);//请求的url
    console.log(request.headers);//请求的头
    console.log("响应");
    //Can't set headers after they are sent.at ServerResponse.OutgoingMessage.setHeader
    //在响应头发出以后不能再发送响应头
    //应该先设置响应头，在设置响应体
    response.statusCode = 404;//设置响应码
    response.setHeader("Content-Type","text/html;charset=utf-8");//设置响应头
    response.write("hello");//写的响应体，在调用第一次write的时候，会发送响应头和第一个write的响应
    setTimeout(function(){
        response.write("world");
        response.end("over");
    },2000);
});
server.listen(8080,"localhost");
