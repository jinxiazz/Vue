<template>
  <div id="app">
    <!--<router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->
    <!--  <router-link to="/home" tag="button" replace>首页</router-link>
      <router-link to="/about" tag="button" replace>关于</router-link>-->
    <!-- <button @click="homeClick">首页</button>
     <button @click="aboutClick">关于</button>-->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
<!--    <router-link :to="'/user/'+userId" tag="button" replace>用户</router-link>-->
<!--    <router-link to="/profile" tag="button" replace>档案</router-link>-->
<!--    <router-link :to="{path:'/profile',query:{userName:'admin',age:123,sex:'man'}}" tag="button" replace>档案</router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId:'admin'
    }
  },
  methods: {
    homeClick() {
      this.$router.push("/home");
      // this.$router.replace("/home");
      console.log('homeClick');
    },
    aboutClick() {
      this.$router.push("/about");
      // this.$router.replace("/about");
      console.log('aboutClick');
    },
    userClick(){
      this.$router.push('/user/'+this.userId);
    },
    profileClick(){
      this.$router.push({
        path: '/profile',
        query: {
          userName: 'lucy',
          age: 20,
          sex: 'woman'
        }
      })
    }
  }
}
</script>

<style>
.active {
  color: skyblue;
}

.active1 {
  color: pink;
}
</style>
