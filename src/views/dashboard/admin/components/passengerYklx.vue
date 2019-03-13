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
      default: 'yklx'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    fatherData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  watch: {
    fatherData(val) {
      this.initChart()
    }
  },
  data() {
    return {
      chart: null,
      newData: []
    }
  },
  mounted() {
    this.initChart()
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
      let data = this.fatherData;
      this.newData = data.map(element => {
        return {
          name: element.subject,
          value: element.value
        }
      })
      this.chart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            name: '客源地top5',
            type: 'pie',
            radius: '70%',
            center: ['50%', '60%'],
            data: this.newData.slice(0, 5),
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    }
  }
}
</script>
