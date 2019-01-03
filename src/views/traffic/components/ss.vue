<template>
  <div class="traffic-ss">
    <div class="box">
      <span class="title">新昌实时路况</span>
      <span class="icon" :style="{ backgroundImage: 'url(' + three + ')'}"/>
    </div>
    <div id="mapContainer"/>
  </div>
</template>

<script>
import Three from '@/assets/traffic_status.png'
export default {
  data() {
    return {
      three: Three
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      var map = new BMap.Map("mapContainer")
      map.centerAndZoom(new BMap.Point(120.917737, 29.498975), 17)
      var ctrl = new BMapLib.TrafficControl({
        showPanel: false
      })
      map.addControl(new BMap.NavigationControl())
      map.enableContinuousZoom(false)
      map.enableScrollWheelZoom(false)
      map.addControl(ctrl)
      ctrl.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT)
      ctrl.showTraffic()
    }
  }
}
</script>

<style lang="scss" scoped>
  .traffic-ss {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 999;
    display: flex;
    flex-direction: column;
    .box {
      display: flex;
      justify-content: space-between;
      background: rgba(255, 255, 255, 0.05);
      align-items: center;
      padding-left: 1%;
      padding-right: 1%;
      .title {
        color: #bbd5ff;
        font-size: 20px;
      }
      .icon {
        width: 10%;
        height: 50px;
        background-repeat: no-repeat;
      }
    }
    #mapContainer {
      flex: 1;
    }
  }
</style>
