<template>
  <div class="forecast">
    <!--切换-->
    <div class="qh-box">
      <div class="tab-box">
        <p :class="{ss: ssback}" class="left" @click="ssEvent">大佛寺景区</p>
        <p :class="{sj: sjback}" class="right" @click="sjEvent">十九峰景区</p>
        <p :class="{ts: tsback}" class="right" @click="tsEvent">特殊假日</p>
      </div>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ssback: false,
      sjback: false,
      tsback: false
    }
  },
  mounted() {
    const path = this.$route.path
    if (path === '/forecast/index/dfs') {
      this.ssback = true
      this.sjback = false
      this.tsback = false
    } else if (path === '/forecast/index/sjf') {
      this.ssback = false
      this.sjback = true
      this.tsback = false
    } else if (path === '/forecast/index/specialHoliday') {
      this.ssback = false
      this.sjback = false
      this.tsback = true
    }
  },
  methods: {
    ssEvent() {
      this.$router.push({
        path: '/forecast/index/dfs'
      })
    },
    sjEvent() {
      this.$router.push({
        path: '/forecast/index/sjf'
      })
    },
    tsEvent() {
      this.$router.push({
        path: '/forecast/index/specialHoliday'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .forecast {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 999;
    overflow: hidden;
    // padding: 1%;
    margin: 1.5%;
    overflow-y: overlay;
    .qh-box {
      .tab-box {
        background: #3f4755;
        display: flex;
        justify-content: flex-start;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        padding: .5% .5% 0 .5%;
        width: 27%;
        .ss {
          background: #666d77;
        }
        .sj {
          background: #666d77;
        }
        .ts {
          background: #666d77;
        }
        .left {
          color: #bbd5ff;
          font-size: 24px;
          padding: 2%;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 1%;
          cursor: pointer;
        }
        .right {
          color: #bbd5ff;
          font-size: 24px;
          padding: 2%;
          border-top-left-radius: 20px;
          border-top-right-radius: 20px;
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }
    }
    .content {
      flex: 1;
      background: rgba(255, 255, 255, 0.05);
      // padding: 1%;
    }
  }
</style>

