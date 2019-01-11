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
      default: 'holidayzhu'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    autoResize: {
      type: Boolean,
      default: false
    },
    chartData: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      chart: null,
      sidebarElm: null,
      time: [],
      value: []
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.initChart()
    if (this.autoResize) {
      this.__resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize()
        }
      }, 100)
      window.addEventListener('resize', this.__resizeHandler)
    }

    // 监听侧边栏的变化
    this.sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    this.sidebarElm && this.sidebarElm.addEventListener('transitionend', this.sidebarResizeHandler)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.__resizeHandler)
    }

    this.sidebarElm && this.sidebarElm.removeEventListener('transitionend', this.sidebarResizeHandler)

    this.chart.dispose()
    this.chart = null
  },
  methods: {
    sidebarResizeHandler(e) {
      if (e.propertyName === 'width') {
        this.__resizeHandler()
      }
    },
    setOptions({ expectedData, actualData } = {}) {
      const data = this.chartData
      this.time = data.map(element => element.subject)
      this.value = data.map(element => element.value)
      // console.log(this.time, '111')
      // console.log(this.value, '222')
      this.chart.setOption({
        legend: {
          data: ['售票量'],
          textStyle: {
            color: '#59697d'
          }
        },
        tooltip: {
          trigger: 'axis'
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: this.time,
            axisLabel: {
              textStyle: {
                color: '#889db5'
              }
            }
          }
        ],
        grid: {
          top: '18%',
          left: '3%',
          right: '5%',
          bottom: '5%',
          containLabel: true
        },
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#889db5'
              }
            }
          }
        ],
        series: [
          {
            name: '售票量',
            type: 'bar',
            data: this.value,
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          }
          // {
          //   name: '同比客流量',
          //   type: 'bar',
          //   data: [2.6, 5.9, 9.0, 26.4, 48.7, 18.8, 6.0],
          //   markPoint: {
          //     data: [
          //       { name: '年最高', value: 182.2, xAxis: 7, yAxis: 183 },
          //       { name: '年最低', value: 2.3, xAxis: 11, yAxis: 3 }
          //     ]
          //   }
          // }
        ]
      })
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    }
  }
}
</script>
