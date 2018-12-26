<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
import jsonObj from './xc.js'
// require('echarts/theme/macarons') // echarts theme
import { debounce } from '@/utils'
console.log(jsonObj);
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
          value: [120.897351, 29.507049, 400]
        },
        {
          name: '美女山庄',
          value: [120.928396, 29.511827, 300]
        },
        {
          name: '卧龙三村',
          value: [120.885709, 29.500259, 200]
        },
        {
          name: '金凤山庄',
          value: [120.890883, 29.504786, 100]
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
      return;
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
          map: 'xinchange'
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
      console.log(jsonObj)
      echarts.registerMap('xinchange', jsonObj)
      this.setOptions(this.chartData)
    }
  }
};
</script>
