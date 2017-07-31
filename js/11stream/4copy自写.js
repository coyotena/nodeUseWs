/**
 * Created by Administrator on 2017-7-31.
 */
var fs = require("fs");
var rs = fs.createReadStream("./index.txt",{
    highWaterMark:4,
    encoding:"utf8"
});
var ws = fs.createWriteStream("./indexCopy.txt",{
    start:0
});
var text = "";
rs.on("data",function(data){
    text += data;
});
rs.on("end",function(){
    ws.end(text,"utf8");
});
