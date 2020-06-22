let http = require("http");
let url   = require("url");
let fs = require("fs");
http.createServer(function(req,res){
    // 每请求一次，这个函数就会执行一次；
    // console.log(100)
    // 由于每次都执行这个代码，每次都返回8.index.html的内容
    let {pathname}=url.parse(req.url);
    console.log(pathname);
    fs.readFile("."+pathname,"utf8",function(err,result){
        res.end(result);
    })
}).listen(8080,function(){
    console.log("端口启动成功");
});