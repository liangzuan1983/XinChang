<template>
  <div class="warn">
    <div class="amap-wrapper">
      <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
        <el-amap-circle 
          v-for="(circle, index) in circles"
          :key="index" :center="circle.center"
          :radius="circle.radius"
          :fill-opacity="circle.fillOpacity"
          :fillColor="circle.color"
          :strokeColor="circle.line"
          :events="circle.events"/>
      </el-amap>
    </div>
    <!--浮窗-->
    <div class="float">
      <!--top-->
      <div class="top">
        <h1 class="title">事件统计</h1>
        <p>事件总数: 10</p>
        <p>待处理事件: 3</p>
        <p>处理中事件: 4</p>
        <p>已完结事件: 4</p>
      </div>
      <!--bottom-->
      <div class="bottom">
        <h1 class="title">预警事件信息</h1>
        <p>编号: 0001</p>
        <p>时间: 2018.8.18 12:05:03</p>
        <p>地点: 大佛寺</p>
        <p>详情: 客流超载预警</p>
        <p>预案: 应急预案3</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zoom: 15,
      center: [120.917737, 29.498975],
      circles: [
        {
          center: [120.901737, 29.497975],
          radius: 200,
          fillOpacity: 0.5,
          color: 'red',
          line: 'red',
          events: {
            click: () => {
              alert('click');
            }
          }
        },
        {
          center: [120.907737, 29.491975],
          radius: 200,
          fillOpacity: 0.5,
          color: 'red',
          line: 'red',
          events: {
            click: () => {
              alert('click');
            }
          }
        },
        {
          center: [120.917737, 29.498975],
          radius: 200,
          fillOpacity: 0.5,
          color: 'red',
          line: 'red',
          events: {
            click: () => {
              alert('click');
            }
          }
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
    z-index: 99;
    padding: 1%;
    .amap-wrapper {
      width: 100%;
      height: 100%;
      .amap-box {
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
