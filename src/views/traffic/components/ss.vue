<template>
  <div class="traffic-ss">
    <div class="box">
      <!-- <span class="title">新昌实时路况</span> -->
      <!-- <input type="text" id="suggestId" name="address_detail" placeholder="地址" v-model="address_detail" class="input_style"> -->
      <!-- <el-input v-model="address_detail" id="suggestId" name="address_detail"  placeholder="智能搜索地址"/> -->
      <span class="icon" :style="{ backgroundImage: 'url(' + three + ')'}"/>
    </div>
    <!-- <div id="mapContainer"/> -->
    <div class="amap-page-container">
      <!--<el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>-->
      <el-amap vid="amapDemo" :plugin="plugin" :center='mapCenter' :zoom='12' class="amap-demo">
        <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker" ></el-amap-marker>
      </el-amap>
    </div>
  </div>
</template>

<script>
import Three from '@/assets/traffic_status.png'
export default {
  data() {
    return {
      three: Three,
      markers: [
        [120.897454,29.506942]
      ],
      searchOption: {
        city: '上海',
        citylimit: true
      },
      mapCenter: [120.897454,29.506942],
      plugin: [
        {
          pName: 'MapType',
          defaultType: 0,
          events: {
            init(instance) {
              console.log(instance);
            }
          }
        },
        {
          pName: 'ToolBar',
          events: {
            init(instance) {
              console.log(instance);
            }
          }
        }
      ],
      markers: []
      // address_detail: null,
      // userlocation: {lng: "", lat: ""},
    }
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
    }
  }
  // mounted(){
  //   this.$nextTick(function() {
  //     var th = this
  //     // 创建Map实例
  //     var map = new BMap.Map("mapContainer");
  //     // 初始化地图,设置中心点坐标，
  //     var point = new BMap.Point(120.897454,29.506942); // 创建点坐标
  //     map.centerAndZoom(point, 15);
  //     map.enableScrollWheelZoom();
  //     /* 实时路况*/
  //     const ctrl = new BMapLib.TrafficControl({
  //       showPanel: false
  //     })
  //     map.addControl(new BMap.NavigationControl())
  //     map.enableContinuousZoom(false)
  //     map.enableScrollWheelZoom(false)
  //     map.addControl(ctrl)
  //     ctrl.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT)
  //     ctrl.showTraffic()
  //     /* 实时路况*/
  //     var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
  //       {
  //         "input": "suggestId"
  //         , "location": map
  //       })
  //     var myValue
  //     ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
  //       var _value = e.item.value;
  //       myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
  //       this.address_detail = myValue
  //       setPlace()
  //     })
  //     function setPlace() {
  //       map.clearOverlays();    //清除地图上所有覆盖物
  //       function myFun() {
  //         th.userlocation = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
  //         map.centerAndZoom(th.userlocation, 18);
  //         map.addOverlay(new BMap.Marker(th.userlocation));    //添加标注
  //       }

  //       var local = new BMap.LocalSearch(map, { //智能搜索
  //         onSearchComplete: myFun
  //       });
  //       local.search(myValue);
  //       //测试输出坐标（指的是输入框最后确定地点的经纬度）
  //       map.addEventListener("click",function(e){
  //         //经度
  //         console.log(th.userlocation.lng);
  //         //维度
  //         console.log(th.userlocation.lat);
  //       })
  //     }
  //     //设置标注的图标
  //     var icon = new BMap.Icon("./static/img/downarrow.png", new BMap.Size(100,100));
  //     //设置标注的经纬度
  //     var marker = new BMap.Marker(new BMap.Point(120.897454,29.506942),{icon:icon});
  //     //把标注添加到地图上
  //     map.addOverlay(marker);
  //     // // 点击默认点显示弹框
  //     // var content = "<table>";
  //     // content = content + "<tr><td><h2>大佛寺风景区</h2></td></tr>";
  //     // content = content + "<tr><td> 地点：绍兴市新昌县关城镇人民西路117号</td></tr>";
  //     // content = content + "<tr><td> 标签：景区 景点 旅游</td></tr>";
  //     // content += "</table>";
  //     // var infowindow = new BMap.InfoWindow(content);
  //     // marker.addEventListener("click",function(){
  //     //   this.openInfoWindow(infowindow);
  //     // })
  //     // //点击地图，获取经纬度坐标
  //     // map.addEventListener("click",function(e){
  //     //   document.getElementById("aa").innerHTML = "经度坐标："+e.point.lng+" &nbsp;纬度坐标："+e.point.lat;
  //     // });
  //   })
  // }
}
</script>

<style lang="scss">
  .traffic-ss {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    // position: relative;
    z-index: 9999;
    .box {
      display: flex;
      justify-content: flex-end;
      background: rgba(255, 255, 255, 0.05);
      align-items: center;
      padding-left: 1%;
      padding-right: 1%;
      position: relative;
      z-index: 999;
      .el-input--medium .el-input__inner {
        width: 20%;
      }
      // .title {
      //   color: #bbd5ff;
      //   font-size: 20px;
      // }
      .icon {
        width: 10%;
        height: 50px;
        background-repeat: no-repeat;
      }
    }
    // #mapContainer {
    //   flex: 1;
    // }
    .amap-page-container {
      // width: 100%;
      // height: 100%;
      flex: 1;
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
  }
</style>
