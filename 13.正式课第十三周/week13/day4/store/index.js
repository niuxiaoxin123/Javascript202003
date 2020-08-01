// index.js 是创建的store，并且导出store；
// store的文件拆分；
import createStore from "../redux.js.js";
import reducer from "./reducers/count.js.js";
let store = createStore(reducer);
export default store;