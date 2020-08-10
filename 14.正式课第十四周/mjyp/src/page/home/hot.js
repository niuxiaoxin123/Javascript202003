import  React from "react";
import "./hot.less";
import {Link} from "react-router-dom";
import actions from "../../store/actions/index.js";
import {connect} from "react-redux";
function Hot(props){
    console.log(props);
    let {queryHot,hotData} = props;
    // 如果是hotData是null,说明是第一次渲染该组件，那么需要发送请求，
    if(!hotData){
        queryHot();
    }
    // store的hotData默认值是null;第一次渲染这个组件时，从store中获取的hotData就是null;第一次解析hotData是null，所以发送了请求，但是由于请求是异步的，当请求回来的以后，把数据更改了store中的hotData;由于react-redux把store的数据和方法都传给了该组件的属性，所以当store数据发生更改，对于hot组件来说，属性就变了，所以视图会进行第二次解析；
    return <div className="recommend">
        <div className="title-box">
            <span>推荐</span>
            <Link to="/recommend">
                <span>
                更多 >
                </span>
            </Link>
        </div>
        {/* 如果hotData不是null,那么就正常解析元素结构，如果是null ，页面不显示*/}
        {hotData?<div>
            <div className="first">
                <img src={hotData[0].title}></img>
                <img src={hotData[0].describe}></img>
            </div>
            <ul className="list">
                {hotData.slice(1).map((item,index)=>{
                    return <li key={index}>
                        <img src={item.url}></img>
                    </li>
                })}
            </ul>
        </div>:null}
    </div>
}
export default connect(state=>state.homeReducer,actions.home)(Hot);