<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
require('echarts-wordcloud') // 字符云
import { debounce } from '@/utils'

export default {
  props: {
    className: {
      type: String,
      default: 'zifuyun'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data() {
    return {
      chart: null,
      markUrl: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5NjcxMDg4MjI5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5Njc3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTgwNi4xMjMgMTUzLjU3OWg2NS41MzZ2NzE4LjkxMkg2ODQuMjY3VjU1Mi45Nkw1MzEuNjcgNzEyLjcyNWgtMjAuNDU5TDM1OS42NTkgNTUyLjk2djMxOS41MzFIMTcyLjI0NlYxNTMuNTc5aDY3LjU4NGwyODAuNTk3IDMxMS4zMTcgMjg1LjY5Ni0zMTEuMzE3eiIgcC1pZD0iMTk2NzgiPjwvcGF0aD48L3N2Zz4=',
      presents: [
        '计量', 'NQL', '标准', '认证认可', '质量效益', '手机壳',
        '八音盒', '剃须刀', '打火机', '手表', '巴克球', '模型',
        '音响', '蒙奇奇', '保温杯'
      ],
      data: []
    }
  },
  mounted() {
    this.initChart()
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
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
      const presents = this.presents
      const data = this.data
      const markUrl = this.markUrl
      for (var i = 0; i < presents.length; ++i) {
        data.push({
          name: presents[i],
          value: (presents.length - i) * 20,
          textStyle: {
            normal: {},
            emphasis: {}
          }
        })
      }
      for (var i = 10; i < presents.length; ++i) {
        var cnt = Math.floor(Math.random() * 10)
        for (var j = 0; j < cnt; ++j) {
          data.push({
            name: presents[i],
            value: Math.random() * 10,
            textStyle: {
              normal: {},
              emphasis: {}
            }
          })
        }
      }
      var maskImage = new Image()
      this.chart.setOption({
        series: [{
          type: 'wordCloud',
          gridSize: 1,
          sizeRange: [12, 40], // 最小文字——最大文字
          rotationRange: [0, 90], // 旋转角度区间
          rotationStep: 90, // 旋转角度间隔
          maskImage: maskImage,// 遮罩图片
          width: 500, // 遮罩图片宽度
          height: 250, // 遮罩图片高度
          left: 'center',
          top: 'center',
          data: data,
          gridSize: 10, // 字符间距
          textStyle: {
            normal: {
              // Color can be a callback function or a color string
              color: function () {
                // Random color
                return 'rgb(' + [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160)
                ].join(',') + ')'
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          }
        }]
      })
      maskImage.src = markUrl
    }
  }
}
</script>
