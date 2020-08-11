// utils ：公共的模块库；
let baseUrl = "http://localhost:3000";
function http(option){
    let {url,method="GET",data={}}=option;
    return new Promise(function(resolve,reject){
        wx.request({
            url:baseUrl+url,
            method:method,
            data:data,
            success(data){
                console.log(data);
                resolve(data.data)
            }
        })
    })
}
http.post=function(url,data){
    return http({url:url,data:data,method:"post"})
}
http.get=function(url,data){
    return http({url:url,data:data,method:"get"})
}
// http.get("banner");
// http({url:"banner"})
export default http;