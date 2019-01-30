<template>
  <div class="weatherEnvironment">
    <!-- <div @click="fuck">产业监测</div> -->
    <iframe src="http://61.174.54.82:18007/three"
      class="iframe"
      frameborder="0" 
      scrolling="auto"/>
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
    width: 100%;
    height: 100%;
    // display: flex;
    .iframe {
      // flex: 1;
      width: 100%;
      height: 100%;
    }
  }
</style>

