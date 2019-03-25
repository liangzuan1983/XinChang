<!--显示最大值和最小值的柱状图-->
<template>
  <div :id="id" class="chartBox"/>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'ForceChart',
  props: {
    id: {
      type: String,
      default: 'forceChart'
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    options: {
      handler: function(val, oldval) {
        this.setOptions()
      },
      deep: true
    }
  },
  mounted() {
    const self = this
    self.initChart()
  },
  methods: {
    setOptions() {
      const self = this
      const data = self.options || {}
      self.chart.setOption({
        series: [
          {
            type: 'graph',
            layout: 'force',
            symbolSize: 58,
            roam: true,
            focusNodeAdjacency: true,
            edgeSymbol: ['arrow', ''],
            edgeLabel: {
              normal: {
                textStyle: {
                  fontSize: 12
                },
                show: true,
                formatter(x) {
                  return x.data.name
                }
              }
            },
            force: {
              repulsion: 2000,
              edgeLength: 120
            },
            draggable: true,
            itemStyle: {
              normal: {
                color: function (a) {
                  const str = a.name || "";
                  if(!str[5]){
                    return "#c23531"
                  }else{
                    console.log(str)
                    if(str[7]){
                      return "#61a0a8"
                    }else{
                      return "#2f4554"
                    }
                  }
                  return "#4093F2"
                }
              }
            },
            lineStyle: {
              normal: {
                width: 1,
                color: '#fff'
              }
            },
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 14
                },
                formatter: function(params) {
                  return params.data.showName // 此处为label转换
                }
              }
            },
            data: data.antity || [],
            links: data.relation || []
          }
        ]
      })
    },
    initChart() {
      const self = this
      self.chart = new echarts.init(document.getElementById(self.id))
      window.addEventListener('resize', () => {
        self.chart.resize()
      })
      self.setOptions()
    }
  }
}
</script>

<style scoped>
.chartBox {
  width: 100%;
  height: 100%;
}
</style>
