<template>
  <div>
    <moduleTitle>{{ title }}</moduleTitle>
    <barChart2 :id="`${name}BarChart2`" :options="data" class="chartBox"/>
  </div>
</template>

<script>
import moduleTitle from './moduleTitle'
import barChart2 from './barChart2'
export default {
  name: 'RankData',
  components: { moduleTitle, barChart2 },
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
