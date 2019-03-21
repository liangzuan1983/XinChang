<template>
  <div>
    <moduleTitle>车流数据</moduleTitle>
    <carChart :id="`${name}CarChart`" :options="data" class="chartBox" />
  </div>
</template>

<script>
import moduleTitle from './moduleTitle'
import carChart from './carChart'
export default {
  name: 'CarData',
  components: { moduleTitle, carChart },
  props: {
    name: { type: String, default: '' },
    data: { type: Object, default: () => {} }
  }
}
</script>

<style scoped>
.chartBox {
  width: 100%;
  height: 400px;
  margin-top: 10px;
}
</style>
