<template>
  <div>
    <div :id="id" class="chartBox"/>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'FlowChart',
  props: {
    id: {
      type: String,
      default: 'flowChart'
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
        color: data.color || [],
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' },
          textStyle: { color: '#fff', fontSize: 16 }
        },
        legend: {
          show: true,
          data: ['客流量', '同比客流量'],
          textStyle: { color: '#fff', fontSize: 16 }
        },
        grid: { x: 'center', y: 'center', width: '80%', height: '70%' },
        xAxis: [
          {
            type: 'category',
            data: data.xAxisData || [],
            axisLabel: {
              textStyle: {
                color: '#fff'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#fff'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#fff'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#fff'
              }
            }
          }
        ],
        series: [
          {
            name: '客流量',
            type: 'bar',
            data: data.series1Data || []
          },
          {
            name: '同比客流量',
            type: 'bar',
            data: data.series2Data || []
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
