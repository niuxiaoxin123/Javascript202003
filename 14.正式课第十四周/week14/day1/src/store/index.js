import {createStore} from "redux";
import reducer from "./reducers/index";
let store = createStore(reducer);
export default store;
// 初始化state；把数据放在store的state中；