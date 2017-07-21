/**
 * Created by Administrator on 2017-7-21.
 */
var http = require("http");
var mime = require("mime");
var url = require("url");
var server = http.createServer(function(request, response){
    var urlObj = url.parse(request.url,true);
    response.writeHead(200, {"Content-Type":mime.lookup(request.url)+";charset=utf-8"});
    if(urlObj.pathname == "/"){}

});
server.listen(8080,"localhost");
