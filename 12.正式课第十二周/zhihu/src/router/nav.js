import home from "./home.js";
export default [// children： 是index组件的子路由的配置
    {
       path:"/home",
       component:()=>import("@/components/home/home.vue"),
       redirect:"/home/fellow",
       children:home
    },
    {
      path:"/vip",
      component:()=>import("@/components/vip/vip.vue")
   },
   {
      path:"/notify",
      component:()=>import("@/components/notify/notify.vue")
  },
  {
    path:"/user",
    component:()=>import("@/components/user/user.vue")
    }
  ]