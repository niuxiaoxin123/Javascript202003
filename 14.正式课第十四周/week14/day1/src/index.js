import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {Provider} from "react-redux";
import store from "./store/index.js.js";
// react-redux 
// 1. 需要一个Provider将全局进行包裹起来，并且行间属性传入store;
// 2. 需要导出一个连接后的组件；组件需要connect()()
// 3. connect:第一个括号两个参数： 第一个参数是个函数 state=>({...state.todo})

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>
,document.querySelector("#root"));