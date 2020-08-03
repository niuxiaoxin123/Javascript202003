import React from "react";
import {connect} from "react-redux";
import actions from "../store/actions/todolist.js";
class TodoHeader extends React.Component{
    constructor(){
        super();
    }
    add=(e)=>{
        // 绑定事件的地方不传参，第一个参数默认就是事件对象
        // 点击的时候把数据新增store的state中；
        if(e.keyCode===13){
            // 把inputvalue值拿到 e.target.value;
            // 这个addTodo是一个用dispatch包装过的addTodo
            this.props.addTodo(e.target.value);
            e.target.value="";
        }
        // 组件绑定事件 ==> action-types[常量]===> actions===>组件调用actions中方法===> reducer 
    }
    render(){
        // 获取到store中未完成的个数；isSelected是false的个数；获取到store中的数据
        // react-redux
        // console.log(this.props);
        return <div>
            <h2>您还有{this.props.todos.filter(item=>!item.isSelected).length}件事未完成</h2>
            <input type="text" className="form-control" onKeyUp={this.add}></input>
        </div>
    }
}
// state ：是整个store的state; {todo:{type:"all",todos:[]}}
// state.todo : 要后combineReducers属性名保持一致；
export default connect(state=>({...state.todo}),actions)(TodoHeader);