/**
 * Created by Administrator on 2017-7-19.
 */
//File System
var fs = require("fs");
/*
1，异步方法需要把回调函数传入
2，回调函数会在同步方法执行完毕之后才执行
3，异步方法不能阻塞主线程，不会影响后续代码的执行
*/
fs.readFile("./index.txt",afterRead);
fs.readFile("./index.txt","utf8",afterEncRead);
function afterEncRead(err, data){
    console.log("已确定字符编码",data);
}
function afterRead(err, data){
    if(err){
        console.log(err);
    }else{
        console.log("输出data未确定字符编码",data);
        console.log("data转换成字符串",data.toString());
    }

}
console.log("测试顺序1");
console.log("测试顺序2");