//index.js
import http from "../../utils/http.js";
//获取应用实例
// const app = getApp()
Page({
  data: {
      bannerList:[],
      showKnow:false,
      showzf:false,
      classList:[]
  },
  onLoad:function(){
     // created ;一般在这里面发送请求
     // 在onLoad这个钩子函数中，发送请求
     this.getBanner();
     this.getPublicClass();
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
  },
  getPublicClass(){
      http.get("/publicList").then(data=>{
          if(data.code===0){
            this.setData({
              classList:data.data
            })
          }
      })
  },
  showKnow(){
    // 在小程序中，数据data和事件的方法名是可以重名的；事件会默认匹配事件
    // 点击了图标，让弹出层显示
    this.setData({
      showKnow:true
    })
  },
  close(){
    console.log(1);
    this.setData({
      showKnow:false
    })
  },
  showzf(){
    this.setData({
      showzf:true
    })
  },
  closezf(){
    console.log(1);
    this.setData({
      showzf:false
    })
  },
})
