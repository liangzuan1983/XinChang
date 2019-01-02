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
      default: 'nlfb'
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
      sidebarElm: null
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
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['#47a1e6', '#0982de', '#dcdcdc', '#c2e0f7', '#84c1ef'], // 游客年龄分布
        // color: ['#47a1e6', '#0982de', '#dcdcdc', '#c2e0f7', '#84c1ef'], // 游客消费能力占比
        // color: ['#47a1e6', '#0982de', '#dcdcdc', '#c2e0f7', '#84c1ef'], // 游客线上偏好
        // color: ['#47a1e6', '#0982de', '#dcdcdc', '#c2e0f7', '#84c1ef'], // 游客过夜占比
        // color: ['#47a1e6', '#0982de', '#dcdcdc', '#c2e0f7', '#84c1ef'], // 行业消费占比
        // color: ['#47a1e6', '#0982de', '#dcdcdc', '#c2e0f7', '#84c1ef'], // 游客消费占比
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['oppo', 'vivo', '华为', '小米', '苹果'],
          textStyle: {
            color: '#889db5'
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: 'oppo' },
              { value: 310, name: 'vivo' },
              { value: 234, name: '华为' },
              { value: 135, name: '小米' },
              { value: 1548, name: '苹果' }
            ]
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
