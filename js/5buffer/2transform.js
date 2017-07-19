/**
 * Created by Administrator on 2017-7-19.
 */
// 字符串和Buffer转换
// Buffer -->字符串
// Buffer.toString([encoding[,start[,end]]]);
var buf = new Buffer("珠峰");
//字符串转Buffer
console.log(buf);
console.log(buf.toString());