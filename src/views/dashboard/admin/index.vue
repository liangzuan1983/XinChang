<template>
  <div class="dashboard-editor-container">
    <!--左-->
    <div class="left"></div>
    <!--中-->
    <div class="middle"></div>
    <!--右-->
    <div class="right"></div>
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
  background-color: green;
  display: flex;
  justify-content: space-between;
  .left {
    flex: 1;
    background: yellow;
  }
  .middle {
    flex: 2;
    background: darkorchid;
  }
  .right {
    flex: 1;
    background: hotpink;
  }
}
</style>
