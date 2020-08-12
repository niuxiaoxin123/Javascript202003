import http from "../../utils/http";

Page({
  // 页面的初始数据
  data:{
    level1:[],
    level2:[],
    level3:[]
  },
  // 相当于created 在这里面发送请求
  onLoad:function(){
    this.getData();
  },
  getData(){
    http.get("/classList").then(data=>{
        console.log(data.data)
        if(data.code==0){
           let {level1,level2,level3}=data.data;
           // 请求数据成功后，对当前页面的数据进行重新设置；
            this.setData({
              level1,
              level2,
              level3
            });
        }
    })
  }
});