import axios from "./axios";
function queryInit(){
    // post后面的url字符串最后会拼接到baseUrl 后面;
    return axios.post("/init")
};
function queryMain(){
    return axios.post("/main",{id:"G0001"})
}
export default {
    queryInit,
    queryMain
}
