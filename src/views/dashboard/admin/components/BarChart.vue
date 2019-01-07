<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'

const animationDuration = 6000

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
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
      subject: [],
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
        this.subject.push(element.subject)
        this.value.push(element.value)
      });
      this.chart.setOption({
        color: ['#29b32e'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: '10%',
          left: '1%',
          right: '1%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: this.subject,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            textStyle: {
              color: '#889db5'
            }
          },
          splitLine: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          }
        }],
        yAxis: [{
          type: 'value',
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
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.1)']
            }
          },
          splitLine: {
            show: false
          }
        }],
        series: [{
          type: 'bar',
          stack: 'vistors',
          barWidth: '60%',
          data: this.value,
          animationDuration
        }]
      })
    }
  }
}
</script>
