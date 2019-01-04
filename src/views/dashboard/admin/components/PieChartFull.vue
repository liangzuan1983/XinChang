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
      default: 'pie'
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
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      chart: null,
      dataArray: []
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
      // console.log(this.chartData, '11')
      const data = this.chartData
      function sortValue(a, b) {
        return b.value - a.value
      }
      data.sort(sortValue)
      data.forEach(element => {
        const obj = {}
        obj.name = element.subject
        obj.value = element.value
        this.dataArray.push(obj)
      })
      // console.log(data, 'qian')
      const newData = this.dataArray.slice(0, 5)
      // console.log(newData, 'hou')
      this.chart.setOption({
        visualMap: {
          show: false,
          min: 0,
          max: 0.5,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '90%',
            center: ['50%', '53%'],
            data: newData.sort(function(a, b) { return a.value - b.value }),
            roseType: 'radius',
            label: {
              normal: {
                textStyle: {
                  // color: 'rgba(255, 255, 255, 0.3)'
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  // color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 1,
                length2: 3,
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: '#e090ca',
                shadowBlur: 15
              }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function(idx) {
              return Math.random() * 200
            }
          }
        ]
      })
    }
  }
}
</script>
