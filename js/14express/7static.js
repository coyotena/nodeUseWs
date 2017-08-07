/**
 * Created by Administrator on 2017-8-7.
 */
var express = require("express");
var app = express();
var path = require("path");
var fs = require("fs");

app.use(function(req, res, next){
    fs.createReadStream(__dirname + '/public' + req.url).pipe(res);
});

// app.use(express.static(path.resolve("public")));
// app.use(express.static(__dirname + "/public"));

app.listen(8080);

