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
            <img class="icon-img" src="@/assets/jk.png" alt="" srcset="" @click="onClickT(index)">
          </div>
          <!--下面是点击显示窗口-->
          <div class="mt20">
            <div :style="slotStyle" class="ppp">
              <p>点位名称: 大佛寺入口</p>
              <p>预警事件: 实时客流超载</p>
              <p>客流阈值: 500</p>
              <p>事件状态: 待处理</p>
              <p>点位名称: 调派周边人员前往现场进行人员疏导工作。</p>
              <el-button type="warning" style="margin-left: 30px;margin-bottom:5px" @click="onClick">处理中</el-button>
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
    const center = [120.954782, 29.462718];
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
        width: '150px',
        padding: '2px 8px',
        background: '#eee',
        color: '#333',
        border: '1px solid #aaa',
        borderRadius: '10px'
      },
      slotStyle1: {
        width: '50px',
        height: '50px',
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
    .ppp {
      p { 
        margin-top: 3px;
        margin-bottom: 3px;
        font-size: 12px;
        line-height: 25px;
      }
    }
    .amap-page-container {
      width: 100%;
      height: 100%;
      position: relative;
      .icon-img {
        width: 50px;
      }
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
