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
                <holiday-kl-zhus :chartData='getConsumeTourisms' height="100%" width="100%"/>
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
                <!-- <nlfb :chartData='getConsumeSources' height="100%" width="100%"/> -->
                <xfzhe :chartData='getTrades' height="100%" width="100%"/>
              </div>
            </div>
          </div>
        </div>
        <!--第二行-->
        <div class="row">
          <!--左-->
          <div class="left">
            <!--标题-->
            <p class="title1">交易笔数</p>
            <!--内容-->
            <div class="content">
              <div class="chart-wrapper">
                <!-- <xfzhe :chartData='getTrades' height="100%" width="100%"/> -->
                <yi-zhou v-if="weekly" :chartData="kydxq" id="kydxq" height="100%" width="100%"/>
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
                <!-- <ykxb :chartData='getTypes' height="100%" width="100%"/> -->
                <div class="one-box" v-if="town[0]">
                  <span class="name">{{ town[0].subject }}</span>
                  <p class="line1"/>
                  <span class="num">{{ town[0].value }}</span>
                </div>
                <!--每2项-->
                <div class="one-box" v-if="town[1]">
                  <span class="name">{{ town[1].subject }}</span>
                  <p class="line2"/>
                  <span class="num">{{ town[1].value }}</span>
                </div>
                <!--每3项-->
                <div class="one-box" v-if="town[2]">
                  <span class="name">{{ town[2].subject }}</span>
                  <p class="line3"/>
                  <span class="num">{{ town[2].value }}</span>
                </div>
                <!--每4项-->
                <div class="one-box" v-if="town[3]">
                  <span class="name">{{ town[3].subject }}</span>
                  <p class="line4"/>
                  <span class="num">{{ town[3].value }}</span>
                </div>
                <!--每5项-->
                <div class="one-box" v-if="town[4]">
                  <span class="name">{{ town[4].subject }}</span>
                  <p class="line5"/>
                  <span class="num">{{ town[4].value }}</span>
                </div>
                <!--每6项-->
                <div class="one-box" v-if="town[5]">
                  <span class="name">{{ town[5].subject }}</span>
                  <p class="line6"/>
                  <span class="num">{{ town[5].value }}</span>
                </div>
                <!--每7项-->
                <div class="one-box" v-if="town[6]">
                  <span class="name">{{ town[6].subject }}</span>
                  <p class="line7"/>
                  <span class="num">{{ town[6].value }}</span>
                </div>
                <!--每8项-->
                <div class="one-box" v-if="town[7]">
                  <span class="name">{{ town[7].subject }}</span>
                  <p class="line8"/>
                  <span class="num">{{ town[7].value }}</span>
                </div>
                <!--每9项-->
                <div class="one-box" v-if="town[8]">
                  <span class="name">{{ town[8].subject }}</span>
                  <p class="line9"/>
                  <span class="num">{{ town[8].value }}</span>
                </div>
                <!--每10项-->
                <div class="one-box" v-if="town[9]">
                  <span class="name">{{ town[9].subject }}</span>
                  <p class="line10"/>
                  <span class="num">{{ town[9].value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--消费者性别比例 消费者年龄分析-->
        <div class="row">
          <!--左-->
          <div class="left">
            <!--标题-->
            <p class="title1">消费者性别比例</p>
            <!--内容-->
            <div class="content">
              <div class="chart-wrapper">
                <!-- <xfzhe :chartData='getTrades' height="100%" width="100%"/> -->
                <div class="sex-box" style="margin-top:50px;">
                  <div class="left-box">
                    <div class="top">
                      <img src="@/assets/fmcstm.png" alt="">
                      <div class="right-box">
                        <p class="title">女性游客</p>
                        <p class="text-box"><span class="num">{{ getGenders[0].value }}</span><span class="unit">个</span></p>
                      </div>
                    </div>
                    <div class="bottom">
                      <p class="title">占比</p>
                      <p class="num">
                        {{ ((getGenders[0].value / (getGenders[0].value + getGenders[1].value))*100).toFixed(2) }}%
                      </p>
                    </div>
                  </div>
                  <div class="right-box">
                    <div class="top">
                      <img src="@/assets/mcstm.png" alt="">
                      <div class="right-box">
                        <p class="title">男性游客</p>
                        <p class="text-box"><span class="num">{{ getGenders[1].value }}</span><span class="unit">个</span></p>
                      </div>
                    </div>
                    <div class="bottom">
                      <p class="title">占比</p>
                      <p class="num">
                        {{ ((getGenders[1].value / (getGenders[0].value + getGenders[1].value))*100).toFixed(2) }}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--右-->
          <div class="right">
            <!--标题-->
            <p class="title">消费者年龄分析</p>
            <!--内容-->
            <div class="content">
              <div class="chart-wrapper">
                <!-- <ykxb :chartData='getTypes' height="100%" width="100%"/> -->
                <nlfbs :chartData='getAges' id="ykhx-nl" height="100%" width="100%"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getAge,
} from '@/api/port'
import nlfbs from '@/components/Charts/holiday-nlfb'
import nlfb from '@/components/Charts/consumption-nlfb'
import HolidayKlZhus from '@/components/Charts/holiday-kl-zhus'
import xfzhe from '@/components/Charts/holiday-xf-zhe'
import ykxb from '@/components/Charts/consumption-xiaofei'
import YiZhou from '@/views/dashboard/admin/components/YiZhou'
import { getConsumeTourism, getConsumeSource, getTrade, getType, weekly } from '@/api/consumption'
import { 
  getTouristCounty,
} from '@/api/flow'
import {
  getGender
} from '@/api/port'
export default {
  components: {
    nlfb, HolidayKlZhus, xfzhe, ykxb, YiZhou, nlfbs
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
      getTypes: [],
      kydxq: [],
      weekly: false,
      town: [],
      getGenders: [],
      getTouristsProportions: [],
      xxll: false
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
      //1.游客性别比例
      getGender(this.dataObj)
        .then(res => {
          let data = res.data.data
          if (res.status === 200) {
            console.log(data, '游客性别比例')
            this.getGenders = data
          }
        })
        .catch(err => {
          console.log(err)
        })
        //2.游客年龄分析
      getAge(this.dataObj)
        .then(res => {
          let data = res.data.data
          if (res.status === 200) {
            // console.log(data, '游客年龄分析')
            this.getAges = data
          }
        })
        .catch(err => {
          console.log(err)
        })
      // 游客来源地top10县城
      getTouristCounty(this.dataObj)
        .then(res => {
          let data = res.data.data
          if (res.status === 200) {
            // console.log(data, 'xxx')
            this.town = data
          }
        })
        .catch(err => {
          console.log(err)
        })
      // 行业消费占比
      weekly()
        .then(res => {
          const data = res.data.data
          if(res.status === 200) {
            this.kydxq = data
            this.weekly = true
          }
        })
        .catch(err => {
          console.log(err)
        })
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
  overflow-y: overlay;
  margin: 1.5%;
  .el-date-editor .el-range-separator {
    padding: 0!important;
    color: #000!important;
  }
  .box {
    // flex: 1;
    background: rgba(255, 255, 255, 0.05);
    padding: 1%;
    // display: flex;
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
      // flex: 1;
      display: flex;
      flex-direction: column;
      .row {
        flex: 1;
        display: flex;
        justify-content: space-between;
        .left {
          flex: 1;
          // width: 100%;
          height: 350px;
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
            // flex: 1;
            width: 100%;
            height: 100%;
            .chart-wrapper {
              width: 100%;
              height: 100%;
            }
            .one-box {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: .3% 2%;
              .name {
                font-size: 20px;
                color: #889db5;
                width: 34%;
              }
              .line1 {
                height: 14px;
                width: 50%;
                background: #47b2d3;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line2 {
                height: 14px;
                width: 46%;
                background: #40add4;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line3 {
                height: 14px;
                width: 42%;
                background: #39a7d5;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line4 {
                height: 14px;
                width: 38%;
                background: #32a2d7;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line5 {
                height: 14px;
                width: 34%;
                background: #2b9dd8;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line6 {
                height: 14px;
                width: 30%;
                background: #2597d9;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line7 {
                height: 14px;
                width: 26%;
                background: #1e92da;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line8 {
                height: 14px;
                width: 22%;
                background: #178ddc;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line9 {
                height: 14px;
                width: 18%;
                background: #1087dd;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line10 {
                height: 14px;
                width: 14%;
                background: #0982de;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .num {
                font-size: 16px;
                color: #bbd5ff;
                flex: 1;
              }
            }
            .sex-box {
              width: 100%;
              display: flex;
              margin-left: 5%;
              justify-content: space-around;
              .left-box {
                flex: 1;
                background: transparent;
                .top {
                  display: flex;
                  justify-content: space-between;
                  margin-bottom: 20px;
                  img {
                    width: 70px;
                    height: 70px;
                    margin-right: 5%;
                  }
                  .right-box {
                    .title {
                      font-size: 26px;
                      color: #ffffff;
                      font-weight: bold;
                      background: transparent;
                      margin-bottom: 10px;
                    }
                    .text-box {
                      display: flex;
                      .num {
                        font-size: 28px;
                        color: #f69704;
                        font-weight: bold;
                        background: transparent;
                        margin-right: 10px;
                      }
                      .unit {
                        font-weight: bold;
                        font-size: 24px;
                        color: #ffffff;
                      }
                    }
                  }
                }
                .bottom {
                  display: flex;
                  justify-content: flex-start;
                  .title {
                    font-size: 24px;
                    color: #ffffff;
                    background: transparent;
                    margin-right: 30px;
                  }
                  .num {
                    font-size: 28px;
                    color: #f69704;
                    font-weight: bold;
                  }
                }
              }
              .right-box {
                flex:1;
                .top {
                  display: flex;
                  justify-content: space-between;
                  margin-bottom: 20px;
                  img {
                    width: 70px;
                    height: 70px;
                    margin-right: 5%;
                  }
                  .right-box {
                    background: transparent;
                    .title {
                      font-size: 26px;
                      color: #ffffff;
                      font-weight: bold;
                      background: transparent;
                      margin-bottom: 10px;
                    }
                    .text-box {
                      display: flex;
                      .num {
                        font-size: 28px;
                        color: #f69704;
                        font-weight: bold;
                        background: transparent;
                        margin-right: 10px;
                      }
                      .unit {
                        font-weight: bold;
                        font-size: 24px;
                        color: #ffffff;
                      }
                    }
                  }
                }
                .bottom {
                  display: flex;
                  justify-content: flex-start;
                  .title {
                    font-size: 24px;
                    color: #ffffff;
                    background: transparent;
                    margin-right: 30px;
                  }
                  .num {
                    font-size: 28px;
                    color: #f69704;
                    font-weight: bold;
                  }
                }
              }
            }
          }
        }
        .right {
          flex: 1;
          height: 350px;
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
              padding: .3% 2%;
              .name {
                font-size: 20px;
                color: #889db5;
                width: 34%;
              }
              .line1 {
                height: 14px;
                width: 50%;
                background: #47b2d3;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line2 {
                height: 14px;
                width: 46%;
                background: #40add4;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line3 {
                height: 14px;
                width: 42%;
                background: #39a7d5;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line4 {
                height: 14px;
                width: 38%;
                background: #32a2d7;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line5 {
                height: 14px;
                width: 34%;
                background: #2b9dd8;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line6 {
                height: 14px;
                width: 30%;
                background: #2597d9;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line7 {
                height: 14px;
                width: 26%;
                background: #1e92da;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line8 {
                height: 14px;
                width: 22%;
                background: #178ddc;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line9 {
                height: 14px;
                width: 18%;
                background: #1087dd;
                // border-radius: 10px;
                margin-right: 2%;
              }
              .line10 {
                height: 14px;
                width: 14%;
                background: #0982de;
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
      .sex-box {
        width: 100%;
        display: flex;
        margin-left: 5%;
        justify-content: space-around;
        .left-box {
          flex: 1;
          background: transparent;
          .top {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            img {
              width: 70px;
              height: 70px;
              margin-right: 5%;
            }
            .right-box {
              .title {
                font-size: 26px;
                color: #ffffff;
                font-weight: bold;
                background: transparent;
                margin-bottom: 10px;
              }
              .text-box {
                display: flex;
                .num {
                  font-size: 28px;
                  color: #f69704;
                  font-weight: bold;
                  background: transparent;
                  margin-right: 10px;
                }
                .unit {
                  font-weight: bold;
                  font-size: 24px;
                  color: #ffffff;
                }
              }
            }
          }
          .bottom {
            display: flex;
            justify-content: flex-start;
            .title {
              font-size: 24px;
              color: #ffffff;
              background: transparent;
              margin-right: 30px;
            }
            .num {
              font-size: 28px;
              color: #f69704;
              font-weight: bold;
            }
          }
        }
        .right-box {
          flex:1;
          .top {
            display: flex;
            justify-content: space-between;
            margin-bottom: 20px;
            img {
              width: 70px;
              height: 70px;
              margin-right: 5%;
            }
            .right-box {
              background: transparent;
              .title {
                font-size: 26px;
                color: #ffffff;
                font-weight: bold;
                background: transparent;
                margin-bottom: 10px;
              }
              .text-box {
                display: flex;
                .num {
                  font-size: 28px;
                  color: #f69704;
                  font-weight: bold;
                  background: transparent;
                  margin-right: 10px;
                }
                .unit {
                  font-weight: bold;
                  font-size: 24px;
                  color: #ffffff;
                }
              }
            }
          }
          .bottom {
            display: flex;
            justify-content: flex-start;
            .title {
              font-size: 24px;
              color: #ffffff;
              background: transparent;
              margin-right: 30px;
            }
            .num {
              font-size: 28px;
              color: #f69704;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
}
</style>


