<template>
  <div class="economicalOperation">
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
          <p class="title">各类旅行业收入</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <xfzhe v-if="xfzheif" id="jj" height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--右-->
        <div class="right">
          <!--标题-->
          <p class="title">各类旅行业收入占比</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <jjright v-if="jjright" id="jjright" height="100%" width="100%"/>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <!--左-->
        <div class="left">
          <!--标题-->
          <p class="title">旅游汽车客运公司客运量</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <yi-zhou v-if="qiches" :chartData='qiche' id="jj" height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--右-->
        <div class="right">
          <!--标题-->
          <p class="title">涉旅行业接待能力</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <xfzhe v-if="xfzheif" id="jj" height="100%" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import xfzhe from '@/components/Charts/holiday-xf-zhe'
import jjright from '@/components/Charts/jingji-right'
import YiZhou from '@/views/dashboard/admin/components/YiZhou'
import { capacity } from '@/api/home'
export default {
  components: {
    xfzhe, jjright, YiZhou
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
      qiches: false,
      qiche: []
    }
  },
  mounted() {
    this.defaultDate()
    this.initRequest()
  },
  methods: {
    defaultDate() {
      let start
      let end
      let _start = new Date(this.value4[0])
      let _end = this.value4[1]
      // console.log(_start, '111')
      // console.log(_end, '222')
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
      // console.log(this.dataObj, '333')
    },
    initRequest() {
      // 旅游汽车客运量
      capacity(this.dataObj).then(res => {
        // console.log(res)
        const data = res.data.data
        if (res.status === 200) {
          this.qiche = data
          this.qiches = true
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss">
.economicalOperation {
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

