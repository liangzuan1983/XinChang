<template>
  <div>
    <moduleTitle>票务数据</moduleTitle>
    <ticketChart :id="`${name}TicketChart`" :options="data" class="chartBox" />
  </div>
</template>

<script>
import moduleTitle from './moduleTitle'
import ticketChart from './ticketChart'
export default {
  name: 'TicketData',
  components: { moduleTitle, ticketChart },
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
