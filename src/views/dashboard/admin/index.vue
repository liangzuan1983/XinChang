<template>
  <div class="dashboard-editor-container flex-between-top">
    <!--左-->
    <div class="left lmr">
      <!--左上-->
      <div class="left-top shadowBack">
        <!--标题-->
        <p class="title">天气情况</p>
      </div>
      <!--左中-->
      <div class="left-middle shadowBack">左中</div>
      <!--左下-->
      <div class="left-bottom shadowBack">左下</div>
    </div>
    <!--中-->
    <div class="middle lmr">
      <!--中上-->
      <div class="middle-top shadowBack">中上</div>
      <!--中下-->
      <div class="middle-bottom flex-between">
        <!--中下左-->
        <div class="middle-bottom-left shadowBack1">中下左</div>
        <!--中下右-->
        <div class="middle-bottom-right shadowBack2">中下右</div>
      </div>
    </div>
    <!--右-->
    <div class="right lmr">
      <!--右1-->
      <div class="right-one shadowBack">右1</div>
      <!--右2-->
      <div class="right-two shadowBack">右2</div>
      <!--右3-->
      <div class="right-three shadowBack">右3</div>
      <!--右4-->
      <div class="right-four shadowBack">右4</div>
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
  background-color: #0d1733;
  box-shadow: inset 0px 8px 8px #084e8a;
  .title {
    font-family: 'bigName';
    font-size: 16px;
    color: #12ddf9;
  }
  .left {
    width: 25%;
    margin-left: 0px;
    .left-top {
      width: 100%;
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
