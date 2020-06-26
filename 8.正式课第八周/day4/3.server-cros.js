// 在day4这个目录下，安装express和axios模块；
let express = require("express");
let app = express();
app.use(function(req,res,next){
    // 可以设置允许的请求地址;设置响应头  * : 代表所有的路径；
    // 设置该服务允许跨域的origin；
    res.header("Access-Control-Allow-Origin","http://127.0.0.1:5502");
    res.header("Access-Control-Allow-Methods","GET,POST");
    next();

})
app.get("/getData",function(req,res){
    res.send("你很帅");
})
app.listen(8080);
// 把地址放在浏览器的地址栏，回车一样可以发送请求；