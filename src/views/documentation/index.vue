<template>
  <div class="warn">
    <div class="amap-page-container">
      <el-amap
        vid="amapDemo3"  
        :center="center"
        :zoom="zoom"
        class="amap-demo">
        <!--这里的状态是后台传输，前台循环出来的-->
        <el-amap-marker v-for="(item, index) in markers" :key="index" :position="item" :vid="index">
          <div :style="slotStyle1">
            <img src="@/assets/jk.png" alt="" srcset="" @click="onClickT(index)">
          </div>
          <!--下面是点击显示窗口-->
          <div class="mt20">
            <div :style="slotStyle">
              <b>Hello {{ index }} times</b>
              <button @click="onClick">Add</button>
            </div>
          </div>
        </el-amap-marker>
      </el-amap>
    </div>
    <!--浮窗-->
    <div class="float">
      <div class="top" v-if="top">
        <h1 class="title">事件统计</h1>
        <p>事件总数: 10</p>
        <p>待处理事件: 3</p>
        <p>处理中事件: 4</p>
        <p>已完结事件: 4</p>
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
      markers: [
        [ 120.897454, 29.506942 ],
        [ 120.954782, 29.462718 ]
      ],
      count: 0,
      slotStyle: {
        padding: '2px 8px',
        background: '#eee',
        color: '#333',
        border: '1px solid #aaa'
      },
      slotStyle1: {
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
      top: true
    }
  },
  methods: {
    onClickT(index) {
      console.log(index, 'index')
    },
    onClick() {
      this.count += 1;
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
    .mt20 {
      margin-top: 10px;
    }
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
    }
  }
</style>
