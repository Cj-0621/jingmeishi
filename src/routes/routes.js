// src/routes/routes.js
// 设定对应关系的数组

// 引入 路由要切换的 组件
import Index from '../pages/Index'
import About from '../pages/About'
import News from '../pages/News'
import Contact from '../pages/Contact'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Register from '../pages/Register'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'
import NewsDetails from '../pages/NewsDetails'

//制作一个数组, 存放对应关系, 需要到处
export const routes = [
  {
    //根目录 / , 对应的是 Index 组件
    path: '/',
    component: Index
  },{
    path: '/about',
    component: About
  },{
    path: '/news',
    component: News
  },{
    path: '/contact',
    component: Contact
  },{
    path: '/product',
    component: Product
  },{
    path: '/cart',
    component: Cart
  },{
    path: '/login',
    component: Login
  },{
    path: '/register',
    component: Register
  },{
    path: '/product_details',
    component: ProductDetails
  },{
    path: '/news_details',
    component: NewsDetails
  }
]