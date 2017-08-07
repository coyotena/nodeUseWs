/**
 * Created by Administrator on 2017-8-7.
 */
var express = require("express");
var app = express();
app.use(express.static(__dirname));
var bodyParser = require("body-parser");
//extended为true时，用querystring，如果为false会用bodyparser自己的转换方法
//如果请求头里的content-type:application/x-www-form-urlencoded，会用此中间件转成对象放到req.body上，否则什么都不做
app.use(bodyParser.urlencoded({extended:true}));//此中间件会把请求体提取出来放到req.body
//如果请求体里的content-type是application/json的时候，会用此中间件转成对象放到req.body上，否则什么都不做
app.use(bodyParser.json());
app.post("/reg",function(req, res){
    console.log(req.body);
    res.end("reg");
});
app.listen(8080);
