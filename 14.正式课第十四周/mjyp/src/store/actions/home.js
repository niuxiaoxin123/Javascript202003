import * as Types from "../action-types";
import api from "../../api/index.js";
export default {
    init(){
        // init中发送请求，并且把请求回来的数据更改store; 在真实的项目中，发送请求在api中；
        // action 要发请求并且要更改store中的数据；
        // return function(dispatch){
        //     api.home.queryInit().then(function(data){
        //         dispatch({
        //             type:Types.HOME_INIT,
        //             data:data
        //         })
        //     })   
        // }
        return async dispatch=>{
            let data = await api.home.queryInit();
            // await下面的代码是异步的；并且当上面执行完成以后，才会执行下面的代码；并且把请求回来的数据给了data
            // 把请求回来的数据给了action 对象的data属性
            dispatch({
                type:Types.HOME_INIT,
                data:data
            })
        }
    }
}