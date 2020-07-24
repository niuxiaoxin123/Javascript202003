// 引入react的核心库；每一个模块中都要引入；
import React from "react";
import ReactDOM from "react-dom";
// 什么是JSX语法：允许在js中写标签；
// 当使用jsx语法时，React必须在该作用域下；一个模块一个scope;一个js文件有一个自己独立的scope
// react : 允许在js中文件写标签；
// react :换了种写法；
// 参数1： 是JSX元素 
// 参数2： 通过idroot获取的public文件中index.html中的元素；最终将jsx元素插入到root根元素中；

// 浏览器只认识html,css,js文件；但是也明确规定在js中不能写标签；
// 在后缀名是js的文件中，是不支持直接写标签；能够在文件中直接写标签，且不报错的是jsx的文件;能够在文件中写标签，且不错，实际上是jsx文件；因为webpack对js以及jsx的文件进行了处理，所以不管写在什么文件中，都能被解析并且支持；
// 在react的js文件中或者是jsx文件中创建的元素都叫jsx元素或者叫react元素；
let  a = <div>
    <div>今天是周五</div>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    </div>;
console.log(a);// 这是jsx元素，也叫react元素，那么实际上a就是一个虚拟的DOM元素；也是一个对象；
ReactDOM.render(a,document.querySelector("#root"));

// ReactDOM.render
// 1.ReactDOM.render: 可以react元素（也叫jsx元素)的虚拟DOM转成真实的DOM元素
// 2. 把真实的DOM挂载到根元素root元素中