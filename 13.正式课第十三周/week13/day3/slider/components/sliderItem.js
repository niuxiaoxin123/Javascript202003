import React from "react";
// import img from "../images/1.jpg";
export default class SliderItem extends React.Component{
    constructor(){
        super()
    }
    render(){
        // 轮播是控制该ul的left值，设置它的style；只要让这个style是根据状态改变而改变的；
        let style={
            left :-this.props.index*400+"px",
            // transition :0.5s 动画过度时间
            transition:"left 0.5s linear"
        }
        // ref的x相当于ul元素，把ul元素给this新增a属性上；
        
        return <ul className="wrapper" style={style} ref={this.props.slid}>
            {this.props.imgs.map((item,index)=>{
                return <li key={index}>
                    <img src={item}></img>
                </li>
            })}
        </ul>
    }
}