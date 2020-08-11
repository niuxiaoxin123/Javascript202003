//index.js
import http from "../../utils/http.js";
//获取应用实例
// const app = getApp()
Page({
  data: {
      bannerList:[]
  },
  onLoad:function(){
     // created ;一般在这里面发送请求
     // 在onLoad这个钩子函数中，发送请求
     this.getBanner();
  },
  getBanner(){
    console.log(100);
      http.get("/banner").then(data=>{
         if(data.code==0){
           this.setData({
             bannerList:data.data
           })
         }
      })
  }
})
