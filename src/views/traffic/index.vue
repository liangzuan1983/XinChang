<template>
  <div class="traffic">
    <!--切换-->
    <div class="qh-box">
      <div class="tab-box">
        <p :class="{ss: ssback}" class="left" @click="ssEvent">实时交通路况</p>
        <p :class="{sj: sjback}" class="right" @click="sjEvent">交通数据查询</p>
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
      sjback: false
    }
  },
  mounted() {
    const path = this.$route.path
    if (path === '/traffic/index/ss') {
      this.ssback = true
      this.sjback = false
    } else if (path === '/traffic/index/sj') {
      this.ssback = false
      this.sjback = true
    }
  },
  methods: {
    ssEvent() {
      this.$router.push({
        path: '/traffic/index/ss'
      })
    },
    sjEvent() {
      this.$router.push({
        path: '/traffic/index/sj'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .traffic {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // position: relative;
    // z-index: 999;
    padding: 1%;
    .qh-box {
      .tab-box {
        background: #3f4755;
        display: flex;
        justify-content: flex-start;
        border-top-left-radius: 25px;
        border-top-right-radius: 25px;
        padding: .5% .5% 0 .5%;
        width: 25%;
        .ss {
          background: #666d77;
        }
        .sj {
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

