<template>
  <div class="specialHoliday">
    <!--假日实时数据-->
    <div class="ss">
      <!--标题-->
      <p class="title">假日实时数据</p>
      <!--内容-->
      <div class="content">
        <!--左-->
        <div class="left">
          <!--上-->
          <div class="top">
            <!--img-->
            <img src="@/assets/icon/pplb.png" alt="">
            <!--中-->
            <div class="middle">
              <p class="title">十九峰客流</p>
              <p class="text-box">
                <span class="num">9767</span>
                <span class="unit">人</span>
                <span class="text">同比10%</span>
                <img src="@/assets/icon/uparrow.png" alt="">
              </p>
            </div>
            <!--右-->
            <div class="middle">
              <p class="title">大佛寺客流</p>
              <p class="text-box">
                <span class="num">5767</span>
                <span class="unit">人</span>
                <span class="text">同比10%</span>
                <img src="@/assets/icon/uparrow.png" alt="">
              </p>
            </div>
          </div>
          <!--下-->
          <div class="bottom">
            <!--团队游客-->
            <div class="one-box">
              <p class="one">团队游客</p>
              <p class="two">2834人</p>
              <p class="three">
                <span>同比5%</span>
                <img src="@/assets/icon/uparrow.png" alt="">
              </p>
              <p class="four">1893人</p>
              <p class="five">
                <span>同比5%</span>
                <img src="@/assets/icon/uparrow.png" alt="">
              </p>
            </div>
            <div class="one-box">
              <p class="one">自驾游</p>
              <p class="two">1834辆</p>
              <p class="three">
                <span>同比15%</span>
                <img src="@/assets/icon/uparrow.png" alt="">
              </p>
              <p class="four">1097辆</p>
              <p class="five">
                <span>同比1.5%</span>
                <img src="@/assets/icon/uparrow.png" alt="">
              </p>
            </div>
            <div class="one-box">
              <p class="one">散客</p>
              <p class="two">5322人</p>
              <p class="three">
                <span>同比12%</span>
                <img src="@/assets/icon/uparrow.png" alt="">
              </p>
              <p class="four">1097人</p>
              <p class="five">
                <span>同比1.2%</span>
                <img src="@/assets/icon/downarrow.png" alt="">
              </p>
            </div>
          </div>
        </div>
        <!--右-->
        <div class="right">
          <!--上-->
          <div class="top">
            <!--img-->
            <img src="@/assets/icon/incomor.png" alt="">
            <!--中-->
            <div class="middle">
              <p class="title">十九峰收入</p>
              <p class="text-box">
                <span class="num">258873</span>
                <span class="unit">元</span>
                <span class="text">同比10%</span>
                <img src="@/assets/icon/uparrow.png" alt="">
              </p>
            </div>
            <!--右-->
            <div class="middle">
              <p class="title">大佛寺收入</p>
              <p class="text-box">
                <span class="num">138767</span>
                <span class="unit">元</span>
                <span class="text">同比2.4%</span>
                <img src="@/assets/icon/uparrow.png" alt="">
              </p>
            </div>
          </div>
          <!--下-->
          <div class="bottom">
            <!--团队游客-->
            <div class="one-box">
              <p class="one">电商收入</p>
              <p class="two">102834人</p>
              <p class="three">
                <span>同比5%</span>
                <img src="@/assets/icon/uparrow.png" alt="">
              </p>
              <p class="four">66872元</p>
              <p class="five">
                <span>同比1.2%</span>
                <img src="@/assets/icon/uparrow.png" alt="">
              </p>
            </div>
            <div class="one-box">
              <p class="one">线下收入</p>
              <p class="two">152834元</p>
              <p class="three">
                <span>同比15%</span>
                <img src="@/assets/icon/uparrow.png" alt="">
              </p>
              <p class="four">76872元</p>
              <p class="five">
                <span>同比1.2%</span>
                <img src="@/assets/icon/downarrow.png" alt="">
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--假日数据查询-->
    <div class="cx">
      <!--top-->
      <div class="top">
        <!--标题-->
        <p class="title">假日数据查询</p>
        <!--日期-->
        <div class="time-box">
          <p class="title">时间选择： </p>
          <!--年份-->
          <el-select v-model="yearsDefault" size="mini" class="select1" placeholder="请选择">
            <el-option
              v-for="item in years"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <p class="line">- - - -</p>
          <!--假日-->
          <el-select v-model="holidayDefault" size="mini" class="select2" placeholder="请选择">
            <el-option
              v-for="item in holiday"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <!--查询-->
          <el-button size="mini" type="primary">查询</el-button>
        </div>
      </div>
      <!--客流数据-->
      <div class="kl">
        <!--客流-->
        <div class="klsj-box">
          <!--title-->
          <p class="title">客流数据</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <holiday-kl-zhu height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--性别占比-->
        <div class="ykxb-box">
          <!--title-->
          <p class="title">游客性别占比</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <ykxb height="100%" width="100%"/>
            </div>
          </div>
        </div>
      </div>
      <!--年龄-->
      <div class="nlfb">
        <!--年龄分布-->
        <div class="nlfb-box">
          <!--title-->
          <p class="title">游客年龄分布</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <!-- <holiday-kl-zhu height="100%" width="100%"/> -->
            </div>
          </div>
        </div>
        <!--游客消费能力占比-->
        <div class="xfnl-box">
          <!--title-->
          <p class="title">游客消费能力占比</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <!-- <holiday-kl-zhu height="100%" width="100%"/> -->
            </div>
          </div>
        </div>
        <!--游客线上偏好-->
        <div class="xsph-box">
          <!--title-->
          <p class="title">游客线上偏好</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <!-- <holiday-kl-zhu height="100%" width="100%"/> -->
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
export default {
  components: {
    HolidayKlZhu, ykxb
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
      holidayDefault: '国庆节'
    }
  }
}
</script>

