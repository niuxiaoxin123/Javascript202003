import React from "react";
// import store from "../store/index";
import actions from "../store/actions/counter.js";
import {connect} from "react-redux";
class Counter extends React.Component{
    // constructor(){
    //     super()
    //     this.state={num:store.getState().counter.num}
    // }
    // componentDidMount(){
    //     // 订阅一下；每当dispatch一次，那么就执行setState一次，让视图更新
    //     store.subscribe(()=>{
    //         // 只会让counter的组件重新渲染；但是兄弟组件compute没有更新；
    //         this.setState({num:store.getState().counter.num})
    //     })
    // }
    add=()=>{
        // this.props.dispatch(actions.add());
        this.props.add();
    }
    render(){
        // react-redux : 把store中的数据以属性的方式传给了该组件
        console.log(this.props)
        return <div>
            <button onClick={this.add}>+</button>
            <span>{this.props.num}</span>
            <button>-</button>
        </div>
    }
}
// 第二个括号，把当前组件传递过去
let mapStateToProps = state=>({...state.counter});
// connect 
// 第一个参数: 把store中的该组件的state放到该组件的属性上
// 第二个参数： 把actions中的方法包装之后再次放到组件的属性上；
// 把todo用redux  react-redux 重构一下； 周一讲；
export default connect(mapStateToProps,actions)(Counter);