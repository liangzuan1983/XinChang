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
      type: Array,
      required: false
    }
  },
  data() {
    return {
      chart: null,
      sidebarElm: null,
      name: [],
      nameAndValue: []
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
      data.forEach(element => {
        const obj = {}
        this.name.push(element.subject)
        obj.value = element.value
        obj.name = element.subject
        this.nameAndValue.push(obj)
        // console.log(this.name, 'name')
        // console.log(this.nameAndValue, 'and')
      })
      this.chart.setOption({
        radar: {
          radius: '60%',
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              color: '#fff',
              opacity: .2
            }
          },
          splitLine: {
            lineStyle: {
              color: '#fff',
              opacity: .2
            }
          },
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15,
            }
          },
          indicator: [{
            name: '聊天社交',
            max: 6000
          }, {
            name: '影音',
            max: 16000
          }, {
            name: '购物',
            max: 30000
          }, {
            name: '生活实用',
            max: 35000
          }, {
            name: '新闻阅读',
            max: 50000
          }]
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 1
            }
          },
          data: [{
            value: [5000, 7000, 12000, 11000, 15000, 14000],
            name: '预算分配（Allocated Budget）',
          }]
        }],
        color: ['#f69704']
      })
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    }
  }
}
</script>
