<template>
  <div id="app">
    <!-- <scale-view :width="16" :height="9" class="scale">
      <router-view/>
    </scale-view> -->
    <router-view/>
    <img v-if="$route.path!=='/allArea/ss'&&$route.path!=='/traffic/index/sj'" class="ysj" src="@/assets/10.png" alt="">
  </div>
</template>

<script>
import ScaleView from './ScaleView.vue'
export default{
  name: 'App',
  components: { ScaleView }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #111a29;
    position: relative;
    .ysj {
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>

