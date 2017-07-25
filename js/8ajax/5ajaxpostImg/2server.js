/**
 * Created by Administrator on 2017-7-25.
 */
var http = require("http");
var fs = require("fs");
var url = require("url");
var formidable = require("formidable");
var util = require("util");//工具模块
var querystring = require("querystring");
var server = http.createServer(function(request, response){
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    var urlObj = url.parse(request.url,true);
    var pathname = urlObj.pathname;
    if(pathname == "/"){
        fs.readFile("./2form.html",function(err,data){
            if(!err){
                response.end(data);
            }
        });
    }else if(pathname == "/reg2"){
        //构建一个解析器
        var form = new formidable.IncomingForm();
        /**
         * 参数介绍：
         * err:错误信息
         * fields:普通input，包含text等
         * files:文件
         */
        //用解析器解析请求体
        //把非file的input放在fields里
        //把文件类型的元素放在files里
        form.parse(request, function(err, fields, files) {
            response.writeHead(200, {'content-type': 'text/plain'});
            response.write('received upload:\n\n');
            //inspect是把对象转成字符串
            // response.end({fields: fields, files: files}.toString());//相当于
            response.end(util.inspect({fields: fields, files: files}));
        });
    }

});

server.listen(8080,"localhost");