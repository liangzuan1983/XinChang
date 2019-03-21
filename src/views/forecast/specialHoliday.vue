<template>
  <div class="box">
    <div class="specialHoliday">
      <!--十九峰-->
      <div class="sjfBox">
        <div class="boxTitle">十九峰</div>
        <!--实时客流-->
        <div class="currentFlow">
          <span class="currentFlowParam">实时客流</span>
          <span class="currentFlowCount">{{ sjfData.realTimeFlow }}</span>
        </div>
        <!--节假日数据统计-->
        <holidayData :data="sjfData.holidayData" class="moduleBox" />
        <!--客流数据-->
        <flowData :data="sjfData.flowData" class="moduleBox" name="sjf" />
        <!--车流数据-->
        <carData :data="sjfData.carFlowData" class="moduleBox" name="sjf" />
        <!--票务数据-->
        <ticketData :data="sjfData.ticketsData" class="moduleBox" name="sjf" />
      </div>

      <!--大佛寺-->
      <div class="dfsBox">
        <div class="boxTitle">大佛寺</div>
        <!--实时客流-->
        <div class="currentFlow">
          <span class="currentFlowParam">实时客流</span>
          <span class="currentFlowCount">{{ dfsData.realTimeFlow }}</span>
        </div>
        <!--节假日数据统计-->
        <holidayData :data="dfsData.holidayData" class="moduleBox" />
        <!--客流数据-->
        <flowData :data="dfsData.flowData" class="moduleBox" name="dfs" />
        <!--车流数据-->
        <carData :data="dfsData.carFlowData" class="moduleBox" name="dfs" />
        <!--票务数据-->
        <ticketData :data="dfsData.ticketsData" class="moduleBox" name="dfs" />
      </div>
    </div>
  </div>
</template>

