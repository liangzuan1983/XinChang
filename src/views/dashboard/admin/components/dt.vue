<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
import jsonObj from './xc.js'
// require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'
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
      type: Object,
      required: false
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
          value: [120.897351, 29.507049, 500]
        },
        {
          name: '十九峰',
          value: [120.813746, 29.384481, 500]
        },
        {
          name: '达利丝绸',
          value: [120.845081, 29.527248, 400]
        },
        {
          name: '斑竹',
          value: [120.540147, 29.738879, 400]
        },
        {
          name: '外婆坑',
          value: [120.725539, 29.332494, 300]
        },
        {
          name: '董村',
          value: [121.147896, 29.459689, 500]
        },
        {
          name: '下岩贝',
          value: [120.828545, 29.386764, 500]
        },
        {
          name: '安山',
          value: [120.932125, 29.381945, 400]
        },
        {
          name: '天烛仙境',
          value: [120.872938, 29.462088, 400]
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
      let option = {
        geo: {
          label: {
            emphasis: {
              show: true,
              color: '#fff' // hover 字颜色
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
        legend: {
          orient: 'vertical',
          y: 'bottom',
          x: 'right',
          data: ['Top5'],
          textStyle: {
            color: '#fff',
            fontSize: 18
          }
        },
        visualMap: {
          min: 0,
          max: 500,
          splitNumber: 5,
          inRange: {
            color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
          },
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: 'AQI',
            type: 'heatmap',
            coordinateSystem: 'geo',
            data: this.datas
          }
        ]
      }
      this.chart.setOption(option)
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      echarts.registerMap('xinchange', jsonObj)
      this.setOptions(this.chartData)
    }
  }
};
</script>
