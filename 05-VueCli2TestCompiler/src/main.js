// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  /*components: { App },
  template: '<App/>'*/
  render:function (createElement){
    /*
    * createElement：是一个函数
    *   1、普通用法
    *     createElement('标签名',{标签的属性},[标签的内容])
    *   2、传入组件对象
    *     createElement(组件名)
    * */
    // return createElement('h1',{class:"box"},['hello cli',createElement('button',['按钮'])])
    return createElement(App)
  }
})

//template->ast->render->virtual dom->真实dom
