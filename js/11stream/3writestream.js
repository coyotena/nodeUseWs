/**
 * Created by Administrator on 2017-7-28.
 */
var fs = require("fs");
var ws = fs.createWriteStream("./write.txt",{
    flags:"a",//追加到末尾，表示不清空原来的文件，进行追加
    // start:21,//开始写入位置
});
/*
//写入
ws.write("中文","utf8",function(){
    console.log(1,arguments);
});
ws.write("：你好","utf8",function(){
    console.log(2,arguments)
});
//写入并且关闭
ws.end("结束","utf8");
*/


//追加内容
ws.write("好好","utf8",function(){
    console.log(1,arguments);
});
ws.write("：学习","utf8",function(){
    console.log(2,arguments)
});
//写入并且关闭
ws.end("哈","utf8");
