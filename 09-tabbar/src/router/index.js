import Vue from 'vue'
import Router from 'vue-router'

const Home=()=>import('../view/home/Home');
const Category=()=>import('../view/category/Category');
const Profile=()=>import('../view/profile/Profile');
const Shopcart=()=>import('../view/shopcart/Shopcart');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/shopcart',
      component: Shopcart
    },
    {
      path: '/home',
      component: Home
    }
  ],
  mode: 'history'
})
