<template>
  <div class="box">
      <router-view></router-view>
  </div>
</template>

<script>
import home from "./components/home.vue"

export default {
    data(){
        return {
            msg: "Hello Vue"
        }
    },
    components: {
        home
    }
}
</script>

<style lang="less">
.box{
    width: 200px;
    height: 20px;
    background-color: hotpink;
}
</style>

