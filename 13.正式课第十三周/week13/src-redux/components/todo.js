import React from "react";
import store from  "../store";
// store的数据是公共的，任何组件都可以获取到里面的数据
class Todo extends React.Component{
    constructor(){
        super();
    }
    render(){
        //  todo  默认
        return <div>
        {store.getState().num}
        <input></input> 
        </div>
    }
}
export default Todo;