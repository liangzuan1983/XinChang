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
      required: true
    }
  },
  data() {
    return {
      chart: null,
      sidebarElm: null,
      name: [],
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
      // console.log(this.chartData, '123')
      let data = this.chartData;
      this.name = data.map(element => element.subject);
      this.newData = data.map(element => {
        return {
          value: element.value,
          name: element.subject
        }
      })
      // console.log(this.name, 'name')
      // console.log(this.newData, 'newData')
      this.chart.setOption({
        backgroundColor: 'transparent',
        animationDuration: 3000,
        animationEasingUpdate: 'quinticInOut',
        series: [{
            name: '三国演义',
            type: 'graph',
            layout: 'force',

            force: {
                repulsion: 300
            },
            data: [{
                "name": "三国演义",
                // "x": 0,
                // y: 0,
                "symbolSize": 150,
                "draggable": "true",
                "value": 27

            }, {
                "name": "刘备2239",
                "value": 15,
                "symbolSize": 80,
                "category": "刘备2239",
                "draggable": "true"
            }, {
                "name": "使君70",
                "symbolSize": 3,
                "category": "刘备2239",
                "draggable": "true",
                "value": 1
            }, {
                "name": "玄德1770",
                "symbolSize": 60,
                "category": "刘备2239",
                "draggable": "true",
                "value": 1
            }, {
                "name": "皇叔112",
                "symbolSize": 15,
                "category": "刘备2239",
                "draggable": "true",
                "value": 1
            }, {
                "name": "诸葛亮1892",
                "value": 60,
                "symbolSize": 60,
                "category": "诸葛亮1892",
                "draggable": "true"
            }, {
                "name": "孔明1643",
                "symbolSize": 50,
                "category": "诸葛亮1892",
                "draggable": "true",
                "value": 1
            }, {
                "name": "卧龙40",
                "symbolSize": 3,
                "category": "诸葛亮1892",
                "draggable": "true",
                "value": 1
            }, {
                "name": "曹操979",
                "value": 5,
                "symbolSize": 40,
                "category": "曹操979",
                "draggable": "true"
            }, {
                "name": "孟德29",
                "symbolSize": 3,
                "category": "曹操979",
                "draggable": "true",
                "value": 1
            }, {
                "name": "曹公44",
                "symbolSize": 7,
                "category": "曹操979",
                "draggable": "true",
                "value": 1
            }, {
                "name": "关羽948",
                "value": 40,
                "symbolSize": 18,
                "category": "关羽948",
                "draggable": "true"
            }, {
                "name": "云长431",
                "symbolSize": 20,
                "category": "关羽948",
                "draggable": "true",
                "value": 1
            }, {
                "name": "关公508",
                "symbolSize": 25,
                "category": "关羽948",
                "draggable": "true",
                "value": 1
            }, {
                "name": "张飞408",
                "value": 8,
                "symbolSize": 25,
                "category": "张飞408",
                "draggable": "true"
            }, {
                "name": "翼德55",
                "symbolSize": 5,
                "category": "张飞408",
                "draggable": "true",
                "value": 1
            }, {
                "name": "赵云393",
                "value": 5,
                "symbolSize": 30,
                "category": "赵云393",
                "draggable": "true"
            }, {
                "name": "子龙95",
                "symbolSize": 7,
                "category": "赵云393",
                "draggable": "true",
                "value": 1
            }, {
                "name": "孙权390",
                "value": 30,
                "symbolSize": 30,
                "category": "孙权390",
                "draggable": "true"
            }, {
                "name": "仲谋10",
                "symbolSize": 3,
                "category": "孙权390",
                "draggable": "true",
                "value": 1
            }, {
                "name": "吴侯72",
                "symbolSize": 10,
                "category": "孙权390",
                "draggable": "true",
                "value": 1
            }, {
                "name": "吕布384",
                "value": 20,
                "symbolSize": 30,
                "category": "吕布384",
                "draggable": "true"
            }, {
                "name": "奉先15",
                "symbolSize": 3,
                "category": "吕布384",
                "draggable": "true",
                "value": 1
            }, {
                "name": "温侯12",
                "symbolSize": 3,
                "category": "吕布384",
                "draggable": "true",
                "value": 1
            }, {
                "name": "周瑜328",
                "value": 6,
                "symbolSize": 18,
                "category": "周瑜328",
                "draggable": "true"
            }, {
                "name": "公瑾60",
                "symbolSize": 5,
                "category": "周瑜328",
                "draggable": "true",
                "value": 1
            }, {
                "name": "周郎35",
                "symbolSize": 3,
                "category": "周瑜328",
                "draggable": "true",
                "value": 1
            }, {
                "name": "魏延327",
                "value": 6,
                "symbolSize": 18,
                "category": "魏延327",
                "draggable": "true"
            }, {
                "name": "文长12",
                "symbolSize": 3,
                "category": "魏延327",
                "draggable": "true",
                "value": 1

            }],
            links: [{
                "source": "三国演义",
                "target": "刘备2239"
            }, {
                "source": "刘备2239",
                "target": "使君70"
            }, {
                "source": "刘备2239",
                "target": "玄德1770"
            }, {
                "source": "刘备2239",
                "target": "皇叔112"
            }, {
                "source": "三国演义",
                "target": "诸葛亮1892"
            }, {
                "source": "诸葛亮1892",
                "target": "孔明1643"
            }, {
                "source": "诸葛亮1892",
                "target": "卧龙40"
            }, {
                "source": "三国演义",
                "target": "曹操979"
            }, {
                "source": "曹操979",
                "target": "孟德29"
            }, {
                "source": "曹操979",
                "target": "曹公44"
            }, {
                "source": "三国演义",
                "target": "关羽948"
            }, {
                "source": "关羽948",
                "target": "云长431"
            }, {
                "source": "关羽948",
                "target": "关公508"
            }, {
                "source": "三国演义",
                "target": "张飞408"
            }, {
                "source": "张飞408",
                "target": "翼德55"
            }, {
                "source": "三国演义",
                "target": "赵云393"
            }, {
                "source": "赵云393",
                "target": "子龙95"
            }, {
                "source": "三国演义",
                "target": "孙权390"
            }, {
                "source": "孙权390",
                "target": "仲谋10"
            }, {
                "source": "孙权390",
                "target": "吴侯72"
            }, {
                "source": "三国演义",
                "target": "吕布384"
            }, {
                "source": "吕布384",
                "target": "奉先15"
            }, {
                "source": "吕布384",
                "target": "温侯12"
            }, {
                "source": "三国演义",
                "target": "周瑜328"
            }, {
                "source": "周瑜328",
                "target": "公瑾60"
            }, {
                "source": "周瑜328",
                "target": "周郎35"
            }, {
                "source": "三国演义",
                "target": "魏延327"
            }, {
                "source": "魏延327",
                "target": "文长12"
            }, {
                "source": "三国演义",
                "target": "法学院"

            }],
            categories: [{
                'name': '刘备2239'
            }, {
                'name': '诸葛亮1892'
            }, {
                'name': '曹操979'
            }, {
                'name': '关羽948'
            }, {
                'name': '张飞408'
            }, {
                'name': '赵云393'
            }, {
                'name': '孙权390'
            }, {
                'name': '吕布384'
            }, {
                'name': '周瑜328'
            }, {
                'name': '魏延327'
            }, {

            }],
            focusNodeAdjacency: true,
            roam: true,
            label: {
                normal: {

                    show: true,
                    position: 'top',

                }
            },
            lineStyle: {
                normal: {
                    color: 'source',
                    curveness: 0,
                    type: "solid"
                }
            }
        }]
      })
    },
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    }
  }
}
</script>
