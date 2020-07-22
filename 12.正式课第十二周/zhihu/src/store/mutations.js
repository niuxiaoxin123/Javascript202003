export function changeHotList(state,option){
    // option需要看接口文档；
    // [] {}  {data:[]}
    // console.log(option);// 请求回来的数据
    state.hotlist=option;
}