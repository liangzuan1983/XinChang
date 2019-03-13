<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
import jsonObj from './xc.js'
// require('echarts/theme/macarons') // echarts theme
// import { debounce } from '@/utils'
export default {
  props: {
    className: {
      type: String,
      default: 'dt'
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
  // [{name:'xx' , value:[123 ,123, 3333]}]
  data() {
    return {
      chart: null,
      sidebarElm: null,
      datas: [
        {
          name: '大佛寺',
          value: [120.897351, 29.507049, 200]
        },
        {
          name: '十九峰',
          value: [120.753746, 29.364481, 200]
        },
        {
          name: '达利丝绸',
          value: [120.845081, 29.527248, 200]
        },
        {
          name: '斑竹',
          value: [120.792938, 29.462088, 200]
        },
        {
          name: '外婆坑',
          value: [120.725539, 29.332494, 200]
        },
        {
          name: '董村',
          value: [121.147896, 29.459689, 200]
        },
        {
          name: '下岩贝',
          value: [120.828545, 29.386764, 200]
        },
        {
          name: '安山',
          value: [120.932125, 29.381945, 200]
        },
        {
          name: '天烛仙境',
          value: [120.872938, 29.462088, 200]
        },
        {
          name: '七盘仙谷',
          value: [120.879968, 29.412181, 200]
        }
      ]
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
    // if (this.autoResize) {
    //   this.__resizeHandler = debounce(() => {
    //     if (this.chart) {
    //       this.chart.resize()
    //     }
    //   }, 100)
    //   window.addEventListener('resize', this.__resizeHandler)
    // }

    // 监听侧边栏的变化
    this.sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    this.sidebarElm &&
      this.sidebarElm.addEventListener(
        'transitionend',
        this.sidebarResizeHandler
      )
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    if (this.autoResize) {
      window.removeEventListener('resize', this.__resizeHandler)
    }

    this.sidebarElm &&
      this.sidebarElm.removeEventListener(
        'transitionend',
        this.sidebarResizeHandler
      )

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
      const option = {
        geo: {
          label: {
            emphasis: {
              show: true,
              color: '#fff'
            }
          },
          map: 'xinchange',
          itemStyle: {
            normal: {
              areaColor: 'rgba(0, 0, 0, 0)',
              borderColor: 'rgba(120, 204, 204, 0.8)'
            },
            emphasis: { // 选中或者悬浮状态
              label: {
                show: true,
                textStyle: {
                  color: '#fff'// 选中或者悬浮字体颜色
                }
              },
              areaColor: '#18364b'// 选中或者悬浮区域颜色
            }
          }
        },
        series: [
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: this.datas.sort(function(a, b) {
              return b.value - a.value
            }).slice(0, 11),
            symbolSize: function(val) {
              return val[2] / 10
            },
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#F8AE68', // 圆点颜色
                normal: {
                  shadowBlur: 10,
                  shadowColor: 'rgba(25, 100, 150, 0.5)',
                  shadowOffsetY: 5,
                  color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: 'rgb(129, 227, 238)'
                  }, {
                    offset: 1,
                    color: 'rgb(25, 183, 207)'
                  }])
                }
              }
            },
            zlevel: 1
          }
        ]
      }
      this.chart.setOption(option)
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      console.log(jsonObj)
      echarts.registerMap('xinchange', jsonObj)
      this.setOptions(this.chartData)
    }
  }
}
</script>
