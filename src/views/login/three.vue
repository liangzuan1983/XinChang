<template>
  <div class="three">
    <div class="three-box">
      <div class="one" @click="other('http://gk.zjxcdfs.com/Login')">
        <img src="@/assets/icon/icon-shujuyq.png" alt="">
        <p class="name">大佛寺数据中心</p>
      </div>
      <div class="one" @click="home">
        <img src="@/assets/icon/icon-timeyq.png" alt="">
        <p class="name">新昌大数据中心</p>
      </div>
      <div class="one" @click="other('http://data.zjxcsjf.com/home')">
        <img src="@/assets/icon/icon-zhexianyq.png" alt="">
        <p class="name">十九峰数据中心</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    home() {
      this.$router.push({
        path: 'dashboard'
      })
    },
    other(url) {
      window.location.href = url
    }
  }
}
</script>

<style lang="scss" scoped>
  .three {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 999;
    .three-box {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      .one {
        margin: 0 40px;
        text-align: center;
        img {
          width: 100px;
          height: 100px;
          margin-bottom: 20px;
        }
        .name {
          font-size: 24px;
          color: #bbd5ff;
        }
      }
    }
  }
</style>

