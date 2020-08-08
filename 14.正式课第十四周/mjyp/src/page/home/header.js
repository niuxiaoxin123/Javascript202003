import React from "react";
import "./header.less";
import {withRouter} from "react-router-dom";
function Header(props){
    return <div className="main-header">
            <div className="logo-box">
                <img src={require("../../assets/images/navi_title_v2.png")}></img>
            </div>
            <div className="search-box" onClick={()=>{
                // 给搜索绑定绑定点击事件，点击时跳转到search组件上
                // this==> undefined
                // console.log(this);
                // console.log(props);// 空对象
                props.history.push("/search");
            }}>
                <img src={require("../../assets/images/home_search.png")}></img>
                <span>年货嗨强，最高直降1000</span>
            </div>
            <div className="msg-box">
                <div className="msg"></div>
            </div>
    </div>
}
// 凡是由路由渲染的并且是class定义的组件，组件上属性上会有history,location,match;
// 利用withRouter方法处理function定义的组件，组件的props也会新增这三个属性
export default withRouter(Header);