<template>
  <div class="sjf">
    <!--假日数据查询-->
    <div class="cx">
      <!--top-->
      <div class="top">
        <!--日期-->
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
          <img class="down" src="@/assets/icon/down.png" alt="">
        </div>
      </div>
      <!--热门旅游线路TOP10-->
      <div class="nlfb">
        <!--年龄分布-->
        <div class="nlfb-box">
          <!--title-->
          <p class="title">散客客流</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <holiday-kl-zhu id="skkl" height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--游客消费能力占比-->
        <div class="xfnl-box">
          <!--title-->
          <p class="title">散客类型分析</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <div class="chart-wrapper">
                <pie-chart-full height="100%" width="100%"/>
              </div>
            </div>
          </div>
        </div>
        <!--年龄-->
        <div class="xsph-box">
          <!--title-->
          <p class="title">散客客源地排行</p>
          <!--内容-->
          <div class="content">
            <!--每1项-->
            <div class="one-box">
              <span class="name">杭州</span>
              <p class="line1"/>
              <span class="num">7262</span>
            </div>
            <!--每2项-->
            <div class="one-box">
              <span class="name">上海</span>
              <p class="line2"/>
              <span class="num">6862</span>
            </div>
            <!--每3项-->
            <div class="one-box">
              <span class="name">宁波</span>
              <p class="line3"/>
              <span class="num">6242</span>
            </div>
            <!--每4项-->
            <div class="one-box">
              <span class="name">丽水</span>
              <p class="line4"/>
              <span class="num">5322</span>
            </div>
            <!--每5项-->
            <div class="one-box">
              <span class="name">台州</span>
              <p class="line5"/>
              <span class="num">4222</span>
            </div>
            <!--每6项-->
            <div class="one-box">
              <span class="name">苏州</span>
              <p class="line6"/>
              <span class="num">3212</span>
            </div>
            <!--每7项-->
            <div class="one-box">
              <span class="name">合肥</span>
              <p class="line7"/>
              <span class="num">2342</span>
            </div>
            <!--每8项-->
            <div class="one-box">
              <span class="name">南京</span>
              <p class="line8"/>
              <span class="num">1232</span>
            </div>
            <!--每9项-->
            <div class="one-box">
              <span class="name">温州</span>
              <p class="line9"/>
              <span class="num">672</span>
            </div>
            <!--每10项-->
            <div class="one-box">
              <span class="name">黄山</span>
              <p class="line10"/>
              <span class="num">342</span>
            </div>
          </div>
        </div>
      </div>
      <!--游客线上偏好-->
      <div class="nlfb">
        <!--年龄分布-->
        <div class="nlfb-box">
          <!--title-->
          <p class="title">团队客流</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <holiday-kl-zhu id="tdkl" height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--游客消费能力占比-->
        <div class="xfnl-box">
          <!--title-->
          <p class="title">团队客源地排行</p>
          <!--内容-->
          <div class="content">
            <!--每1项-->
            <div class="one-box">
              <span class="name">杭州</span>
              <p class="line1"/>
              <span class="num">7262</span>
            </div>
            <!--每2项-->
            <div class="one-box">
              <span class="name">上海</span>
              <p class="line2"/>
              <span class="num">6862</span>
            </div>
            <!--每3项-->
            <div class="one-box">
              <span class="name">宁波</span>
              <p class="line3"/>
              <span class="num">6242</span>
            </div>
            <!--每4项-->
            <div class="one-box">
              <span class="name">丽水</span>
              <p class="line4"/>
              <span class="num">5322</span>
            </div>
            <!--每5项-->
            <div class="one-box">
              <span class="name">台州</span>
              <p class="line5"/>
              <span class="num">4222</span>
            </div>
            <!--每6项-->
            <div class="one-box">
              <span class="name">苏州</span>
              <p class="line6"/>
              <span class="num">3212</span>
            </div>
            <!--每7项-->
            <div class="one-box">
              <span class="name">合肥</span>
              <p class="line7"/>
              <span class="num">2342</span>
            </div>
            <!--每8项-->
            <div class="one-box">
              <span class="name">南京</span>
              <p class="line8"/>
              <span class="num">1232</span>
            </div>
            <!--每9项-->
            <div class="one-box">
              <span class="name">温州</span>
              <p class="line9"/>
              <span class="num">672</span>
            </div>
            <!--每10项-->
            <div class="one-box">
              <span class="name">黄山</span>
              <p class="line10"/>
              <span class="num">342</span>
            </div>
          </div>
        </div>
        <!--游客线上偏好-->
        <div class="xsph-box1">
          <!--title-->
          <p class="title">旅行社销量排名</p>
          <!--内容-->
          <div class="content">
            <!--每1项-->
            <div class="one-box">
              <span class="name">新昌旅行社</span>
              <p class="line1"/>
              <span class="num">7262</span>
            </div>
            <!--每2项-->
            <div class="one-box">
              <span class="name">绍兴旅行社</span>
              <p class="line2"/>
              <span class="num">6862</span>
            </div>
            <!--每3项-->
            <div class="one-box">
              <span class="name">中国青社</span>
              <p class="line3"/>
              <span class="num">6242</span>
            </div>
            <!--每4项-->
            <div class="one-box">
              <span class="name">完美旅行社</span>
              <p class="line4"/>
              <span class="num">5322</span>
            </div>
            <!--每5项-->
            <div class="one-box">
              <span class="name">星空旅行社</span>
              <p class="line5"/>
              <span class="num">4222</span>
            </div>
          </div>
        </div>
      </div>
      <!--游客消费-->
      <div class="nlfb">
        <!--年龄分布-->
        <div class="nlfb-box">
          <!--title-->
          <p class="title">电商订单</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <holiday-kl-zhu id="dsdd" height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--游客消费能力占比-->
        <div class="xfnl-box">
          <!--title-->
          <p class="title">订单来源</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <nlfb-ddly v-if="bingIf4" :id="ids[4]" height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--游客线上偏好-->
        <div class="xsph-box">
          <!--title-->
          <p class="title">客户来源地分析</p>
          <!--内容-->
          <div class="content">
            <!--每1项-->
            <div class="one-box">
              <span class="name">杭州</span>
              <p class="line1"/>
              <span class="num">7262</span>
            </div>
            <!--每2项-->
            <div class="one-box">
              <span class="name">上海</span>
              <p class="line2"/>
              <span class="num">6862</span>
            </div>
            <!--每3项-->
            <div class="one-box">
              <span class="name">宁波</span>
              <p class="line3"/>
              <span class="num">6242</span>
            </div>
            <!--每4项-->
            <div class="one-box">
              <span class="name">丽水</span>
              <p class="line4"/>
              <span class="num">5322</span>
            </div>
            <!--每5项-->
            <div class="one-box">
              <span class="name">台州</span>
              <p class="line5"/>
              <span class="num">4222</span>
            </div>
            <!--每6项-->
            <div class="one-box">
              <span class="name">苏州</span>
              <p class="line6"/>
              <span class="num">3212</span>
            </div>
            <!--每7项-->
            <div class="one-box">
              <span class="name">合肥</span>
              <p class="line7"/>
              <span class="num">2342</span>
            </div>
            <!--每8项-->
            <div class="one-box">
              <span class="name">南京</span>
              <p class="line8"/>
              <span class="num">1232</span>
            </div>
            <!--每9项-->
            <div class="one-box">
              <span class="name">温州</span>
              <p class="line9"/>
              <span class="num">672</span>
            </div>
            <!--每10项-->
            <div class="one-box">
              <span class="name">黄山</span>
              <p class="line10"/>
              <span class="num">342</span>
            </div>
          </div>
        </div>
      </div>
      <!--游客消费2-->
      <div class="nlfb2">
        <!--年龄分布-->
        <div class="nlfb-box">
          <!--title-->
          <p class="title">电商订单退单</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <yi-zhou :fatherData="kydxq" id="kydxq" height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--游客消费能力占比-->
        <div class="xfnl-box">
          <!--title-->
          <p class="title">电商客户性别比例</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <ykxb height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--游客线上偏好-->
        <div class="xsph-box">
          <!--title-->
          <p class="title">电商客户年龄分析</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <nlfb id="ids3" height="100%" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HolidayKlZhu from '@/components/Charts/holiday-kl-zhu'
