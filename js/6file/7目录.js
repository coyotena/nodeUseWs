/**
 * Created by Administrator on 2017-7-20.
 */
/*
操作目录

 */
var fs = require("fs");
//make directory
//创建目录
/*
创建目录的时候，要求父目录必须存在，如果已存在，不会重复创建
* */
fs.mkdir("test",function(err){
    if(err){
        console.log("目录创建失败");
    }else{
        console.log("目录创建成功")
    }
});
//创建文件夹，如果父文件夹不存在，则需要自动创建
/*function mkdirs(path, callback){
    console.log(path);
}*/
fs.mkdirs = function(path, callback){
    var pathArr = path.split("/");
    if(pathArr.length <= 1){
        fs.mkdir(path,callback);
    }else{
        var curI = 0;
        var path = pathArr[curI];
        while(curI < pathArr.length){
            fs.mkdir(path,callback);
            curI++;
            path = path + "/" + pathArr[curI];
        }
    }
}
fs.mkdirs("test/t1/ts",function(err){
    if(err){
        console.log("创建文件夹失败")
    }else{
        console.log("文件夹创建成功")
    }
});
//读取目录下的所有文件
fs.readdir("./book",function(err, files){
    console.log(files);
});

//3获取一个文件或目录详情
fs.readdir("./book",function(err, files){
    files.forEach(function(file){
        //获取文件的详情
        fs.stat("./book/"+file, function(err, state){
            console.log(state);
        });
    });
    fs.stat()
});
//4 判断一个文件（或文件夹）是否存在
fs.exists("./book",function(exists){
    console.log(exists);
});


