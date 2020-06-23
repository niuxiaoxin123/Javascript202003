// 这个js存储了所有员工列表页面的接口
let  express = require("express");
let route = express.Router();
route.post("/login",function(req,res){
    console.log(req.body);// req.body就是前段post请求传过来的参数；
    console.log(req.$userdata);
});
module.exports = route;