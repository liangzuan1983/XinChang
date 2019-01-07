<template>
  <div class="complaint">
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
        <el-button size="mini" type="primary" @click="searchTime">查询</el-button>
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
          <p class="title">投诉量</p>
          <!--内容-->
          <div class="content">
            <yi-zhou v-if="tsCharts" :chartData='tsChart' height="100%" width="100%"/>
          </div>
        </div>
        <!--右-->
        <div class="right">
          <!--标题-->
          <p class="title">投诉类型分布</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <jjright v-if="jjright" id="jjright" height="100%" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YiZhou from '@/views/dashboard/admin/components/YiZhou'
import jjright from '@/components/Charts/complaint-ts'
import { tousu } from '@/api/home'
export default {
  components: {
    YiZhou, jjright
  },
  mounted() {
    let start
    let end
    let _start = new Date(this.value4[0])
    let _end = this.value4[1]
    console.log(_start, '111')
    console.log(_end, '222')
    let s_y = _start.getMonth() + 1
    let s_r = _start.getDate()
    let e_y = _end.getMonth() + 1
    let e_r = _end.getDate()
    // 开始月
    if (s_y > 0 && s_y < 10) {
      s_y = '0' + s_y
    } else {
      s_y = s_y
    }
    // 开始日
    if (s_r > 0 && s_r < 10) {
      s_r = '0' + s_r
    } else {
      s_r = s_r
    }
    // 结束月
    if (e_y > 0 && e_y < 10) {
      e_y = '0' + e_y
    } else {
      e_y = e_y
    }
    // 结束日
    if (e_r > 0 && e_r < 10) {
      e_r = '0' + e_r
    } else {
      e_r = e_r
    }
    start = _start.getFullYear() + '-' + s_y + '-' + s_r
    end = _end.getFullYear() + '-' + e_y + '-' + e_r
    this.dataObj.start = start
    this.dataObj.end = end
    console.log(this.dataObj, '333')
    this.initRequest()
  },
  data() {
    return {
      value4: [new Date() - 3600 * 1000 * 24 * 7, new Date()],
      xfzheif: true,
      jjright: true,
      dataObj: {
        start: '',
        end: ''
      },
      tsChart: '',
      tsCharts: false
    }
  },
  methods: {
    searchTime() {
      let start = this.dataObj.start
      let end = this.dataObj.end
      let s_start;
      let s_end;
      let s_y;
      let s_r;
      let e_y;
      let e_r;
      start = this.value4[0]
      end = this.value4[1]
      if (typeof(start) === 'number') {
        start = new Date(start)
      }
      if (start.getMonth() >= 0 && start.getMonth() < 10) {
        s_y = '0' + (start.getMonth() + 1);
      } else {
        s_y = start.getMonth() + 1
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
      this.dataObj.start = s_start;
      this.dataObj.end = s_end;
      console.log(this.dataObj.start, '开始时间2')
      console.log(this.dataObj.end, '结束时间2')
    },
    initRequest() {
      // 投诉
      tousu(this.dataObj).then(res => {
        console.log(res)
        const data = res.data.data
        if (res.status === 200) {
          this.tsChart = data
          this.tsCharts = true
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss">
.complaint {
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
          padding-top: 10%;
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
</style>

