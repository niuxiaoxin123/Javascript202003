// express  : 是node启动服务的框架，基于node进行封装的，是一个第三方的模块
// npm  install express --save  / yarn  add  express;
let express = require("express");
// express是一个封装的函数,app是express的返回值。可以调用listen方法监听端口号
let app = express();
// express的路由
// 当前端访问8080端口，并且请求路径是/login时，会触发后面这个函数；
// get是get请求
// 浏览器地址栏默认就是get请求；
// 前端发送不同的接口请求，就会走其中一个路由；根据前端发送的路径进行匹配；
app.get("/login",function(req,res){
    res.send("ABC123");
});
app.get("/list",function(req,res){
    res.send("加油，你可以的")
});
app.listen(8080,function(){
    console.log("8080已经启动成功");
});