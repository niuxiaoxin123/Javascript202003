// actions中导出一个对象，对象属性名都是函数，这个函数返回一个dispatch所需要的action{}
import * as Types from "../action-type.js.js";
// 由于把这个action改成函数
export default {
    add(){
        // 发请求；
        return {type:Types.ADD_COUNT};
    }
}