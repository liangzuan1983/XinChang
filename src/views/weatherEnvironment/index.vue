<template>
  <div class="weatherEnvironment">
    <div @click="fuck">产业监测</div>
  </div>
</template>

<script>
export default {
  methods: {
    fuck() {
      window.location.href = 'http://61.174.54.82:18007/login'
    }
  }
}
</script>

<style lang="scss" scoped>
  .weatherEnvironment {
    position: relative;
    z-index: 999;
    div {
      color: #ffffff;
      font-size: 30px;
      margin: 10px;
    }
  }
</style>

