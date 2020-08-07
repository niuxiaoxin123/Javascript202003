import {createStore,applyMiddleware} from "redux";
import reducer from "./reducers/index";
// redux-logger  redux-thunk   redux-promise;\
// redux-logger : 能够在控制台直观看到的更改状态的type类型以及更改状态前后的值
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
// 1. 导入中间件  2. 使用中间件
// 发请求，把请求回来的数据更改store中的state;
let store = createStore(reducer,applyMiddleware(logger,reduxThunk,reduxPromise));
export  default store;