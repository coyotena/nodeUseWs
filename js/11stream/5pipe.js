/**
 * Created by Administrator on 2017-7-31.
 */
var fs = require("fs");
function copy2(src, target){
    var rs = fs.createReadStream(src);
    var ws = fs.createWriteStream(target);
    rs.pipe(ws);//管道
}
copy2("./index.txt","./indexCopy.txt");
/*pipe原理*/
function pipe(source, dest){
    //先监听可读流的data事件
    source.on("data",function(chunk){
        //写成功就是true，写失败就是false
        if(false === dest.write(chunk)){
            //暂停触发data事件
            source.pause();
        }
    });
    //当全部咽下之后，调用回调函数
    dest.on("drain",function(){
        //重新开始触发data事件
        source.resume();
    });
}

