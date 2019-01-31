<template>
  <div class="consumption">
    <div class="box">
      <!--时间选择-->
      <div class="time-box">
        <span>时间选择： </span>
        <el-date-picker v-model="value6" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
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
              <span class="title">订单数及订单金额</span>
              <el-radio-group v-model="tabPosition" size="mini" @change="dataTab">
                <el-radio-button label="top">总数</el-radio-button>
                <el-radio-button label="right">十九峰</el-radio-button>
                <el-radio-button label="bottom">大佛寺</el-radio-button>
              </el-radio-group>
            </p>
            <!--内容-->
            <div class="content">
              <!-- 订单数 -->
              <div class="chart-wrapper">
                <holiday-kl-zhu :chart-data="platformNum" height="100%" width="100%" />
              </div>
            </div>
            <div class="content">
              <!-- 订单金额 -->
              <div class="chart-wrapper">
                <yi-zhou id="platformMoney" :chart-data="platformMoney" height="100%" width="100%" />
              </div>
            </div>
          </div>
          <!--右-->
          <div class="right">
            <!--标题-->
            <p class="title">平台用户数</p>
            <!--内容-->
            <div class="content">
              <div class="chart-wrapper">
                <yi-zhou id="platformPeople" :chart-data="platformPeople" height="100%" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HolidayKlZhu from '@/components/Charts/holiday-kl-zhu-platform'
import YiZhou from '@/views/dashboard/admin/components/YiZhou-platform'
export default {
  components: {
    HolidayKlZhu,
    YiZhou
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
      platformPeople: [],
      platformMoney: [],
      platformNum: []
    }
  },
  mounted() {
    // 先算时间
    this.searchTime()
    this.requestAll('top')
  },
  methods: {
    // 计算时间
    searchTime() {
      let start = this.dataObj.start
      let end = this.dataObj.end
      let s_start
      let s_end
      let s_y
      let s_r
      let e_y
      let e_r
      start = this.value6[0]
      end = this.value6[1]
      if (typeof (start) === 'number') {
        start = new Date(start)
      }
      if (start.getMonth() >= 0 && start.getMonth() < 10) {
        s_y = '0' + (start.getMonth() + 1)
      } else {
        s_y = start.getMonth() + 1
      }
      if (end.getMonth() >= 0 && end.getMonth() < 10) {
        e_y = '0' + (end.getMonth() + 1)
      } else {
        e_y = end.getMonth() + 1
      }
      if (start.getDate() >= 0 && start.getDate() < 10) {
        s_r = '0' + start.getDate()
      } else {
        s_r = start.getDate()
      }
      if (end.getDate() >= 0 && end.getDate() < 10) {
        e_r = '0' + end.getDate()
      } else {
        e_r = end.getDate()
      }
      s_start = start.getFullYear() + '-' + s_y + '-' + s_r
      s_end = end.getFullYear() + '-' + e_y + '-' + e_r
      this.dataObj.start = s_start
      this.dataObj.end = s_end
    },
    // 点击日期事件
    dataSearch() {
      this.searchTime()
      this.requestAll()
    },
    // 全部请求
    requestAll(type) {
      // 订单数
      if (type == 'top') { // 总
        this.platformNum = []
        this.platformNum = [{
          subject: '2019/1/23',
          value: 296
        }, {
          subject: '2019/1/24',
          value: 494
        }, {
          subject: '2019/1/25',
          value: 334
        }, {
          subject: '2019/1/26',
          value: 384
        }, {
          subject: '2019/1/27',
          value: 514
        }, {
          subject: '2019/1/28',
          value: 696
        }, {
          subject: '2019/1/29',
          value: 516
        }, {
          subject: '2019/1/30',
          value: 556
        }]
        // 订单金额
        this.platformMoney = []
        this.platformMoney = [{ // 总
          subject: '2019/1/23',
          value: 24680
        }, {
          subject: '2019/1/24',
          value: 40520
        }, {
          subject: '2019/1/25',
          value: 27720
        }, {
          subject: '2019/1/26',
          value: 31720
        }, {
          subject: '2019/1/27',
          value: 42120
        }, {
          subject: '2019/1/28',
          value: 56680
        }, {
          subject: '2019/1/29',
          value: 42280
        }, {
          subject: '2019/1/30',
          value: 45480
        }]
      } else if (type == 'right') { // 十九峰
        this.platformNum = []
        this.platformNum = [{
          subject: '2019/1/23',
          value: 123
        }, {
          subject: '2019/1/24',
          value: 222
        }, {
          subject: '2019/1/25',
          value: 142
        }, {
          subject: '2019/1/26',
          value: 167
        }, {
          subject: '2019/1/27',
          value: 232
        }, {
          subject: '2019/1/28',
          value: 323
        }, {
          subject: '2019/1/29',
          value: 233
        }, {
          subject: '2019/1/30',
          value: 252
        }]
        // 订单金额
        this.platformMoney = []
        this.platformMoney = [{ // 总
          subject: '2019/1/23',
          value: 7380
        }, {
          subject: '2019/1/24',
          value: 13320
        }, {
          subject: '2019/1/25',
          value: 8520
        }, {
          subject: '2019/1/26',
          value: 10020
        }, {
          subject: '2019/1/27',
          value: 13920
        }, {
          subject: '2019/1/28',
          value: 19380
        }, {
          subject: '2019/1/29',
          value: 13980
        }, {
          subject: '2019/1/30',
          value: 15180
        }]
      } else { // 大佛寺
        this.platformNum = []
        this.platformNum = [{
          subject: '2019/1/23',
          value: 173
        }, {
          subject: '2019/1/24',
          value: 272
        }, {
          subject: '2019/1/25',
          value: 192
        }, {
          subject: '2019/1/26',
          value: 217
        }, {
          subject: '2019/1/27',
          value: 282
        }, {
          subject: '2019/1/28',
          value: 373
        }, {
          subject: '2019/1/29',
          value: 283
        }, {
          subject: '2019/1/30',
          value: 303
        }]
        // 订单金额
        this.platformMoney = []
        this.platformMoney = [{ // 总
          subject: '2019/1/23',
          value: 17300
        }, {
          subject: '2019/1/24',
          value: 27200
        }, {
          subject: '2019/1/25',
          value: 19200
        }, {
          subject: '2019/1/26',
          value: 21700
        }, {
          subject: '2019/1/27',
          value: 28200
        }, {
          subject: '2019/1/28',
          value: 37300
        }, {
          subject: '2019/1/29',
          value: 28300
        }, {
          subject: '2019/1/30',
          value: 30300
        }]
      }

      // 平台用户数
      this.platformPeople = [{
        subject: '2019/1/23',
        value: 121
      }, {
        subject: '2019/1/24',
        value: 145
      }, {
        subject: '2019/1/25',
        value: 178
      }, {
        subject: '2019/1/26',
        value: 231
      }, {
        subject: '2019/1/27',
        value: 265
      }, {
        subject: '2019/1/28',
        value: 342
      }, {
        subject: '2019/1/29',
        value: 376
      }, {
        subject: '2019/1/30',
        value: 401
      }]
    },
    // tab切换
    dataTab(type) {
      this.requestAll(type)
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
