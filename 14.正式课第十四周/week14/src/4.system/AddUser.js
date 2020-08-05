import React from "react";
export default class AddUser extends React.Component{
    constructor(){
        super();
    }
    add=()=>{
        // 当点击新增把数据放在user中，然后放到localStorage中
        let user =JSON.parse(localStorage.getItem("users"))|| [];
        user.push({id:Date.now(),name:this.refs.x.value});
        localStorage.setItem("users",JSON.stringify(user));
        console.log( this.props);
        // 凡是由路由渲染的组件： history  location   match
        this.props.history.push("/user/list");
    }
    render(){
        return <div>
            <input type="text" className="form-control" ref="x"></input>
            <button className="btn btn-danger" onClick={this.add}>新增用户</button>
        </div>
    }
}