import React from "react";
import {connect} from "react-redux";
import actions from "../store/actions/todolist"
class TodoBody extends React.Component{
    constructor(){
        super();
    }
    del=(id)=>{
        this.props.delTodo(id);
    }
    change=(id)=>{
        this.props.changeType(id);
    }
    filterTodo=()=>{
        // 根据type值，来返回不同的数据
        if(this.props.type==="all"){
            return this.props.todos;
        }else if(this.props.type==="finish"){
            return this.props.todos.filter(item=>item.isSelected)
        }else{
            return this.props.todos.filter(item=>!item.isSelected)
        }
    }
    render(){
        // li应该利用store中的数据渲染出来
        return <div>
            <ul className="list-group">
                {this.filterTodo().map((item,index)=>{
                    return <li className="list-group-item" key={index}>
                        <input type="checkBox" checked={item.isSelected} onChange={()=>{this.change(item.id)}}></input>
                        {item.val}
                        <button className="btn-danger btn-xs pull-right btn" onClick={()=>{this.del(item.id)}}>×</button>
                    </li>
                })}
            </ul>
        </div>
    }
}
// 
export default connect(state=>({...state.todo}),actions)(TodoBody);