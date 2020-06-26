let express = require("express");
let app = express();
// 解析静态资源文件
app.use(express.static(__dirname));
app.listen(8080,function(){
    console.log("启动成功");
});

// 看文档
// vue.js    掘金   思否 segmentfault  CSND博客  简书 
// 看文档能力; vue3.0 element-UI  iview   vant  react  ant-desin dva  typescript  flutter  react-tive  uni-app  



