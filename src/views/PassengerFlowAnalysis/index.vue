<template>
  <div class="flow">
    <!--上-->
    <div class="top">
      <!--时间-->
      <div class="time-box">
        <span>时间选择： </span>
        <el-date-picker
          v-model="value4"
          type="datetimerange"
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
      <div class="top-box">
        <!--全域客流量同比分析-->
        <div class="left">
          <!--标题-->
          <div class="title">全域客流量同比分析</div>
          <div class="content">
            <div class="chart-wrapper">
              <holiday-kl-zhu height="100%" width="100%"/>
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
            v-model="value4"
            type="datetimerange"
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
        <!--2块内容-->
        <div class="content">
          <div class="one">
            <!--title-->
            <p class="title">景区及A级村庄客流TOP10</p>
            <!--内容-->
            <div class="content">
              <!--每1项-->
              <div class="one-box">
                <span class="name">十九峰</span>
                <p class="line1"/>
                <span class="num">7262</span>
              </div>
              <!--每2项-->
              <div class="one-box">
                <span class="name">大佛寺</span>
                <p class="line2"/>
                <span class="num">6862</span>
              </div>
              <!--每3项-->
              <div class="one-box">
                <span class="name">丝绸世界</span>
                <p class="line3"/>
                <span class="num">6242</span>
              </div>
              <!--每4项-->
              <div class="one-box">
                <span class="name">中国茶世</span>
                <p class="line4"/>
                <span class="num">5322</span>
              </div>
              <!--每5项-->
              <div class="one-box">
                <span class="name">天烛仙境</span>
                <p class="line5"/>
                <span class="num">4222</span>
              </div>
              <!--每6项-->
              <div class="one-box">
                <span class="name">梅渚村</span>
                <p class="line6"/>
                <span class="num">3212</span>
              </div>
              <!--每7项-->
              <div class="one-box">
                <span class="name">巧英乡</span>
                <p class="line7"/>
                <span class="num">2342</span>
              </div>
              <!--每8项-->
              <div class="one-box">
                <span class="name">东茗乡</span>
                <p class="line8"/>
                <span class="num">1232</span>
              </div>
              <!--每9项-->
              <div class="one-box">
                <span class="name">回乡镇</span>
                <p class="line9"/>
                <span class="num">672</span>
              </div>
              <!--每10项-->
              <div class="one-box">
                <span class="name">沙溪镇</span>
                <p class="line10"/>
                <span class="num">342</span>
              </div>
            </div>
          </div>
          <div class="two">
            <!--title-->
            <p class="title">游客过夜比例</p>
            <!--内容-->
            <div class="content">
              <div class="chart-wrapper">
                <nlfb height="100%" width="100%"/>
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
              <div class="one-box">
                <span class="name">杭州</span>
                <p class="line1"/>
                <span class="num">7262</span>
              </div>
              <!--每2项-->
              <div class="one-box">
                <span class="name">宁波</span>
                <p class="line2"/>
                <span class="num">6862</span>
              </div>
              <!--每3项-->
              <div class="one-box">
                <span class="name">温州</span>
                <p class="line3"/>
                <span class="num">6242</span>
              </div>
              <!--每4项-->
              <div class="one-box">
                <span class="name">上海</span>
                <p class="line4"/>
                <span class="num">5322</span>
              </div>
              <!--每5项-->
              <div class="one-box">
                <span class="name">南京</span>
                <p class="line5"/>
                <span class="num">4222</span>
              </div>
              <!--每6项-->
              <div class="one-box">
                <span class="name">常州</span>
                <p class="line6"/>
                <span class="num">3212</span>
              </div>
              <!--每7项-->
              <div class="one-box">
                <span class="name">苏州</span>
                <p class="line7"/>
                <span class="num">2342</span>
              </div>
              <!--每8项-->
              <div class="one-box">
                <span class="name">无锡</span>
                <p class="line8"/>
                <span class="num">1232</span>
              </div>
              <!--每9项-->
              <div class="one-box">
                <span class="name">台州</span>
                <p class="line9"/>
                <span class="num">672</span>
              </div>
              <!--每10项-->
              <div class="one-box">
                <span class="name">丽水</span>
                <p class="line10"/>
                <span class="num">342</span>
              </div>
            </div>
          </div>
          <div class="two">
            <!--title-->
            <p class="title">游客来源地TOP10（区县）</p>
            <!--内容-->
            <div class="content">
              <!--每1项-->
              <div class="one-box">
                <span class="name">鞍山</span>
                <p class="line1"/>
                <span class="num">7262</span>
              </div>
              <!--每2项-->
              <div class="one-box">
                <span class="name">临安</span>
                <p class="line2"/>
                <span class="num">6862</span>
              </div>
              <!--每3项-->
              <div class="one-box">
                <span class="name">奉化</span>
                <p class="line3"/>
                <span class="num">6242</span>
              </div>
              <!--每4项-->
              <div class="one-box">
                <span class="name">镇海</span>
                <p class="line4"/>
                <span class="num">5322</span>
              </div>
              <!--每5项-->
              <div class="one-box">
                <span class="name">椒江</span>
                <p class="line5"/>
                <span class="num">4222</span>
              </div>
              <!--每6项-->
              <div class="one-box">
                <span class="name">慈溪</span>
                <p class="line6"/>
                <span class="num">3212</span>
              </div>
              <!--每7项-->
              <div class="one-box">
                <span class="name">余姚</span>
                <p class="line7"/>
                <span class="num">2342</span>
              </div>
              <!--每8项-->
              <div class="one-box">
                <span class="name">宁海</span>
                <p class="line8"/>
                <span class="num">1232</span>
              </div>
              <!--每9项-->
              <div class="one-box">
                <span class="name">乐清</span>
                <p class="line9"/>
                <span class="num">672</span>
              </div>
              <!--每10项-->
              <div class="one-box">
                <span class="name">瑞安</span>
                <p class="line10"/>
                <span class="num">342</span>
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
            v-model="value4"
            type="datetimerange"
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
        <!--热门旅游线路-->
        <div class="nlfb-box">
          <!--title-->
          <p class="title">热门游览线路TOP10</p>
          <!--内容-->
          <div class="content">
            <!--每1项-->
            <div class="one-box">
              <span class="name">大佛寺-十九峰</span>
              <p class="line1"/>
              <span class="num">7262</span>
            </div>
            <!--每2项-->
            <div class="one-box">
              <span class="name">十九峰-大佛寺</span>
              <p class="line2"/>
              <span class="num">6862</span>
            </div>
            <!--每3项-->
            <div class="one-box">
              <span class="name">十九峰-丝绸世界</span>
              <p class="line3"/>
              <span class="num">6242</span>
            </div>
            <!--每4项-->
            <div class="one-box">
              <span class="name">大佛寺-丝绸世界</span>
              <p class="line4"/>
              <span class="num">5322</span>
            </div>
            <!--每5项-->
            <div class="one-box">
              <span class="name">天烛仙境-丝绸世界</span>
              <p class="line5"/>
              <span class="num">4222</span>
            </div>
            <!--每6项-->
            <div class="one-box">
              <span class="name">大佛寺-中国茶市</span>
              <p class="line6"/>
              <span class="num">3212</span>
            </div>
            <!--每7项-->
            <div class="one-box">
              <span class="name">大佛寺-天烛仙境</span>
              <p class="line7"/>
              <span class="num">2342</span>
            </div>
            <!--每8项-->
            <div class="one-box">
              <span class="name">十九峰-天烛仙境</span>
              <p class="line8"/>
              <span class="num">1232</span>
            </div>
            <!--每9项-->
            <div class="one-box">
              <span class="name">丝绸世界-大佛寺</span>
              <p class="line9"/>
              <span class="num">672</span>
            </div>
            <!--每10项-->
            <div class="one-box">
              <span class="name">中国茶室-十九峰</span>
              <p class="line10"/>
              <span class="num">342</span>
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
export default {
  components: {
    HolidayKlZhu, passengerYklx, nlfb
  },
  data() {
    return {
      value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      yktype: [
        { value: 335, name: '散客' },
        { value: 310, name: '一卡通游客' },
        { value: 274, name: '跟团游' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
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
  .top {
    flex: 2;
    // background: fuchsia;
    // background: rgba(255, 255, 255, 0.05);
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
                width: 38%;
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
              height: 100%;
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

