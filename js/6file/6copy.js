/**
 * Created by Administrator on 2017-7-20.
 */
/**
 * 1 把src里的文件内容，写入到target文件里
 * 2 写入时要先清空再写入
 * @param src
 * @param target
 */
function copy(src, target){
    var fs = require("fs");
    fs.readFile(src,"utf8",function(err, data){
        if(err){
            return console.error(err);
        }else{
            fs.writeFile(target, data, "utf8", function(err){
                if(err){
                    return console.error(err);
                }
            });
        }
    });
}
copy("./name.txt","./namecopy.txt");
