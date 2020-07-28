import React from "react";
import ReactDOM from "react-dom";

// 组件开发： 框架；单页面应用；
// react如何定义组件： 1.函数声明  2.类声明

// broswer  : BOM  broswer object  model   DOM :document object model 
// my-item  => <my-item></my-item>
// 1.用函数创建一个组件
// 2.组件的名字必须是大写，为了和内置的组件区分开；(在react中认为，html天生自带的标签div,p,ul，li...)都是内置组件；
// 3.组件每当使用一次，当前组件函数就会执行一次；
// 4.当使用组件时，会把行间属性组合成一个对象传递给当前组件的第一个参数
// 5. 如果需要传入一个对象，那么需要将对象进行...展开，直接放到行间就可以
function Span(props){
    console.log(props);
    console.log(this)// undefined  function 定义的组件没有this;
    return <div>珠峰培训十大杰出青年{props.a}{props.b}</div>
}
let  obj = {a:"架构课",b:"就业课"};
let bar = <div>
            <Span a="魏威杰" b="纪安"></Span>
            <Span {...obj}></Span>
        </div>
ReactDOM.render(bar,document.querySelector("#root"));