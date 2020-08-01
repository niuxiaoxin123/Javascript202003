import React from "react";
import store from "../store";
import actions from "../store/actions/count.js.js"

class Count extends React.Component{
    constructor(){
        super();
        this.state={num:store.getState().count.num}
    }
    // 让store数据更新时，更新当前组件,需要订阅方法
    componentDidMount(){
        // 只要dispatch，那么该组件就会setState重新设置该组件的状态，从而视图也会更新
        store.subscribe(()=>{
            this.setState({num:store.getState().count.num})
        })
    }
    add=(n)=>{
        // 改store中的state；dispatch
        // 只要派发dispatch，都要更改3个文件，分别是action-types actions   reducers
        // 添加action-types===> actions中count.js===> components的dispatch====> store中reducers中的count.js
        store.dispatch(actions.add(n));
    }
    min=(m)=>{
        // actions.min 返回{type:Types.MIN_COUNT,m}
        // 先执行actions.min,把这个方法返回值当做实参传给了dispatch
        store.dispatch(actions.min(m));
        // 当页面渲染时，dispatch已经默认执行了一次；那么就会默认调用一次reducer,reducer会让所有组件的reducer都会执行一次；执行完所有的reducer之后，store的state就有了初始值；从刚开始的undefined==>{count:{num:66},todo:["去约会","去看书"]}

        // 点击-按钮，触发onClick事件，该min方法会执行；当执行min时，会调用store中的dispatch方法和actions中min方法；先执行actions中min,并且返回一个带有type的对象；把返回的这个对象传给了dispatch的实参，继续找到redux中createStore中dispatch让其执行，该方法执行，会让combineReducers的返回值的那个函数执行，当那个函数执行，又会找到各个组件对应的reducer,让其循环执行，把各个的reducer的返回值赋值给obj;最后把obj覆盖state;由于该组件订阅了更新该组件私有状态的方法，所以dispatch之后也会让该组件的订阅方法执行，从而让视图更新。

        //  
    }
    render(){
        return <div>
            <button onClick={()=>{this.add(2)}}>+</button>
            <span>{this.state.num}</span>
            <button onClick={this.min.bind(null,3)}>-</button>
        </div>
    }
}
export default Count;
