<template>
  <div class="navbar flex-between">
    <div class="nav-left flex-start">
      <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
      <div class="time-box">
        <!--年月日-->
        <span>2018年12月29日</span>
        <!--周几-->
        <span>星期六</span>
        <!--时间-->
        <span>14:30</span>
      </div>
    </div>
    <!--中间标题-->
    <div :style="navCenterBack" class="navBar-center-text">新昌县旅游大数据中心</div>
    <div class="right-menu flex-start">
      <template v-if="device!=='mobile'">
        <error-log class="errLog-container right-menu-item"/>
      </template>
      <!--右边信息-->
      <div class="right-weather-box">
        <!--图标和文字盒子-->
        <div class="icon-box">
          <!--天气-->
          <img src="@/assets/weather/45.png" alt="">
          <!--是否晴天-->
          <span>晴</span>
        </div>
        <!--温度-->
        <span>3-6℃</span>
        <span>空气质量: 优</span>
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

export default {
  components: {
    Hamburger,
    ErrorLog
  },
  data() {
    return {
      navCenterBack: {
        backgroundImage: 'url(' + require('@/assets/title.png') + ')'
      }
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'device'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
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
    width: 25%;
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
        width: 19%;
        display: flex;
        justify-content: space-between;
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
