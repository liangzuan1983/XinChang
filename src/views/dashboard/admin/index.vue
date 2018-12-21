<template>
  <div class="dashboard-editor-container">
    <!--左-->
    <div class="left">
      <!--重点景区数据-->
      <div class="zdjq">
        <!--标题行-->
        <div class="zdjq-title-box">
          <p class="title">重点景区数据</p>
          <p class="title-right">
            <span>更多</span>
            <span class="el-icon-d-arrow-right"/>
          </p>
        </div>
        <!--内容行-->
        <div class="zdjq-content">
          <!--大佛寺-->
          <div class="dfs">
            <p class="dfs-title">大佛寺</p>
            <!--游客接待数-->
            <div class="dfs-content">
              <img class="dfs-icon" src="@/assets/icon/ppl.png" alt="">
              <div class="dfs-content-right">
                <p class="dfs-text">游客接待数</p>
                <p class="dfs-num-box">
                  <span class="dfs-num">546</span>
                  <span class="dfs-unit">个</span>
                </p>
              </div>
            </div>
            <!--旅游收入-->
            <div class="dfs-content">
              <img class="dfs-icon" src="@/assets/icon/incom.png" alt="">
              <div class="dfs-content-right">
                <p class="dfs-text">旅游收入</p>
                <p class="dfs-num-box">
                  <span class="dfs-num">8465</span>
                  <span class="dfs-unit">元</span>
                </p>
              </div>
            </div>
          </div>
          <!--十九峰-->
          <div class="sjf">
            <p class="dfs-title">十九峰</p>
            <!--游客接待数-->
            <div class="dfs-content">
              <img class="dfs-icon" src="@/assets/icon/ppl.png" alt="">
              <div class="dfs-content-right">
                <p class="dfs-text">游客接待数</p>
                <p class="dfs-num-box">
                  <span class="dfs-num">365</span>
                  <span class="dfs-unit">个</span>
                </p>
              </div>
            </div>
            <!--旅游收入-->
            <div class="dfs-content">
              <img class="dfs-icon" src="@/assets/icon/incom.png" alt="">
              <div class="dfs-content-right">
                <p class="dfs-text">旅游收入</p>
                <p class="dfs-num-box">
                  <span class="dfs-num">7645</span>
                  <span class="dfs-unit">元</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--乡村旅游热度排行top5-->
      <div class="xcly">
        <!--标题行-->
        <div class="zdjq-title-box">
          <p class="title">乡村旅游热度排行top5</p>
          <p class="title-right">
            <span>更多</span>
            <span class="el-icon-d-arrow-right"/>
          </p>
        </div>
        <!--内容-->
        <div class="xcly-content">
          <div class="xc-box">
            <p class="num">1</p>
            <p class="name">梅渚镇</p>
          </div>
          <div class="xc-box2">
            <p class="num">2</p>
            <p class="name">巧英乡</p>
          </div>
          <div class="xc-box3">
            <p class="num">3</p>
            <p class="name">东明乡</p>
          </div>
          <div class="xc-box4">
            <p class="num">4</p>
            <p class="name">回乡镇</p>
          </div>
          <div class="xc-box5">
            <p class="num">5</p>
            <p class="name">沙溪镇</p>
          </div>
        </div>
      </div>
      <!--旅游消费额变化趋势/类型分析-->
      <div class="edfl">
        <!--旅游消费额变化-->
        <div class="bh">
          <!--标题行-->
          <div class="zdjq-title-box">
            <p class="title">旅游消费额度变化趋势(万元)</p>
            <p class="title-right">
              <span>更多</span>
              <span class="el-icon-d-arrow-right"/>
            </p>
          </div>
          <!--内容区-->
          <div class="content-box">
            <div class="chart-container">
              <lvxf height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--旅游消费类型分析-->
        <div class="lx">
          <!--标题行-->
          <div class="zdjq-title-box">
            <p class="title">旅游消费类型分析(万元)</p>
            <p class="title-right">
              <span>更多</span>
              <span class="el-icon-d-arrow-right"/>
            </p>
          </div>
          <!--内容区-->
          <div class="content-box">
            <div class="chart-wrapper">
              <bar-chart height="100%" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--中-->
    <div class="middle">
      <!--main-->
      <div class="main">
        <img src="@/assets/map.png" alt="">
        <!--按钮-->
        <div class="btn">
          <div class="btn-box">
            <p class="qy" :class="{qyb: qyb}" @click="qyEvent">全域客流</p>
            <p class="zy" :class="{zyb: zyb}" @click="lyEvent">旅游资源</p>
          </div>
        </div>
      </div>
      <!--main-bottom-->
      <div class="main-bottom">
        <!--客源地-->
        <div class="kyd">
          <!--标题行-->
          <div class="zdjq-title-box">
            <p class="title">客源地 城市 区县 TOP5</p>
            <p class="title-right">
              <span>更多</span>
              <span class="el-icon-d-arrow-right"/>
            </p>
          </div>
          <!--内容区-->
          <div class="content-box">
            <div class="chart-wrapper">
              <pie-chart-full height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--进一周游客数-->
        <div class="yks">
          <!--标题行-->
          <div class="zdjq-title-box">
            <p class="title">近一周游客数</p>
            <p class="title-right">
              <span>更多</span>
              <span class="el-icon-d-arrow-right"/>
            </p>
          </div>
          <!--内容区-->
          <div class="content-box">
            <div class="chart-wrapper">
              <yi-zhou height="100%" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--右-->
    <div class="right">
      <!--cyjc-->
      <div class="cyjc">
        <!--标题行-->
        <div class="zdjq-title-box">
          <p class="title">产业检测数据</p>
          <p class="title-right">
            <span>更多</span>
            <span class="el-icon-d-arrow-right"/>
          </p>
        </div>
        <!--内容区-->
        <div class="content-box">
          <!--左-->
          <div class="left-box">
            <!--上-->
            <div class="top-box">
              <img src="@/assets/icon/pplb.png" alt="">
              <div class="text-box">
                <p class="title">游客接待数</p>
                <p class="content-box">
                  <span class="num">1620</span>
                  <span class="unit">个</span>
                </p>
              </div>
            </div>
            <!--下-->
            <div class="bottom-box">
              <!--境外-->
              <p class="l-box">
                <span class="name">境外游客</span>
                <span class="num">520</span>
                <span class="unit">个</span>
              </p>
              <!--境内-->
              <p class="l-box">
                <span class="name">境外游客</span>
                <span class="num">1100</span>
                <span class="unit">个</span>
              </p>
            </div>
          </div>
          <!--右-->
          <div class="right-box">
            <!--上-->
            <div class="top-box">
              <img src="@/assets/icon/incomor.png" alt="">
              <div class="text-box">
                <p class="title">旅游收入</p>
                <p class="content-box">
                  <span class="num">2978</span>
                  <span class="unit">万元</span>
                </p>
              </div>
            </div>
            <!--下-->
            <div class="bottom-box">
              <!--境外-->
              <p class="l-box">
                <span class="name">境外游客</span>
                <span class="num">920</span>
                <span class="unit">万元</span>
              </p>
              <!--境内-->
              <p class="l-box">
                <span class="name">境外游客</span>
                <span class="num">2058</span>
                <span class="unit">万元</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--zyfb-->
      <div class="zyfb">
        <!--标题行-->
        <div class="zdjq-title-box">
          <p class="title">资源分布</p>
          <p class="title-right">
            <span>更多</span>
            <span class="el-icon-d-arrow-right"/>
          </p>
        </div>
        <!--内容区-->
        <div class="content-box">
          
        </div>
      </div>
      <!--rcph-->
      <div class="rcfb">
        <!--标题行-->
        <div class="zdjq-title-box">
          <p class="title">热词排行</p>
          <p class="title-right">
            <span>更多</span>
            <span class="el-icon-d-arrow-right"/>
          </p>
        </div>
        <!--内容区-->
        <div class="content-box">
          
        </div>
      </div>
      <!--yqfx-->
      <div class="yqfx">
        <!--标题行-->
        <div class="zdjq-title-box">
          <p class="title">舆情分析</p>
          <p class="title-right">
            <span>更多</span>
            <span class="el-icon-d-arrow-right"/>
          </p>
        </div>
        <!--内容区-->
        <div class="content-box">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lvxf from '@/components/Charts/lineMarkerOne'
