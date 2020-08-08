import React from "react";
import "./menu.less";
function Menu(props){
    // 在解构赋值时，如果activity时null,不能取默认值；
    let {activity}=props;
    activity=activity===null?[]:activity;
    return <div className="link-box">
        {activity.map((item,index)=>{
            return <div className="react-view" key={index}>
                <img src={item.url}></img>
            </div>
        })}
    </div>
}
export default Menu;