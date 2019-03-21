<template>
  <div class="jingqu">
    <!--时间选择-->
    <!-- <div class="time-box"> -->
    <!-- <span>时间选择： </span>
      <el-date-picker
        v-model="value4"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"/> -->
    <!--查询-->
    <!-- <el-button size="mini" type="primary">查询</el-button> -->
    <!--查询-->
    <!-- <img class="search" src="@/assets/icon/search.png" alt=""> -->
    <!--下载-->
    <!-- <img class="down" src="@/assets/icon/down.png" alt=""> -->
    <!-- </div> -->
    <!--内容-->
    <div class="content0">
      <!--左-->
      <!--<div class="left">-->
      <!--&lt;!&ndash;内容&ndash;&gt;-->
      <!--<div class="content">-->
      <!--<div class="amap-wrapper">-->
      <!--<el-amap vid="amapDemo" :center="mapCenter" :zoom="12" class="amap-demo">-->
      <!--<el-amap-marker v-for="(marker, index) in tourControllers" :key="index" :position="marker" ></el-amap-marker>-->
      <!--</el-amap>-->
      <!--</div>-->
      <!--</div>-->
      <!--</div>-->
      <!--右-->
      <div class="center">
        <!--标题-->
        <!--<div class="center-top">-->
        <!--<p class="title">近7日评论数</p>-->
        <!--&lt;!&ndash;内容&ndash;&gt;-->
        <!--<div class="content">-->
        <!--&lt;!&ndash;左&ndash;&gt;-->
        <!--<div class="left">-->
        <!--&lt;!&ndash;上&ndash;&gt;-->
        <!--<div class="top">-->
        <!--<p class="titles">评论总数</p>-->
        <!--<p class="num" v-if="countWeeklys">{{ countWeeklys.weeklyTotal }}条</p>-->
        <!--<p class="num" v-else>0条</p>-->
        <!--</div>-->
        <!--&lt;!&ndash;下&ndash;&gt;-->
        <!--<div class="bottom">-->
        <!--<div class="leftz">-->
        <!--<p class="titles">好评数</p>-->
        <!--<p class="num" v-if="countWeeklys">{{ countWeeklys.weeklyPos }}条</p>-->
        <!--<p class="num" v-else>0条</p>-->
        <!--</div>-->
        <!--<div class="rightz">-->
        <!--<p class="titles">差评数</p>-->
        <!--<p class="num" v-if="countWeeklys.weeklyTotal-countWeeklys.weeklyPos">-->
        <!--{{ countWeeklys.weeklyTotal-countWeeklys.weeklyPos }}条-->
        <!--</p>-->
        <!--<p class="num" v-else>0条</p>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--&lt;!&ndash;右&ndash;&gt;-->
        <!--<div class="right-seven">-->
        <!--<div class="lefts">-->
        <!--<p class="titles">整体好评率</p>-->
        <!--<el-progress-->
        <!--v-if="countWeeklys"-->
        <!--:stroke-width="hou" :width="cWidth"-->
        <!--:percentage="Number((countWeeklys.totalRate*100).toFixed(2))"-->
        <!--type="circle"/>-->
        <!--</div>-->
        <!--<div class="rights">-->
        <!--<p class="titles">近一周好评</p>-->
        <!--<el-progress-->
        <!--v-if="countWeeklys"-->
        <!--:stroke-width="hou"-->
        <!--:width="cWidth"-->
        <!--:percentage="Number((countWeeklys.weeklyPos/countWeeklys.weeklyTotal*100).toFixed(2))"-->
        <!--type="circle"-->
        <!--color="#8e71c7"/>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <div class="center-bottom">
          <!--标题-->
          <p class="title">近30日评论数</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <haoping v-if="countMonthlysif" :chart-data="countMonthlys" width="100%" height="100%"/>
            </div>
          </div>
        </div>
      </div>
      <!--右-->
      <div class="right">
        <!--标题-->
        <!--<p class="title">评论分布</p>-->
        <!--&lt;!&ndash;内容&ndash;&gt;-->
        <!--<div class="content">-->
        <!--<div class="chart-wrapper">-->
        <!--<zhengfu v-if="countDistributionsif" :chartData='countDistributions' width="100%" height="100%"/>-->
        <!--</div>-->
        <!--</div>-->
        <!--标题-->
        <p class="title">近12个月评论数</p>
        <!--内容-->
        <div class="content">
          <div class="chart-wrapper">
            <hcdd v-if="countAnnuallysif" :chart-data="countAnnuallys" width="100%" height="100%"/>
          </div>
        </div>
      </div>
    </div>
    <!--内容-->
    <div class="content1">
      <!--左-->
      <div class="left">
        <!--标题-->
        <p class="title">实时新增评论</p>
        <!--内容-->
        <div class="contente">
          <vue-seamless-scroll v-if="listData" :data="listData" class="seamless-warp">
            <ul class="item">
              <li v-for="(item, index) in listData" :key="index" class="woshili">
                <p class="pppp">{{ index + 1 }}</p>
                <div class="content-boxsss">
                  <p class="top-boxsss">
                    <span class="title" v-text="item.createdate"/>
                    <span class="date">[ {{ item.tour }} {{ item.ota }} ]</span>
                  </p>
                  <p class="neirong" v-html="item.content"/>
                </div>
              </li>
            </ul>
          </vue-seamless-scroll>
        </div>
      </div>
      <!--右-->
      <div class="center">
        <!--标题-->
        <p class="title">好评率排行</p>
        <!--内容-->
        <div class="content">
          <!--每1项-->
          <div v-if="getRanks[0]" class="one-box">
            <span class="name">{{ getRanks[0].name }}</span>
            <p class="line1"/>
            <span class="num">{{ getRanks[0].good }}</span>
          </div>
          <!--每2项-->
          <div v-if="getRanks[1]" class="one-box">
            <span class="name">{{ getRanks[1].name }}</span>
            <p class="line2"/>
            <span class="num">{{ getRanks[1].good }}</span>
          </div>
          <!--每3项-->
          <div v-if="getRanks[2]" class="one-box">
            <span class="name">{{ getRanks[2].name }}</span>
            <p class="line3"/>
            <span class="num">{{ getRanks[2].good }}</span>
          </div>
          <!--每4项-->
          <div v-if="getRanks[3]" class="one-box">
            <span class="name">{{ getRanks[3].name }}</span>
            <p class="line4"/>
            <span class="num">{{ getRanks[3].good }}</span>
          </div>
          <!--每5项-->
          <div v-if="getRanks[4]" class="one-box">
            <span class="name">{{ getRanks[4].name }}</span>
            <p class="line5"/>
            <span class="num">{{ getRanks[4].good }}</span>
          </div>
        </div>
      </div>
      <!--右-->
      <div class="center">
        <!--标题-->
        <p class="title">差评率排行</p>
        <!--内容-->
        <div class="content">
          <!--每1项-->
          <div v-if="negRanks[0]" class="one-box">
            <span class="name">{{ negRanks[0].name }}</span>
            <p class="line1"/>
            <span class="num">{{ negRanks[0].negRate }}%</span>
          </div>
          <!--每2项-->
          <div v-if="negRanks[1]" class="one-box">
            <span class="name">{{ negRanks[1].name }}</span>
            <p class="line2"/>
            <span class="num">{{ negRanks[1].negRate }}%</span>
          </div>
          <!--每3项-->
          <div v-if="negRanks[2]" class="one-box">
            <span class="name">{{ negRanks[2].name }}</span>
            <p class="line3"/>
            <span class="num">{{ negRanks[2].negRate }}%</span>
          </div>
          <!--每4项-->
          <div v-if="negRanks[3]" class="one-box">
            <span class="name">{{ negRanks[3].name }}</span>
            <p class="line4"/>
            <span class="num">{{ negRanks[3].negRate }}%</span>
          </div>
          <!--每5项-->
          <div v-if="negRanks[4]" class="one-box">
            <span class="name">{{ negRanks[4].name }}</span>
            <p class="line5"/>
            <span class="num">{{ negRanks[4].negRate }}%</span>
          </div>
        </div>
        <!--<div class="content">-->
        <!--<div class="chart-wrapper">-->
        <!--<weidu v-if="getAreaDimensionsif" :chartData='getAreaDimensions' height="100%" width="100%"/>-->
        <!--</div>-->
        <!--</div>-->
      </div>
      <!--最右-->
      <div class="rightZ">
        <!--标题-->
        <p class="title">差评维度分析</p>
        <!--内容-->
        <div class="content">
          <div class="chart-wrapper">
            <meigui v-if="getAreaDimensionsif" :chart-data="getAreaDimensions" height="100%" width="100%"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import haoping from '@/components/Charts/yq-haoping'
