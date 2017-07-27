//当前的继承对象
// console.log(process);
/**
 * Created by Administrator on 2017-7-27.
 */
var fs = require("fs");
console.log(process.cwd());
process.chdir("txt");//切换当前的工作路径到下一级“txt”
console.log(process.cwd());
console.log(fs.readFileSync("index.txt","utf8"));

