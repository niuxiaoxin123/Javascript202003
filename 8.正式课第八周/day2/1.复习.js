// 理解后端是做什么的;后端跟前端确定的参数有什么作用？
// 配合
// 前后端交互；
// fs模块 
let fs = require("fs");
let  http = require("http");

// readFile  readFileSync 
// 默认否是buffer的数据格式；
// fs.readFile("./1.txt","utf8",function(err,result){
// });
// let con = fs.readFileSync("./1.txt","utf8");
// writeFile  writeFileSync
// fs.writeFile("./1.txt","今天凉快","utf8",function(){});// 覆盖
// appendFile   copyFile    reddir  


// path  : path.resolve : 将相对路径转成绝对路径；
// http 
// url
// ajax axios  浏览器的地址栏url  css的link   img的src标签  script 的src都会向服务器发送请求；这些代码都要服务器请求资源；
let server = http.createServer(function(req,res){
    // 当浏览器请求一次，就会执行一次；
    // req: 请求信息
    // res： 响应信息
    // console.log(res);
    // url.parse(req.url,true)==> pathname:端口号后面的，问号前面的部分  query
    res.setHeader();// 设置响应头
    res.end("123");// 向客户端传输数据；
});
// 如果仅仅是创建一个服务，并没有监听具体的端口号，那么并不能起到监听前端请求的作用
server.listen(8080);
