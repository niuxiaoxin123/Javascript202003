let  promiseFs = require("./4.封装promise的fs");
promiseFs.readFile('./3.txt').then(function(data){
    // data就是咱们读取出来的数据；
    console.log(data);
})