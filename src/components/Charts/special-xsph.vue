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
        // color: ['#47a1e6', '#0982de', '#dcdcdc', '#c2e0f7', '#84c1ef'], // 游客年龄分布
        // color: ['#47a1e6', '#0982de', '#dcdcdc', '#c2e0f7', '#84c1ef'], // 游客消费能力占比
        color: ['#f69704', '#00ffff', '#47b2d3', '#0982de', '#ffe000'], // 游客线上偏好
        // color: ['#47a1e6', '#0982de', '#dcdcdc', '#c2e0f7', '#84c1ef'], // 游客过夜占比
        // color: ['#47a1e6', '#0982de', '#dcdcdc', '#c2e0f7', '#84c1ef'], // 行业消费占比
        // color: ['#47a1e6', '#0982de', '#dcdcdc', '#c2e0f7', '#84c1ef'], // 游客消费占比
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['购物', '理财', '旅游', '金融', '视频'],
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
              { value: 335, name: '购物' },
              { value: 310, name: '理财' },
              { value: 234, name: '旅游' },
              { value: 135, name: '金融财经' },
              { value: 1548, name: '视频' }
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
