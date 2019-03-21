<!--显示最大值和最小值的柱状图-->
<template>
  <div>
    <div :id="id" class="chartBox"/>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'BarChart1',
  props: {
    id: {
      type: String,
      default: 'barChart1'
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    options: {
      handler: function(val, oldval) {
        this.setOptions()
      },
      deep: true
    }
  },
  mounted() {
    const self = this
    self.initChart()
  },
  methods: {
    setOptions() {
      const self = this
      const data = self.options || {}
      self.chart.setOption({
        color: data.color || ['#f79703'],
        tooltip: {
          trigger: 'axis',
          textStyle: { color: '#fff', fontSize: 16 }
        },
        legend: {
          show: true,
          data: data.legendData || [],
          textStyle: { color: '#fff', fontSize: 16 }
        },
        grid: { x: 'center', y: 'center', width: '80%', height: '70%' },
        xAxis: {
          type: 'category',
          axisLabel: {
            textStyle: { color: '#fff' }
          },
          axisLine: {
            show: true,
            lineStyle: { color: '#fff' }
          },
          data: data.xAxisData || []
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: { color: '#fff' }
          },
          splitLine: { show: true },
          axisLine: {
            show: true,
            lineStyle: { color: '#fff' }
          }
        },
        series: [
          {
            name: data.seriesName || '',
            type: 'bar',
            barCategoryGap: '40%',
            data: data.seriesData || [],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          }
        ]
      })
    },
    initChart() {
      const self = this
      self.chart = new echarts.init(document.getElementById(self.id))
      window.addEventListener('resize', () => {
        self.chart.resize()
      })
      self.setOptions()
    }
  }
}
</script>

<style scoped>
.chartBox {
  width: 100%;
  height: 100%;
}
</style>
