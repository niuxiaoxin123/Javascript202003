// crm管理系统 悟空  企管宝  OA系统  订单系统 课程系统；
// vue项目 ： 彻彻底底敲两遍；
import React from "react";
import ReactDOM from "react-dom";
// JSX语法   
// createElement  render 
// 组件 function  class
// class 声明组件有this,有状态，有生命周期；
// 视图更新： props(属性 ： 从外面传递到组件内部的)  state(状态：constructor初始化的state)
// setState : 不能保证是异步的；setState({num:100}) setState(prevState=>{return {}})
// 生命周期： defaultProps ==> constructor ==> componentWillMount==> render ==> componentDidMount
// 组件更新时：
// shouldComponentUpdate(nextProps,nextState) ==> componentWillUpdate ==> render  ===> componentDidUpdate
// 组件卸载
// componentWillUnMount 
// componentWillReceiveProps
class Parent extends React.Component{
    constructor(){
        super();
    }
    add=()=>{

    }
    render(){
        return <div>
            <button onClick={this.add}  ref="a" ref={(x)=>{this.x = x}}></button>
        </div>
    }
}
// 事件绑定 驼峰方式
// 受控组件 非受控组件 input value[onChange];
// 父传子 ： this.props.a
// 子传父： 传事件让子组件触发；
//  ref : 获取元素  this.refs.a  字符串==> this.refs  函数：最终把元素放在实例上
ReactDOM.render(<Parent a={100}></Parent>,document.querySelector("#root"))