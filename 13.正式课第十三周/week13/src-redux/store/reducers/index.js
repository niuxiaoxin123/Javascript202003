// 这个文件是专门用来合并reducer的
import count from "./count.js.js";
import todo from "./todo.js.js"
// import {combineReducers} from "../../redux.js";
import {combineReducers} from "redux";// 第三方模块
// createStore只能传一个参数
// 合并reducers
// 把多个组件的reducer,合并成一个reducer；最终的state也是一个合并的之后的对象；{count:{},todo:[]}
// let combineReducers=(reducers)=>{
//     // 肯定返回一个函数;这函数最后会传递给createStore,最终会在dispatch里面执行这个函数，执行的时候传了两个实参；
//     // 第一次执行这个函数的时候，是在redux中默认调用一次dispatch
//     return (state={},action)=>{
//         // 这个函数的返回值要给state赋值
//         let  obj = {};
//         for(let key in reducers){
//             // key :count
//             // key :todo
//             // 相当于把每个组件对应自己的state传了过去；
//             // key :count
//             // 新增键值对
//             obj[key]=reducers[key](state[key],action);
//             // obj[count]= {num:66}
//             // obj[todo]=["去吃饭","去约会"]
//             // state={count:{num:1},todo:["去吃饭","去约会"]}
//         }
//         return obj; // 把count的初始值和todo初始值都放到了这个obj中；
//     }
// }

// reducer是combineReducers的返回值
let reducer = combineReducers({
    count:count, // count :function count(state,action){}
    todo:todo//  todo:function todo(state,action){}
});
export default reducer;