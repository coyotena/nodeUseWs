/**
 * Created by Administrator on 2017-8-1.
 */
var http = require("http");
var options = {
    host:"localhost",
    method:"POST",
    port:8080,
    path:"/post",
    // headers:{"Content-Type":"application/json"}
    // headers:{"Content-Type":"application/x-www-form-urlencoded"}
    headers:{"Content-Type":"application/coyote"}
}
var users = [];
var result = "";
var request = http.request(options,function(res){
    console.log(res.statusCode);
    res.on("data", function(data){
        result += data;
    });
    res.on("end",function(){
        users.push(JSON.parse(result));
        console.log("响应内容",users);
    });
});
// request.write('{"name":"张三","age":6}');
// request.write('name=张三&age=6');
request.write('name@张三|age@6');
console.log("谁先执行");
request.end();
