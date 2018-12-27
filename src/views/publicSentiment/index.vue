<template>
  <div class="publicSentiment">
    <div class="box">
      <!--时间选择-->
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
      </div>
      <!--内容-->
      <div class="content">
        <!--左-->
        <div class="left">
          <!--内容-->
          <div class="content">
            <h1>这里放地图</h1>
          </div>
        </div>
        <!--右-->
        <div class="center">
          <!--标题-->
          <div class="center-top">
            <p class="title">近7日评论数</p>
            <!--内容-->
            <div class="content">
              <!--左-->
              <div class="left">
                <!--上-->
                <div class="top">
                  <p class="titles">评论总数</p>
                  <p class="num">6条</p>
                </div>
                <!--下-->
                <div class="bottom">
                  <div class="leftz">
                    <p class="titles">好评数</p>
                    <p class="num">5条</p>
                  </div>
                  <div class="rightz">
                    <p class="titles">差评数</p>
                    <p class="num">1条</p>
                  </div>
                </div>
              </div>
              <!--右-->
              <div class="right-seven">
                <div class="lefts">
                  <p class="titles">整体好评率</p>
                  <el-progress type="circle" :width="cWidth" :stroke-width="hou" :percentage="82"/>
                </div>
                <div class="rights">
                  <p class="titles">近一周好评</p>
                  <el-progress type="circle" color="#8e71c7" :stroke-width="hou" :width="cWidth" :percentage="34"/>
                </div>
              </div>
            </div>
          </div>
          <div class="center-bottom">
            <!--标题-->
            <p class="title">近30日评论数</p>
            <!--内容-->
            <div class="content">
              <div class="chart-wrapper">
                <haoping width="100%" height="100%"/>
              </div>
            </div>
          </div>
        </div>
        <!--右-->
        <div class="right">
          <!--标题-->
          <p class="title">评论分布</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              
            </div>
          </div>
          <!--标题-->
          <p class="title">近12个月评论数</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              
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
          <div class="content">
            
          </div>
        </div>
        <!--右-->
        <div class="center">
          <!--标题-->
          <p class="title">好评率排行</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              
            </div>
          </div>
        </div>
        <!--右-->
        <div class="right">
          <!--标题-->
          <p class="title">评论维度分析</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <ykxb height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--最右-->
        <div class="rightZ">
          <!--标题-->
          <p class="title">差评维度分析</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <ykxb height="100%" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import haoping from '@/components/Charts/yq-haoping'
import ykxb from '@/components/Charts/holiday-ykxb'
export default {
  components: {
    ykxb, haoping
  },
  data() {
    return {
      value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      xfzheif: true,
      jjright: true,
      cWidth: 60,
      hou: 8
    }
  }
}
</script>

<style lang="scss">
.publicSentiment {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 999;
  padding: 1%;
  display: flex;
  flex-direction: column;
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
      flex: 2;
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
              // background:hotpink;
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
}
</style>

