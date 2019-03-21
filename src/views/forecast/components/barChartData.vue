<template>
  <div>
    <moduleTitle>{{ title }}</moduleTitle>
    <barChart1 :id="`${name}BarChart1`" :options="data" class="chartBox"/>
  </div>
</template>

<script>
import moduleTitle from './moduleTitle'
import barChart1 from './barChart1'
export default {
  name: 'BarChartData',
  components: { moduleTitle, barChart1 },
  props: {
    title: { type: String, default: '' },
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
