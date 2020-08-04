import React from "react";
import actions from "../store/actions/counter.js.js.js";
import {connect} from "react-redux";
// connect : react-redux 要求返回一个连接后的组件；connect
// 属性和状态的变化能引发视图的更新；
// react-redux : 将公共的数据放到了组件的属性上
class Counter extends React.Component{
    // constructor(){
    //     super()
    //     this.state={num:store.getState().counter.num}
    // }
    // componentDidMount(){
    //     store.subscribe(()=>{
    //         this.setState({num:store.getState().counter.num})
    //     })
    // }
    add=()=>{
        //  store的dispatch这个方法是用来更改store的中公共数据的；但是不能让该视图也跟着更新；把公共数据放到自己的私有的状态上；并且在componentDidMount订阅一个方法，方法中setState重新设置当前的私有状态；每当dispatch执行一次，就会让订阅 的方法执行，订阅方法执行就会调用setState,调用setState就会让本组件视图更新；
        // store.dispatch(actions.add());
        // 将store.dispatch作为属性也传递给了当前组件
        // this.props.dispatch(actions.add());
        // 这个属性上的add方法并不直接是actions中的add方法；而是包装了之后的add方法；
        this.props.add();
    }
    render(){
        // 当前组件的属性上有个num和dispatch
        console.log(this.props);
        return <div>
            <button onClick={this.add}>+</button>
            {this.props.num}
            <button>-</button>
        </div>
    }
}
// let  mapStateToProps=(state)=>{// state : 这个state就是store中的state，就是那个公共的数据
//     return  {...state.counter}
// }
// 第二个参数actions传进来以后，属性上dispatch没有了，但是多了个add

// connect方法实际上两个参数都是函数
// let  mapActionsToProps=(dispatch)=>{ // dispatch===store.dispatch
//     //实际上再connect执行时，会把store.dispatch这个方法传给这个函数的dispatch
//     return { // 这个对象最后会放到组件的属性上；
//         add:()=>{dispatch(actions.add())}
//     }
// }
// mapActionsToProps :当connect执行时，mapActionsToProps也会执行，并且把这个函数的执行结果当做属性给了当前counter组件
export default connect(state=>({...state.counter}),actions)(Counter);
// connect执行时，正常情况下第二个是函数，但是也可以传对象，当传入一个函数时，会把函数的执行结果返回的对象直接放到当前组件的属性上，传入actions这个对象时，会默认调用一个bindActionsCreator这个方法，将这个方法的返回值放到组件的行间属性上

// action : 就是connect第二个参数的actions  dispatch：store.dispatch
// let bindActionsCreator=(action,dispatch)=>{
//     let obj ={};
//     for(let key in action){
//         obj[key]=()=>{
//             dispatch(action[key]())
//         }
//     }
//     return obj;// return 的obj最后放到了组件的属性上
// }
