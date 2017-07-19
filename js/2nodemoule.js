/**
 * Created by Administrator on 2017-7-18.
 */
//内置模块，node自带的亲生模块
var fs = require("fs");
fs.readFile("/js/index.txt",function (data) {
    
});
//文件模块
require("./1callback.js");
//别人给你生的，第三者生的，第三方模块
// require("直接写名字，不需要路径")
var mime = require("mime");
console.log(mime);
// 控制台安装
/*
全局安装 直接下载到Node的安装目录中，各个项目都可以调用，适合工具模块，
比如gulp
 npm install -g [package name]
 或
 npm install -global [package name]
*/

/*
本地安装 将一个模块下载到当前目录的node_modules子目录，然后只有在当前目录和它的子目录之中，
才可以调用这个模块
npm install [package name]
*/