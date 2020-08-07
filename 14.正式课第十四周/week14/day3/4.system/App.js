import React from "react";
import Nav from "./Nav"
export default class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        // 分为两部分，一个是头部，一个组件切换，更新的页面
        return <div className="container">
            <div className="row">
                {/* 导航部分 */}
                <Nav></Nav>
                {this.props.children}
            </div>
        </div>
    }
}