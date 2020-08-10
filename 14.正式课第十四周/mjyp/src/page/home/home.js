import React from "react";
import Header from "./header.js";
import {connect} from "react-redux";
import action from "../../store/actions/index";
import Banner from "../../components/swiper/swiper.js";
import "./home.less";
import Menu from "./menu.js";
import Hot from "./hot.js";
function Home(props){
    // 在首页中发送请求；
    // 要把请求回来的数据更改store中的数据
    // 在home中获取到action中的方法； this==> undefined
    // 利用react-redux把actions中的方法放到了该组件的props上；
    // console.log(props);
    let  {init,sliders,activity}= props;
    if(!sliders){
        // 第一次进来，sliders是null;发送请求
        init();
    }
    // console.log(sliders);
    return <div className="main-box">
            <Header></Header>
            <div className="main-body">
                {/* 轮播图 导航  更多 */}
                {/* 当第一次解析时，sliders传过去null */}
                <Banner data={sliders}></Banner>
                <Menu activity={activity}></Menu>
                <Hot></Hot>
            </div>
    </div>
}
// 把store中state和action中的方法放到了组件的属性上；
// 发请求   store    react-redux;
export default connect(state=>({...state.homeReducer}),action.home)(Home);