<template>
  <div class="traffic-ss">
    <div class="box">
      <!-- <span class="title">新昌实时路况</span> -->
      <!-- <input type="text" id="suggestId" name="address_detail" placeholder="地址" v-model="address_detail" class="input_style"> -->
      <el-input v-model="address_detail" id="suggestId" name="address_detail"  placeholder="智能搜索地址"/>
      <span class="icon" :style="{ backgroundImage: 'url(' + three + ')'}"/>
    </div>
    <div id="mapContainer"/>
  </div>
</template>

<script>
import Three from '@/assets/traffic_status.png'
export default {
  data() {
    return {
      three: Three,
      address_detail: null, //详细地址
      userlocation: {lng: "", lat: ""},
    }
  },
  mounted(){
    this.$nextTick(function() {
      var th = this
      // 创建Map实例
      var map = new BMap.Map("mapContainer");
      // 初始化地图,设置中心点坐标，
      var point = new BMap.Point(120.917737, 29.498975); // 创建点坐标
      map.centerAndZoom(point, 15);
      map.enableScrollWheelZoom();
      /* 实时路况*/
      const ctrl = new BMapLib.TrafficControl({
        showPanel: false
      })
      map.addControl(new BMap.NavigationControl())
      map.enableContinuousZoom(false)
      map.enableScrollWheelZoom(false)
      map.addControl(ctrl)
      ctrl.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT)
      ctrl.showTraffic()
      /* 实时路况*/
      var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
        {
          "input": "suggestId"
          , "location": map
        })
      var myValue
      ac.addEventListener("onconfirm", function (e) {    //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
        this.address_detail = myValue
        setPlace()
      })
      function setPlace() {
        map.clearOverlays();    //清除地图上所有覆盖物
        function myFun() {
          th.userlocation = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
          map.centerAndZoom(th.userlocation, 18);
          map.addOverlay(new BMap.Marker(th.userlocation));    //添加标注
        }

        var local = new BMap.LocalSearch(map, { //智能搜索
          onSearchComplete: myFun
        });
        local.search(myValue);
        //测试输出坐标（指的是输入框最后确定地点的经纬度）
        map.addEventListener("click",function(e){
          //经度
          console.log(th.userlocation.lng);
          //维度
          console.log(th.userlocation.lat);
        })
      }
      //设置标注的图标
      var icon = new BMap.Icon("./static/img/downarrow.png", new BMap.Size(100,100));
      //设置标注的经纬度
      var marker = new BMap.Marker(new BMap.Point(120.917737, 29.498975),{icon:icon});
      //把标注添加到地图上
      map.addOverlay(marker);
    })
  }
  // mounted() {
  //   this.init()
  // },
  // methods: {
  //   init() {
  //     const map = new BMap.Map("mapContainer")
  //     map.centerAndZoom(new BMap.Point(120.917737, 29.498975), 17)
  //     const ctrl = new BMapLib.TrafficControl({
  //       showPanel: false
  //     })
  //     map.addControl(new BMap.NavigationControl())
  //     map.enableContinuousZoom(false)
  //     map.enableScrollWheelZoom(false)
  //     map.addControl(ctrl)
  //     ctrl.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT)
  //     ctrl.showTraffic()
  //   }
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
    // z-index: 99;
    .box {
      display: flex;
      justify-content: space-between;
      background: rgba(255, 255, 255, 0.05);
      align-items: center;
      padding-left: 1%;
      padding-right: 1%;
      position: relative;
      z-index: 999;
      .el-input--medium .el-input__inner {
        width: 20%;
      }
      .title {
        color: #bbd5ff;
        font-size: 20px;
      }
      .icon {
        width: 10%;
        height: 50px;
        background-repeat: no-repeat;
      }
    }
    #mapContainer {
      flex: 1;
    }
  }
</style>
