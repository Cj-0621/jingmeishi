import Vue from 'vue'
import App from './App.vue'
import {axios_instance} from './util/axios'

// 挂载在 vue 上
Vue.prototype.$axios = axios_instance


Vue.config.productionTip = false

new Vue({
  // 运行时, 系统会自动传递一个函数给 render, 此函数会赋值给 h, 然后 h(App), 使用函数, 传入App模板 来进行显示
  render: h => h(App),
}).$mount('#app')

// $mount 挂载  在 id='app' 的标签上
// 在 index.html 中