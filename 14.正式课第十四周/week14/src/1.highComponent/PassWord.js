import React from "react";
import Local from "./Local"
class PassWord extends React.Component{
    // constructor(){
    //     super();
    //     this.state={pass:""}
    // }
    // componentDidMount(){
    //     // 这个逻辑和思想是一样的；把这个地方抽离成公共的
    //     this.setState({pass:localStorage.getItem("pass")});
    // }
    render(){
        return <div>
            密码：<input type="text"  value={this.props.pass} onChange={()=>{}}></input>
        </div>
    }
}
export default Local("pass")(PassWord);