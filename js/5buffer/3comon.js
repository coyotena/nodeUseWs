/**
 * Created by Administrator on 2017-7-19.
 */
var buf1 = new Buffer("珠");
var buf2 = new Buffer("峰");
var buf3 = new Buffer("培");
var buf4 = new Buffer("训");
/*
 Buffer.concat(list[, totalLength])//list是buffer数组
*/
var allBuf = Buffer.concat([buf1, buf2, buf3, buf4],12);
console.log(allBuf.toString());
var s = allBuf.slice(9,12);
console.log(s.toString());

//复制buffer
// Buffer.copy(target[, targetStart[, sourceStart[, sourceEnd]]])
var bufs = new Buffer(12);
buf1.copy(bufs,0,0,3);
buf2.copy(bufs,3,0,3);
buf3.copy(bufs,6,0,3);
buf4.copy(bufs,9,0,3);

console.log("复制后的bufs",bufs.toString());

console.log(Buffer.byteLength(bufs));
console.log(Buffer.byteLength("ab培训"));
