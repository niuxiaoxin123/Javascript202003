import * as Types from "../action-types";
import { func } from "prop-types";
export default {
    add(n){
        // 请求在actions发送请求；把请求回来的数据传递给action
        // 请求大多数都是异步的；
        // let  t;
        // setTimeout(()=>{
        //     // 这个return是setTimeout的return；
        //     t={type:Types.ADD_COUNT,n}
        // },2000);
        // return t;// undefined
        // add的返回值是undefined；
        // redux-thunk方法可以解决这个问题,允许action的方法返回一个函数；并且这个函数会传两个参数
        return function(dispatch,getState){
            // dispatch === store.dispatch  getState===store.getState
            // 在真实的项目中，利用redux-thunk,在actions中可以发送请求；
            setTimeout(()=>{
                // 这个dispatch更改了store的state;
                dispatch({type:Types.ADD_COUNT,n})
            },2000);
        }
    },
    min(m){
        // payload的属性值时promise实例
        // 如果这个payload 的属性值时一个promise实例，那么会把promise中resolve的结果或reject的结果传递给payload;然后传给reducer；
        // 如果promise实例没有.then ,直接把resolve或reject的实参赋值给payload;如果有.then,会等到then的回调函数返回值给了payload;
        // return {
        //     type:Types.MIN_COUNT,
        //     payload:new Promise(function(resolve,reject){
        //         setTimeout(()=>{
        //             resolve(10);
        //         },2000)
        //     }).then(function(val){
        //         return val+1;
        //     })
        // }
        // 还可以直接return 一个promise实例
        return new Promise(function(resolve,reject){
            setTimeout(()=>{
                // resolve的对象就是dispatch传递的对象
                resolve({type:Types.MIN_COUNT,m})
            },2000);
        })
    }
}