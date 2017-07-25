/**
 * Created by Administrator on 2017-7-25.
 */
//将字符串转成对象
var querystring = require("querystring");//querystring:查询字符串
var s = "name=zfpx&age=8";
console.log(querystring.parse(s));//把字符串转成对象
console.log(querystring.stringify(querystring.parse(s)));//把对象转成字符串


