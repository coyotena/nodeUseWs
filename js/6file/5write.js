/**
 * Created by Administrator on 2017-7-19.
 */
var fs = require("fs");
//以同步的方式向硬盘的文件里写数据
// fs.writeFileSync(path,data,[options])//如果文件不存在，会自动创建
fs.writeFileSync("./write.txt","同步写文件","utf8");
/*
1，回调里面的err data是由readFile决定的
*/
/*fs.writeFile("./write异步.txt","异步写文件","utf8",function(err){
    if(err){
        console.log(err);
    }
});*/
/*
flag 是表示要对文件做何种类型的操作
w：清空并写入
a：在原有基础上追加
* */
fs.writeFile("./write异步.txt","异步写文件",{flag:"a"},function(err){
    if(err){
        console.log(err);
    }
});
fs.appendFile("./write异步.txt","\n再次追加");