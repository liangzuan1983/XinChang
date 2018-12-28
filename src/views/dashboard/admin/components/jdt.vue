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
      default: 'jdts'
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
      type: Object,
      required: false
    }
  },
  data() {
    return {
      chart: null,
      sidebarElm: null,
      data: [12, 22, 32]
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
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          bottom: '15%',
          left: '2%',
          itemGap: 25,
          orient: 'horizontal',
          align: 'center',
          data: [
            {
              name: '正面 ' + this.data[0] + '%',
              icon: 'path://m',
              textStyle: { color: '#ffffff' }
            },
            {
              name: '中立 ' + this.data[1] + '%',
              icon: 'path://m',
              textStyle: { color: '#ffffff' }
            },
            {
              name: '负面 ' + this.data[2] + '%',
              icon: 'path://m',
              textStyle: { color: '#ffffff' }
            }
          ],
          textStyle: {
            color: '#57617B'
          }
        },
        grid: {
          top: '30%',
          left: '0%',
          right: '5%',
          bottom: '20%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          data: [''],
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [
          {
            name: '正面 ' + this.data[0]  + '%',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'insideRight'
              }
            },
            data: [this.data[0]],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    { offset: 0, color: '#1183df' },
                    { offset: 1, color: '#bf94ed' }
                  ]
                )
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    { offset: 0, color: '#1183df' },
                    { offset: 1, color: '#bf94ed' }
                  ]
                )
              }
            }
          },
          {
            name: '中立 ' + this.data[1]  + '%',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'insideRight'
              }
            },
            data: [this.data[1]],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    { offset: 0, color: '#1183df' },
                    { offset: 1, color: '#bf94ed' }
                  ]
                )
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    { offset: 0, color: '#1183df' },
                    { offset: 1, color: '#bf94ed' }
                  ]
                )
              }
            }
          },
          {
            name: '负面 ' + this.data[2] + '%',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'insideRight'
              }
            },
            data: [this.data[2]],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    { offset: 0, color: '#1183df' },
                    { offset: 1, color: '#bf94ed' }
                  ]
                )
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                  [
                    { offset: 0, color: '#1183df' },
                    { offset: 1, color: '#bf94ed' }
                  ]
                )
              }
            }
          }
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
