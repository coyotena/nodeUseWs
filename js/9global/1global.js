/**
 * Created by Administrator on 2017-7-27.
 */
/**
 1.内置模块 指定名字
 2.文件模块 路径
 3.第三方模块 指定名字
 */
var gl = require("./2global");
//获取模块的文件的绝对路径
console.log(__filename);
//获取当前模块文件的所在的目录的绝对路径
console.log(__dirname);
 var a = 10;
console.log(global);
/**
 1.global的属性可以不用引用，也不用生命，就可以直接使用
 2.在node中在模块中能直接用的有两种
        ——全局对象下面的属性
        ——初始化模块时传入的参数
 */

