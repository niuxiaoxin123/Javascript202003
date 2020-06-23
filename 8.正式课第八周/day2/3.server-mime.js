let fs = require("fs");
let http =require("http");
let  url = require("url");
let  mime = require("mime");
http.createServer(function(req,res){
    let {pathname} = url.parse(req.url,true);

    // 前端请求一次，后端这个函数就会执行；pathname :就是路径
    // console.log(pathname);
    // 根据文件的后缀名，来设置不同的content-type值；
    // let  reg = /\.html$/;
    // if(reg.test(pathname)){
    //     res.setHeader("content-type","text/html");
    // }
    if(pathname==="/login"){
        res.end("ABC123")
    }
    if(pathname==="/list"){
        res.end("加油")
    }
    res.setHeader("content-type",mime.getType(pathname));
    fs.readFile("."+pathname,function(err,result){
        res.end(result);
    });
}).listen(8080);