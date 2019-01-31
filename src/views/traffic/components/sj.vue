<template>
  <div class="SJ">
    <div class="box">
      <!--时间选择-->
      <div class="time-box">
        <span>时间选择： </span>
        <el-date-picker
          v-model="value6"
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
                <nlfb v-if="nlfb" :chartData='getCarCounts' height="100%" width="100%"/>
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
                <pie-chart-full v-if="sss" :chartData='getCarTypes' height="100%" width="100%"/>
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
import { getCarCount, getCarType, getTourNumberInPro, getTourNumberOutPro } from '@/api/traffic'
export default {
  components: {
    nlfb, PieChartFull
  },
  data() {
    return {
      value6: [new Date() - 3600 * 1000 * 24 * 7, new Date()],
      xfzheif: true,
      jjright: true,
      nlfb: false,
      inProvince: [],
      outProvince: [],
      dataObj: {
        start: '',
        end: ''
      },
      getCarCounts: [],
      getCarTypes: [],
      sss: false
    }
  },
  mounted() {
    this.searchTime()
    this.initRequest()
  },
  methods: {
    initRequest() {
      //高速卡口
      getCarCount(this.dataObj)
        .then(res => {
          let data = res.data.data;
          if (res.status === 200) {
            console.log(data, '高速卡口');
            this.getCarCounts = data
            this.nlfb = true
          }
        })
        .catch(err => {
          console.log(err)
        })
      //游客出行方式
      getCarType(this.dataObj)
        .then(res => {
          let data = res.data.data;
          if (res.status === 200) {
            console.log(data, '游客出行方式')
            this.getCarTypes = data
            this.sss = true
          }
        })
        .catch(err => {
          console.log(err)
        })
      //省内自驾游数量
      getTourNumberInPro(this.dataObj).then(res => {
        const data = res.data.data
        if(res.status === 200) {
          this.inProvince = data
          // console.log(this.inProvince, '11')
        }
      }).catch(err => {
        console.log(err)
      })
      // 省外客源地自驾游数
      getTourNumberOutPro(this.dataObj).then(res => {
        const data = res.data.data
        if (res.status === 200) {
          this.outProvince = data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    //计算时间
    searchTime() {
      let start = this.dataObj.start
      let end = this.dataObj.end
      let s_start;
      let s_end;
      let s_y;
      let s_r;
      let e_y;
      let e_r;
      start = this.value6[0]
      end = this.value6[1]
      if (typeof(start) === 'number') {
        start = new Date(start)
      }
      if (start.getMonth() >= 0 && start.getMonth() < 10) {
        s_y = '0' + (start.getMonth() + 1);
      } else {
        s_y = start.getMonth() + 1;
      }
      if (end.getMonth() >= 0 && end.getMonth() < 10) {
        e_y = '0' + (end.getMonth() + 1);
      } else {
        e_y = end.getMonth() + 1;
      }
      if(start.getDate() >= 0 && start.getDate() < 10) {
        s_r = '0' + start.getDate();
      } else {
        s_r = start.getDate();
      }
      if(end.getDate() >= 0 && end.getDate() < 10) {
        e_r = '0' + end.getDate();
      } else {
        e_r = end.getDate();
      }
      s_start = start.getFullYear() + '-' + s_y + '-' + s_r;
      s_end = end.getFullYear() + '-' +  e_y + '-' + e_r;
      console.log(s_start, '开始时间2')
      console.log(s_end, '结束时间2')
      this.dataObj.start = s_start;
      this.dataObj.end = s_end
    },
    dataSelect() {
      //先计算时间
      this.searchTime();
      this.initRequest()
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
                background: #fd8ba5;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line2 {
                height: 14px;
                width: 70%;
                background: #f08db5;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line3 {
                height: 14px;
                width: 60%;
                background: #e48fc5;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line4 {
                height: 14px;
                width: 50%;
                background: #d791d5;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line5 {
                height: 14px;
                width: 40%;
                background: #c494ed;
                // border-radius: 10px;
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