<style lang="scss" scoped>
.specialHoliday {
  position: relative;
  z-index: 999;
  width: 100%;
  height: 100%;
  padding: 1%;
  // display: flex;
  // flex-direction: column;
  .ss {
    background: rgba(255, 255, 255, 0.05);
    margin-bottom: 1%;
    padding: 1%;
    // flex: 1;
    .title {
      font-size: 22px;
      color: #bbd5ff;
    }
    .content {
      display: flex;
      justify-content: space-around;
      .left {
        flex: 1;
        background: rgba(255, 255, 255, 0.05);
        margin: 1% 2%;
        padding: 1%;
        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2%;
          img {
            width: 66px;
            height: 66px;
          }
          .middle {
            .title {
              font-size: 20px;
              color: #ffffff;
              font-weight: bold;
              margin-bottom: 2%;
            }
            .text-box {
              .num {
                font-size: 23px;
                color: #f69704;
                font-weight: bold;
              }
              .unit {
                font-size: 20px;
                color: #ffffff;
                font-weight: bold;
              }
              .text {
                font-size: 20px;
                color: #ffffff;
                font-weight: bold;
              }
              img {
                width: 18px;
                height: 21px;
              }
            }
          }
          .right {
            .title {
              font-size: 20px;
              color: #ffffff;
              font-weight: bold;
              margin-bottom: 2%;
            }
            .text-box {
              .num {
                font-size: 23px;
                color: #f69704;
                font-weight: bold;
              }
              .unit {
                font-size: 20px;
                color: #ffffff;
                font-weight: bold;
              }
              .text {
                font-size: 20px;
                color: #ffffff;
                font-weight: bold;
              }
              img {
                width: 18px;
                height: 21px;
              }
            }
          }
        }
        .bottom {
          .one-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1%;
            .one {
              font-size: 18px;
              color: #889db5;
            }
            .two {
              font-size: 18px;
              color: #a0b6db;
            }
            .three {
              span {
                font-size: 18px;
              color: #889db5;
              }
              img {
                width: 18px;
                height: 21px;
              }
            }
            .four {
              font-size: 18px;
              color: #a0b6db;
            }
            .five {
              span {
                font-size: 18px;
                color: #889db5;
              }
              img {
                width: 18px;
                height: 21px;
              }
            }
          }
        }
      }
      .right {
        flex: 1;
        background: rgba(255, 255, 255, 0.05);
        margin: 1% 2%;
        padding: 1%;
        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2%;
          img {
            width: 66px;
            height: 66px;
          }
          .middle {
            .title {
              font-size: 20px;
              color: #ffffff;
              font-weight: bold;
              margin-bottom: 2%;
            }
            .text-box {
              .num {
                font-size: 23px;
                color: #f69704;
                font-weight: bold;
              }
              .unit {
                font-size: 20px;
                color: #ffffff;
                font-weight: bold;
              }
              .text {
                font-size: 20px;
                color: #ffffff;
                font-weight: bold;
              }
              img {
                width: 18px;
                height: 21px;
              }
            }
          }
          .right {
            .title {
              font-size: 20px;
              color: #ffffff;
              font-weight: bold;
              margin-bottom: 2%;
            }
            .text-box {
              .num {
                font-size: 23px;
                color: #f69704;
                font-weight: bold;
              }
              .unit {
                font-size: 20px;
                color: #ffffff;
                font-weight: bold;
              }
              .text {
                font-size: 20px;
                color: #ffffff;
                font-weight: bold;
              }
              img {
                width: 18px;
                height: 21px;
              }
            }
          }
        }
        .bottom {
          .one-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1%;
            .one {
              font-size: 18px;
              color: #889db5;
            }
            .two {
              font-size: 18px;
              color: #a0b6db;
            }
            .three {
              span {
                font-size: 18px;
              color: #889db5;
              }
              img {
                width: 18px;
                height: 21px;
              }
            }
            .four {
              font-size: 18px;
              color: #a0b6db;
            }
            .five {
              span {
                font-size: 18px;
                color: #889db5;
              }
              img {
                width: 18px;
                height: 21px;
              }
            }
          }
        }
      }
    }
  }
  .cx {
    background: rgba(255, 255, 255, 0.05);
    padding: 1%;
    // flex: 5;
    .top {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 2%;
      .title {
        font-size: 22px;
        color: #bbd5ff;
        margin-right: 15%;
      }
      .time-box {
        display: flex;
        flex: 1;
        justify-content: flex-start;
        align-items: center;
        .title {
          margin-right: 2%;
        }
        .select1 {
          margin-right: 2%;
        }
        .line {
          color: #ffffff;
        }
        .select2 {
          margin-left: 2%;
          margin-right: 2%;
        }
      }
    }
    .kl {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1%;
      .klsj-box {
        flex: 2;
        display: flex;
        flex-direction: column;
        margin-right: .5%;
        .title {
          font-size: 22px;
          color: #bbd5ff;
          background: #45404d;
          padding: 1%;
        }
        .content {
          background: rgba(255, 255, 255, 0.05);
          .chart-wrapper {
            height: 320px;
            width: 100%;
          }
        }
      }
      .ykxb-box {
        flex: 1;
        display: flex;
        flex-direction: column;
        margin-left: .5%;
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
    }
    .nlfb {
      display: flex;
      justify-content: space-between;
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
        }
      }
    }
  }
}
</style>

