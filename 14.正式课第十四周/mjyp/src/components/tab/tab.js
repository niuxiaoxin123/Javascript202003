import React from "react";
import "./tab.less";
// Link 和 NavLink : 点击navLink会有activeclass这个类名；
import {NavLink} from "react-router-dom";
function Tab(){
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
export default Tab;