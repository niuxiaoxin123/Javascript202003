import React,{useEffect} from "react";
import "./swiper.less";
import "swiper/css/swiper.css";
import Swiper from "swiper";
function Banner(props){
    
    useEffect(()=>{
        new Swiper(".swiper-container",{
            loop:true,
            pagination:{
                el:".swiper-pagination"
            },
            autoplay:{
                delay:3000
            }
        })
    });
    let data=props.data||[];
    // 图片的数据是从后端请求回来的；后端把数据返回，并且把数据放在store中；轮播图组件是想获取到store中的属，进行渲染；
    // 发送请求===> 请求回来把store中的数据更改===> 把store数据传递给该组件，再banner组件中循环数据；
    return <div className="swiper-container">
                <div className="swiper-wrapper">
                    {data.map((item,index)=>{
                        return <div className="swiper-slide" key={index}>
                            <img src={item.url}></img>
                        </div>
                    })}
                </div>
                <div className="swiper-pagination"></div>
        </div>
}
export default Banner;