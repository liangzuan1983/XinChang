<template>
  <div class="portraitTourist">
    <div class="box">
      <!--时间选择-->
      <div class="time-box">
        <span>时间选择： </span>
        <el-date-picker
          v-model="value4"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"/>
        <!--查询-->
        <el-button size="mini" type="primary">查询</el-button>
        <!--查询-->
        <img class="search" src="@/assets/icon/search.png" alt="">
        <!--下载-->
        <!-- <img class="down" src="@/assets/icon/down.png" alt=""> -->
      </div>
      <!--内容-->
      <div class="content">
        <!--左-->
        <div class="left">
          <!--标题-->
          <p class="title">游客性别比例</p>
          <!--内容-->
          <div class="content">
            <ykxb :chartData='getsex' id="por" height="100%" width="100%"/>
          </div>
        </div>
        <!--右-->
        <div class="center">
          <!--标题-->
          <p class="title">游客年龄分析</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <nlfb :chartData='getage' id="ykhx-nl" height="100%" width="100%"/>
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
              <nlfb-xfnl :chartData="getconsume" id="nlfb-xfnl" height="100%" width="100%"/>
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
            <nlfb-xsph v-if="bingIf3" :id="ids[2]" height="100%" width="100%"/>
          </div>
        </div>
        <!--右-->
        <div class="center">
          <!--标题-->
          <p class="title">手机终端</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <nlfb-sjzd v-if="bingIf4" :id="ids[3]" height="100%" width="100%"/>
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
              <ykxb-xlyk height="100%" width="100%"/>
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
import ykxbXlyk from '@/components/Charts/holiday-xlyk'
import nlfbXfnl from '@/components/Charts/special-xfnl'
import nlfbXsph from '@/components/Charts/special-xsph'
import nlfbSjzd from '@/components/Charts/special-sjzd'
// import { gender } from '@/api/home'
import { mapGetters } from 'vuex'
export default {
  components: {
    nlfb, ykxb, nlfbXfnl, nlfbXsph, nlfbSjzd, ykxbXlyk
  },
  data() {
    return {
      value4: [new Date(), new Date()],
      xfzheif: true,
      jjright: true,
      ids: ['bing1', 'bing2', 'bing3', 'bing4'],
      bingIf1: true,
      bingIf2: true,
      bingIf3: true,
      bingIf4: true
    }
  },
  computed: {
    ...mapGetters([
      'getsex',
      'getage',
      'getconsume'
    ])
  }
}
</script>

<style lang="scss">
.portraitTourist {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 999;
  padding: 1%;
  display: flex;
  flex-direction: column;
  .el-date-editor .el-range-separator {
    padding: 0!important;
    color: #000!important;
  }
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

