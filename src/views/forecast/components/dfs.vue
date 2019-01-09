<template>
  <div class="dfs">
    <!--假日数据查询-->
    <div class="cx">
      <!--top-->
      <div class="top">
        <!--日期-->
        <div class="time-box">
          <span>时间选择： </span>
          <el-date-picker
            v-model="value4"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"/>
          <!--查询-->
          <el-button size="mini" type="primary" @click="query">查询</el-button>
          <!--查询-->
          <img class="search" src="@/assets/icon/search.png" alt="">
          <!--下载-->
          <!-- <img class="down" src="@/assets/icon/down.png" alt=""> -->
        </div>
      </div>
      <!--热门旅游线路TOP10-->
      <div class="nlfb">
        <!--年龄分布-->
        <div class="nlfb-box">
          <!--title-->
          <p class="title">景区客流</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <skkl v-if="dfsScenicFlows" :chartData='dfsScenicFlow' id="skkl" height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--游客消费能力占比-->
        <div class="xfnl-box">
          <!--title-->
          <p class="title">散客票型分析</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <div class="chart-wrapper">
                <pie-chart-full v-if="sankeDfss" id="sankeDfs" :chartData='sankeDfs' height="100%" width="100%"/>
              </div>
            </div>
          </div>
        </div>
        <!--年龄-->
        <div class="xsph-box">
          <!--title-->
          <p class="title">游客客源地排行</p>
          <!--内容-->
          <div class="content1">
            <!--每1项-->
            <div class="one-box" v-if="dfsTouristSource[0]">
              <span class="name">{{ dfsTouristSource[0].subject }}</span>
              <p class="line1"/>
              <span class="num">{{ dfsTouristSource[0].value }}</span>
            </div>
            <div class="one-box" v-else>
            </div>
            <!--每2项-->
            <div class="one-box" v-if="dfsTouristSource[1]">
              <span class="name">{{ dfsTouristSource[1].subject }}</span>
              <p class="line2"/>
              <span class="num">{{ dfsTouristSource[1].value }}</span>
            </div>
            <div class="one-box" v-else>
            </div>
            <!--每3项-->
            <div class="one-box" v-if="dfsTouristSource[2]">
              <span class="name">{{ dfsTouristSource[2].subject }}</span>
              <p class="line3"/>
              <span class="num">{{ dfsTouristSource[2].value }}</span>
            </div>
            <div class="one-box" v-else>
            </div>
            <!--每4项-->
            <div class="one-box" v-if="dfsTouristSource[3]">
              <span class="name">{{ dfsTouristSource[3].subject }}</span>
              <p class="line4"/>
              <span class="num">{{ dfsTouristSource[3].value }}</span>
            </div>
            <div class="one-box" v-else>
            </div>
            <!--每5项-->
            <div class="one-box" v-if="dfsTouristSource[4]">
              <span class="name">{{ dfsTouristSource[4].subject }}</span>
              <p class="line5"/>
              <span class="num">{{ dfsTouristSource[4].value }}</span>
            </div>
            <div class="one-box" v-else>
            </div>
          </div>
        </div>
      </div>
      <!--游客线上偏好-->
      <div class="nlfb">
        <!--年龄分布-->
        <div class="nlfb-box">
          <!--title-->
          <p class="title">散客团队对比分析</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <tdkl id="tdkl" height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--游客消费能力占比-->
        <div class="xfnl-box">
          <!--title-->
          <p class="title">车辆来源地排行</p>
          <!--内容-->
          <div class="content">
            <!--每1项-->
            <div class="one-box" v-if="dfsTeam && dfsTeam.length > 0">
              <span class="name">{{ dfsTeam[0].subject }}</span>
              <p class="line1"/>
              <span class="num">{{ dfsTeam[0].value }}</span>
            </div>
            <!--每2项-->
            <div class="one-box" v-if="dfsTeam && dfsTeam.length > 0">
              <span class="name">{{ dfsTeam[1].subject }}</span>
              <p class="line2"/>
              <span class="num">{{ dfsTeam[1].value }}</span>
            </div>
            <!--每3项-->
            <div class="one-box" v-if="dfsTeam && dfsTeam.length > 0">
              <span class="name">{{ dfsTeam[2].subject }}</span>
              <p class="line3"/>
              <span class="num">{{ dfsTeam[2].value }}</span>
            </div>
            <!--每4项-->
            <div class="one-box" v-if="dfsTeam && dfsTeam.length > 0">
              <span class="name">{{ dfsTeam[3].subject }}</span>
              <p class="line4"/>
              <span class="num">{{ dfsTeam[3].value }}</span>
            </div>
            <!--每5项-->
            <div class="one-box" v-if="dfsTeam && dfsTeam.length > 0">
              <span class="name">{{ dfsTeam[4].subject }}</span>
              <p class="line5"/>
              <span class="num">{{ dfsTeam[4].value }}</span>
            </div>
            <!--每6项-->
            <div class="one-box" v-if="dfsTeam && dfsTeam.length > 0">
              <span class="name">{{ dfsTeam[5].subject }}</span>
              <p class="line6"/>
              <span class="num">{{ dfsTeam[5].value }}</span>
            </div>
            <!--每7项-->
            <div class="one-box" v-if="dfsTeam && dfsTeam.length > 0">
              <span class="name">{{ dfsTeam[6].subject }}</span>
              <p class="line7"/>
              <span class="num">{{ dfsTeam[6].value }}</span>
            </div>
            <!--每8项-->
            <div class="one-box" v-if="dfsTeam && dfsTeam.length > 0">
              <span class="name">{{ dfsTeam[7].subject }}</span>
              <p class="line8"/>
              <span class="num">{{ dfsTeam[7].value }}</span>
            </div>
            <!--每9项-->
            <div class="one-box" v-if="dfsTeam && dfsTeam.length > 0">
              <span class="name">{{ dfsTeam[8].subject }}</span>
              <p class="line9"/>
              <span class="num">{{ dfsTeam[8].value }}</span>
            </div>
            <!--每10项-->
            <div class="one-box" v-if="dfsTeam && dfsTeam.length > 0">
              <span class="name">{{ dfsTeam[9].subject }}</span>
              <p class="line10"/>
              <span class="num">{{ dfsTeam[9].value }}</span>
            </div>
          </div>
        </div>
        <!--游客线上偏好-->
        <div class="xsph-box1">
          <!--title-->
          <p class="title">旅行社销量排名</p>
          <!--内容-->
          <div class="content">
            <!--每1项-->
            <div class="one-box">
              <span class="name">新昌旅行社</span>
              <p class="line1"/>
              <span class="num">7262</span>
            </div>
            <!--每2项-->
            <div class="one-box">
              <span class="name">绍兴旅行社</span>
              <p class="line2"/>
              <span class="num">6862</span>
            </div>
            <!--每3项-->
            <div class="one-box">
              <span class="name">中国青社</span>
              <p class="line3"/>
              <span class="num">6242</span>
            </div>
            <!--每4项-->
            <div class="one-box">
              <span class="name">完美旅行社</span>
              <p class="line4"/>
              <span class="num">5322</span>
            </div>
            <!--每5项-->
            <div class="one-box">
              <span class="name">星空旅行社</span>
              <p class="line5"/>
              <span class="num">4222</span>
            </div>
          </div>
        </div>
      </div>
      <!--游客消费-->
      <div class="nlfb">
        <!--年龄分布-->
        <div class="nlfb-box">
          <!--title-->
          <p class="title">售票量</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <dsdd id="dsdd" height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--游客消费能力占比-->
        <div class="xfnl-box">
          <!--title-->
          <p class="title">订单来源</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <nlfb-ddly v-if="bingIf4" :id="ids[4]" height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--游客线上偏好-->
        <div class="xsph-box">
          <!--title-->
          <p class="title">客户来源地分析</p>
          <!--内容-->
          <div class="content">
            <!--每1项-->
            <div class="one-box" v-if="dfsSource && dfsSource.length > 0">
              <span class="name">{{ dfsSource[0].subject }}</span>
              <p class="line1"/>
              <span class="num">{{ dfsSource[0].value }}</span>
            </div>
            <!--每2项-->
            <div class="one-box" v-if="dfsSource && dfsSource.length > 0">
              <span class="name">{{ dfsSource[1].subject }}</span>
              <p class="line2"/>
              <span class="num">{{ dfsSource[1].value }}</span>
            </div>
            <!--每3项-->
            <div class="one-box" v-if="dfsSource && dfsSource.length > 0">
              <span class="name">{{ dfsSource[2].subject }}</span>
              <p class="line3"/>
              <span class="num">{{ dfsSource[2].value }}</span>
            </div>
            <!--每4项-->
            <div class="one-box" v-if="dfsSource && dfsSource.length > 0">
              <span class="name">{{ dfsSource[3].subject }}</span>
              <p class="line4"/>
              <span class="num">{{ dfsSource[3].value }}</span>
            </div>
            <!--每5项-->
            <div class="one-box" v-if="dfsSource && dfsSource.length > 0">
              <span class="name">{{ dfsSource[4].subject }}</span>
              <p class="line5"/>
              <span class="num">{{ dfsSource[4].value }}</span>
            </div>
            <!--每6项-->
            <div class="one-box" v-if="dfsSource && dfsSource.length > 0">
              <span class="name">{{ dfsSource[5].subject }}</span>
              <p class="line6"/>
              <span class="num">{{ dfsSource[5].value }}</span>
            </div>
            <!--每7项-->
            <div class="one-box" v-if="dfsSource && dfsSource.length > 0">
              <span class="name">{{ dfsSource[6].subject }}</span>
              <p class="line7"/>
              <span class="num">{{ dfsSource[6].value }}</span>
            </div>
            <!--每8项-->
            <div class="one-box" v-if="dfsSource && dfsSource.length > 0">
              <span class="name">{{ dfsSource[7].subject }}</span>
              <p class="line8"/>
              <span class="num">{{ dfsSource[7].value }}</span>
            </div>
            <!--每9项-->
            <div class="one-box" v-if="dfsSource && dfsSource.length > 0">
              <span class="name">{{ dfsSource[8].subject }}</span>
              <p class="line9"/>
              <span class="num">{{ dfsSource[8].value }}</span>
            </div>
            <!--每10项-->
            <div class="one-box" v-if="dfsSource && dfsSource.length > 0">
              <span class="name">{{ dfsSource[9].subject }}</span>
              <p class="line10"/>
              <span class="num">{{ dfsSource[9].value }}</span>
            </div>
          </div>
        </div>
      </div>
      <!--游客消费2-->
      <div class="nlfb2">
        <!--年龄分布-->
        <div class="nlfb-box">
          <!--title-->
          <p class="title">微信公众号点击率</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <yi-zhou v-if="kydxqs" :chartData="kydxq" id="kydxq" height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--游客消费能力占比-->
        <div class="xfnl-box">
          <!--title-->
          <p class="title">销售渠道</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <ykxb-xsqd height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--游客线上偏好-->
        <div class="xsph-box">
          <!--title-->
          <p class="title">渠道广告投入</p>
          <!--内容-->
          <div class="content">
            <div class="chart-wrapper">
              <nlfb-qdgg id="ids3" height="100%" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import skkl from '@/components/Charts/holiday-kl-skkl'
