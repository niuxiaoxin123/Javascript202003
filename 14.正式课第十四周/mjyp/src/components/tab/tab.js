import React from "react";
import "./tab.less";
// Link 和 NavLink : 点击navLink会有activeclass这个类名；
import {NavLink,withRouter} from "react-router-dom";
function Tab(props){
    // history  location   match
    console.log(props);
    let pathname = props.location.pathname;
    let flag = /search/.test(pathname);// 检测路径是否包含search;
    if(flag){
        return null;
    }
    return <div className="tab">
        <NavLink to="/home" className="link">
            <i className="icon"></i>
            <span>首页</span>
        </NavLink>
        <NavLink to="/classify" className="link">
            <i className="icon"></i>
            <span>分类</span>
        </NavLink>
        <NavLink to="/taste" className="link">
            <i className="icon"></i>
            <span>品味</span>
        </NavLink>
        <NavLink to="/cart" className="link">
            <i className="icon"></i>
            <span>购物车</span>
        </NavLink>
        <NavLink to="/personal" className="link">
            <i className="icon"></i>
            <span>个人</span>
        </NavLink>
    </div>
}
export default withRouter(Tab);