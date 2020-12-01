//配置路由相关信息
import VueRouter from "vue-router";
import Vue from "vue";

//导入home和about组件
/*import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";*/

const Home = ()=>import('../components/Home');
const HomeNews = ()=>import('../components/HomeNews');
const HomeMessage = ()=>import('../components/HomeMessage');

const About = ()=>import('../components/About');
const User = ()=>import('../components/User');
const Profile = ()=>import('../components/Profile');

//注册路由
Vue.use(VueRouter);

//url和组件的映射关系
const routes = [
  {
    path: '/',
    //redirect 重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta:{
      title: '关于'
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta:{
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta:{
      title: '档案'
    }
  }
]

//创建路由实例
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active1'
})

//全局导航守卫
router.beforeEach((to, from, next)=>{
  //从from跳转到to  改变网页的标题
  //1、给每一个组件添加mate:{title:标题}
  //2、设置标题
  // console.log(to)
  document.title=to.matched[0].meta.title;
  next();//必须要调用next()  没写则系统自动调用，写了则需要自己手动调用
})

//导出路由实例
export default router
