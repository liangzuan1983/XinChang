<template>
  <div class="flow">
    <!--上-->
    <div class="top">
      <!--时间-->
      <div class="time-box">
        <span>时间选择： </span>
        <el-date-picker
          v-model="value6"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        <!--查询-->
        <el-button size="mini" type="primary" @click="topSearch">查询</el-button>
        <!--查询-->
        <img class="search" src="@/assets/icon/search.png" alt="" @click="search">
        <!--下载-->
        <!-- <img class="down" src="@/assets/icon/down.png" alt=""> -->
      </div>
      <div class="top-box">
        <!--全域客流量同比分析-->
        <div class="left">
          <!--标题-->
          <div class="title">全域客流量分析</div>
          <div class="content">
            <div class="chart-wrapper">
              <holiday-kl-zhu :chartData='getPassageFlow' height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--游客类型分析-->
        <div class="right">
          <!--标题-->
          <div class="title">游客类型分析</div>
          <div class="content">
            <div class="chart-wrapper">
              <passenger-yklx :fatherData="yktype" height="100%" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--下-->
    <div class="bottom">
      <!--left-->
      <div class="left">
        <!--时间-->
        <div class="time-box">
          <span>时间选择： </span>
          <el-date-picker
            v-model="value6"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"/>
          <!--查询-->
          <el-button size="mini" type="primary" @click="leftSearch">查询</el-button>
          <!--查询-->
          <img class="search" src="@/assets/icon/search.png" alt="">
          <!--下载-->
          <!-- <img class="down" src="@/assets/icon/down.png" alt=""> -->
        </div>
        <!--2块内容-->
        <div class="content">
          <div class="one">
            <!--title-->
            <p class="title">景区及A级村庄客流TOP10</p>
            <!--内容-->
            <div class="content">
              <!--每1项-->
              <div class="one-box" v-if="getScenicVillages[0]">
                <span class="name">{{ getScenicVillages[0].subject }}</span>
                <p class="line1"/>
                <span class="num">{{ getScenicVillages[0].value }}</span>
              </div>
              <div v-else></div>
              <!--每2项-->
              <div class="one-box" v-if="getScenicVillages[1]">
                <span class="name">{{ getScenicVillages[1].subject }}</span>
                <p class="line2"/>
                <span class="num">{{ getScenicVillages[1].value }}</span>
              </div>
              <div v-else></div>
              <!--每3项-->
              <div class="one-box" v-if="getScenicVillages[2]">
                <span class="name">{{ getScenicVillages[2].subject }}</span>
                <p class="line3"/>
                <span class="num">{{ getScenicVillages[2].value }}</span>
              </div>
              <div v-else></div>
              <!--每4项-->
              <div class="one-box" v-if="getScenicVillages[3]">
                <span class="name">{{ getScenicVillages[3].subject }}</span>
                <p class="line4"/>
                <span class="num">{{ getScenicVillages[3].value }}</span>
              </div>
              <div v-else></div>
              <!--每5项-->
              <div class="one-box" v-if="getScenicVillages[4]">
                <span class="name">{{ getScenicVillages[4].subject }}</span>
                <p class="line5"/>
                <span class="num">{{ getScenicVillages[4].value }}</span>
              </div>
              <div v-else></div>
              <!--每6项-->
              <div class="one-box" v-if="getScenicVillages[5]">
                <span class="name">{{ getScenicVillages[5].subject }}</span>
                <p class="line6"/>
                <span class="num">{{ getScenicVillages[5].value }}</span>
              </div>
              <div v-else></div>
              <!--每7项-->
              <div class="one-box" v-if="getScenicVillages[6]">
                <span class="name">{{ getScenicVillages[6].subject }}</span>
                <p class="line7"/>
                <span class="num">{{ getScenicVillages[6].value }}</span>
              </div>
              <!--每8项-->
              <div class="one-box" v-if="getScenicVillages[7]">
                <span class="name">{{ getScenicVillages[7].subject }}</span>
                <p class="line8"/>
                <span class="num">{{ getScenicVillages[7].value }}</span>
              </div>
              <div v-else></div>
              <!--每9项-->
              <div class="one-box" v-if="getScenicVillages[8]">
                <span class="name">{{ getScenicVillages[8].subject }}</span>
                <p class="line9"/>
                <span class="num">{{ getScenicVillages[8].value }}</span>
              </div>
              <div v-else></div>
              <!--每10项-->
              <div class="one-box" v-if="getScenicVillages[9]">
                <span class="name">{{ getScenicVillages[9].subject }}</span>
                <p class="line10"/>
                <span class="num">{{ getScenicVillages[9].value }}</span>
              </div>
              <div v-else></div>
            </div>
          </div>
          <div class="two">
            <!--title-->
            <p class="title">游客过夜比例</p>
            <!--内容-->
            <div class="content">
              <div class="chart-wrapper">
                <nlfb :chartData='getTouristStays' height="100%" width="100%"/>
              </div>
            </div>
          </div>
        </div>
        <!--2块内容-->
        <div class="content">
          <div class="one">
            <!--title-->
            <p class="title">游客来源地TOP10（城市）</p>
            <!--内容-->
            <div class="content">
              <!--每1项-->
              <div class="one-box" v-if="this.getcity10[0]">
                <span class="name">{{ getcity10[0].subject }}</span>
                <p class="line1"/>
                <span class="num">{{ getcity10[0].value }}</span>
              </div>
              <!--每2项-->
              <div class="one-box" v-if="this.getcity10[1]">
                <span class="name">{{ getcity10[1].subject }}</span>
                <p class="line2"/>
                <span class="num">{{ getcity10[1].value }}</span>
              </div>
              <!--每3项-->
              <div class="one-box" v-if="this.getcity10[2]">
                <span class="name">{{ getcity10[2].subject }}</span>
                <p class="line3"/>
                <span class="num">{{ getcity10[2].value }}</span>
              </div>
              <!--每4项-->
              <div class="one-box" v-if="this.getcity10[3]">
                <span class="name">{{ getcity10[3].subject }}</span>
                <p class="line4"/>
                <span class="num">{{ getcity10[3].value }}</span>
              </div>
              <!--每5项-->
              <div class="one-box" v-if="this.getcity10[4]">
                <span class="name">{{ getcity10[4].subject }}</span>
                <p class="line5"/>
                <span class="num">{{ getcity10[4].value }}</span>
              </div>
              <!--每6项-->
              <div class="one-box" v-if="this.getcity10[5]">
                <span class="name">{{ getcity10[5].subject }}</span>
                <p class="line6"/>
                <span class="num">{{ getcity10[5].value }}</span>
              </div>
              <!--每7项-->
              <div class="one-box" v-if="this.getcity10[6]">
                <span class="name">{{ getcity10[6].subject }}</span>
                <p class="line7"/>
                <span class="num">{{ getcity10[6].value }}</span>
              </div>
              <!--每8项-->
              <div class="one-box" v-if="this.getcity10[7]">
                <span class="name">{{ getcity10[7].subject }}</span>
                <p class="line8"/>
                <span class="num">{{ getcity10[7].value }}</span>
              </div>
              <!--每9项-->
              <div class="one-box" v-if="this.getcity10[8]">
                <span class="name">{{ getcity10[8].subject }}</span>
                <p class="line9"/>
                <span class="num">{{ getcity10[8].value }}</span>
              </div>
              <!--每10项-->
              <div class="one-box" v-if="this.getcity10[9]">
                <span class="name">{{ getcity10[9].subject }}</span>
                <p class="line10"/>
                <span class="num">{{ getcity10[9].value }}</span>
              </div>
            </div>
          </div>
          <div class="two">
            <!--title-->
            <p class="title">游客来源地TOP10（区县）</p>
            <!--内容-->
            <div class="content">
              <!--每1项-->
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
      <!--right-->
      <div class="right">
        <!--时间-->
        <div class="time-box">
          <span>时间选择： </span>
          <el-date-picker
            v-model="value6"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
          <!--查询-->
          <el-button size="mini" type="primary" @click="rightSearch">查询</el-button>
          <!--查询-->
          <img class="search" src="@/assets/icon/search.png" alt="">
          <!--下载-->
          <!-- <img class="down" src="@/assets/icon/down.png" alt=""> -->
        </div>
        <!--热门旅游线路-->
        <div class="nlfb-box">
          <!--title-->
          <p class="title">热门游览线路TOP10</p>
          <!--内容-->
          <div class="content">
            <!--每1项-->
            <div class="one-box" v-if="getline[0]">
              <span class="name">{{ getline[0].subject }}</span>
              <p class="line1"/>
              <span class="num">{{ getline[0].value }}</span>
            </div>
            <!--每2项-->
            <div class="one-box" v-if="getline[1]">
              <span class="name">{{ getline[1].subject }}</span>
              <p class="line2"/>
              <span class="num">{{ getline[1].value }}</span>
            </div>
            <!--每3项-->
            <div class="one-box" v-if="getline[2]">
              <span class="name">{{ getline[2].subject }}</span>
              <p class="line3"/>
              <span class="num">{{ getline[2].value }}</span>
            </div>
            <!--每4项-->
            <div class="one-box" v-if="getline[3]">
              <span class="name">{{ getline[3].subject }}</span>
              <p class="line4"/>
              <span class="num">{{ getline[3].value }}</span>
            </div>
            <!--每5项-->
            <div class="one-box" v-if="getline[4]">
              <span class="name">{{ getline[4].subject }}</span>
              <p class="line5"/>
              <span class="num">{{ getline[4].value }}</span>
            </div>
            <!--每6项-->
            <div class="one-box" v-if="getline[5]">
              <span class="name">{{ getline[5].subject }}</span>
              <p class="line6"/>
              <span class="num">{{ getline[5].value }}</span>
            </div>
            <!--每7项-->
            <div class="one-box" v-if="getline[6]">
              <span class="name">{{ getline[6].subject }}</span>
              <p class="line7"/>
              <span class="num">{{ getline[6].value }}</span>
            </div>
            <!--每8项-->
            <div class="one-box" v-if="getline[7]">
              <span class="name">{{ getline[7].subject }}</span>
              <p class="line8"/>
              <span class="num">{{ getline[7].value }}</span>
            </div>
            <!--每9项-->
            <div class="one-box" v-if="getline[8]">
              <span class="name">{{ getline[8].subject }}</span>
              <p class="line9"/>
              <span class="num">{{ getline[8].value }}</span>
            </div>
            <!--每10项-->
            <div class="one-box" v-if="getline[9]">
              <span class="name">{{ getline[9].subject }}</span>
              <p class="line10"/>
              <span class="num">{{ getline[9].value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HolidayKlZhu from '@/components/Charts/holiday-kl-zhu'
import passengerYklx from '@/views/dashboard/admin/components/passengerYklx'
import nlfb from '@/components/Charts/passenger-ykgy'
import { mapGetters } from 'vuex'
// import { town } from '@/api/home'
import { 
  getPassageFlow,
  getTouristsType,
  getScenicVillage,
  getTouristStay,
  getTouristCity,
  getTouristCounty,
  getTourRoute
} from '@/api/flow'
export default {
  components: {
    HolidayKlZhu, passengerYklx, nlfb
  },
  computed: {
    ...mapGetters([
      'getcity'
    ])
  },
  data() {
    return {
      value6: [new Date() - 3600 * 1000 * 24 * 7, new Date()],
      yktype: [],
      dataObj: {
        start: '',
        end: ''
      },
      town: [],
      getPassageFlow: [],
      getScenicVillages: [],
      getTouristStays: [],
      getcity10: [],
      getline: []
    }
  },
  mounted() {
    this.searchTime()
    //上面两个请求
    this.top()
    //left
    this.left()
    //right
    this.right()
  },
  methods: {
    search() {
      window.open('http://61.174.54.66:8020/download.pdf')
    },
    topSearch() {
      //先把时间计算出来
      this.searchTime();
      //上面两个请求
     this.top()
    },
    //左边搜索
    leftSearch() {
      this.searchTime()
      this.left()
    },
    //右边搜索
    rightSearch() {
      this.searchTime()
      this.right()
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
    //上面两个请求
    top() {
      //全域客流分析
      getPassageFlow(this.dataObj)
        .then(res => {
          let data = res.data.data
          if(res.status === 200) {
            this.getPassageFlow = data
          }
        })
        .catch(err => {
          console.log(err)
        })
      // 游客类型分析
      getTouristsType(this.dataObj)
        .then(res => {
          let data = res.data.data
          if(res.status === 200) {
            this.yktype = data
            // console.log(this.yktype, '111')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    //左边两个请求
    left() {
      // 景区及A级村庄客流TOP10
      getScenicVillage(this.dataObj)
        .then(res => {
          let data = res.data.data
          if (res.status === 200) {
            this.getScenicVillages = data
            // console.log(this.getScenicVillages, '11')
          }
        })
        .catch(err => {
          console.log(err)
        })
      //游客过夜比例
      getTouristStay(this.dataObj)
        .then(res => {
          let data = res.data.data
          if (res.status === 200) {
            this.getTouristStays = data
            // console.log(this.getTouristStays, '123321')
          }
        })
        .catch(err => {
          console.log(err)
        })
      // 游客来源地top10城市
      getTouristCity(this.dataObj)
        .then(res => {
          let data = res.data.data
          if (res.status === 200) {
            // console.log(data, 'ccc')
            this.getcity10 = data
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
    },
    //右边请求
    right() {
      //热门旅游线路top10
      getTourRoute(this.dataObj)
        .then(res => {
          let data = res.data.data
          if (res.status === 200) {
            this.getline = data
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
.flow {
  width: 100%;
  height: 100%;
  // display: flex;
  // flex-direction: column;
  position: relative;
  z-index: 999;
  margin: 1.5%;
  padding-bottom: 1%;
  background: rgba(255, 255, 255, 0.05);
  overflow-y: overlay;
  .el-date-editor .el-range-separator {
    padding: 0!important;
    color: #000!important;
  }
  .top {
    flex: 2;
    display: flex;
    flex-direction: column;
    // margin-bottom: 1%;
    padding: 1% 1% 0 1%;
    .time-box {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2%;
      background: rgba(255, 255, 255, 0.05);
      padding-top: 1%;
      padding-bottom: 1%;
      margin-bottom: 1%;
      span {
        color: #ffffff;
        margin-right: 2%;
        font-size: 20px;
      }
      .el-button--mini {
        margin-left: 2%;
      }
    }
    .top-box {
      // flex: 1;
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-right: 1%;
        background: rgba(255, 255, 255, 0.05);
        height: 320px;
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
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 320px;
        background: rgba(255, 255, 255, 0.05);
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
  .bottom {
    display: flex;
    justify-content: space-between;
    // background: rgba(255, 255, 255, 0.05);
    padding: 1%;
    .left {
      flex: 1;
      background: rgba(255, 255, 255, 0.05);
      // height: 550px;
      margin-right: 1%;
      .time-box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2%;
        background: rgba(255, 255, 255, 0.05);
        padding-top: 1%;
        padding-bottom: 1%;
        margin-bottom: 1%;
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
        display: flex;
        justify-content: space-between;
        margin-bottom: 1%;
        .one {
          flex: 1;
          margin-right: 1%;
          display: flex;
          flex-direction: column;
          .title {
            font-size: 22px;
            color: #bbd5ff;
            background: #45404d;
            padding: 1.5%;
          }
          .content {
            padding: 2%;
            background: rgba(255, 255, 255, 0.05);
            display: flex;
            flex: 1;
            flex-direction: column;
            .one-box {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 1% 2%;
              .name {
                font-size: 20px;
                color: #889db5;
                width: 30%;
              }
              .line1 {
                height: 14px;
                width: 50%;
                background: #47b2d3;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line2 {
                height: 14px;
                width: 46%;
                background: #40add4;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line3 {
                height: 14px;
                width: 42%;
                background: #39a7d5;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line4 {
                height: 14px;
                width: 38%;
                background: #32a2d7;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line5 {
                height: 14px;
                width: 34%;
                background: #2b9dd8;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line6 {
                height: 14px;
                width: 30%;
                background: #2597d9;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line7 {
                height: 14px;
                width: 26%;
                background: #1e92da;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line8 {
                height: 14px;
                width: 22%;
                background: #178ddc;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line9 {
                height: 14px;
                width: 18%;
                background: #1087dd;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line10 {
                height: 14px;
                width: 14%;
                background: #0982de;
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
        .two {
          flex: 1;
          margin-left: 1%;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          .title {
            font-size: 22px;
            color: #bbd5ff;
            background: #45404d;
            padding: 1.5%;
          }
          .content {
            display: flex;
            flex: 1;
            flex-direction: column;
            // background: rgba(255, 255, 255, 0.05);
            .chart-wrapper {
              height: 320px;
              width: 100%;
            }
            .one-box {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 1% 2%;
              .name {
                font-size: 20px;
                color: #889db5;
                width: 20%;
              }
              .line1 {
                height: 14px;
                width: 50%;
                background: #f69704;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line2 {
                height: 14px;
                width: 46%;
                background: #f79007;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line3 {
                height: 14px;
                width: 42%;
                background: #f88909;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line4 {
                height: 14px;
                width: 38%;
                background: #f8820c;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line5 {
                height: 14px;
                width: 34%;
                background: #f97b0e;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line6 {
                height: 14px;
                width: 30%;
                background: #fa7311;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line7 {
                height: 14px;
                width: 26%;
                background: #fb6c13;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line8 {
                height: 14px;
                width: 22%;
                background: #fb6516;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line9 {
                height: 14px;
                width: 18%;
                background: #fc5e18;
                border-radius: 10px;
                margin-right: 2%;
              }
              .line10 {
                height: 14px;
                width: 14%;
                background: #fd571b;
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
    .right {
      flex: 1;
      background: rgba(255, 255, 255, 0.05);
      // height: 450px;
      .time-box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2%;
        background: rgba(255, 255, 255, 0.05);
        padding-top: 1%;
        padding-bottom: 1%;
        margin-bottom: 1%;
        span {
          color: #ffffff;
          margin-right: 2%;
          font-size: 20px;
        }
        .el-button--mini {
          margin-left: 2%;
        }
      }
      .nlfb-box {
        flex: 1;
        // background: rgba(255, 255, 255, 0.05);
        flex-direction: column;
        .title {
          font-size: 22px;
          color: #bbd5ff;
          background: #45404d;
          padding: 1.5%;
          margin-bottom: 3%;
        }
        .content {
          // background: rgba(255, 255, 255, 0.05);
          .one-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2% 2%;
            .name {
              font-size: 20px;
              color: #889db5;
              width: 30%;
            }
            .line1 {
              height: 14px;
              width: 50%;
              background: #f69704;
              border-radius: 10px;
              margin-right: 3%;
            }
            .line2 {
              height: 14px;
              width: 46%;
              background: #f79007;
              border-radius: 10px;
              margin-right: 3%;
            }
            .line3 {
              height: 14px;
              width: 42%;
              background: #f88909;
              border-radius: 10px;
              margin-right: 3%;
            }
            .line4 {
              height: 14px;
              width: 38%;
              background: #f8820c;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line5 {
              height: 14px;
              width: 34%;
              background: #f97b0e;
              border-radius: 10px;
              margin-right: 3%;
            }
            .line6 {
              height: 14px;
              width: 30%;
              background: #fa7311;
              border-radius: 10px;
              margin-right: 3%;
            }
            .line7 {
              height: 14px;
              width: 26%;
              background: #fb6c13;
              border-radius: 10px;
              margin-right: 3%;
            }
            .line8 {
              height: 14px;
              width: 22%;
              background: #fb6516;
              border-radius: 10px;
              margin-right: 3%;
            }
            .line9 {
              height: 14px;
              width: 18%;
              background: #fc5e18;
              border-radius: 10px;
              margin-right: 3%;
            }
            .line10 {
              height: 14px;
              width: 14%;
              background: #fd571b;
              border-radius: 10px;
              margin-right: 3%;
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
</style>

