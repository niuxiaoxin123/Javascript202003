// 在真实项目中，会对axios进行二次封装；
import axios from 'axios';
import qs from "qs";
axios.defaults.baseURL="http://127.0.0.1:9999";
axios.defaults.timeout = 2000;// 设置超时时间；
// 把前端的请求的参数对象转乘字符串url;用& 连接起来；
axios.defaults.transformRequest=data=>qs.stringify(data);
axios.interceptors.response.use(function(data){
    return data.data;
})
export default axios;