import ykxb from '@/components/Charts/holiday-ykxb'
import nlfb from '@/components/Charts/holiday-nlfb'
import nlfbDdly from '@/components/Charts/dfs-ddly'
import xfzhe from '@/components/Charts/holiday-xf-zhe'
import YiZhou from '@/views/dashboard/admin/components/YiZhou'
import PieChartFull from '@/views/dashboard/admin/components/dfs'
export default {
  components: {
    HolidayKlZhu, ykxb, nlfb, xfzhe, YiZhou, PieChartFull, nlfbDdly
  },
  data() {
    return {
      years: [
        {
          value: '选项1',
          label: '2014'
        }, {
          value: '选项2',
          label: '2015'
        }, {
          value: '选项3',
          label: '2016'
        }, {
          value: '选项4',
          label: '2017'
        }, {
          value: '选项5',
          label: '2018'
        }
      ],
      yearsDefault: '2018',
      holiday: [
        {
          value: '选项1',
          label: '新年'
        }, {
          value: '选项2',
          label: '圣诞节'
        }, {
          value: '选项3',
          label: '元旦'
        }, {
          value: '选项4',
          label: '端午节'
        }, {
          value: '选项5',
          label: '国庆节'
        }
      ],
      holidayDefault: '国庆节',
      ids: ['bing1', 'bing2', 'bing3', 'bing4', 'bing5', 'bing6'],
      bingIf1: true,
      bingIf2: true,
      bingIf3: true,
      bingIf4: true,
      bingIf5: true,
      bingIf6: true,
      xfzhe: true,
      value4: [new Date(), new Date()]
    }
  }
}
</script>

