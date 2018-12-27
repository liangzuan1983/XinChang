<template>
  <div :class="className" :style="{height:height,width:width}"/>
</template>

<script>
import echarts from "echarts";
require("echarts/theme/macarons"); // echarts theme
require("echarts-wordcloud"); // 字符云
import { debounce } from "@/utils";

export default {
  props: {
    className: {
      type: String,
      default: "zifuyun"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "300px"
    }
  },
  data() {
    return {
      chart: null,
      markUrl:
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5NjcxMDg4MjI5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5Njc3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTgwNi4xMjMgMTUzLjU3OWg2NS41MzZ2NzE4LjkxMkg2ODQuMjY3VjU1Mi45Nkw1MzEuNjcgNzEyLjcyNWgtMjAuNDU5TDM1OS42NTkgNTUyLjk2djMxOS41MzFIMTcyLjI0NlYxNTMuNTc5aDY3LjU4NGwyODAuNTk3IDMxMS4zMTcgMjg1LjY5Ni0zMTEuMzE3eiIgcC1pZD0iMTk2NzgiPjwvcGF0aD48L3N2Zz4=",
      presents: [
        {
          name: "社交通讯",
          value: 214
        },
        {
          name: "手机美化",
          value: 439
        },
        {
          name: "办公学习",
          value: 28
        },
        {
          name: "应用市场",
          value: 23
        },
        {
          name: "母婴育儿",
          value: 14
        },
        {
          name: "游戏",
          value: 946
        }
      ]
    };
  },
  mounted() {
    this.initChart();
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize();
      }
    }, 100);
    window.addEventListener("resize", this.__resizeHandler);
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    window.removeEventListener("resize", this.__resizeHandler);
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      let myChart = echarts.init(this.$el, "macarons");
      var data = {
        image:
          "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTM5NjcxMDg4MjI5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5Njc3IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTgwNi4xMjMgMTUzLjU3OWg2NS41MzZ2NzE4LjkxMkg2ODQuMjY3VjU1Mi45Nkw1MzEuNjcgNzEyLjcyNWgtMjAuNDU5TDM1OS42NTkgNTUyLjk2djMxOS41MzFIMTcyLjI0NlYxNTMuNTc5aDY3LjU4NGwyODAuNTk3IDMxMS4zMTcgMjg1LjY5Ni0zMTEuMzE3eiIgcC1pZD0iMTk2NzgiPjwvcGF0aD48L3N2Zz4="
      };
      //温馨提示：image 选取有严格要求不可过大；，否则firefox不兼容  iconfont上面的图标可以
      let maskImage = new Image();
      maskImage.src = this.markUrl;

      maskImage.onload = () => {
        myChart.setOption({
          backgroundColor: "#fff",
          tooltip: {
            show: false
          },
          series: [
            {
              type: "wordCloud",
              gridSize: 1,

              sizeRange: [1, 49],
              rotationRange: [0, 0],
              // maskImage: maskImage,
              textStyle: {
                normal: {
                  color: function(v) {
                    let color = [
                      "#27D38A",
                      "#FFCA1C",
                      "#5DD1FA",
                      "#F88E25",
                      "#47A0FF",
                      "#FD6565"
                    ];
                    let num = Math.floor(Math.random() * (5 + 1));
                    console.log(num);
                    return color[num];
                  }
                }
              },
              left: "center",
              top: "center",
              width: "96%",
              height: "50%",
              // right: null,
              // bottom: null,
              // width: 300,
              // height: 200,
              // top: 20,
              data: this.presents
            }
          ]
        });
      };
    }
  }
};
</script>
