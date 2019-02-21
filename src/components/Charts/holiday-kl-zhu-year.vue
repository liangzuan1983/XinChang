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
        default: 'holidayzhuyear'
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
        time: [],
        value: []
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
        // console.log(this.chartData, '123')
        // let data = this.chartData;
        // this.time = data.map(element => element.subject)
        // this.value = data.map(element => element.value)
        this.chart.setOption({
          legend: {
            data: ['年度客流量预测'],
            textStyle: {
              color: '#59697d'
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          calculable: true,
          xAxis: [
            {
              type: 'category',
              data: ['2019', '2020', '2021'],
              axisLabel: {
                textStyle: {
                  color: '#889db5'
                }
              }
            }
          ],
          grid: {
            top: '22%',
            left: '3%',
            right: '3%',
            bottom: '3%',
            containLabel: true
          },
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
              name: '年度客流量预测',
              type: 'bar',
              data: [4673456, 4977623, 5234223],
              markPoint: {
                data: [
                  { type: 'max', name: '最大值' },
                  { type: 'min', name: '最小值' }
                ]
              },
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#37d53b'
                  },
                    {
                      offset: 1,
                      color: '#1ba91b'
                    }])
                },
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
