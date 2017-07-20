/**
 * Created by Administrator on 2017-7-20.
 */
var fs = require("fs");
//处理路径
var path = require("path");
//合并路径
console.log(path.join("./book","mysql.json"));
//seperator 分隔符
console.log(path.sep);
//获取当前模块的绝对路径
console.log(__filename);
//获取当前模块所在的绝对目录
console.log(__dirname);
//获取一个路径里文件的名
console.log(path.basename("E:\nodejs\zhufeng\nodeUseWs\js\6file\8path.js"/*,".js"*/));
//获取一个陆经理文件的扩展名
console.log(path.extname("E:\nodejs\zhufeng\nodeUseWs\js\6file\8path.js"));
