<template>
  <div class="traffic-ss">
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .traffic-ss {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 999;
    .amap-wrapper {
      width: 100%;
      height: 100%;
      .amap-box {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
