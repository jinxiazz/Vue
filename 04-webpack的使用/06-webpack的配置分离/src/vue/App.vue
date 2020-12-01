<template>
  <div>
    <h1>{{message}}</h1>
    <button @click="btnClick">按钮</button>
    <Cpn/>
  </div>
</template>

<script>
import Cpn from "./Cpn";
export default {
  name: "App",
  components:{
    Cpn
  },
  data(){
    return{
      message:"hello webpack"
    }
  },
  methods:{
    btnClick(){
      alert("按钮点击了....")
    }
  }
}
</script>

<style scoped>
  h1{
    color: skyblue;
  }
</style>