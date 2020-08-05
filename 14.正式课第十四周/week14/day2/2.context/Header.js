import React from "react";
import Title from "./Title";
import PropTypes from "prop-types";
class Header extends React.Component{
    constructor(){
        super();
    }
    // contextTypes 用来接收父组件传递过来的数据
    static contextTypes={
        color:PropTypes.string,
        changeColor:PropTypes.func
    }
    render(){
        return <div>
            {this.context.color}
            <button onClick={this.context.changeColor}>改变颜色</button>
            <Title></Title>
        </div>
    }
}
export default Header;