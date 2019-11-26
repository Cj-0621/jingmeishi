<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header></Header>
    <!-- <Index></Index> -->
    <!-- 专门配合路由使用的标签 -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

// .vue 后缀名可以省略, 默认
import Header from "./components/Header"
import Footer from "./components/Footer"
// import Index from "./pages/Index"
import { router } from './routes/router'

export default {
  name: 'app',
  components: {
    // HelloWorld
    // Header:Header  ES6规定 如果 属性:值 属性和值 长得一样, 可以省略
    Header,
    Footer,
    // Index
  },
  router
}
</script>

<style>
/* css中引入css样式, 使用@import关键词 */
@import "./assets/css/common.css";
@import "./assets/css/mycss.css";
</style>
