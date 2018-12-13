<template>
  <div class="navbar flex-between">
    <div class="nav-left flex-start">
      <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
      <div class="flex-start navbar-left-box">
        <img src="@/assets/weather/48.png" alt="">
        <span class="span1">13-21℃</span>
        <span>空气指数: 优</span>
      </div>
    </div>
    <!--中间标题-->
    <div class="navBar-center-text">新昌县旅游大数据中心</div>
    <div class="right-menu flex-start">
      <template v-if="device!=='mobile'">
        <error-log class="errLog-container right-menu-item"/>
        <!--日期 星期-->
        <p class="navBar-right-date">
          <span>2018年8月20日</span>
          <span>星期三</span>
        </p>
        <el-tooltip :content="$t('navbar.screenfull')" effect="dark" placement="bottom">
          <screenfull class="screenfull right-menu-item"/>
        </el-tooltip>
      </template>

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
import Screenfull from '@/components/Screenfull'

export default {
  components: {
    Hamburger,
    ErrorLog,
    Screenfull
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
  background: #242939;
  .navbar-left-box {
    img {
      width: 25px;
      height: 25px;
      margin: 10px;
    }
    span {
      color: #ffffff;
      font-size: 14px;
    }
    .span1 {
      margin-right: 20px;
    }
  }
  .navBar-center-text {
    color: #1addef;
    font-size: 35px;
    font-family: 'bigName'
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
    .navBar-right-date {
      color: #ffffff;
      font-size: 14px;
      margin-right: 20px;
    }
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
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
