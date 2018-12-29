<template>
  <div class="SJ">
    <div class="box">
      <!--时间选择-->
      <div class="time-box">
        <span>时间选择： </span>
        <el-date-picker
          v-model="value4"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"/>
        <!--查询-->
        <el-button size="mini" type="primary">查询</el-button>
        <!--查询-->
        <img class="search" src="@/assets/icon/search.png" alt="">
        <!--下载-->
        <img class="down" src="@/assets/icon/down.png" alt="">
      </div>
      <!--内容-->
      <div class="content">
        <!--第一行-->
        <div class="row">
          <!--左-->
          <div class="left">
            <!--标题-->
            <p class="title">高速卡口车辆占比</p>
            <!--内容-->
            <div class="content">
              <div class="chart-wrapper">
                <nlfb v-if="nlfb" id="nlfb" height="100%" width="100%"/>
              </div>
            </div>
          </div>
          <!--右-->
          <div class="right">
            <!--标题-->
            <p class="title">游客出行方式</p>
            <!--内容-->
            <div class="content">
              <div class="chart-wrapper">
                <pie-chart-full height="100%" width="100%"/>
              </div>
            </div>
          </div>
        </div>
        <!--第二行-->
        <div class="row">
          <!--左-->
          <div class="left">
            <!--标题-->
            <p class="title">省内自驾游客来源地</p>
            <!--内容-->
            <div class="content">
              <!--每1项-->
              <div class="one-box">
                <span class="name">杭州</span>
                <p class="line1"/>
                <span class="num">7262</span>
              </div>
              <!--每2项-->
              <div class="one-box">
                <span class="name">宁波</span>
                <p class="line2"/>
                <span class="num">6862</span>
              </div>
              <!--每3项-->
              <div class="one-box">
                <span class="name">温州</span>
                <p class="line3"/>
                <span class="num">6242</span>
              </div>
              <!--每4项-->
              <div class="one-box">
                <span class="name">台州</span>
                <p class="line4"/>
                <span class="num">5322</span>
              </div>
              <!--每5项-->
              <div class="one-box">
                <span class="name">绍兴</span>
                <p class="line5"/>
                <span class="num">4222</span>
              </div>
            </div>
          </div>
          <!--右-->
          <div class="right">
            <!--标题-->
            <p class="title">省外自驾游客来源地</p>
            <!--内容-->
            <div class="content">
              <!--每1项-->
              <div class="one-box">
                <span class="name">上海</span>
                <p class="line1"/>
                <span class="num">7262</span>
              </div>
              <!--每2项-->
              <div class="one-box">
                <span class="name">苏州</span>
                <p class="line2"/>
                <span class="num">6862</span>
              </div>
              <!--每3项-->
              <div class="one-box">
                <span class="name">广州</span>
                <p class="line3"/>
                <span class="num">6242</span>
              </div>
              <!--每4项-->
              <div class="one-box">
                <span class="name">深圳</span>
                <p class="line4"/>
                <span class="num">5322</span>
              </div>
              <!--每5项-->
              <div class="one-box">
                <span class="name">北京</span>
                <p class="line5"/>
                <span class="num">4222</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nlfb from '@/components/Charts/holiday-nlfb'
import PieChartFull from '@/views/dashboard/admin/components/PieChartFull'
export default {
  components: {
    nlfb, PieChartFull
  },
  data() {
    return {
      value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      xfzheif: true,
      jjright: true,
      nlfb: true
    }
  }
}
</script>

<style lang="scss" scoped>
.SJ {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 999;
  padding: 1%;
  display: flex;
  flex-direction: column;
  .box {
    flex: 1;
    background: rgba(255, 255, 255, 0.05);
    padding: 1%;
    display: flex;
    flex-direction: column;
    .time-box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2%;
      span {
        color: #ffffff;
        margin-right: 2%;
        font-size: 20px;
      }
      .el-button--mini {
        margin-left: 2%;
      }
    }
    .content {
      flex: 1;
      display: flex;
      flex-direction: column;
      .row {
        flex: 1;
        display: flex;
        justify-content: space-between;
        .left {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          margin-bottom: 1%;
          padding: 1%;
          margin-right: 1%;
          display: flex;
          flex-direction: column;
          .title {
            font-size: 22px;
            color: #bbd5ff;
            background: #45404d;
            padding: 1%;
          }
          .content {
            flex: 1;
            .chart-wrapper {
              width: 100%;
              height: 100%;
            }
            .one-box {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 1% 2%;
              .name {
                font-size: 20px;
                color: #889db5;
                width: 10%;
              }
              .line1 {
                height: 14px;
                width: 80%;
                background: #f69704;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line2 {
                height: 14px;
                width: 70%;
                background: #f79007;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line3 {
                height: 14px;
                width: 60%;
                background: #f88909;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line4 {
                height: 14px;
                width: 50%;
                background: #f8820c;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line5 {
                height: 14px;
                width: 40%;
                background: #f97b0e;
                border-radius: 10px;
                margin-right: 2%;
              }
              .num {
                font-size: 16px;
                color: #bbd5ff;
                flex: 1;
              }
            }
          }
        }
        .right {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          margin-bottom: 1%;
          padding: 1%;
          display: flex;
          flex-direction: column;
          // flex: 1;
          .title {
            font-size: 22px;
            color: #bbd5ff;
            background: #45404d;
            padding: 1%;
          }
          .content {
            flex: 1;
            .chart-wrapper {
              width: 100%;
              height: 100%;
            }
            .one-box {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 1% 2%;
              .name {
                font-size: 20px;
                color: #889db5;
                width: 10%;
              }
              .line1 {
                height: 14px;
                width: 80%;
                background: #47b2d3;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line2 {
                height: 14px;
                width: 70%;
                background: #40add4;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line3 {
                height: 14px;
                width: 60%;
                background: #39a7d5;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line4 {
                height: 14px;
                width: 50%;
                background: #32a2d7;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line5 {
                height: 14px;
                width: 40%;
                background: #2b9dd8;
                border-radius: 10px;
                margin-right: 2%;
              }
              .num {
                font-size: 16px;
                color: #bbd5ff;
                flex: 1;
              }
            }
          }
        }
      }
    }
  }
}
</style>

