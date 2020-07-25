import React from "react";
import ReactDOM from "react-dom";
let  bar = <div>
    2020第三期
    <p>我爱你中国</p>
</div>;// 在解析jsx语法时，必须使用React.createElement
// console.log(bar);// 是一个react元素，也是一个虚拟的DOM元素；其实就是在当前内存中的一个对象；DOM-diff对比，更改发生改变那块真实的DOM；
// 实际上在解析jsx元素，会调用React.createElement;
// console.log(React);
// React.createElement : 也同样会创建一个虚拟的DOM元素；
// 参数1： 元素的类型  参数2: 对象 行间属性  参数3 ： 子节点  从第三个参数以后，都将成为该div元素的子节点；
let  ele = React.createElement("div",{a:"北京"},"2020第三期",React.createElement("p",null,"我爱你中国"));

// REACT : MVC : model  v :viwe   c : controller
// JSX语法其实是React.createElement的语法糖；
// console.log(ele);
ReactDOM.render(ele,document.querySelector("#root"));