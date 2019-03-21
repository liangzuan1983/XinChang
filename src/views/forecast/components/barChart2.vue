<!--Y轴排行的柱状图-->
<template>
  <div>
    <div :id="id" class="chartBox"/>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'BarChart2',
  props: {
    id: {
      type: String,
      default: 'barChart2'
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
          show: false,
          trigger: 'axis',
          textStyle: { color: '#fff', fontSize: 16 }
        },
        legend: { show: false },
        grid: { x: 'center', y: 'center', width: '70%', height: '70%' },
        xAxis: {
          type: 'value',
          axisLabel: { show: false },
          axisLine: { show: false },
          splitLine: { show: false }
        },
        yAxis: {
          type: 'category',
          axisLabel: {
            textStyle: { color: '#fff' }
          },
          splitLine: { show: false },
          axisLine: { show: false },
          data: data.yAxisData || []
        },
        series: [
          {
            type: 'bar',
            data: data.seriesData || [],
            barWidth: '50%',
            label: {
              normal: {
                show: true,
                position: 'right',
                color: '#fff'
              }
            },
            itemStyle: {
              normal: {
                color: function(param) {
                  const colors = [
                    '#f69704',
                    '#f79007',
                    '#f88909',
                    '#f8820c',
                    '#f97b0e',
                    '#fa7311',
                    '#fb6c13',
                    '#fb6516',
                    '#fc5e18',
                    '#fd571b'
                  ]
                  return colors[param.dataIndex]
                },
                barBorderRadius: 20
              }
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
