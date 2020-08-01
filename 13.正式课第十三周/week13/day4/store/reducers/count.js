// reducers 的文件中都是存放在更改数据的reducer方法
// 把initState赋值给store中的state；
// 把action-type的导出的类型引进来
// 把action-type导出的所有变量放到了Types这个对象中；
import * as Types from "../action-type.js.js";
let initState={num:11};
function reducer(state=initState,action){
    switch(action.type){
        case Types.ADD_COUNT:
            return {...state,num:state.num+1}
    }
    return state;
}
export default reducer;