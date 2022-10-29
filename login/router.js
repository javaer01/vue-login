import VueRouter from "vue-router";
//导入登录和注册对应的路由组件
import Login from './components/Login.vue'
import Register from './components/Register.vue'
var router = new VueRouter({        //创建路由对象
    routes:[
        {path:'/',redirect:'/login'},
        {path:'/login',component:Login},
        {path:'/register',component:Register}
    ]
})
export default router       //把router暴露出去