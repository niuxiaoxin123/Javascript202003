// 如果是自定义模块，不可以省略相对路径
// 模块的后缀名.js是可以省略的；
let  a = require("./a");
// a接收到a.js导出的一个对象；
let avg = (...arg)=>{
    let ary = arg.sort((a,b)=>a-b).slice(1,arg.length-1);
    return a.sum(ary)/ary.length;
}
module.exports = {
    avg
}
