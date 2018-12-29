<template>
  <div class="portraitTourist">
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
        <!--左-->
        <div class="left">
          <!--标题-->
          <p class="title">游客性别比例</p>
          <!--内容-->
          <div class="content">
            <ykxb height="100%" width="100%"/>
          </div>
        </div>
        <!--右-->
        <div class="center">
          <!--标题-->
          <p class="title">游客年龄分析</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <nlfb v-if="bingIf1" :id="ids[0]" height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--右-->
        <div class="right">
          <!--标题-->
          <p class="title">游客消费水平</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <nlfb v-if="bingIf2" :id="ids[1]" height="100%" width="100%"/>
            </div>
          </div>
        </div>
      </div>
      <!--内容-->
      <div class="content">
        <!--左-->
        <div class="left">
          <!--标题-->
          <p class="title">游客线上偏好</p>
          <!--内容-->
          <div class="content">
            <nlfb v-if="bingIf3" :id="ids[2]" height="100%" width="100%"/>
          </div>
        </div>
        <!--右-->
        <div class="center">
          <!--标题-->
          <p class="title">手机终端</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <nlfb v-if="bingIf4" :id="ids[3]" height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--右-->
        <div class="right">
          <!--标题-->
          <p class="title">新老游客比例</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <ykxb height="100%" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nlfb from '@/components/Charts/holiday-nlfb'
import ykxb from '@/components/Charts/holiday-ykxb'
export default {
  components: {
    nlfb, ykxb
  },
  data() {
    return {
      value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      xfzheif: true,
      jjright: true,
      ids: ['bing1', 'bing2', 'bing3', 'bing4'],
      bingIf1: true,
      bingIf2: true,
      bingIf3: true,
      bingIf4: true
    }
  }
}
</script>

<style lang="scss" scoped>
.portraitTourist {
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
          padding-top: 5%;
          .chart-wrapper {
            width: 100%;
            height: 100%;
          }
        }
      }
      .center {
        flex: 1;
        background: rgba(255, 255, 255, 0.05);
        margin-bottom: 1%;
        padding: 1%;
        margin-right: 1%;
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
          padding-top: 5%;
          .chart-wrapper {
            width: 100%;
            height: 100%;
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
          padding-top: 5%;
          .chart-wrapper {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>

