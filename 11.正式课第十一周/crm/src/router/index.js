import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../views/index.vue";
// 是第三方插件，需要Vue.use
Vue.use(VueRouter)

const routes = [
    {
        path: "/login",
        name: "login",
        // 按需加载；只有访问这个路由时，才会加载该路由；
        component: () => import("../views/login.vue")
    },
    {
        path:"/",
        component:index,
        children:[
            {
                path:"/org",
                name:"org",
                component:()=>import("../views/org.vue")
            },
            {
                path:"/crm",
                name:"crm",
                component:()=>import("../views/crm.vue")
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
