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
      <div class="xcly"></div>
      <!--旅游消费额变化趋势/类型分析-->
      <div class="edfl"></div>
    </div>
    <!--中-->
    <div class="middle">
      <!--main-->
      <div class="main"></div>
      <!--main-bottom-->
      <div class="main-bottom">
        <!--客源地-->
        <div class="kyd"></div>
        <!--进一周游客数-->
        <div class="yks"></div>
      </div>
    </div>
    <!--右-->
    <div class="right">
      <!--cyjc-->
      <div class="cyjc"></div>
      <!--zyfb-->
      <div class="zyfb"></div>
      <!--rcph-->
      <div class="rcfb"></div>
      <!--yqfx-->
      <div class="yqfx"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardAdmin',
  components: {
  },
  data() {
    return {
      top5: [
        {
          value: '梅渚镇'
        },
        {
          value: '巧英乡'
        },
        {
          value: '东茗乡'
        },
        {
          value: '回乡镇'
        },
        {
          value: '沙溪镇'
        }
      ]
    }
  },
  methods: {
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
        flex-grow: 1;
        // background: red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 25px;
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
      flex-grow: 1.3;
      background: rgba(255, 255, 255, 0.05);
      margin-bottom: 1.5%;
    }
    .edfl {
      flex-grow: 2.3;
      background: rgba(255, 255, 255, 0.05);
    }
  }
  .middle {
    flex: 2;
    // background: darkorchid;
    display: flex;
    flex-direction: column;
    .main {
      flex-grow: 2.6;
      background: rgba(255, 255, 255, 0.05);
      margin: 1%;
    }
    .main-bottom {
      flex-grow: 1;
      // background: indianred;
      display: flex;
      .kyd {
        flex-grow: 1;
        background: rgba(255, 255, 255, 0.05);
        margin-left: 1%;
        margin-right: 0.5%;
      }
      .yks {
        flex-grow: 1;
        background: rgba(255, 255, 255, 0.05);
        margin-left: 0.5%;
        margin-right: 1%;
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
    }
    .zyfb {
      flex-grow: 1;
      background: rgba(255, 255, 255, 0.05);
      margin-bottom: 1.5%;
    }
    .rcfb {
      flex-grow: 1;
      background: rgba(255, 255, 255, 0.05);
      margin-bottom: 1.5%;
    }
    .yqfx {
      flex-grow: 1;
      background: rgba(255, 255, 255, 0.05);
    }
  }
}
</style>
