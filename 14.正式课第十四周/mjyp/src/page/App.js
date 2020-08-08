import React from "react";
import {HashRouter,Route,Switch} from "react-router-dom";
import Tab from "../components/tab/tab.js";
import Home from "./home/home";
import Classify from "./classify/classify.js";
import Taste from "./taste/taste"
import Cart from "./cart/cart";
import Personal from "./personal/personal"
import Search from "./search/search";
// 引入公共的样式
import "../assets/css/common.less";
import "../assets/css/reset.min.css";
class App extends React.Component{
    // 监听页面的hash值，然后根据路由映射表渲染对应的组件
    render(){
        return <HashRouter>
            {/* 路由 */}
            <Switch>
                <Route path="/" component={Home} exact={true}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/classify" component={Classify}></Route>
                <Route path="/cart" component={Cart}></Route>
                <Route path="/taste" component={Taste}></Route>
                <Route path="/personal" component={Personal}></Route>
                <Route path="/search" component={Search}></Route>
            </Switch> 
            {/* 导航 */}
            <Tab/>
        </HashRouter>
    }
}
export default App;