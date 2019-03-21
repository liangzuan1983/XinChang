<template>
  <div>
    <moduleTitle>客流数据</moduleTitle>
    <flowChart
      :id="`${name}FlowChart`"
      :options="data"
      class="chartBox"
    />
  </div>
</template>

<script>
import moduleTitle from './moduleTitle'
import flowChart from './flowChart'

export default {
  name: 'FlowData',
  components: { moduleTitle, flowChart },
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
