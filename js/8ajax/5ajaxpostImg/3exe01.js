var http = require("http");
var fs = require("fs");
var formidable = require("formidable");
var url = require("url");
var util = require("util");
var server = http.createServer(function(req, res){
    var urlObj = url.parse(req.url);
    var pathname = urlObj.pathname;
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    if(pathname == "/"){
        fs.readFile("./3exe01.html",function(err,data){
            if(!err){
                res.end(data);
            }
        });
    }else if(pathname == "/regexe"){
        var form = new formidable.IncomingForm();
        form.uploadDir = 'uploadImg';  //文件上传 临时文件存放路径
        form.parse(req, function(err, fields, files) {
            // console.log(files.upload.name.split('.')[1]);
            res.writeHead(200, {'content-type': 'text/plain'});
            for(filedet in files){
                var type = files[filedet].name.split(".")[1];
                var uppath = files[filedet].path + "." + type;
                files[filedet].path = uppath;
                console.log(uppath);
            }
            // res.end(util.inspect({fields: fields, files: files}));
            res.end(JSON.stringify({fields: fields, files: files}));
        });
    }
});
server.listen(8080,"localhost");