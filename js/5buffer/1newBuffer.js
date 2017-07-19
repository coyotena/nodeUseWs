/**
 * Created by Administrator on 2017-7-19.
 */
//Buffer 类似数组
// Buffer里面只能放字节
//    指定大小
var buffer = new Buffer(1);
buffer[0] = 10;
console.log(buffer);
//通过字符串来创建
console.log(new Buffer("娜"));
//通过数组来创建
console.log(new Buffer([1,2,3]));//数组中只能放0-255之间的数，可以各种进制表示

