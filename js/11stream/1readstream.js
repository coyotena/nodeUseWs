/**
 * Created by Administrator on 2017-7-28.
 */
var fs = require("fs");
//创建可读流
// var rs = fs.createReadStream("./index.txt");
var rs = fs.createReadStream("./index.txt",{
    start:3,
    end:8,
    highWaterMark:4//每读几个字节会触发一次data事件，默认最大64k，默认值16k
});
//设置编码
rs.setEncoding("utf8");
//监听data事件，当督导数据时会发射data事件
rs.on("data",function(data){
    // console.log("得到数据",data.toString());
    console.log("得到数据",data);
});
//从文件中读取完毕之后会触发end事件
rs.on("end",function(){
    console.log("end");
});
//当读取文件出错的时候会触发error事件
rs.on("error",function(err){
    console.log(err);
});
/**
 node.js中处理错误
 1. 同步方法 try catch
 2. 异步 判断回调函数里的error对象是否有值
 3. 在琉璃判断错误， 监听它的error事件
 */


