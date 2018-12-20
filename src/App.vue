<template>
  <div id="app">
    <scale-view :width="16" :height="9" class="scale">
      <router-view/>
    </scale-view>
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
  }
</style>

