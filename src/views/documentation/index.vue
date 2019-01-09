<template>
  <div class="warn">
    <div class="amap-page-container">
      <el-amap
        vid="amapDemo3"  
        :center="center"
        :zoom="zoom"
        class="amap-demo">
        <!-- <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker.position" :vid="index">
          <div :style="slotStyle">
            <img src="@/assets/jk.png" alt="" srcset="" @click="onClick">
          </div>
          <div :style="slotStyle2">
            <img src="@/assets/lou.png" alt="" srcset="" @click="onClick">
          </div>
        </el-amap-marker> -->
        <el-amap-marker :position="markers" :vid="index">
          <div :style="slotStyle">
            <img src="@/assets/jk.png" alt="" srcset="" @click="onClickT">
          </div>
        </el-amap-marker>
        <el-amap-marker :position="markers2" :vid="index">
          <div :style="slotStyle2">
            <img src="@/assets/lou.png" alt="" srcset="" @click="onClickB">
          </div>
        </el-amap-marker>
      </el-amap>
    </div>
    <!--浮窗-->
    <div class="float">
      <div class="top" v-if="top">
        <h1 class="title">预警事件信息</h1>
        <p>编号: 0001</p>
        <p>时间: 2018.8.18 12:05:03</p>
        <p>地点: 大佛寺</p>
        <p>详情: 客流超载预警</p>
        <p>预案: 应急预案3</p>
      </div>
      <div class="bottom" v-if="bottom">
        <h1 class="title">预警事件信息</h1>
        <p>编号: 0003</p>
        <p>时间: 2019.1.2 16:15:43</p>
        <p>地点: 十九峰</p>
        <p>详情: 人群稍微拥挤</p>
        <p>预案: 应急预案1</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    let self = this;
    const center = [120.897454,29.506942];
    return {
      zoom: 12,
      center,
      // markers: [],
      markers: [120.897454,29.506942],
      markers2: [120.954782,29.462718],
      count: 0,
      slotStyle: {
        padding: '2px 8px',
        background: 'red',
        color: '#333',
        border: '1px solid #aaa',
        borderRadius: '10px'
      },
      slotStyle2: {
        padding: '2px 8px',
        background: 'green',
        color: '#333',
        border: '1px solid #aaa',
        borderRadius: '10px'
      },
      top: false,
      bottom: false
    }
  },
  created() {
    // let self = this;
    // let markers = [];
    // let index = 0;

    // let basePosition = [120.897454,29.506942];
    // let num = 3;

    // for (let i = 0 ; i < num ; i++) {
    //   markers.push({
    //     position: [basePosition[0], basePosition[1] + i * 0.03]
    //   });
    // }
    // this.markers = markers;
  },
  methods: {
    onClickT() {
      if (this.top === true) {
        this.top = false
      } else if (this.top === false) {
        this.top = true
      }
    },
    onClickB() {
      if (this.bottom === true) {
        this.bottom = false
      } else if (this.bottom === false) {
        this.bottom = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .warn {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 99;
    padding: 1%;
    .amap-page-container {
      width: 100%;
      height: 100%;
      position: relative;
      .search-box {
        position: absolute;
        top: 25px;
        left: 20px;
      }
      .amap-demo {
        width: 100%;
        height: 100%;
      }
    }
    .float {
      width: 15%;
      height: 100%;
      position: absolute;
      z-index: 999;
      right: 2%;
      top: 5%;
      .top {
        width: 100%;
        height: 30%;
        margin-bottom: 30%;
        background: rgba(0, 0, 0, 0.7);
        padding: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        h1 {
          color: #ffffff;
          font-size: 18px;
        }
        p {
          color: #ffffff;
          font-size: 16px;
        }
      }
      .bottom {
        width: 100%;
        height: 30%;
        background: rgba(0, 0, 0, 0.7);
        padding: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        h1 {
          color: #ffffff;
          font-size: 18px;
        }
        p {
          color: #ffffff;
          font-size: 16px;
        }
      }
    }
  }
</style>
