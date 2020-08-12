// pages/classInfo/classInfo.js
let  app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    til:"",
    img:"",
    price:0,
    id:"",
    num:0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 在onLoad这个函数中，通过url传递的参数传给了这个回调函数的options
    // console.log(options);
    
    let  ary = app.globalData.cartList;
    let num = ary.length?ary.reduce((prev,next)=>{return prev+next.count},0):0;
     console.log(num);
    this.setData({
        til:options.til,
        img:options.img,
        id:options.id,
        price:options.price,
        num:num
    })

  },
  add(){
    // 这个数据应该是公共的；这样在购物车页面中就可以取到这个公共的数据；对于详情页来说，是往这个公共数据中存入东西； [];
    let  ary = app.globalData.cartList;
    // 判断之前有没有存储过这个商品
    let obj = {
       til:this.data.til,
       img:this.data.img,
       id:this.data.id,
       price:this.data.price,
       // count: 用来表示购物车中该商品有几个
       count:1
    };
    // 判断该商品是否存在；
    // 重复添加商品push问题；
    let flag = ary.filter(item=>item.id==this.data.id);
    if(flag.length){
        flag[0].count++;
    }else{
      ary.push(obj);
    }
    let num = ary.length?ary.reduce((prev,next)=>{return prev+next.count},0):0;
     this.setData({
       num:num
     })
  },
  goCart(){
    // 在js中切换页面
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
    // let  ary = app.globalData.cartList;
    // let num = ary.length?ary.reduce((prev,next)=>prev.count+next.count):0;
    // console.log(num);
    // this.setData({
    //   num:num
    // })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})