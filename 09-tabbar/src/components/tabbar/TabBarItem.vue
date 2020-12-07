<template>
  <div class="tab-bar-item"  @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="txtColors">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path: String,
    txtColor: {
      type: String,
      default: 'pink'
    }
  },
  computed: {
    isActive:function (){
      return this.$route.path.indexOf(this.path)!==-1;
    },
    txtColors(){
       return this.isActive?{color:this.txtColor}:{}
    }
  },
  data(){
    return{
      // isActive:false
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 15px;
  }

  .tab-bar-item img{
    width: 24px;
    vertical-align: middle;
    margin-top: 3px;
  }

  .active{
    color: hotpink;
  }
</style>
