/**
 * Created by Administrator on 2017-7-31.
 */
var fs = require("fs");

function copy(src, target){
    var rs = fs.createReadStream(src,{
        encoding:"utf8"
    });
    var ws = fs.createWriteStream(target);
    rs.on("data",function(data){
        ws.write(data,"utf8");
    });
    rs.on("end",function(){
        ws.end();
    });
}
copy("./index.txt","./indexCopy.txt");