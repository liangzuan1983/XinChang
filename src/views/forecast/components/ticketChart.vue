<template>
  <div>
    <div :id="id" class="chartBox"/>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'TicketChart',
  props: {
    id: {
      type: String,
      default: 'ticketChart'
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
        color: data.color || ['#47b2d3', '#0982de', '#f79703'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { type: 'shadow' },
          textStyle: { color: '#fff', fontSize: 16 }
        },
        legend: {
          show: true,
          data: ['售票量', '团队票数量', '同比售票量'],
          textStyle: { color: '#fff', fontSize: 16 }
        },
        grid: { x: 'center', y: 'center', width: '80%', height: '70%' },
        xAxis: {
          type: 'category',
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
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [
          {
            name: '售票量',
            type: 'bar',
            data: data.series1Data || [],
            stack: '总量',
            barCategoryGap: '50%',
            label: {
              normal: {
                show: false,
                position: 'insideRight'
              }
            }
          },
          {
            name: '团队票数量',
            type: 'bar',
            stack: '总量',
            barCategoryGap: '50%',
            label: {
              normal: {
                show: false,
                position: 'insideRight'
              }
            },
            data: data.series2Data || []
          },
          {
            name: '同比售票量',
            data: data.series3Data || [],
            type: 'line',
            symbol: 'none', // 去掉折线图中的节点
            // itemStyle: {
            //   normal: {
            //     lineStyle: {
            //       width: 3
            //     }
            //   }
            // },
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