import tdkl from '@/components/Charts/holiday-kl-tdkl'
import dsdd from '@/components/Charts/holiday-kl-dsdd'
import ykxbXsqd from '@/components/Charts/holiday-xsqd'
import nlfb from '@/components/Charts/holiday-nlfb'
import nlfbQdgg from '@/components/Charts/holiday-qdgg'
import nlfbDdly from '@/components/Charts/dfs-ddly'
import xfzhe from '@/components/Charts/holiday-xf-zhe'
import YiZhou from '@/views/dashboard/admin/components/YiZhou'
import PieChartFull from '@/views/dashboard/admin/components/dfs'
import { mapGetters } from 'vuex'
import { wechatDf, dfsSanke, dfsTeam, dfsSource, sankeTypeDfs, dfsTouristSource, dfsScenicFlow } from '@/api/home'
export default {
  components: {
    skkl, nlfb, xfzhe, YiZhou, PieChartFull, nlfbDdly, nlfbQdgg, ykxbXsqd, tdkl, dsdd
  },
  data() {
    return {
      years: [
        {
          value: '选项1',
          label: '2014'
        }, {
          value: '选项2',
          label: '2015'
        }, {
          value: '选项3',
          label: '2016'
        }, {
          value: '选项4',
          label: '2017'
        }, {
          value: '选项5',
          label: '2018'
        }
      ],
      yearsDefault: '2018',
      holiday: [
        {
          value: '选项1',
          label: '新年'
        }, {
          value: '选项2',
          label: '圣诞节'
        }, {
          value: '选项3',
          label: '元旦'
        }, {
          value: '选项4',
          label: '端午节'
        }, {
          value: '选项5',
          label: '国庆节'
        }
      ],
      holidayDefault: '国庆节',
      ids: ['bing1', 'bing2', 'bing3', 'bing4', 'bing5', 'bing6'],
      bingIf1: true,
      bingIf2: true,
      bingIf3: true,
      bingIf4: true,
      bingIf5: true,
      bingIf6: true,
      xfzhe: true,
      value4: [new Date() - 3600 * 1000 * 24 * 7, new Date()],
      kydxqs: false,
      dataObj: {
        start: '',
        end: ''
      },
      dfsSanke: [],
      dfsTeam: [],
      dfsSource: [],
      sankeDfs: [],
      sankeDfss: false,
      dfsTouristSource: [],
      dfsScenicFlow: [],
      dfsScenicFlows: false
    }
  },
  mounted() {
    this.$store.dispatch('getCity')
    this.defaultDate()
    this.initRequest()
  },
  computed: {
    ...mapGetters([
      'getcity10'
    ])
  },
  methods: {
    defaultDate() {
      let start
      let end
      let _start = new Date(this.value4[0])
      let _end = this.value4[1]
      // console.log(_start, '111')
      // console.log(_end, '222')
      let s_y = _start.getMonth() + 1
      let s_r = _start.getDate()
      let e_y = _end.getMonth() + 1
      let e_r = _end.getDate()
      // 开始月
      if (s_y > 0 && s_y < 10) {
        s_y = '0' + s_y
      } else {
        s_y = s_y
      }
      // 开始日
      if (s_r > 0 && s_r < 10) {
        s_r = '0' + s_r
      } else {
        s_r = s_r
      }
      // 结束月
      if (e_y > 0 && e_y < 10) {
        e_y = '0' + e_y
      } else {
        e_y = e_y
      }
      // 结束日
      if (e_r > 0 && e_r < 10) {
        e_r = '0' + e_r
      } else {
        e_r = e_r
      }
      start = _start.getFullYear() + '-' + s_y + '-' + s_r
      end = _end.getFullYear() + '-' + e_y + '-' + e_r
      // console.log(start, '开始时间')
      // console.log(end, '结束时间')
      this.dataObj.start = start
      this.dataObj.end = end
    },
    initRequest() {
      // 投诉
      wechatDf(this.dataObj).then(res => {
        // console.log(res)
        const data = res.data.data
        if (res.status === 200) {
          this.kydxq = data
          this.kydxqs = true
        }
      }).catch(err => {
        console.log(err)
      })
      // 大佛寺散客
      dfsSanke().then(res => {
        const data = res.data.data
        if(res.status === 200) {
          this.dfsSanke = data
        }
      }).catch(err => {
        console.log(err)
      })
      //大佛寺团队
      dfsTeam().then(res => {
        const data = res.data.data
        if (res.status === 200) {
          this.dfsTeam = data
        }
      }).catch(err => {
        console.log(err)
      })
      //大佛寺来源地
      dfsSource().then(res => {
        const data = res.data.data
        if(res.status === 200) {
          this.dfsSource = data
        }
      }).catch(err => {
        console.log(err)
      })
      // 大佛寺散客票型分析
      sankeTypeDfs(this.dataObj).then(res => {
        const data = res.data.data
        if (res.status === 200) {
          this.sankeDfs = data
          this.sankeDfss = true
        }
      }).catch(err => {
        console.log(err)
      })
      // 大佛寺游客客源地
      dfsTouristSource(this.dataObj).then(res => {
        const data = res.data.data
        if (res.status === 200) {
          // console.log(data, '111111')
          this.dfsTouristSource = data
        }
      }).catch(err => {
        console.log(err)
      })
      // 大佛寺景区客流
      dfsScenicFlow(this.dataObj).then(res => {
        const data = res.data.data
        if (res.status === 200) {
          console.log(data, '1111112')
          this.dfsScenicFlow = data
          this.dfsScenicFlows = true
        }
      }).catch(err => {
        console.log(err)
      })
    },
    query() {
      this.defaultDate()
      console.log(this.dataObj, '日期是多少')
      this.initRequest()
    }
  }
}
</script>

