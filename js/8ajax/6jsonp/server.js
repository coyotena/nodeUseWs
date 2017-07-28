/**
 * Created by Administrator on 2017-7-28.
 */
var http = require("http");
var url = require("url");
var server = http.createServer(function(req, res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == "/books"){
        res.end("show(['node.js','java'])");
    }
});
server.listen(8080,"localhost");
