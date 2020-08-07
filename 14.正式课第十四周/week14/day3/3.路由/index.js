import React from "react";
import ReactDOM from "react-dom";
// react-router-dom : 给咱们提供了hasRouter 和 Route组件
import {HashRouter,Route,Switch,Link} from "react-router-dom";
// 从react-router-dom解构出来一些组件
// vue-router : router-link  router-view
// 切换路由时，会更新组件；
// 创建三个组件
let  Home =()=>{
    return <div>
        HOME
        <Link to="/list">去列表页</Link>
        </div>
}
let List = ()=>{
    return <div>LIST</div>
}
let Person = ()=>{
    return <div>PERSON</div>
}
// Route 组件： 有个path属性，其属性值对应上页面的hash值，当页面的hash值和这个path值匹配成功，就会显示component对应的组件

// Switch : 只要匹配一个符合要求的，都不再向下匹配

// exact : 如果给该条路由加上exact属性，属性值true，当前页面的hash值必须和path相同，才显示该组件，如果没有，那么页面的hash值只有包含path的属性，那么就显示
ReactDOM.render(<HashRouter>
    <Switch>
        {/* 只要每次更改hash值，都会从上到下依次检测是否匹配，如果没有Switch,那么即便已经匹配成功，也会向下匹配;提高了组件渲染路由的性能 */}
        <Route path="/"  exact={true} component={Home}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/list" component={List}></Route>
        <Route path="/person" component={Person}></Route>
    </Switch>
</HashRouter>,document.querySelector("#root"));