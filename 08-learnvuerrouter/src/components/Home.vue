<template>
  <div>
    <h1>我是home组件中的h1</h1>
    <p>我是home组件中的内容，哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      path:"/home/news",
    }
  },
  created() {//创建
    console.log("created");
  },
  destroyed() {//销毁
    console.log("destroyed");
  },
  activated() {
    console.log(this.path)
    this.$router.push(this.path)
    console.log("当前活跃的")
  },
  deactivated() {
    console.log("不活跃的")
  },
  beforeRouteLeave(to,from,next){
    console.log("组件内导航，记录上一次的path");
    console.log(this.$route.path);
    this.path=this.$route.path;
    next();
  }
}
</script>

<style scoped>

</style>
