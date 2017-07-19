/**
 * Created by Administrator on 2017-7-19.
 */
var fs = require("fs");
/*
var name = fs.readFileSync("./name.txt","utf8");
var age = fs.readFileSync("./age.txt","utf8");
console.log("同步读取",name,age);
*/

//1，回调函数嵌套实现多个异步操作完成之后执行的回调
//2，需要时间长，m+n
//3,代码可读性非常差
/*
fs.readFile("./name.txt","utf8",function(err,name){
    fs.readFile("./age.txt","utf8",function(err,age){
        console.log("异步读取",name,age);
    });
});
*/

//计时器
var person = {};
function show(){
    if(Object.keys(person).length == 2){
        console.log(person);
    }
}
fs.readFile("./name.txt","utf8",function(err,name){
    person.name = name;
    show();
    console.log(name);
});
fs.readFile("./age.txt","utf8",function(err, age){
    person.age = age;
    show();
    console.log(age);
});

//promise

