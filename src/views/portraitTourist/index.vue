<template>
  <div class="portraitTourist">
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
        <el-button size="mini" type="primary" @click="topSearch">查询</el-button>
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
            <!-- <ykxb :chartData='getsex' id="por" height="100%" width="100%"/> -->
            <div class="sex-box">
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
                    {{ (getGenders[0].value / (getGenders[0].value + getGenders[1].value)).toFixed(2)*100 }}%
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
                    {{ (getGenders[1].value / (getGenders[0].value + getGenders[1].value)).toFixed(2)*100 }}%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--右-->
        <div class="center">
          <!--标题-->
          <p class="title">游客年龄分析</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <nlfb :chartData='getAges' id="ykhx-nl" height="100%" width="100%"/>
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
              <nlfb-xfnl :chartData="getConsumes" id="nlfb-xfnl" height="100%" width="100%"/>
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
            <nlfb-xsph v-if="aaa" :chartData='getHobbys' id="por-xsph" height="100%" width="100%"/>
          </div>
        </div>
        <!--右-->
        <div class="center">
          <!--标题-->
          <p class="title">手机终端</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <nlfb-sjzd v-if="bingIf4" :chartData='getMobilePhones' :id="ids[3]" height="100%" width="100%"/>
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
              <ykxb-xlyk v-if="xxll" :chartData='getTouristsProportions' height="100%" width="100%"/>
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
// import { gender } from '@/api/home''
import {
  getGender,
  getAge,
  getConsume,
  getHobby,
  getMobilePhone,
  getTouristsProportion
} from '@/api/port'
export default {
  components: {
    nlfb, ykxb, nlfbXfnl, nlfbXsph, nlfbSjzd, ykxbXlyk
  },
  mounted() {
    this.searchTime();
    this.requestAll();
  },
  data() {
    return {
      value6: [new Date() - 3600 * 1000 * 24 * 7, new Date()],
      xfzheif: true,
      jjright: true,
      ids: ['bing1', 'bing2', 'bing3', 'bing4'],
      bingIf1: true,
      bingIf2: true,
      bingIf3: true,
      bingIf4: false,
      dataObj: {
        start: '',
        end: ''
      },
      getAges: [],
      getConsumes: [],
      aaa: false,
      getTouristsProportions: [],
      xxll: false,
      getGenders: []
    }
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
    topSearch() {
      //先把时间计算出来
      this.searchTime();
      //上面两个请求
     this.requestAll()
    },
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
      //3.游客消费水平
      getConsume(this.dataObj)
        .then(res => {
          let data = res.data.data
          if (res.status === 200) {
            // console.log(data, '游客消费水平')
            this.getConsumes = data
          }
        })
        .catch(err => {
          console.log(err)
        })
      //4.游客线上偏好
      getHobby(this.dataObj)
        .then(res => {
          let data = res.data.data
          if (res.status === 200) {
            // console.log(data, '游客线上偏好')
            this.getHobbys = data
            this.aaa = true
          }
        })
        .catch(err => {
          console.log(err)
        })
      //5.手机终端
      getMobilePhone(this.dataObj)
        .then(res => {
          let data = res.data.data;
          if (res.status === 200) {
            // console.log(data, '手机终端')
            this.getMobilePhones = data
            this.bingIf4 = true
          }
        })
        .catch(err => {
          console.log(err)
        })
      //6.新老游客比例
      getTouristsProportion(this.dataObj)
        .then(res => {
          let data = res.data.data;
          if (res.status === 200) {
            this.getTouristsProportions = data
            this.xxll = true
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
          display: flex;
          align-items: center;
          .chart-wrapper {
            width: 100%;
            height: 100%;
          }
          .sex-box {
            width: 100%;
            display: flex;
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

