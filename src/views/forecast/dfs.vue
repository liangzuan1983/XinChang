<template>
  <div class="box">
    <searchBox @search="getData" />
    <div class="dfs">
      <!--景区客流-->
      <barChartData
        :data="flowData"
        class="moduleBox marginRight"
        title="景区客流"
        name="dfskl"
      />
      <!--景区售票额-->
      <barChartData
        :data="salesAmountData"
        class="moduleBox"
        title="景区售票额"
        name="dfsspe"
      />
      <!--景区售票量-->
      <barChartData
        :data="salesTicketsData"
        class="moduleBox marginRight"
        title="景区售票量"
        name="dfsspl"
      />
      <!--票型统计-->
      <ticketType :data="ticketsTypeData" class="moduleBox" />
      <!--游客客源地-->
      <rankData
        :data="touristSourceData"
        class="moduleBox marginRight"
        title="游客客源地"
        name="ykkyd"
      />
      <!--车辆来源城市-->
      <rankData
        :data="vehicleSourceData"
        class="moduleBox"
        title="车辆来源城市"
        name="cllycs"
      />
    </div>
  </div>
</template>

<script>
import searchBox from './components/searchBox'
import barChartData from './components/barChartData'
import ticketType from './components/ticketType'
import rankData from './components/rankData'
import {
  getScenicFlow,
  getSalesAmount,
  getOnlionOrder,
  getTicketType,
  getTouristSource,
  getVehicleSource
} from '../../api/forecast'
export default {
  name: 'Dfs',
  components: { searchBox, barChartData, ticketType, rankData },
  data() {
    return {
      spot: 'dafosi',
      flowData: {
        color: ['#f78fac'],
        legendData: ['客流量'],
        xAxisData: [],
        seriesName: '客流量',
        seriesData: []
      },
      salesAmountData: {
        color: ['#f78fac'],
        legendData: ['售票额'],
        xAxisData: [],
        seriesName: '售票额',
        seriesData: []
      },
      salesTicketsData: {
        color: ['#f78fac'],
        legendData: ['售票量'],
        xAxisData: [],
        seriesName: '售票量',
        seriesData: []
      },
      ticketsTypeData: [
        {
          icon: require('@/assets/tk1.png'),
          name: '团队票',
          num: 0,
          percent: 0
        },
        {
          icon: require('@/assets/tk2.png'),
          name: '散客票',
          num: 0,
          percent: 0
        },
        {
          icon: require('@/assets/tk3.png'),
          name: '网络票',
          num: 0,
          percent: 0
        }
      ],
      touristSourceData: {
        yAxisData: [],
        seriesData: []
      },
      vehicleSourceData: {
        yAxisData: [],
        seriesData: []
      }
    }
  },
  mounted() {
    // const self = this;
  },
  methods: {
    getData(param) {
      const self = this
      // 客流量
      getScenicFlow(self.spot, param).then(res => {
        if (res.status === 200) {
          const data = res.data.data || []
          let xAxis = [],
            series = []
          data.map(item => {
            xAxis.push(item.subject)
            series.push(item.value)
          })
          self.flowData.xAxisData = [...xAxis]
          self.flowData.seriesData = [...series]
        }
      })
      // 售票额
      getSalesAmount(self.spot, param).then(res => {
        if (res.status === 200) {
          const data = res.data.data || []
          let xAxis = [],
            series = []
          data.map(item => {
            xAxis.push(item.subject)
            series.push(item.value)
          })
          self.salesAmountData.xAxisData = [...xAxis]
          self.salesAmountData.seriesData = [...series]
        }
      })
      // 售票量
      getOnlionOrder(self.spot, param).then(res => {
        if (res.status === 200) {
          const data = res.data.data || []
          let xAxis = [],
            series = []
          data.map(item => {
            xAxis.push(item.subject)
            series.push(item.value)
          })
          self.salesTicketsData.xAxisData = [...xAxis]
          self.salesTicketsData.seriesData = [...series]
        }
      })
      // 售票类型
      getTicketType(self.spot, param).then(res => {
        if (res.status === 200) {
          const data = res.data.data || []
          let allTicket = 0,
            teamNum = 0,
            personalNum = 0,
            onlineNum = 0
          data.map(item => {
            if (item.subject === '团队票') {
              teamNum = item.value
            }
            if (item.subject === '散客票') {
              personalNum = item.value
            }
            if (item.subject === '网络票') {
              onlineNum = item.value
            }
            allTicket += item.value
          })
          const teamPercent = ((teamNum / allTicket) * 100).toFixed(2)
          const personalPercent = ((personalNum / allTicket) * 100).toFixed(2)
          const onlinePercent = ((onlineNum / allTicket) * 100).toFixed(2)
          self.ticketsTypeData[0].num = teamNum
          self.ticketsTypeData[0].percent = teamPercent
          self.ticketsTypeData[1].num = personalNum
          self.ticketsTypeData[1].percent = personalPercent
          self.ticketsTypeData[2].num = onlineNum
          self.ticketsTypeData[2].percent = onlinePercent
        }
      })
      // 客源地排行
      getTouristSource(self.spot, param).then(res => {
        if (res.status === 200) {
          const data = res.data.data || []
          let yAxis = [],
            series = []
          data.splice(0, 5).map(item => {
            yAxis.push(item.subject)
            series.push(item.value)
          })
          self.touristSourceData.yAxisData = [...yAxis].reverse()
          self.touristSourceData.seriesData = [...series].reverse()
        }
      })
      // 车辆来源城市排行
      getVehicleSource(self.spot, param).then(res => {
        if (res.status === 200) {
          const data = res.data.data || []
          let yAxis = [],
            series = []
          data.splice(0, 5).map(item => {
            yAxis.push(item.subject)
            series.push(item.value)
          })
          self.vehicleSourceData.yAxisData = [...yAxis].reverse()
          self.vehicleSourceData.seriesData = [...series].reverse()
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
  .dfs {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .moduleBox {
      width: 49.5%;
      padding: 1%;
      background: rgba(255, 255, 255, 0.05);
      margin-bottom: 1%;
    }
  }
  .marginRight {
    margin-right: 1%;
  }
}
</style>
