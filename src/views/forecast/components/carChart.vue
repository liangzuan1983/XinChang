<template>
  <div>
    <div :id="id" class="chartBox"/>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'CarChart',
  props: {
    id: {
      type: String,
      default: 'carChart'
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
        color: (data.color && data.color[2]) || ['#f79703'],
        tooltip: {
          trigger: 'axis',
          textStyle: { color: '#fff', fontSize: 16 }
        },
        legend: {
          show: true,
          data: ['车流量', '同比车流量'],
          textStyle: { color: '#fff', fontSize: 16 }
        },
        grid: { x: 'center', y: 'center', width: '80%', height: '70%' },
        xAxis: {
          type: 'category',
          boundaryGap: false,
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
          },
          data: data.xAxisData || []
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            textStyle: {
              color: '#fff'
            }
          },
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [
          {
            name: '车流量',
            data: data.series1Data || [],
            type: 'line',
            symbol: 'none', // 去掉折线图中的节点
            smooth: true, // true 为平滑曲线，false为直线
            areaStyle: {},
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: (data.color && data.color[0]) || '#47b2d3'
                  }, // 定义颜色
                  {
                    offset: 1,
                    color: (data.color && data.color[1]) || '#283240'
                  }
                ])
              }
            }
          },
          {
            name: '同比车流量',
            data: data.series2Data,
            type: 'line',
            symbol: 'none', // 去掉折线图中的节点
            smooth: true // true 为平滑曲线，false为直线
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