import hcdd from '@/components/Charts/hao-cha-duidie'
import ykxb from '@/components/Charts/holiday-ykxb'
import zhengfu from '@/components/Charts/zheng-fu.vue'
import meigui from '@/components/Charts/meigui'
import weidu from '@/components/Charts/weidu'
import {
  tourController,
  countWeekly,
  countDistribution,
  countMonthly,
  countAnnually,
  list,
  getRank,
  getAreaDimension
} from '@/api/public'
export default {
  components: {
    ykxb, haoping, hcdd, zhengfu, meigui, weidu
  },
  data() {
    return {
      // value4: [new Date(), new Date()],
      xfzheif: true,
      jjright: true,
      cWidth: 70,
      hou: 8,
      listData: [],
      markers: [
        [121.59996, 31.197646],
        [121.40018, 31.197622],
        [121.69991, 31.207649]
      ],
      mapCenter: [120.901737, 29.497975],
      category: 1,
      tourControllers: [],
      countWeeklys: [],
      countDistributions: [],
      countMonthlys: [],
      countAnnuallys: [],
      lists: [],
      getRanks: [],
      negRanks: [],
      getAreaDimensions: [],
      countDistributionsif: false,
      countMonthlysif: false,
      countAnnuallysif: false,
      getAreaDimensionsif: false
    }
  },
  mounted() {
    this.requestAll()
  },
  methods: {
    requestAll() {
      // 地图
      tourController({ category: this.category })
        .then(res => {
          const data = res.data.data
          if (res.status === 200) {
            console.log(data, '地图')
            this.tourControllers = data.map(element => {
              return [
                element.longitude,
                element.latitude
              ]
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
      // 近7日评论数
      countWeekly({ category: this.category })
        .then(res => {
          const data = res.data.data
          this.countWeeklys = data
          // console.log(data, '近7日评论数')
        })
        .catch(err => {
          console.log(err)
        })
      // 评论分析
      countDistribution({ category: this.category })
        .then(res => {
          const data = res.data.data
          this.countDistributions = data
          this.countDistributionsif = true
          // console.log(data, '评论分析')
        })
        .catch(err => {
          console.log(err)
        })
      // 近30日评论
      countMonthly({ category: this.category })
        .then(res => {
          const data = res.data.data
          if (res.status === 200) {
            this.countMonthlys = data
            this.countMonthlysif = true
            // console.log(data, '近30日评论')
          }
        })
        .catch(err => {
          console.log(err)
        })
      // 近12个月评论数
      countAnnually({ category: this.category })
        .then(res => {
          const data = res.data.data
          if (res.status === 200) {
            this.countAnnuallys = data
            this.countAnnuallysif = true
            // console.log(data, '近12个月评论数')
          }
        })
        .catch(err => {
          console.log(err)
        })
      // 实时新增评论
      list({ category: this.category })
        .then(res => {
          const data = res.data.data
          if (res.status === 200) {
            this.listData = data
            // console.log(data, '实时新增评论');
          }
        })
        .catch(err => {
          console.log(err)
        })
      // 好评率排行
      getRank({ category: this.category })
        .then(res => {
          const data = res.data.data
          let newArr = []
          if (res.status === 200) {
            newArr = data.map(element => {
              return {
                good: element.total - element.neg,
                name: element.name,
                negRate: (element.neg / element.total * 100).toFixed(2)
              }
            })
            function compare(property) {
              return function(a, b) {
                var value1 = a[property]
                var value2 = b[property]
                return value2 - value1
              }
            }

            this.getRanks = newArr.sort(compare('good'))
            this.negRanks = newArr.sort(compare('negRate'))
            // console.log(this.getRanks, '好评率排行')
          }
        })
        .catch(err => {
          console.log(err)
        })
      // 8.评论维度分析 9.差评分析
      getAreaDimension({ category: this.category })
        .then(res => {
          const data = res.data.data
          if (res.status === 200) {
            this.getAreaDimensions = data
            this.getAreaDimensionsif = true
            // console.log(data, '评论维度分析+差评分析')
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
  .jingqu {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    facility, quiet, food, management, cleaning, location, price, view, flow {
      color: red
    }
    .el-date-editor .el-range-separator {
      padding: 0!important;
      color: #000!important;
    }
    .amap-wrapper {
      width: 100%;
      height: 100%;
      .amap-box {
        width: 100%;
        height: 100%;
      }
    }
    .time-box {
      display: flex;
      justify-content: center;
      align-items: center;
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
    .content0 {
      flex: 2;
      display: flex;
      justify-content: space-between;
      height: 343px;
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
          padding-top: 2%;
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
        .center-top {
          flex: 1;
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
            padding-top: 2%;
            display: flex;
            justify-content: space-between;
            .left {
              flex: 1;
              background:transparent;
              padding: 2%;
              display: flex;
              flex-direction: column;
              .top {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                .titles {
                  font-size: 18px;
                  color: #ffffff;
                  background: transparent;
                }
                .num {
                  font-size: 26px;
                  color: #34a3d6;
                  font-weight: bold;
                }
              }
              .bottom {
                flex: 1;
                display: flex;
                justify-content: center;
                .leftz {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                  .titles {
                    color: #ffffff;
                    font-size: 18px;
                  }
                  .num {
                    font-size: 24px;
                    color: #34a3d6;
                    font-weight: bold;
                  }
                }
                .rightz {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                  .titles {
                    color: #ffffff;
                    font-size: 18px;
                  }
                  .num {
                    font-size: 24px;
                    color: #34a3d6;
                    font-weight: bold;
                  }
                }
              }
            }
            .right-seven {
              flex: 1;
              display: flex;
              justify-content: space-between;
              // background:palegreen;
              padding: 1%;
              .lefts {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                .titles {
                  color: #ffffff;
                  font-size: 18px;
                }
                .el-progress--circle .el-progress__text {
                  color: #ffffff;
                }
              }
              .rights {
                flex: 1;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                .titles {
                  color: #ffffff;
                  font-size: 18px;
                }
                .el-progress--circle .el-progress__text {
                  color: #ffffff;
                }
              }
            }
          }
        }
        .center-bottom {
          flex: 1;
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
            padding-top: 2%;
            display: flex;
            justify-content: space-between;
            .chart-wrapper {
              width: 100%;
              height: 100%;
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
          padding-top: 2%;
          .chart-wrapper {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .content1 {
      flex: 1;
      display: flex;
      justify-content: space-between;
      height: 170px;
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
        .contente {
          flex: 1;
          padding-top: 2%;
          height: 70%;
          .seamless-warp {
            width: 100%;
            height: 100%;
            overflow: hidden;
            .item {
              width: 100%;
              height: 100%;
              .woshili {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;
                .pppp {
                  color: #ffffff;
                  font-size: 18px;
                  width: 40px;
                  height: 40px;
                  background: #34a3d6;
                  text-align: center;
                  line-height: 40px;
                  margin-right: 5%;
                  border-radius: 5px;
                }
                .content-boxsss {
                  margin-bottom: 2%;
                  flex: 1;
                  .top-boxsss {
                    margin-bottom: 2%;
                    .title {
                      color: #889db5;
                      font-size: 14px;
                      background: transparent;
                    }
                    .date {
                      color: #889db5;
                      font-size: 14px;
                    }
                  }
                  .neirong {
                    font-size: 16px;
                    color: #ffffff;
                  }
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
          padding-top: 2%;
          display: flex;
          flex-direction: column;
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
          padding-top: 2%;
          .chart-wrapper {
            width: 100%;
            height: 100%;
          }
        }
      }
      .rightZ {
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
          padding-top: 2%;
          .chart-wrapper {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>

