<template>
  <div>
    <h1>我是Profile组件</h1>
    <h2>{{$route.query}}</h2>
    <h2>{{$route.query.userName}}</h2>
    <h2>{{$route.query.age}}</h2>
    <h2>{{$route.query.sex}}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

</style>
