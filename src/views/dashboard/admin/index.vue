<template>
  <div class="dashboard-editor-container">
    <!--左-->
    <div class="left">
      <!--重点景区数据-->
      <div class="zdjq"></div>
      <!--乡村旅游热度排行top5-->
      <div class="xcly"></div>
      <!--旅游消费额变化趋势/类型分析-->
      <div class="edfl"></div>
    </div>
    <!--中-->
    <div class="middle">
      <!--main-->
      <div class="main"></div>
      <!--main-bottom-->
      <div class="main-bottom">
        <!--客源地-->
        <div class="kyd"></div>
        <!--进一周游客数-->
        <div class="yks"></div>
      </div>
    </div>
    <!--右-->
    <div class="right">
      <!--cyjc-->
      <div class="cyjc"></div>
      <!--zyfb-->
      <div class="zyfb"></div>
      <!--rcph-->
      <div class="rcfb"></div>
      <!--yqfx-->
      <div class="yqfx"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardAdmin',
  components: {
  },
  data() {
    return {
      top5: [
        {
          value: '梅渚镇'
        },
        {
          value: '巧英乡'
        },
        {
          value: '东茗乡'
        },
        {
          value: '回乡镇'
        },
        {
          value: '沙溪镇'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 5px;
  width: 100%;
  height: 100%;
  background-color: green;
  display: flex;
  justify-content: space-between;
  .left {
    flex: 1;
    // background: yellow;
    display: flex;
    flex-direction: column;
    .zdjq {
      flex-grow: 1;
      background: goldenrod;
      margin-bottom: 1.1%;
    }
    .xcly {
      flex-grow: 1.3;
      background: salmon;
      margin-bottom: 1.2%;
    }
    .edfl {
      flex-grow: 2.3;
      background: lawngreen;
    }
  }
  .middle {
    flex: 2;
    // background: darkorchid;
    display: flex;
    flex-direction: column;
    .main {
      flex-grow: 2.6;
      background: khaki;
      margin: 1%;
    }
    .main-bottom {
      flex-grow: 1;
      // background: indianred;
      display: flex;
      .kyd {
        flex-grow: 1;
        background: indigo;
        margin-left: 1%;
        margin-right: 0.5%;
      }
      .yks {
        flex-grow: 1;
        background: darkcyan;
        margin-left: 0.5%;
        margin-right: 1%;
      }
    }
  }
  .right {
    flex: 1;
    // background: hotpink;
    display: flex;
    flex-direction: column;
    .cyjc {
      flex-grow: 1;
      background: firebrick;
      margin-bottom: 1.2%;
    }
    .zyfb {
      flex-grow: 1;
      background: palegreen;
      margin-bottom: 1.2%;
    }
    .rcfb {
      flex-grow: 1;
      background: salmon;
      margin-bottom: 1.2%;
    }
    .yqfx {
      flex-grow: 1;
      background: darkkhaki;
    }
  }
}
</style>
