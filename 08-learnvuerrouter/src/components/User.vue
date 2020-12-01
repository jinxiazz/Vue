<template>
  <div>
    <h1>我是user页面的标题</h1>
    <p>我是user页面的内容，嘿嘿嘿</p>
    <h1>{{$route.params.userId}}</h1>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed:{
    userId(){
      return this.$route.params.userId
    }
  }
}
</script>

<style scoped>

</style>
