<template>
  <div class="navbar flex-between">
    <div class="nav-left flex-start">
      <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
      <div class="time-box">
        <!--年月日-->
        <!-- <span>2018年12月29日</span> -->
        <span>{{ dateNow }}</span>
        <!--周几-->
        <span>{{ week }}</span>
        <!--时间-->
        <span>{{ time }}</span>
      </div>
    </div>
    <!--中间标题-->
    <div :style="navCenterBack" class="navBar-center-text">新昌县旅游大数据中心</div>
    <div class="right-menu flex-start">
      <!-- <template v-if="device!=='mobile'">
        <error-log class="errLog-container right-menu-item"/>
      </template> -->
      <!--右边信息-->
      <div class="right-weather-box">
        <!--图标和文字盒子-->
        <div class="icon-box">
          <!--天气-->
          <img v-if="weatherData.type === '晴'" src="@/assets/weather/45.png" alt="">
          <img v-if="weatherData.type === '多云'" src="@/assets/weather/48.png" alt="">
          <img v-if="weatherData.type === '阴'" src="@/assets/weather/46.png" alt="">
          <img v-if="weatherData.type === '小雨'" src="@/assets/weather/47.png" alt="">
          <img v-if="weatherData.type === '中雨'" src="@/assets/weather/49.png" alt="">
          <img v-if="weatherData.type === '大雨'" src="@/assets/weather/51.png" alt="">
          <img v-if="weatherData.type === '小雪'" src="@/assets/weather/xx.png" alt="">
          <img v-if="weatherData.type === '中雪'" src="@/assets/weather/zx.png" alt="">
          <img v-if="weatherData.type === '大雪'" src="@/assets/weather/dx.png" alt="">
          <!--是否晴天-->
          <span v-if="weatherData.type">{{ weatherData.type }}</span>
          <span v-else>晴</span>
        </div>
        <!--温度-->
        <span v-if="weatherData.low&&weatherData.high">{{ weatherData.low }} - {{ weatherData.high }}</span>
        <span v-else>3℃-6℃</span>
        <span v-if="weatherData.fengli">风力： {{ weatherData.fengli }}</span>
        <span v-else>风力：3级</span>
      </div>
      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <svg-icon icon-class="user" class="user-avatar" />
          <i class="el-icon-caret-bottom"/>
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              {{ $t('navbar.dashboard') }}
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">{{ $t('navbar.logOut') }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import { weather, gender } from '@/api/home'

export default {
  components: {
    Hamburger,
    ErrorLog
  },
  data() {
    return {
      navCenterBack: {
        backgroundImage: 'url(' + require('@/assets/title.png') + ')'
      },
      weatherData: {},
      data: new Date()
    }
  },
  mounted() {
    this.request()
    this.timers()
  },
  beforeDestroy() {
    if(this.time) {
      clearInterVal(this.timer);
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'device'
    ]),
    dateNow() {
      const date = new Date()
      const seperator1 = '-'
      let year = date.getFullYear()
      let month = date.getMonth() + 1
      let strDate = date.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      const currentdate = year + seperator1 + month + seperator1 + strDate
      return currentdate
    },
    week() {
      let weeks = new Date()
      if (weeks.getDay() === 1) {
        return '星期一'
      } else if (weeks.getDay() === 2) {
        return '星期二'
      } else if (weeks.getDay() === 3) {
        return '星期三'
      } else if (weeks.getDay() === 4) {
        return '星期四'
      } else if (weeks.getDay() === 5) {
        return '星期五'
      } else if (weeks.getDay() === 6) {
        return '星期六'
      } else {
        return '星期日'
      }
      return weeks
    },
    time() {
      const time = this.data
      const mimi = '：'
      let hours = time.getHours()
      let minutes = time.getMinutes()
      let second = time.getSeconds()
      if (hours >= 1 && hours <= 9) {
        hours = '0' + hours
      }
      if (minutes >= 0 && minutes <= 9) {
        minutes = '0' + minutes
      }
      if (second >= 0 && second <= 9) {
        second = '0' + second
      }
      const currenttime = hours + mimi + minutes + mimi + second
      return currenttime
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    },
    // 单个数据
    request() {
      // 天气
      weather().then(res => {
        const data = res.data.data
        // console.log(data, '天气')
        this.weatherData = data
      }).catch(err => {console.log(err)})
    },
    // 公用数据 store
    storeData() {
      this.$store.dispatch('getSex')
      this.$store.dispatch('getAge')
      this.$store.dispatch('getConsume')
      this.$store.dispatch('getHobby')
    },
    timers() {
      let _this = this;
      this.timer = setInterval(() => {
        _this.data = new Date();
      }, 1000)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  // background: #242939;
  position: relative;
  z-index: 999;
  .nav-left {
    width: 25%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .time-box {
      width: 86%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        color: #ffffff;
        font-size: 22px;
      }
    }
  }
  .navBar-center-text {
    color: #ffffff;
    font-size: 36px;
    font-family: 'bigName';
    width: 31%;
    background-repeat: no-repeat;
    height: 74px;
    background-size: 100% 100%;
    position: relative;
    top: 0px;
    z-index: 999;
    text-align: center;
    line-height: 85px;
  }
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container{
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .right-weather-box {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icon-box {
        width: 30%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        span {
          color: #ffffff;
          font-size: 22px;
        }
        img {
          width: 37px;
          height: 37px;
        }
      }
      span {
        color: #ffffff;
        font-size: 22px;
      }
    }
    .international{
      vertical-align: top;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        margin-top: 2px;
        position: relative;
        .user-avatar {
          cursor: pointer;
          width: 18px;
          height: 18px;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
