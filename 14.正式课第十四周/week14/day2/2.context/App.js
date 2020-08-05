import React from "react";
import Header from "./Header";
import PropTypes from "prop-types";
// App 的子组件时Header组件
// Header的子组件是Title; 
// 把APP这个组件的状态数据分别传递给Header组件和Title组件；
//1. 父传子==>行间属性  2.redux 各个组件   3.context : 上下文;
// 父传子： 
// 父组件 ：childContextTypes : 定义子孙组件的数据类型
// 父组件 ：getChildContext : 是一个函数，把需要传递给子孙的数据返回
class App extends React.Component{
    constructor(){
        super();
        this.state={color:"red",num:100}
    }
    static childContextTypes={
        // 定义上下文的数据类型
        color:PropTypes.string,
        changeColor:PropTypes.func,
        num:PropTypes.number
    }
    getChildContext(){
        //定义上下文的数据，把要传递给子孙组件的数据放到对象中返回，这样子孙组件才可以用
        return {
            color:this.state.color,
            changeColor:this.changeColor,
            num:this.state.num
        } 
    }
    changeColor=()=>{
        this.setState({color:"black"});
    }
    render(){
        return <div>
            100
            <Header></Header>
        </div>
    }
}
export default App;