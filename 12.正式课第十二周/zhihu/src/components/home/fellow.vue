<template>
  <div class="fellow">
      <van-tabs v-model="active" type="card">
          <van-tab v-for="item in arr" :key="item.type" :title="item.title"></van-tab>
      </van-tabs>
  </div>
</template>

<script>
export default {
  name: 'fellow',
  data() { 
    return {
      active:0,
      arr:[
        {
          title:"推荐",
          type:"tuijian"
        },{
          title:"科技",
          type:"keji"
        },
        {
          title:"教育",
          type:"jiaoyu"
        },
        {
          title:"娱乐",
          type:"yule"
        },
        {
          title:"汽车",
          type:"qiche"
        },
        {
          title:"金融",
          type:"jinrong"
        },
        {
          title:"体育",
          type:"tiyu"
        }
      ]
    }
  },
  created(){
      
  },
  methods:{
    getList(){
       
    }
  }
 }
</script>

<style lang="less">
  .fellow{
      padding-top:3vw;
      .van-tabs__nav--card{
          border:none;
          .van-tab{
             border:none;
             border-radius: 2px;
             background: #f6f6f6;
             color:#646464;
          }
          .van-tab.van-tab--active{
            color:#0084ff;
            background: rgba(0,132,255,0.1)
          }
      }
  }
</style>