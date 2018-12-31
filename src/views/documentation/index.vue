<template>
  <div class="warn">
    <div class="amap-wrapper">
      <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-box">
        <el-amap-marker
          v-for="(marker, index) in markers"
          :key="index"
          :position="marker.position"
          :events="marker.events"
          :visible="marker.visible"
          :draggable="marker.draggable"
          :vid="index"/>
      </el-amap>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zoom: 14,
      center: [120.901737, 29.497975],
      markers: [
        {
          position: [120.901737, 29.497975],
          events: {
            click: () => {
              alert('click marker');
            },
            dragend: (e) => {
              console.log('---event---: dragend')
              this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
            }
          },
          visible: true,
          draggable: false,
          template: '<span>1</span>',
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .warn {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 999;
    padding: 1%;
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
