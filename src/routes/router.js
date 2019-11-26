// src/routes/router.js

// 作出路由对象: 

/**
 * ES6的导出 和 导入需要配合使用
 * 
 * export default xxx
 * import xxx from xx
 * 
 * export xxx
 * import {xxx} from xxx
 */
import { routes } from './routes'

import Vue from 'vue'
import VueRouter from 'vue-router'

//让vue加载 router路由模块
Vue.use(VueRouter)

//实例化一个路由对象, 导出
//实例化时 必须传入 routes: [], []中存放对应关系
export const router = new VueRouter({
  // routes:routes
  routes
})

//到 App.vue 中, 主文件中 加载 此路由