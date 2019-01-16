<template>
  <div class="SJ">
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
        <el-button size="mini" type="primary" @click="dataSelect">查询</el-button>
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
                <nlfb v-if="nlfb" height="100%" width="100%"/>
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
              <div class="one-box" v-if="inProvince[0]">
                <span class="name">{{ inProvince[0].subject }}</span>
                <p class="line1"/>
                <span class="num">{{ inProvince[0].value }}</span>
              </div>
              <div v-else></div>
              <!--每2项-->
              <div class="one-box" v-if="inProvince[1]">
                <span class="name">{{ inProvince[1].subject }}</span>
                <p class="line2"/>
                <span class="num">{{ inProvince[1].value }}</span>
              </div>
              <div v-else></div>
              <!--每3项-->
              <div class="one-box" v-if="inProvince[2]">
                <span class="name">{{ inProvince[2].subject }}</span>
                <p class="line3"/>
                <span class="num">{{ inProvince[2].value }}</span>
              </div>
              <div v-else></div>
              <!--每4项-->
              <div class="one-box" v-if="inProvince[3]">
                <span class="name">{{ inProvince[3].subject }}</span>
                <p class="line4"/>
                <span class="num">{{ inProvince[3].value }}</span>
              </div>
              <div v-else></div>
              <!--每5项-->
              <div class="one-box" v-if="inProvince[4]">
                <span class="name">{{ inProvince[4].subject }}</span>
                <p class="line5"/>
                <span class="num">{{ inProvince[4].value }}</span>
              </div>
              <div v-else></div>
            </div>
          </div>
          <!--右-->
          <div class="right">
            <!--标题-->
            <p class="title">省外自驾游客来源地</p>
            <!--内容-->
            <div class="content">
              <!--每1项-->
              <div class="one-box" v-if="outProvince[0]">
                <span class="name">{{ outProvince[0].subject }}</span>
                <p class="line1"/>
                <span class="num">{{ outProvince[0].value }}</span>
              </div>
              <div v-else/>
              <!--每2项-->
              <div class="one-box" v-if="outProvince[1]">
                <span class="name">{{ outProvince[1].subject }}</span>
                <p class="line2"/>
                <span class="num">{{ outProvince[1].value }}</span>
              </div>
              <div v-else/>
              <!--每3项-->
              <div class="one-box" v-if="outProvince[2]">
                <span class="name">{{ outProvince[2].subject }}</span>
                <p class="line3"/>
                <span class="num">{{ outProvince[2].value }}</span>
              </div>
              <div v-else/>
              <!--每4项-->
              <div class="one-box" v-if="outProvince[3]">
                <span class="name">{{ outProvince[3].subject }}</span>
                <p class="line4"/>
                <span class="num">{{ outProvince[3].value }}</span>
              </div>
              <div v-else/>
              <!--每5项-->
              <div class="one-box" v-if="outProvince[4]">
                <span class="name">{{ outProvince[4].subject}}</span>
                <p class="line5"/>
                <span class="num">{{ outProvince[4].value }}</span>
              </div>
              <div v-else/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nlfb from '@/components/Charts/traffic-nlfb'
import PieChartFull from '@/components/Charts/traffic-cxfs'
import { getTourNumberInPro, getTourNumberOutPro } from '@/api/traffic'
export default {
  components: {
    nlfb, PieChartFull
  },
  data() {
    return {
      value4: [new Date(), new Date()],
      xfzheif: true,
      jjright: true,
      nlfb: true,
      inProvince: [],
      outProvince: []
    }
  },
  mounted() {
    this.initRequest()
  },
  methods: {
    initRequest() {
      //省内自驾游数量
      getTourNumberInPro().then(res => {
        const data = res.data.data
        if(res.status === 200) {
          this.inProvince = data
        }
      }).catch(err => {
        console.log(err)
      })
      // 省外客源地自驾游数
      getTourNumberOutPro().then(res => {
        const data = res.data.data
        if (res.status === 200) {
          this.outProvince = data
        }
      }).catch(err => {
        console.log(err)
      })

    },
    dataSelect() {
      console.log(this.value4[0], 'value4')
    }
  }
}
</script>

<style lang="scss">
.SJ {
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

