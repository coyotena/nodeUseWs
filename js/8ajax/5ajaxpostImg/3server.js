/**
 * Created by Administrator on 2017-7-25.
 */
var http = require("http");
var fs = require("fs");
var url = require("url");
var formidable = require("formidable");
var mime = require("mime");
var util = require("util");//工具模块
var querystring = require("querystring");
var server = http.createServer(function(request, response){
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    var urlObj = url.parse(request.url,true);
    var pathname = urlObj.pathname;
    if(pathname == "/"){
        fs.readFile("./3form.html",function(err,data){
            if(!err){
                response.end(data);
            }
        });
    }else if(pathname == "/reg2"){
        //构建一个解析器
        var formParser = new formidable.IncomingForm();
        formParser.parse(request, function(err, fields, files) {
            fs.readFile(files.imgtx.path,function(err,data){
                var filename = "uploadImg/" + files.imgtx.name;
                // fs.writeFile("./uploadImg/" + files.imgtx.name);
                fs.writeFile("./" + filename,data,function(err){
                    response.writeHead(200,{"Content-Type":"text/plain"});
                    response.end(filename);
                });
            });
        });
    }else{
        fs.exists("." + pathname,function(exists){
            if(exists){
                // response.setHeader("Content-Type",mime.lookup(pathname));
                response.writeHead(200,{"Content-Type":mime.lookup(pathname)});
                fs.readFile("./" + pathname,function(err,data){
                    response.end(data);
                });
            }else{
                response.statusCode = 404;
                response.end("404");
            }
        });
    }

});

server.listen(8080,"localhost");