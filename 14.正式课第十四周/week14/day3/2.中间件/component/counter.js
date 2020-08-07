import React from "react";
import {connect} from "react-redux";
import actions from "../store/actions/counter"
class Counter extends React.Component{
    constructor(){
        super();
    }
    add=(n)=>{
        this.props.add(n)
    }
    min=(m)=>{
        // 调用actions中的方法，会默认调用dispatch
        this.props.min(m)
    }
    render(){
        return <div>
            <button onClick={()=>{this.add(2)}}>+</button>
                {this.props.num}
            <button onClick={()=>{this.min(3)}}>-</button>
        </div>
    }
}
// react-redux: 需要返回一个连接后的组件
export default connect(state=>({...state.counter}),actions)(Counter);