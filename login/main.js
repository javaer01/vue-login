import Vue from 'vue'   //引入vue.js   
import app from './App.vue'     //引入App.vue组件
import VueRouter from 'vue-router'      //引入router.js组件
Vue.use(VueRouter)      //安装vue-router路由模块
import router from './router.js'        //将路由放到单独的文件中

import './lib/mui-master/dist/css/mui.css'

new Vue({       //初始化Vue实例
    el: '#app',     //将el绑定到index.html中的id为app的标签
    render: c=> c(app),     //使用render函数渲染App.vue组件
    router
})