import React from "react";
import Local from "./Local";
class UserName extends React.Component{
    // constructor(){
    //     super();
    //     this.state={user:""}
    // }
    // componentDidMount(){
    //     // 当DOM加载之后，重新对state进行赋值
    //     this.setState({user:localStorage.getItem("user")});
    // }
    render(){
        return <div>
           用户：<input type="text" value={this.props.user}  onChange={()=>{}}></input>
        </div>
    }
}
// 导出的是A组件，但是渲染的是UserName;
export default Local("user")(UserName);