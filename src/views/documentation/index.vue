<template>
  <div class="warn">
    <div class="amap-page-container">
      <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
      <el-amap vid="amapDemo" :plugin="plugin" :center='center' :zoom='zoom' class="amap-demo">
        <!-- <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker" ></el-amap-marker> -->
        <el-amap-marker v-for="(marker, index) in componentsMarkers" 
          :key="index"
          :position="marker.position"
          :vid="marker.vid"
          :content-render="marker.contentRender">
        </el-amap-marker>
      </el-amap>
    </div>
    <!--浮窗-->
    <!-- <div class="float">
      <div class="top">
        <h1 class="title">事件统计</h1>
        <p>事件总数: 10</p>
        <p>待处理事件: 3</p>
        <p>处理中事件: 4</p>
        <p>已完结事件: 4</p>
      </div>
      <div class="bottom">
        <h1 class="title">预警事件信息</h1>
        <p>编号: 0001</p>
        <p>时间: 2018.8.18 12:05:03</p>
        <p>地点: 大佛寺</p>
        <p>详情: 客流超载预警</p>
        <p>预案: 应急预案3</p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    let self = this;
    const BtnComponent = {
      props: ['text'],
      template: `<button>{{text}}</button>`
    };
    const center = [121.59996, 31.197646];
    const componentsMarkers = [1,2,3,4].map((item, index) => {
      return {
        position: [center[0] + index * 0.02, center[1] + index * 0.02],
        vid: `${index}-vid`,
        contentRender: h => h(BtnComponent, {
          props: {
            text: `component ${index}`
          },
          style: {
            background: 'rgb(173, 47, 47)',
            color: '#eee'
          },
          nativeOn: {
            click: () => this.handler(`component-${index}`)
          }
        })
      }
    });
    return {
      searchOption: {
        city: '上海',
        citylimit: true
      },
      // mapCenter: [121.59996, 31.197646],
      plugin: [
        {
          pName: 'MapType',
          defaultType: 0,
          events: {
            init(instance) {
              console.log(instance);
            }
          }
        }
      ],
      zoom: 12,
      center,
      markers: [],
      markerRefs: [],
      source: 'click',
      componentsMarkers
    }
  },
  created() {
    let self = this;
    let markers = [];
    let index = 0;

    let basePosition = [121.59996, 31.197646];
    let num = 10;

    for (let i = 0 ; i < num ; i++) {
      markers.push({
        position: [basePosition[0], basePosition[1] + i * 0.03],
        contentRender: h => h('button', {
          on: {click: () => this.handler(i)}}, [`source-${i}`])
      });
    }
    this.markers = markers;
  },
  methods: {
    addMarker: function() {
      let lng = 121.5 + Math.round(Math.random() * 1000) / 10000;
      let lat = 31.197646 + Math.round(Math.random() * 500) / 10000;
      this.markers.push([lng, lat]);
    },
    onSearchResult(pois) {
      let latSum = 0;
      let lngSum = 0;
      if (pois.length > 0) {
        pois.forEach(poi => {
          let {lng, lat} = poi;
          lngSum += lng;
          latSum += lat;
          this.markers.push([poi.lng, poi.lat]);
        });
        let center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        };
        this.mapCenter = [center.lng, center.lat];
      }
    },
    handler(index) {
      alert(`${ index } - trigger`);
    }
  }
}
</script>

<style lang="scss" scoped>
  .warn {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 99;
    padding: 1%;
    .amap-page-container {
      width: 100%;
      height: 100%;
      position: relative;
      .search-box {
        position: absolute;
        top: 25px;
        left: 20px;
      }
      .amap-demo {
        width: 100%;
        height: 100%;
      }
    }
    .float {
      width: 15%;
      height: 100%;
      position: absolute;
      z-index: 999;
      right: 2%;
      top: 5%;
      .top {
        width: 100%;
        height: 30%;
        margin-bottom: 30%;
        background: rgba(0, 0, 0, 0.7);
        padding: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        h1 {
          color: #ffffff;
          font-size: 18px;
        }
        p {
          color: #ffffff;
          font-size: 16px;
        }
      }
      .bottom {
        width: 100%;
        height: 30%;
        background: rgba(0, 0, 0, 0.7);
        padding: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        h1 {
          color: #ffffff;
          font-size: 18px;
        }
        p {
          color: #ffffff;
          font-size: 16px;
        }
      }
    }
  }
</style>
