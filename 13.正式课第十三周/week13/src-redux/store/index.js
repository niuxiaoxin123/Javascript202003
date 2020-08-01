// 是创建一个store,并且导出一个store
// store文件夹中 
// actions : 导出一个对象，对象都是键值对函数，函数返回一个对象，这个对象就是dispatch的action
// reducers ： 每个组件对应的更改数据的reducer 
// action-types : 导出了常量，是action的type的属性值
// index.js ： 创建store,导出store；
// import {createStore} from "../redux.js";
import {createStore} from "redux";// 直接引入第三方模块
// 如果解构数据，在导出的不需要加default;
import reducer from "./reducers/index.js.js";
console.log(createStore);
let store = createStore(reducer);

export default store;