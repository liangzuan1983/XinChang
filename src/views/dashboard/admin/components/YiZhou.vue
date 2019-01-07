<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'

export default {
  props: {
    className: {
      type: String,
      default: 'yizhou'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    chartData: {
      default: () => {
        return []
      },
      type: Array
    }
  },
  data() {
    return {
      chart: null,
      time: [],
      value: []
    }
  },
  mounted() {
    this.initChart()
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHandler)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      const data = this.chartData
      data.forEach(element => {
        this.time.push(element.subject)
        this.value.push(element.value)
      })
      // console.log(this.time, '时间')
      // console.log(this.value, '值')
      this.chart.setOption({
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.time,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#889db5'
            }
          }
        },
        tooltip : {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#889db5'
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.1)']
            }
          }
        },
        grid: {
          top: '10%',
          left: '0%',
          right: '7%',
          bottom: '0%',
          containLabel: true
        },
        series: [{
          data: this.value,
          type: 'line',
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(61, 178, 222, 1)'
              }, {
                offset: 1,
                color: 'rgba(61, 178, 222, 1)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: '#47b2d3',
              borderColor: 'rgba(0, 0, 0, 0)',
              borderWidth: 12
            }
          }
        }]
      })
    }
  }
}
</script>
