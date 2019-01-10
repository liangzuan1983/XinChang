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
  watch: {
    chartData(val) {
      if(val && val.length > 0) {
        this.initChart()
      }
    }
  },
  data() {
    return {
      chart: null,
      newArray: []
    }
  },
  mounted() {
    // this.initChart()
    // this.__resizeHandler = debounce(() => {
    //   if (this.chart) {
    //     this.chart.resize()
    //   }
    // }, 100)
    // window.addEventListener('resize', this.__resizeHandler)
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
      console.log(this.chartData, '2222')
      const data = this.chartData
      this.newArray = data.map(element => {
        return {
          name: element.subject,
          value: element.value
        }
      })
      this.chart.setOption({
        visualMap: {
          show: false,
          min: 1,
          max: 1500,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: '销售渠道',
            type: 'pie',
            radius: '70%',
            center: ['50%', '50%'],
            data: this.newArray,
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