<script>
import holidayData from './components/holidayData'
import flowData from './components/flowData'
import carData from './components/carData'
import ticketData from './components/ticketData'
import {
  getRealtime,
  getHolidayData,
  getPassengerFlow,
  getVehicleStream,
  getTicket
} from '../../api/forecast'
import thousands from '@/utils/thousands'
export default {
  name: 'SpecialHoliday',
  components: { holidayData, flowData, carData, ticketData },
  data() {
    return {
      timer: null, // 定时器
      sjfData: {
        realTimeFlow: 0, // 实时客流
        // 节假日数据统计
        holidayData: [
          {
            param: '累计客流',
            num: 0,
            unit: '人',
            ratio: '',
            icon1: require('@/assets/icon1/kl1.png'),
            icon2: require('@/assets/icon1/uarrow.png')
          },
          {
            param: '累计车流',
            num: 0,
            unit: '辆',
            ratio: '',
            icon1: require('@/assets/icon1/cl1.png'),
            icon2: require('@/assets/icon1/darrow.png')
          },
          {
            param: '累计售票',
            num: 0,
            unit: '张',
            ratio: '',
            icon1: require('@/assets/icon1/sp1.png'),
            icon2: require('@/assets/icon1/uarrow.png')
          },
          {
            param: '累计收入',
            num: 0,
            unit: '元',
            ratio: '',
            icon1: require('@/assets/icon1/sr1.png'),
            icon2: require('@/assets/icon1/uarrow.png')
          },
          {
            param: '累计接待团队',
            num: 0,
            unit: '人',
            ratio: '',
            icon1: require('@/assets/icon1/td1.png'),
            icon2: require('@/assets/icon1/uarrow.png')
          }
        ],
        flowData: {}, // 客流数据
        carFlowData: {}, // 车流数据
        ticketsData: {} // 票务数据
      },
      dfsData: {
        realTimeFlow: 0, // 实时客流
        // 节假日数据统计
        holidayData: [
          {
            param: '累计客流',
            num: 0,
            unit: '人',
            ratio: '',
            icon1: require('@/assets/icon1/kl2.png'),
            icon2: require('@/assets/icon1/uarrow.png')
          },
          {
            param: '累计车流',
            num: 0,
            unit: '辆',
            ratio: '',
            icon1: require('@/assets/icon1/cl2.png'),
            icon2: require('@/assets/icon1/darrow.png')
          },
          {
            param: '累计售票',
            num: 0,
            unit: '张',
            ratio: '',
            icon1: require('@/assets/icon1/sp2.png'),
            icon2: require('@/assets/icon1/uarrow.png')
          },
          {
            param: '累计收入',
            num: 0,
            unit: '元',
            ratio: '',
            icon1: require('@/assets/icon1/sr2.png'),
            icon2: require('@/assets/icon1/uarrow.png')
          },
          {
            param: '累计接待团队',
            num: 0,
            unit: '人',
            ratio: '',
            icon1: require('@/assets/icon1/td2.png'),
            icon2: require('@/assets/icon1/uarrow.png')
          }
        ],
        flowData: {}, // 客流数据
        carFlowData: {}, // 车流数据
        ticketsData: {} // 票务数据
      }
    }
  },
  created() {
    const self = this
    // 实时客流每10分钟刷新一次
    self.timer = setInterval(function() {
      self.interval()
    }, 1000 * 60 * 10)
  },
  beforeDestroy() {
    // 如果定时器还在运行 或者直接关闭，不用判断
    if (this.timer) clearInterval(this.timer) // 关闭
  },
  mounted() {
    const self = this
    self.getSjfData()
    self.getDfsData()
    self.interval()
  },
  methods: {
    getSjfData() {
      const self = this
      // 节假日数据统计
      getHolidayData('shijiufeng').then(res => {
        if (res.status === 200) {
          const data = res.data.data
          data.map((item, index) => {
            self.sjfData.holidayData[index].num = thousands(
              item.value[0].value
            )
            self.sjfData.holidayData[index].ratio = item.value[1].value
            if (item.value[1].value.indexOf('-') === -1) {
              self.sjfData.holidayData[
                index
              ].icon2 = require('@/assets/icon1/uarrow.png')
            } else {
              self.sjfData.holidayData[
                index
              ].icon2 = require('@/assets/icon1/darrow.png')
            }
          })
        }
      })
      // 客流数据
      getPassengerFlow('shijiufeng').then(res => {
        if (res.status === 200) {
          const data = res.data.data
          let xAxis = [],
            series1 = [],
            series2 = []
          data.map(item => {
            xAxis.push(item.subject)
            series1.push(item.value[0].value)
            series2.push(item.value[1].value)
          })
          self.sjfData.flowData = {
            color: ['#47b2d3', '#0982de'],
            xAxisData: xAxis,
            series1Data: series1,
            series2Data: series2
          }
        }
      })
      // 车流数据
      getVehicleStream('shijiufeng').then(res => {
        if (res.status === 200) {
          const data = res.data.data
          let xAxis = [],
            series1 = [],
            series2 = []
          data.map(item => {
            xAxis.push(item.subject)
            series1.push(item.value[0].value)
            series2.push(item.value[1].value)
          })
          self.sjfData.carFlowData = {
            color: ['#47b2d3', '#283240', '#f79703'],
            xAxisData: xAxis,
            series1Data: series1,
            series2Data: series2
          }
        }
      })
      // 票务数据
      getTicket('shijiufeng').then(res => {
        if (res.status === 200) {
          const data = res.data.data || []
          let xAxis = [],
            series1 = [],
            series2 = [],
            series3 = []
          data.map(item => {
            xAxis.push(item.subject)
            series1.push(item.value[0].value)
            series2.push(item.value[1].value)
            series3.push(item.value[2].value)
          })
          self.sjfData.ticketsData = {
            color: ['#47b2d3', '#0982de', '#f79703'],
            xAxisData: xAxis,
            series1Data: series1,
            series2Data: series2,
            series3Data: series3
          }
        }
      })
    },
    getDfsData() {
      const self = this
      // 节假日数据统计
      getHolidayData('dafosi').then(res => {
        if (res.status === 200) {
          const data = res.data.data
          data.map((item, index) => {
            self.dfsData.holidayData[index].num = thousands(
              item.value[0].value
            )
            self.dfsData.holidayData[index].ratio = item.value[1].value
            if (item.value[1].value.indexOf('-') === -1) {
              self.dfsData.holidayData[
                index
              ].icon2 = require('@/assets/icon1/uarrow.png')
            } else {
              self.dfsData.holidayData[
                index
              ].icon2 = require('@/assets/icon1/darrow.png')
            }
          })
        }
      })
      // 客流数据
      getPassengerFlow('dafosi').then(res => {
        if (res.status === 200) {
          const data = res.data.data
          let xAxis = [],
            series1 = [],
            series2 = []
          data.map(item => {
            xAxis.push(item.subject)
            series1.push(item.value[0].value)
            series2.push(item.value[1].value)
          })
          self.dfsData.flowData = {
            color: ['#fd8ba5', '#c494ed'],
            xAxisData: xAxis,
            series1Data: series1,
            series2Data: series2
          }
        }
      })
      // 车流数据
      getVehicleStream('dafosi').then(res => {
        if (res.status === 200) {
          const data = res.data.data
          let xAxis = [],
            series1 = [],
            series2 = []
          data.map(item => {
            xAxis.push(item.subject)
            series1.push(item.value[0].value)
            series2.push(item.value[1].value)
          })
          self.dfsData.carFlowData = {
            color: ['#ff8faa', '#2b3343', '#f79703'],
            xAxisData: xAxis,
            series1Data: series1,
            series2Data: series2
          }
        }
      })
      // 票务数据
      getTicket('dafosi').then(res => {
        if (res.status === 200) {
          const data = res.data.data || []
          let xAxis = [],
            series1 = [],
            series2 = [],
            series3 = []
          data.map(item => {
            xAxis.push(item.subject)
            series1.push(item.value[0].value)
            series2.push(item.value[1].value)
            series3.push(item.value[2].value)
          })
          self.dfsData.ticketsData = {
            color: ['#fd8ba5', '#c494ed', '#f79703'],
            xAxisData: xAxis,
            series1Data: series1,
            series2Data: series2,
            series3Data: series3
          }
        }
      })
    },
    interval() {
      const self = this
      getRealtime('shijiufeng').then(res => {
        if (res.status === 200) {
          const data = res.data.data || {}
          self.sjfData.realTimeFlow = data.value || 0
        }
      })
      getRealtime('dafosi').then(res => {
        if (res.status === 200) {
          const data = res.data.data || {}
          self.dfsData.realTimeFlow = data.value || 0
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  position: relative;
  height: 100%;
  z-index: 999;
  margin-top: 1%;
  padding: 1%;
  color: #fff;
  overflow: auto;
}
.specialHoliday {
  width: 100%;
  display: flex;
  .sjfBox {
    width: 50%;
    background: rgba(255, 255, 255, 0.05);
    padding: 1%;
    height: 100%;
    margin-right: 1%;
  }
  .dfsBox {
    width: 50%;
    padding: 1%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
  }
  .boxTitle {
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .currentFlow {
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    .currentFlowParam {
      font-size: 28px;
      padding: 10px;
      font-weight: 500;
    }
    .currentFlowCount {
      font-size: 40px;
      padding: 10px;
      color: #fa9903;
      font-weight: 600;
    }
  }
  .moduleBox {
    width: 100%;
    padding-bottom: 1%;
    background: rgba(255, 255, 255, 0.05);
    margin-bottom: 15px;
  }
}
</style>
