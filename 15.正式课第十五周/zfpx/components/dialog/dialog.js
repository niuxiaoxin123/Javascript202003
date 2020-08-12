// components/dialoag.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },


  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    hide(){
      // 触发订阅的方法；
      // 发布bind订阅的方法；bind后面的属性就是订阅的方法
      this.triggerEvent("close")
    },
  }
})