<style lang="scss">
.sjf {
  position: relative;
  z-index: 999;
  width: 100%;
  height: 100%;
  // padding: 1%;
  // margin: 1.5%;
  // display: flex;
  // flex-direction: column;
  overflow-y: overlay;
  .el-date-editor .el-range-separator {
    padding: 0!important;
    color: #000!important;
  }
  .cx {
    // background: rgba(255, 255, 255, 0.05);
    // padding: 1%;
    // flex: 5;
    .top {
      flex: 2;
      // background: fuchsia;
      // background: rgba(255, 255, 255, 0.05);
      display: flex;
      flex-direction: column;
      // margin-bottom: 1%;
      // padding: 1% 1% 0 1%;
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
    }
    .nlfb {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1%;
      .nlfb-box {
        flex: 1;
        background: rgba(255, 255, 255, 0.05);
        flex-direction: column;
        .title {
          font-size: 22px;
          color: #bbd5ff;
          background: #45404d;
          padding: 1.5%;
        }
        .content {
          // background: rgba(255, 255, 255, 0.05);
          .chart-wrapper {
            height: 320px;
            width: 100%;
          }
        }
      }
      .xfnl-box {
        flex: 1;
        background: rgba(255, 255, 255, 0.05);
        margin: 0 1%;
        flex-direction: column;
        .title {
          font-size: 22px;
          color: #bbd5ff;
          background: #45404d;
          padding: 1.5%;
        }
        .content {
          // background: rgba(255, 255, 255, 0.05);s
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
              margin-left: 10%;
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
      .xsph-box {
        flex: 1;
        background: rgba(255, 255, 255, 0.05);
        flex-direction: column;
        display: flex;
        .title {
          font-size: 22px;
          color: #bbd5ff;
          background: #45404d;
          padding: 1.5%;
        }
        .content {
          background: rgba(255, 255, 255, 0.05);
          flex: 1;
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
              margin-left: 10%;
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
    .nlfb2 {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1%;
      .nlfb-box {
        flex: 1;
        background: rgba(255, 255, 255, 0.05);
        flex-direction: column;
        .title {
          font-size: 22px;
          color: #bbd5ff;
          background: #45404d;
          padding: 1.5%;
        }
        .content {
          background: rgba(255, 255, 255, 0.05);
          .chart-wrapper {
            height: 320px;
            width: 100%;
          }
        }
      }
      .xfnl-box {
        flex: 1;
        background: rgba(255, 255, 255, 0.05);
        margin: 0 1%;
        flex-direction: column;
        .title {
          font-size: 22px;
          color: #bbd5ff;
          background: #45404d;
          padding: 1.5%;
        }
        .content {
          background: rgba(255, 255, 255, 0.05);
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
              width: 38%;
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
      .xsph-box {
        flex: 1;
        background: rgba(255, 255, 255, 0.05);
        flex-direction: column;
        .title {
          font-size: 22px;
          color: #bbd5ff;
          background: #45404d;
          padding: 1.5%;
        }
        .content {
          background: rgba(255, 255, 255, 0.05);
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
              margin-left: 10%;
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
    }
    .xsph-box1 {
      flex: 1;
      background: rgba(255, 255, 255, 0.05);
      flex-direction: column;
      display: flex;
      .title {
        font-size: 22px;
        color: #bbd5ff;
        background: #45404d;
        padding: 1.5%;
      }
      .content {
        background: rgba(255, 255, 255, 0.05);
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .one-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1% 2%;
          .name {
            font-size: 20px;
            color: #889db5;
            width: 25%;
            margin-left: 10%;
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
  }
}
</style>

