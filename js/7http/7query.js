/**
 * Created by Administrator on 2017-7-21.
 */
var http = require("http");
var url = require("url");
var server = http.createServer(function(request, response){
    // var url = request.url;
    //把url转成url对象
    var urlObj = url.parse(request.url,true);//无true，urlObj.query是一个字符串。有true，urlObj.query是一个json对象
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    //pathname 指的是路径名，问号和端口号中间的那一部分
    if(urlObj.pathname == "/apple"){
        // response.end("苹果");
        //query是查询字符串，true,则转成对象
        response.end(urlObj.query.num + "袋苹果");
    }
    console.log(urlObj);
    // response.end(url);
});
server.listen(8080,"localhost");


