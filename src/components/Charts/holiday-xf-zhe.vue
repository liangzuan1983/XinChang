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
      default: 'xfzhe'
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
      name: [],
      value: [],
      newData: []
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

      let data = this.chartData;
      //取名字
      let dataArr = this.chartData[0].data
      console.log(data, '组件内')
      //先取名字
      this.name = dataArr.map(element => element.subject);
      //取时间
      this.time = data.map(element => element.date)
      let nameArr = this.name
      console.log(this.name.length,'length')
      //出现新格式
      // nameArr.map((item, i) => {
      //   this.newData = data.map((element, index) => {
      //     return {
      //       name: nameArr.map(item => item)[i],
      //       type: 'line',
      //       stack: '总量',
      //       areaStyle: {},
      //       data: data.map(element => element.data[i].value)
      //     }
      //   });
      // });
      // this.newData = nameArr.map((element, index) => {
      //   return data.map((item, i) => {
      //     return {
      //       name: element,
      //       type: 'line',
      //       stack: '总量',
      //       areaStyle: {},
      //       data: data.map(element => element.data[index].value)
      //     }
      //   })
      // })
      this.newData = nameArr.map((item, i) => {
        return {
          name: item,
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: data.map(element => element.data[i].value)
        }
      })
      console.log(this.newData, '123');
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data:['吃','住','行','购','娱'],
          textStyle: {
            color: '#889db5'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            axisLabel: {
              textStyle: {
                color: '#889db5'
              }
            }
          }
        ],
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
            name: '吃',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '住',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '行',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '购',
            type: 'line',
            stack: '总量',
            areaStyle: { normal: {}},
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '娱',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: { normal: {}},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
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
