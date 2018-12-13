<template>
  <div class="dashboard-editor-container flex-between-top">
    <!--左-->
    <div class="left lmr">
      <!--左上-->
      <div class="left-top shadowBack">
        <!--标题-->
        <p class="title">天气情况</p>
        <!--一排太阳-->
        <div class="sunBox flex-between">
          <!--每一组/根据天气的值/显示相应的天气icon-->
          <div class="sunBoxOne">
            <img src="@/assets/weather/45.png" class="weather-icon" alt="">
            <img v-if="false" src="@/assets/weather/48.png" class="weather-icon" alt="">
            <img v-if="false" src="@/assets/weather/49.png" class="weather-icon" alt="">
            <img v-if="false" src="@/assets/weather/50.png" class="weather-icon" alt="">
            <img v-if="false" src="@/assets/weather/51.png" class="weather-icon" alt="">
            <p>18-26℃</p>
          </div>
          <!--每一组/根据天气的值/显示相应的天气icon-->
          <div class="sunBoxOne">
            <img v-if="false" src="@/assets/weather/45.png" class="weather-icon" alt="">
            <img src="@/assets/weather/48.png" class="weather-icon" alt="">
            <img v-if="false" src="@/assets/weather/49.png" class="weather-icon" alt="">
            <img v-if="false" src="@/assets/weather/50.png" class="weather-icon" alt="">
            <img v-if="false" src="@/assets/weather/51.png" class="weather-icon" alt="">
            <p>18-26℃</p>
          </div>
          <!--每一组/根据天气的值/显示相应的天气icon-->
          <div class="sunBoxOne">
            <img v-if="false" src="@/assets/weather/45.png" class="weather-icon" alt="">
            <img v-if="false" src="@/assets/weather/48.png" class="weather-icon" alt="">
            <img src="@/assets/weather/49.png" class="weather-icon" alt="">
            <img v-if="false" src="@/assets/weather/50.png" class="weather-icon" alt="">
            <img v-if="false" src="@/assets/weather/51.png" class="weather-icon" alt="">
            <p>18-26℃</p>
          </div>
          <!--每一组/根据天气的值/显示相应的天气icon-->
          <div class="sunBoxOne">
            <img v-if="false" src="@/assets/weather/45.png" class="weather-icon" alt="">
            <img v-if="false" src="@/assets/weather/48.png" class="weather-icon" alt="">
            <img v-if="false" src="@/assets/weather/49.png" class="weather-icon" alt="">
            <img src="@/assets/weather/50.png" class="weather-icon" alt="">
            <img v-if="false" src="@/assets/weather/51.png" class="weather-icon" alt="">
            <p>18-26℃</p>
          </div>
          <!--每一组/根据天气的值/显示相应的天气icon-->
          <div class="sunBoxOne">
            <img v-if="false" src="@/assets/weather/45.png" class="weather-icon" alt="">
            <img v-if="false" src="@/assets/weather/48.png" class="weather-icon" alt="">
            <img v-if="false" src="@/assets/weather/49.png" class="weather-icon" alt="">
            <img v-if="false" src="@/assets/weather/50.png" class="weather-icon" alt="">
            <img src="@/assets/weather/51.png" class="weather-icon" alt="">
            <p>18-26℃</p>
          </div>
        </div>
        <!--负氧离子/风力湿度-->
        <div class="flex-between">
          <!--负氧离子-->
          <div class="flex-start fylzBox">
            <!--负氧离子-->
            <p>
              <span>富氧</span>
              <span>离子</span>
            </p>
            <p>4000</p>
          </div>
          <!--风力湿度-->
          <div>
            <!--湿度-->
            <p>
              <span/>
              <span>湿度: 60%</span>
            </p>
            <!--风力-->
            <p>
              <span/>
              <span>风力: 三级 风向: 西北风</span>
            </p>
            <!--空气质量-->
            <p>
              <span/>
              <span>空气质量: 优</span>
            </p>
          </div>
        </div>
      </div>
      <!--左中-->
      <div class="left-middle shadowBack">
        <!--标题-->
        <p class="title">乡村旅游热度排行top5</p>
      </div>
      <!--左下-->
      <div class="left-bottom shadowBack">
        <!--标题-->
        <p class="title">旅游消费分析</p>
      </div>
    </div>
    <!--中-->
    <div class="middle lmr">
      <!--中上-->
      <div class="middle-top shadowBack">中上</div>
      <!--中下-->
      <div class="middle-bottom flex-between">
        <!--中下左-->
        <div class="middle-bottom-left shadowBack1">
          <!--标题-->
          <p class="title">客源地 城市 区县 TOP5</p>
        </div>
        <!--中下右-->
        <div class="middle-bottom-right shadowBack2">
          <!--标题-->
          <p class="title">近一周游客数</p>
        </div>
      </div>
    </div>
    <!--右-->
    <div class="right lmr">
      <!--右1-->
      <div class="right-one shadowBack">
        <!--标题-->
        <p class="title">产业监测数据</p>
      </div>
      <!--右2-->
      <div class="right-two shadowBack">
        <!--标题-->
        <p class="title">资源分布</p>
      </div>
      <!--右3-->
      <div class="right-three shadowBack">
        <!--标题-->
        <p class="title">热词分布</p>
      </div>
      <!--右4-->
      <div class="right-four shadowBack">
        <!--标题-->
        <p class="title">舆情分析</p>
      </div>
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
    }
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 5px;
  background-color: #0a0f1f;
  // box-shadow: inset 0px 8px 8px #084e8a;
  .title {
    font-size: 27px;
    color: #ffffff;
    margin-bottom: 15px;
  }
  .left {
    width: 25%;
    margin-left: 0px;
    .left-top {
      width: 100%;
      .sunBox {
        margin-bottom: 10px;
        .sunBoxOne {
          text-align: center;
          .weather-icon {
            width: 43px;
            height: 43px;
          }
          p {
            color: #ffffff;
            font-size: 15px;
          }
        }
      }
      .fylzBox > p:nth-child(1) {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        // background: #17d0bc;
        background:  rgba(26, 239, 208, 0.8);
        padding-top: 8px;
        position: relative;
        z-index: 999;
      }
      .fylzBox > p:nth-child(2) {
        width: 77px;
        height: 77px;
        border: 5px solid #c2c2c2;
        background: transparent;
        font-size: 16px;
        color: #c2c2c2;
        text-align: center;
        line-height: 67px;
        border-radius: 50%;
        position: relative;
        right: 20px;
      }
      .fylzBox > p > span {
        display: block;
        font-size: 18px;
        color: #010d0c;
        text-align: center;
        line-height: 25px;
      }
    }
    .left-middle {
      width: 100%;
    }
    .left-bottom {
      width: 100%;
    }
  }
  .middle {
    width: 50%;
    .middle-top {
      width: 100%;
      margin-left: 0px;
    }
    .middle-bottom {
      width: 100%;
      .middle-bottom-left {
        width: 50%;
      }
      .middle-bottom-right {
        width: 50%;
      }
    }
  }
  .right {
    width: 25%;
    margin-left: 0px;
    margin-right: 0px;
    .right-one {
      width: 100%;
      margin-left: 0px;
    }
    .right-two {
      width: 100%;
      margin-left: 0px;
    }
    .right-three {
      width: 100%;
      margin-left: 0px;
    }
    .right-four {
      width: 100%;
      margin-left: 0px;
    }
  }
}
</style>