<style lang="scss">
.dfs {
  position: relative;
  z-index: 999;
  width: 100%;
  height: 100%;
  // padding: 1%;
  // margin: 1.5%;
  // display: flex;
  // flex-direction: column;
  overflow-y: overlay;
  .el-date-editor .el-range-separator {
    padding: 0!important;
    color: #000!important;
  }
  .cx {
    // background: rgba(255, 255, 255, 0.05);
    // padding: 1%;
    // flex: 5;
    .top {
      flex: 2;
      // background: fuchsia;
      // background: rgba(255, 255, 255, 0.05);
      display: flex;
      flex-direction: column;
      // margin-bottom: 1%;
      // padding: 1% 1% 0 1%;
      .time-box {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2%;
        background: rgba(255, 255, 255, 0.05);
        padding-top: 1%;
        padding-bottom: 1%;
        margin-bottom: 1%;
        span {
          color: #ffffff;
          margin-right: 2%;
          font-size: 20px;
        }
        .el-button--mini {
          margin-left: 2%;
        }
      }
    }
    .nlfb {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1%;
      .nlfb-box {
        flex: 1;
        background: rgba(255, 255, 255, 0.05);
        flex-direction: column;
        .title {
          font-size: 22px;
          color: #bbd5ff;
          background: #45404d;
          padding: 1.5%;
        }
        .content {
          // background: rgba(255, 255, 255, 0.05);
          .chart-wrapper {
            height: 320px;
            width: 100%;
          }
        }
      }
      .xfnl-box {
        flex: 1;
        background: rgba(255, 255, 255, 0.05);
        margin: 0 1%;
        flex-direction: column;
        .title {
          font-size: 22px;
          color: #bbd5ff;
          background: #45404d;
          padding: 1.5%;
        }
        .content {
          // background: rgba(255, 255, 255, 0.05);s
          .chart-wrapper {
            height: 320px;
            width: 100%;
          }
          .one-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1% 2%;
            .name {
              font-size: 20px;
              color: #889db5;
              width: 20%;
              margin-left: 10%;
            }
            .line1 {
              height: 14px;
              width: 50%;
              background: #f69704;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line2 {
              height: 14px;
              width: 46%;
              background: #f79007;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line3 {
              height: 14px;
              width: 42%;
              background: #f88909;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line4 {
              height: 14px;
              width: 38%;
              background: #f8820c;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line5 {
              height: 14px;
              width: 34%;
              background: #f97b0e;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line6 {
              height: 14px;
              width: 30%;
              background: #fa7311;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line7 {
              height: 14px;
              width: 26%;
              background: #fb6c13;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line8 {
              height: 14px;
              width: 22%;
              background: #fb6516;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line9 {
              height: 14px;
              width: 18%;
              background: #fc5e18;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line10 {
              height: 14px;
              width: 14%;
              background: #fd571b;
              border-radius: 10px;
              margin-right: 2%;
            }
            .num {
              font-size: 16px;
              color: #bbd5ff;
              flex: 1;
            }
          }
        }
      }
      .xsph-box {
        flex: 1;
        background: rgba(255, 255, 255, 0.05);
        flex-direction: column;
        display: flex;
        .title {
          font-size: 22px;
          color: #bbd5ff;
          background: #45404d;
          padding: 1.5%;
        }
        .content {
          background: rgba(255, 255, 255, 0.05);
          flex: 1;
          .chart-wrapper {
            height: 320px;
            width: 100%;
          }
          .one-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1% 2%;
            .name {
              font-size: 20px;
              color: #889db5;
              width: 20%;
              margin-left: 10%;
            }
            .line1 {
              height: 14px;
              width: 50%;
              background: #f69704;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line2 {
              height: 14px;
              width: 46%;
              background: #f79007;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line3 {
              height: 14px;
              width: 42%;
              background: #f88909;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line4 {
              height: 14px;
              width: 38%;
              background: #f8820c;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line5 {
              height: 14px;
              width: 34%;
              background: #f97b0e;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line6 {
              height: 14px;
              width: 30%;
              background: #fa7311;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line7 {
              height: 14px;
              width: 26%;
              background: #fb6c13;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line8 {
              height: 14px;
              width: 22%;
              background: #fb6516;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line9 {
              height: 14px;
              width: 18%;
              background: #fc5e18;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line10 {
              height: 14px;
              width: 14%;
              background: #fd571b;
              border-radius: 10px;
              margin-right: 2%;
            }
            .num {
              font-size: 16px;
              color: #bbd5ff;
              flex: 1;
            }
          }
        }
        .content1 {
          background: rgba(255, 255, 255, 0.05);
          flex: 1;
          .chart-wrapper {
            height: 320px;
            width: 100%;
          }
          .one-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 3% 2%;
            .name {
              font-size: 20px;
              color: #889db5;
              width: 20%;
              margin-left: 10%;
            }
            .line1 {
              height: 14px;
              width: 50%;
              background: #f69704;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line2 {
              height: 14px;
              width: 46%;
              background: #f79007;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line3 {
              height: 14px;
              width: 42%;
              background: #f88909;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line4 {
              height: 14px;
              width: 38%;
              background: #f8820c;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line5 {
              height: 14px;
              width: 34%;
              background: #f97b0e;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line6 {
              height: 14px;
              width: 30%;
              background: #fa7311;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line7 {
              height: 14px;
              width: 26%;
              background: #fb6c13;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line8 {
              height: 14px;
              width: 22%;
              background: #fb6516;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line9 {
              height: 14px;
              width: 18%;
              background: #fc5e18;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line10 {
              height: 14px;
              width: 14%;
              background: #fd571b;
              border-radius: 10px;
              margin-right: 2%;
            }
            .num {
              font-size: 16px;
              color: #bbd5ff;
              flex: 1;
            }
          }
        }
      }
    }
    .nlfb2 {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1%;
      .nlfb-box {
        flex: 1;
        background: rgba(255, 255, 255, 0.05);
        flex-direction: column;
        .title {
          font-size: 22px;
          color: #bbd5ff;
          background: #45404d;
          padding: 1.5%;
        }
        .content {
          background: rgba(255, 255, 255, 0.05);
          .chart-wrapper {
            height: 320px;
            width: 100%;
          }
        }
      }
      .xfnl-box {
        flex: 1;
        background: rgba(255, 255, 255, 0.05);
        margin: 0 1%;
        flex-direction: column;
        .title {
          font-size: 22px;
          color: #bbd5ff;
          background: #45404d;
          padding: 1.5%;
        }
        .content {
          background: rgba(255, 255, 255, 0.05);
          .chart-wrapper {
            height: 320px;
            width: 100%;
          }
          .one-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1% 2%;
            .name {
              font-size: 20px;
              color: #889db5;
              width: 38%;
            }
            .line1 {
              height: 14px;
              width: 50%;
              background: #f69704;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line2 {
              height: 14px;
              width: 46%;
              background: #f79007;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line3 {
              height: 14px;
              width: 42%;
              background: #f88909;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line4 {
              height: 14px;
              width: 38%;
              background: #f8820c;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line5 {
              height: 14px;
              width: 34%;
              background: #f97b0e;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line6 {
              height: 14px;
              width: 30%;
              background: #fa7311;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line7 {
              height: 14px;
              width: 26%;
              background: #fb6c13;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line8 {
              height: 14px;
              width: 22%;
              background: #fb6516;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line9 {
              height: 14px;
              width: 18%;
              background: #fc5e18;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line10 {
              height: 14px;
              width: 14%;
              background: #fd571b;
              border-radius: 10px;
              margin-right: 2%;
            }
            .num {
              font-size: 16px;
              color: #bbd5ff;
              flex: 1;
            }
          }
        }
      }
      .xsph-box {
        flex: 1;
        background: rgba(255, 255, 255, 0.05);
        flex-direction: column;
        .title {
          font-size: 22px;
          color: #bbd5ff;
          background: #45404d;
          padding: 1.5%;
        }
        .content {
          background: rgba(255, 255, 255, 0.05);
          .chart-wrapper {
            height: 320px;
            width: 100%;
          }
          .one-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1% 2%;
            .name {
              font-size: 20px;
              color: #889db5;
              width: 20%;
              margin-left: 10%;
            }
            .line1 {
              height: 14px;
              width: 50%;
              background: #47b2d3;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line2 {
              height: 14px;
              width: 46%;
              background: #40add4;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line3 {
              height: 14px;
              width: 42%;
              background: #39a7d5;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line4 {
              height: 14px;
              width: 38%;
              background: #32a2d7;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line5 {
              height: 14px;
              width: 34%;
              background: #2b9dd8;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line6 {
              height: 14px;
              width: 30%;
              background: #2597d9;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line7 {
              height: 14px;
              width: 26%;
              background: #1e92da;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line8 {
              height: 14px;
              width: 22%;
              background: #178ddc;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line9 {
              height: 14px;
              width: 18%;
              background: #1087dd;
              border-radius: 10px;
              margin-right: 2%;
            }
            .line10 {
              height: 14px;
              width: 14%;
              background: #0982de;
              border-radius: 10px;
              margin-right: 2%;
            }
            .num {
              font-size: 16px;
              color: #bbd5ff;
              flex: 1;
            }
          }
        }
      }
    }
    .xsph-box1 {
      flex: 1;
      background: rgba(255, 255, 255, 0.05);
      flex-direction: column;
      display: flex;
      .title {
        font-size: 22px;
        color: #bbd5ff;
        background: #45404d;
        padding: 1.5%;
      }
      .content {
        background: rgba(255, 255, 255, 0.05);
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .one-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1% 2%;
          .name {
            font-size: 20px;
            color: #889db5;
            width: 25%;
            margin-left: 10%;
          }
          .line1 {
            height: 14px;
            width: 50%;
            background: #47b2d3;
            border-radius: 10px;
            margin-right: 2%;
          }
          .line2 {
            height: 14px;
            width: 46%;
            background: #40add4;
            border-radius: 10px;
            margin-right: 2%;
          }
          .line3 {
            height: 14px;
            width: 42%;
            background: #39a7d5;
            border-radius: 10px;
            margin-right: 2%;
          }
          .line4 {
            height: 14px;
            width: 38%;
            background: #32a2d7;
            border-radius: 10px;
            margin-right: 2%;
          }
          .line5 {
            height: 14px;
            width: 34%;
            background: #2b9dd8;
            border-radius: 10px;
            margin-right: 2%;
          }
          .line6 {
            height: 14px;
            width: 30%;
            background: #2597d9;
            border-radius: 10px;
            margin-right: 2%;
          }
          .line7 {
            height: 14px;
            width: 26%;
            background: #1e92da;
            border-radius: 10px;
            margin-right: 2%;
          }
          .line8 {
            height: 14px;
            width: 22%;
            background: #178ddc;
            border-radius: 10px;
            margin-right: 2%;
          }
          .line9 {
            height: 14px;
            width: 18%;
            background: #1087dd;
            border-radius: 10px;
            margin-right: 2%;
          }
          .line10 {
            height: 14px;
            width: 14%;
            background: #0982de;
            border-radius: 10px;
            margin-right: 2%;
          }
          .num {
            font-size: 16px;
            color: #bbd5ff;
            flex: 1;
          }
        }
      }
    }
  }
}
</style>

