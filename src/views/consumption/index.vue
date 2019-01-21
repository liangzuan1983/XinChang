<template>
  <div class="consumption">
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
        <el-button size="mini" type="primary" @click="dataSearch">查询</el-button>
        <!--查询-->
        <img class="search" src="@/assets/icon/search.png" alt="">
        <!--下载-->
        <!-- <img class="down" src="@/assets/icon/down.png" alt=""> -->
      </div>
      <!--内容-->
      <div class="content">
        <!--第一行-->
        <div class="row">
          <!--左-->
          <div class="left">
            <!--标题-->
            <p class="title-box">
              <span class="title">游客消费</span>
              <el-radio-group v-model="tabPosition" size="mini">
                <el-radio-button label="top">消费金额</el-radio-button>
                <el-radio-button label="right">交易笔数</el-radio-button>
                <el-radio-button label="bottom">单笔消费金额</el-radio-button>
                <el-radio-button label="left">人均消费金额</el-radio-button>
              </el-radio-group>
            </p>
            <!--内容-->
            <div class="content">
              <div class="chart-wrapper">
                <holiday-kl-zhu :chartData='getConsumeTourisms' height="100%" width="100%"/>
              </div>
            </div>
          </div>
          <!--右-->
          <div class="right">
            <!--标题-->
            <p class="title">游客消费占比</p>
            <!--内容-->
            <div class="content">
              <div class="chart-wrapper">
                <nlfb :chartData='getConsumeSources' height="100%" width="100%"/>
              </div>
            </div>
          </div>
        </div>
        <!--第二行-->
        <div class="row">
          <!--左-->
          <div class="left">
            <!--标题-->
            <p class="title1">行业消费</p>
            <!--内容-->
            <div class="content">
              <div class="chart-wrapper">
                <xfzhe :chartData='getTrades' height="100%" width="100%"/>
              </div>
            </div>
          </div>
          <!--右-->
          <div class="right">
            <!--标题-->
            <p class="title">行业消费占比</p>
            <!--内容-->
            <div class="content">
              <div class="chart-wrapper">
                <ykxb :chartData='getTypes' height="100%" width="100%"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nlfb from '@/components/Charts/consumption-nlfb'
import HolidayKlZhu from '@/components/Charts/holiday-kl-zhu'
import xfzhe from '@/components/Charts/holiday-xf-zhe'
import ykxb from '@/components/Charts/consumption-xiaofei'
import { getConsumeTourism, getConsumeSource, getTrade, getType } from '@/api/consumption'
export default {
  components: {
    nlfb, HolidayKlZhu, xfzhe, ykxb
  },
  data() {
    return {
      value6: [new Date() - 3600 * 1000 * 24 * 7, new Date()],
      xfzheif: true,
      jjright: true,
      tabPosition: 'top',
      dataObj: {
        start: '',
        end: ''
      },
      getConsumeTourisms: [],
      getConsumeSources: [],
      getTrades: [],
      getTypes: []
    }
  },
  mounted() {
    //先算时间
    this.searchTime()
    this.requestAll()
  },
  methods: {
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
    //点击日期事件
    dataSearch() {
      this.searchTime()
      this.requestAll()
    },
    //全部四个请求
    requestAll() {
      //游客消费
      getConsumeTourism(this.dataObj)
        .then(res => {
          let data = res.data.data
          if (res.status === 200) {
            // console.log(data, '游客消费')
            this.getConsumeTourisms = data
          } 
        })
        .catch(err => {
          console.log(err)
        })
      //游客消费占比
      getConsumeSource(this.dataObj)
        .then(res => {
          let data = res.data.data
          if(res.status === 200) {
            // console.log(data, '游客消费占比')
            this.getConsumeSources = data
          }
        })
        .catch(err => {
          console.log(err)
        })
      //行业消费
      getTrade(this.dataObj)
        .then(res => {
          let data = res.data.data
          if(res.status === 200) {
            console.log(data, '行业消费')
            this.getTrades = data
          }
        })
        .catch(err => {
          console.log(err)
        })
      //行业消费占比
      getType(this.dataObj)
        .then(res => {
          let data = res.data.data
          if(res.status === 200) {
            // console.log(data, '行业消费占比')
            this.getTypes = data
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss">
.consumption {
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
          .title-box {
            display: flex;
            justify-content: space-between;
            background: #45404d;
            align-items: center;
            padding: 1%;
            .title {
              font-size: 22px;
              color: #bbd5ff;
            }
          }
          .title1 {
            font-size: 22px;
            color: #bbd5ff;
            padding: 1%;
            background: #45404d;
          }
          .content {
            flex: 1;
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
            .chart-wrapper {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
}
</style>


