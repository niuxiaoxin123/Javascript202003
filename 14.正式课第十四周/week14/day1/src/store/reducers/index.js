import {combineReducers} from "redux";
import todo from "./todolist";
// 把store中的state 
// let todo={type:"all",todos:[{},{},{}]};
// let count={num:1}
// 每个组件都有一个自己独立的initState,一个页面有两个小模块；todo  count;粉分别对应一个自己initState;和自己的reducer；但是一个项目只有一个store,也只有一个state,意味着createStore只能执行一次；那么reducer也只能有一个；所以用到了combindReducers;store中的state=> {todo:{type:"all",todos:[{},{},{}]},count:{num:1}}
let reducer = combineReducers({
    todo
});
export default reducer;