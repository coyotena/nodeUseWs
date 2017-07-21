/**
 * Created by Administrator on 2017-7-21.
 */
var http = require("http");
var server = http.createServer(function (request, response){
    var oData = new Date();
    //设置内容类型的响应头
    response.setHeader("Content-Type","text/html;charset=utf-8");
    // response.write(oData.toLocaleString());
    response.write(oData.toString());
    response.end();
});
server.listen(8080,"localhost");

