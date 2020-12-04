<template>
  <div id="app">
    <TabBar>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/home.png">
        <div>首页</div>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/home.png">
        <div>分类</div>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/home.png">
        <div>购物车</div>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/home.png">
        <div>我的</div>
      </div>
    </TabBar>
  </div>
</template>

<script>
  //引入tab-bar
  import TabBar from "./components/tabbar/TabBar";
  export default {
    name: 'App',
    components:{
      TabBar
    }
  }
</script>

<style>
  @import "./assets/css/base.css";

</style>
