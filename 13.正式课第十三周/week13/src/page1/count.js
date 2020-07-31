import React from "react";
import ReactDOM from "react-dom";
import createStore from "../redux.js";
// 把initState赋值给store中的state；
let initState={num:11};
function reducer(state=initState,action){
    switch(action.type){
        case ADD_COUNT:
            return {...state,num:state.num+1}
    }
    return state;
}
// 当更改store中的数据时：
// 1. 先定义一个常量
// 2. 利用dispatch派发一个action
// 3. 编写reducer
const ADD_COUNT="ADD_COUNT";
// 创建store
let store = createStore(reducer);// {}
class Count extends React.Component{
    constructor(){
        super();
        // 将store中的数据和该组件的state绑定在一起
        this.state={num:store.getState().num}
    }
    // 需要更新视图，所以只要state发生改变或属性发生改变；setState;利用订阅的方法，让state改变一次，视图就会更新一次
    componentDidMount(){
        // 挂载完成之后，才订阅
        // dispatch一次，就想更新一次页面，setState一次，视图会更新一次；
        store.subscribe(()=>{
            this.setState({num:store.getState().num});
        })
    }
    add=()=>{
        // 仅仅是dispatch,那么最多也就是将store中state数据更新一次，但是如果还想视图更新，必须和setState进行关联，从而让视图更新；
        store.dispatch({type:ADD_COUNT})
    }
    render(){
        return <div>
            <button onClick={this.add}>+</button>
            <span>{this.state.num}</span>
            <button>-</button>
        </div>
    }
}
ReactDOM.render(<Count></Count>,document.querySelector("#root"));