import BarChart from '@/views/dashboard/admin/components/BarChart'
import PieChartFull from '@/views/dashboard/admin/components/PieChartFull'
import YiZhou from '@/views/dashboard/admin/components/YiZhou'
export default {
  name: 'DashboardAdmin',
  components: {
    lvxf, BarChart, PieChartFull, YiZhou
  },
  data() {
    return {
      qyb: true,
      zyb: false
    }
  },
  methods: {
    qyEvent() {
      this.qyb = true
      this.zyb = false
    },
    lyEvent() {
      this.qyb = false
      this.zyb = true
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 5px;
  width: 100%;
  height: 100%;
  // background-color: #111a29;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 999;
  .left {
    flex: 1;
    // background: yellow;
    display: flex;
    flex-direction: column;
    .zdjq {
      flex-grow: 1;
      background: rgba(255, 255, 255, 0.05);
      margin-bottom: 1.5%;
      display: flex;
      flex-direction: column;
      padding: 2% 3%;
      .zdjq-title-box {
        flex: 1;
        // background: red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 22px;
          color: #bbd5ff;
        }
        .title-right {
          span {
            font-size: 18px;
            color: #bbd5ff;
          }
        }
      }
      .zdjq-content {
        flex-grow: 6;
        // background: forestgreen;
        display: flex;
        justify-content: space-between;
        .dfs {
          flex-grow: 1;
          background: #27303f;
          margin-right: 2%;
          display: flex;
          flex-direction: column;
          .dfs-title {
            font-size: 18px;
            font-weight: bold;
            color: #ffffff;
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .dfs-content {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            .dfs-icon {
              width: 36px;
              height: 36px;
              margin-right: 3%;
            }
            .dfs-content-right {
              .dfs-text {
                font-size: 18px;
                color: #e6e6e6;
                margin-bottom: 2%;
              }
              .dfs-num-box {
                .dfs-num {
                  font-size: 15px;
                  color: #f69704;
                  font-weight: bold;
                }
                .dfs-unit {
                  font-size: 17px;
                  color: #e6e6e6;
                }
              }
            }
          }
        }
        .sjf {
          flex-grow: 1;
          background: #27303f;
          margin-left: 2%;
          display: flex;
          flex-direction: column;
          .dfs-title {
            font-size: 18px;
            font-weight: bold;
            color: #ffffff;
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .dfs-content {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            .dfs-icon {
              width: 36px;
              height: 36px;
              margin-right: 3%;
            }
            .dfs-content-right {
              .dfs-text {
                font-size: 18px;
                color: #e6e6e6;
                margin-bottom: 2%;
              }
              .dfs-num-box {
                .dfs-num {
                  font-size: 15px;
                  color: #f69704;
                  font-weight: bold;
                }
                .dfs-unit {
                  font-size: 17px;
                  color: #e6e6e6;
                }
              }
            }
          }
        }
      }
    }
    .xcly {
      padding: 2% 3%;
      flex-grow: 1.3;
      background: rgba(255, 255, 255, 0.05);
      margin-bottom: 1.5%;
      display: flex;
      flex-direction: column;
      .zdjq-title-box {
        flex-grow: 1;
        // background: red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 22px;
          color: #bbd5ff;
        }
        .title-right {
          span {
            font-size: 18px;
            color: #bbd5ff;
          }
        }
      }
      .xcly-content {
        flex-grow: 3.5;
        // background: firebrick;
        padding-left: 5%;
        padding-right: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .xc-box {
          display: flex;
          justify-content: space-between;
          .num {
            flex: 1;
            background: #47b2d3;
            margin-right: 5%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            // padding-top: 1%;
            // padding-bottom: 1%;
          }
          .name {
            flex: 6;
            background: #47b2d3;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            padding-top: 1%;
            padding-bottom: 1%;
          }
        }
        .xc-box2 {
          display: flex;
          justify-content: space-between;
          .num {
            flex: 1;
            background: #38a6d6;
            margin-right: 5%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            // padding-top: 1%;
            // padding-bottom: 1%;
          }
          .name {
            flex: 6;
            background: #38a6d6;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            padding-top: 1%;
            padding-bottom: 1%;
          }
        }
        .xc-box3 {
          display: flex;
          justify-content: space-between;
          .num {
            flex: 1;
            background: #279ad9;
            margin-right: 5%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            // padding-top: 1%;
            // padding-bottom: 1%;
          }
          .name {
            flex: 6;
            background: #279ad9;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            padding-top: 1%;
            padding-bottom: 1%;
          }
        }
        .xc-box4 {
          display: flex;
          justify-content: space-between;
          .num {
            flex: 1;
            background: #188edb;
            margin-right: 5%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            // padding-top: 1%;
            // padding-bottom: 1%;
          }
          .name {
            flex: 6;
            background: #188edb;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            padding-top: 1%;
            padding-bottom: 1%;
          }
        }
        .xc-box5 {
          display: flex;
          justify-content: space-between;
          .num {
            flex: 1;
            background: #0982de;
            margin-right: 5%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            // padding-top: 1%;
            // padding-bottom: 1%;
          }
          .name {
            flex: 6;
            background: #0982de;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            padding-top: 1%;
            padding-bottom: 1%;
          }
        }
      }
    }
    .edfl {
      flex-grow: 2.3;
      background: rgba(255, 255, 255, 0.05);
      display: flex;
      flex-direction: column;
      .bh {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding: 2% 3%;
        .zdjq-title-box {
          flex-grow: 1;
          // background: red;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .title {
            font-size: 22px;
            color: #bbd5ff;
          }
          .title-right {
            span {
              font-size: 18px;
              color: #bbd5ff;
            }
          }
        }
        .content-box {
          flex-grow: 6;
          // background: #0982de;
          .chart-container{
            margin-bottom: -10%;
            width: 100%;
            height: 100%;
          }
        }
      }
      .lx {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding: 2% 3%;
        .zdjq-title-box {
          flex-grow: 1;
          // background: red;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .title {
            font-size: 22px;
            color: #bbd5ff;
          }
          .title-right {
            span {
              font-size: 18px;
              color: #bbd5ff;
            }
          }
        }
        .content-box {
          flex: 6;
          // background: #0982de;
          .chart-wrapper {
            width: 100%;
            height: 100%;
            margin-bottom: -10%
          }
        }
      }
    }
  }
  .middle {
    flex: 2;
    // background: darkorchid;
    display: flex;
    flex-direction: column;
    .main {
      flex: 2;
      // background: rgba(255, 255, 255, 0.05);
      margin: 1%;
      padding: 5%;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .btn {
        position: absolute;
        right: 5%;
        bottom: 5%;
        width: 35%;
        display: flex;
        height: 9%;
        .btn-box {
          flex: 1;
          position: relative;
          display: flex;
          justify-content: space-between;
          width: 10%;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 30px;
          padding: 2%;
          .qy {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            font-size: 22px;
            // background: hotpink;
            border-radius: 30px;
          }
          .qyb { background: rgba(255, 255, 255, 0.2); }
          .zy {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            font-size: 22px;
            // background: aquamarine;
            border-radius: 30px;
          }
          .zyb { background: rgba(255, 255, 255, 0.2); }
        }
      }
    }
    .main-bottom {
      flex-grow: 1;
      // background: indianred;
      display: flex;
      .kyd {
        // flex-grow: 1;
        width:49%;
        background: rgba(255, 255, 255, 0.05);
        margin-left: 1%;
        margin-right: 0.5%;
        display: flex;
        flex-direction: column;
        padding: 2% 3%;
        .zdjq-title-box {
          flex-grow: 1;
          // background: red;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .title {
            font-size: 22px;
            color: #bbd5ff;
          }
          .title-right {
            span {
              font-size: 18px;
              color: #bbd5ff;
            }
          }
        }
        .content-box {
          flex: 6;
          // background: #0982de;
          .chart-wrapper {
            width: 100%;
            height: 100%;
          }
        }
      }
      .yks {
        // flex-grow: 1;
        width:48%;
        background: rgba(255, 255, 255, 0.05);
        margin-left: 0.5%;
        margin-right: 1%;
        display: flex;
        flex-direction: column;
        padding: 2% 3%;
        .zdjq-title-box {
          flex-grow: 1;
          // background: red;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          top: 7%;
          .title {
            font-size: 22px;
            color: #bbd5ff;
          }
          .title-right {
            span {
              font-size: 18px;
              color: #bbd5ff;
            }
          }
        }
        .content-box {
          flex: 6;
          // background: #0982de;
          .chart-wrapper {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .right {
    flex: 1;
    // background: hotpink;
    display: flex;
    flex-direction: column;
    .cyjc {
      flex-grow: 1;
      background: rgba(255, 255, 255, 0.05);
      margin-bottom: 1.5%;
      display: flex;
      flex-direction: column;
      padding: 2% 3%;
      .zdjq-title-box {
        flex-grow: 1;
        // background: red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 22px;
          color: #bbd5ff;
        }
        .title-right {
          span {
            font-size: 18px;
            color: #bbd5ff;
          }
        }
      }
      .content-box {
        flex: 6;
        // background: #0982de;
        display: flex;
        justify-content: space-between;
        .left-box {
          flex: 1;
          // background: red;
          margin-right: 5%;
          .top-box {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8%;
            img {
              width: 58px;
              height: 58px;
            }
            .text-box {
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              .title {
                font-size: 18px;
                font-weight: bold;
                color: #ffffff;
                margin-bottom: 10%;
              }
              .content-box {
                display: flex;
                justify-content: space-between;
                .num {
                  font-size: 23px;
                  color: #f69704;
                  font-weight: bold;
                }
                .unit {
                  font-size: 19px;
                  color: #ffffff;
                }
              }
            }
          }
          .bottom-box {
            .l-box {
              display: flex;
              justify-content: space-between;
              margin-bottom: 8%;
              .name {
                font-size: 20px;
                color: #ffffff;
              }
              .num {
                font-size: 20px;
                color: #f69704;
              }
              .unit {
                font-size: 18px;
                color: #ffffff;
              }
            }
          }
        }
        .right-box {
          flex: 1;
          // background: #279ad9;
          margin-left: 5%;
          .top-box {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8%;
            img {
              width: 58px;
              height: 58px;
            }
            .text-box {
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              .title {
                font-size: 18px;
                font-weight: bold;
                color: #ffffff;
                margin-bottom: 10%;
              }
              .content-box {
                display: flex;
                justify-content: space-between;
                .num {
                  font-size: 23px;
                  color: #f69704;
                  font-weight: bold;
                }
                .unit {
                  font-size: 19px;
                  color: #ffffff;
                }
              }
            }
          }
          .bottom-box {
            .l-box {
              display: flex;
              justify-content: space-between;
              margin-bottom: 8%;
              .name {
                font-size: 20px;
                color: #ffffff;
              }
              .num {
                font-size: 20px;
                color: #f69704;
              }
              .unit {
                font-size: 18px;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
    .zyfb {
      flex-grow: 1;
      background: rgba(255, 255, 255, 0.05);
      margin-bottom: 1.5%;
      display: flex;
      flex-direction: column;
      padding: 2% 3%;
      .zdjq-title-box {
        flex-grow: 1;
        // background: red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 22px;
          color: #bbd5ff;
        }
        .title-right {
          span {
            font-size: 18px;
            color: #bbd5ff;
          }
        }
      }
      .content-box {
        flex: 6;
        background: #0982de;
      }
    }
    .rcfb {
      flex-grow: 1;
      background: rgba(255, 255, 255, 0.05);
      margin-bottom: 1.5%;
      display: flex;
      flex-direction: column;
      padding: 2% 3%;
      .zdjq-title-box {
        flex-grow: 1;
        // background: red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 22px;
          color: #bbd5ff;
        }
        .title-right {
          span {
            font-size: 18px;
            color: #bbd5ff;
          }
        }
      }
      .content-box {
        flex: 6;
        background: #0982de;
      }
    }
    .yqfx {
      flex-grow: 1;
      background: rgba(255, 255, 255, 0.05);
      display: flex;
      flex-direction: column;
      padding: 2% 3%;
      .zdjq-title-box {
        flex-grow: 1;
        // background: red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 22px;
          color: #bbd5ff;
        }
        .title-right {
          span {
            font-size: 18px;
            color: #bbd5ff;
          }
        }
      }
      .content-box {
        flex: 6;
        background: #0982de;
      }
    }
  }
}
</style>
