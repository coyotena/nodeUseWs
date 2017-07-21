/**
 * Created by Administrator on 2017-7-21.
 */
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request, response){

    //指定文件的路径，设置编码，得到data就是字符串类型的
    /*fs.readFile("./index.html","utf8",function(err,data){
        if(err){
            return err;
        }else{
            response.write(data);
            response.end();
        }

    });*/
    var url = request.url;
    if(url == "/index.html"){
        response.setHeader("Content-Type","text/html;charset=utf-8");
        fs.readFile("./index.html","utf8",function(err,data){
            if(err){
                return err;
            }else{
                response.write(data);
                response.end();
            }
        });
    }else if(url =="/style.css"){
        response.setHeader("Content-Type","text/css;charset=utf-8");
        fs.readFile("./style.css","utf8",function(err,data){
            if(err){
                return err;
            }else{
                response.write(data);
                response.end();
            }

        });
    }
});
server.listen(8080,"localhost");


