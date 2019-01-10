<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
import { debounce } from "@/utils";

export default {
  props: {
    className: {
      type: String,
      default: "yklx"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "100%"
    },
    chartData: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      chart: null,
      dataArray: []
    };
  },
  mounted() {
    // console.log(this.chartData, 'mounted')
    // debugger
    // this.initChart()
    // this.__resizeHandler = debounce(() => {
    //   if (this.chart) {
    //     this.chart.resize()
    //   }
    // }, 100)
    // window.addEventListener('resize', this.__resizeHandler)
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    window.removeEventListener("resize", this.__resizeHandler);
    this.chart.dispose();
    this.chart = null;
  },
  watch: {
    chartData(val) {
      if(val && val.length > 0){
        this.initChart();
      }
    }
  },
  methods: {
    initChart() {
      // debugger
      this.chart = echarts.init(this.$el, "macarons");
      const data = this.chartData;
      // data.forEach(element => {
      //   const obj = {};
      //   obj.name = element.subject;
      //   obj.value = element.value;
      //   // this.dataArray.push(obj);
      // });
      this.dataArray = data.map(element => {
        return { name: element.subject, value: element.value }
      })
      console.log(this.dataArray, "组件内");
      this.chart.setOption({
        visualMap: {
          show: false,
          min: 1,
          max: 350,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
          {
            name: "散客票务类型",
            type: "pie",
            radius: "75%",
            center: ["50%", "60%"],
            data: this.dataArray,
            // data: [
            //   {
            //     name: '网络票',
            //     value: this.chartData[0].value
            //   },
            //   {
            //     name: '成人票',
            //     value: this.chartData[1].value
            //   },
            //   {
            //     name: '老年票',
            //     value: this.chartData[2].value
            //   },
            //   {
            //     name: '大佛寺公司',
            //     value: this.chartData[3].value
            //   },
            //   {
            //     name: '学生票',
            //     value: this.chartData[4].value
            //   },
            //   {
            //     name: '儿童票',
            //     value: this.chartData[5].value
            //   }
            // ],
            roseType: "radius",
            label: {
              normal: {
                textStyle: {
                  // color: 'rgba(255, 255, 255, 0.3)'
                }
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  // color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 1,
                length2: 3,
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: "#e090ca",
                shadowBlur: 15
              }
            },
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function(idx) {
              return Math.random() * 200;
            }
          }
        ]
      });
    }
  }
};
</script>
