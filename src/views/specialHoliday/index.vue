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
      <!--标题-->
      <p class="title">假日数据查询</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.specialHoliday {
  position: relative;
  z-index: 999;
  width: 100%;
  height: 100%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  .ss {
    background: rgba(255, 255, 255, 0.05);
    margin-bottom: 1%;
    padding: 1%;
    flex: 1;
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
    flex: 5;
    .title {
      font-size: 22px;
      color: #bbd5ff;
    }
  }
}
</style>

