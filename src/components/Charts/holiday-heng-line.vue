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
      default: 'hline'
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
      // redArr: ['#fd571b', '#fc5e18', '#fb6516', '#f8820c', '#fa7311', '#f97b0e', '#f8820c', '#f88909', '#f79007', '#f69704']
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
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        textStyle: {
          color: '#889db5'
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          show: false
        },
        yAxis: {
          type: 'category',
          data: ['大佛寺-十九峰', '十九峰-大佛寺', '十九峰-丝绸世界', '大佛寺-丝绸世界', '天烛仙境-丝绸世界', '大佛寺-中国茶城', '大佛寺-天烛仙境', '十九峰-天烛仙境', '丝绸世界-大佛寺', '中国茶室-十九峰']
        },
        series: [
          {
            name: '2011年',
            type: 'bar',
            data: [342, 672, 1232, 2342, 3212, 4222, 4322, 6242, 6862, 7252],
            itemStyle: {
              normal: {
                color: function(params) {
                  var colorList = ['#fd571b', '#fc5e18', '#fb6516', '#fb6c13', '#fa7311', '#f97b0e', '#f8820c', '#f88909', '#f79007', '#f69704']
                  return colorList[params.dataIndex]
                }
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
