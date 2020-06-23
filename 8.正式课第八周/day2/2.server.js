let fs = require("fs");
let http =require("http");
let  url = require("url");
http.createServer(function(req,res){
    let {pathname} = url.parse(req.url,true);
    // 当浏览器访问这个这个index.html时，服务器并不是直接将服务器的HTML文件发给客户端，而是将html中的内容读取出来，然后返回；把内容响应给客户端，当客户端接收到文件内容时，进行检测，如果是html文件，就按照HTML格式解析加载；
    
    //不是所有的浏览器都能自动识别HTML文件，css文件的；IE浏览器接收到返回的html时，不能生效；原因是浏览器不知道该如何解析该文件；
    // 在返回客户端数据之前，可以通过设置响应头的方式告诉浏览器按照什么文件类型进行解析；
    // content-type: 文件类型
    // 一种文件对应了一种文件类型，html ==>text/html   .css=>text/css
    // 这个函数是每当请求一次，这个函数就会执行一次；
    // IE不能自动解析文件的content-type
    // 响应头是最先到达客户端，然后再发送响应体；客户端接收到响应头信息，判断里面content-type;根据content-type进行解析；
    if(pathname==="/2.index.html"){
        res.setHeader("content-type","text/html");
    }
    if(pathname==="/2.index.css"){
        res.setHeader("content-type","text/css");
    }
    if(pathname==="/2.index.js"){
        res.setHeader("content-type","application/javascript");
    }
    if(pathname==="/th.jpg"){
        res.setHeader("content-type","image/jpeg");
    }
    /// 图片不能加上编码格式；因为浏览器解析图片
    fs.readFile("."+pathname,function(err,result){
        res.end(result);
    });
}).listen(8080);