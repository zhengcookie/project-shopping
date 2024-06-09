import Home from "../views/main/Home.vue"
import Layout from "../views/Layout.vue"
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
const routes = [
   
    {
        path:"/",
        name:"layout",
        component:Layout,
        children:[
            {
                path:"",
                name:"Home",
                component:Home,
                meta:{
                    isLogin:true
                }
            },
            {
                path:"params",
                name:"Params",
                component:()=> import("../views/main/Params.vue"),
                meta:{
                    isLogin:true
                }
            },
            {
                path:"ad",
                name:"AD",
                component:()=> import("../views/main/ADCategory.vue"),
                meta:{
                    isLogin:true
                }
            },
            {
                path:"product",
                name:"Product",
                component:()=> import("../views/main/Product.vue"),
                meta:{
                    isLogin:true
                }
            },
        ]
    },
    {
        path:"/login",
        name:"Login",
        component:() => import("../views/Login.vue")
    }
   
]
const router = new VueRouter({
    mode:"history",
    base:process.env.BASE_URL,
    routes
    
})
export default router