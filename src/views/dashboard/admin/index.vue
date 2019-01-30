<template>
  <div class="dashboard-editor-container">
    <!--左-->
    <div class="left">
      <!--重点景区数据-->
      <div class="zdjq">
        <!--标题行-->
        <div class="zdjq-title-box">
          <p class="title">重点景区数据</p>
          <p class="title-right" @click="TwoLevelPages('/forecast/index/dfs')">
            <span>更多</span>
            <span class="el-icon-d-arrow-right"/>
          </p>
        </div>
        <!--内容行-->
        <div class="zdjq-content">
          <!--大佛寺-->
          <div class="dfs">
            <p class="dfs-title">大佛寺</p>
            <!--游客接待数-->
            <div class="dfs-content">
              <img class="dfs-icon" src="@/assets/icon/ppl.png" alt="">
              <div class="dfs-content-right">
                <p class="dfs-text">游客接待数</p>
                <p class="dfs-num-box" v-if="importDfs && importDfs.length > 0">
                  <span class="dfs-num">{{ importDfs[0].value}}</span>
                  <span class="dfs-unit">个</span>
                </p>
              </div>
            </div>
            <!--旅游收入-->
            <div class="dfs-content">
              <img class="dfs-icon dfs-icons" src="@/assets/icon/incom.png" alt="">
              <div class="dfs-content-right">
                <p class="dfs-text">旅游收入</p>
                <p class="dfs-num-box" v-if="importDfs && importDfs.length > 0">
                  <span class="dfs-num">{{ importDfs[1].value}}</span>
                  <span class="dfs-unit">元</span>
                </p>
              </div>
            </div>
          </div>
          <!--十九峰-->
          <div class="sjf">
            <p class="dfs-title">十九峰</p>
            <!--游客接待数-->
            <div class="dfs-content">
              <img class="dfs-icon dfs-icons" src="@/assets/icon/ppl.png" alt="">
              <div class="dfs-content-right">
                <p class="dfs-text">游客接待数</p>
                <p class="dfs-num-box" v-if="importSjf && importDfs.length > 0">
                  <span class="dfs-num">{{ importSjf[0].value}}</span>
                  <span class="dfs-unit">个</span>
                </p>
              </div>
            </div>
            <!--旅游收入-->
            <div class="dfs-content">
              <img class="dfs-icon" src="@/assets/icon/incom.png" alt="">
              <div class="dfs-content-right">
                <p class="dfs-text">旅游收入</p>
                <p class="dfs-num-box" v-if="importSjf && importDfs.length > 0">
                  <span class="dfs-num">{{ importSjf[1].value}}</span>
                  <span class="dfs-unit">元</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--乡村旅游热度排行top5-->
      <div class="xcly">
        <!--标题行-->
        <div class="zdjq-title-box">
          <p class="title">乡村旅游热度排行top5</p>
          <p class="title-right" @click="TwoLevelPages('/PassengerFlowAnalysis/index')">
            <span>更多</span>
            <span class="el-icon-d-arrow-right"/>
          </p>
        </div>
        <!--内容-->
        <div class="xcly-content">
          <div class="xc-box">
            <p class="num">1</p>
            <p v-if="this.hotTown.length>0" class="name">
              <span>{{ this.hotTown[0].substring(0,1) }}</span>
              <span>{{ this.hotTown[0].substring(1,2) }}</span>
              <span>{{ this.hotTown[0].substring(2,3) }}</span>
            </p>
            <p v-else class="name">
              <span>梅</span>
              <span>渚</span>
              <span>镇</span>
            </p>
          </div>
          <div class="xc-box2">
            <p class="num">2</p>
            <p v-if="this.hotTown.length>0" class="name">
              <span>{{ this.hotTown[1].substring(0,1) }}</span>
              <span>{{ this.hotTown[1].substring(1,2) }}</span>
              <span>{{ this.hotTown[1].substring(2,3) }}</span>
            </p>
            <p v-else class="name">
              <span>巧</span>
              <span>英</span>
              <span>乡</span>
            </p>
          </div>
          <div class="xc-box3">
            <p class="num">3</p>
            <p v-if="this.hotTown.length>0" class="name">
              <span>{{ this.hotTown[2].substring(0,1) }}</span>
              <span>{{ this.hotTown[2].substring(1,2) }}</span>
              <span>{{ this.hotTown[2].substring(2,3) }}</span>
            </p>
            <p v-else class="name">
              <span>东</span>
              <span>明</span>
              <span>乡</span>
            </p>
          </div>
          <div class="xc-box4">
            <p class="num">4</p>
            <p v-if="this.hotTown.length>0" class="name">
              <span>{{ this.hotTown[3].substring(0,1) }}</span>
              <span>{{ this.hotTown[3].substring(1,2) }}</span>
              <span>{{ this.hotTown[3].substring(2,3) }}</span>
            </p>
            <p v-else class="name">
              <span>回</span>
              <span>乡</span>
              <span>镇</span>
            </p>
          </div>
          <div class="xc-box5">
            <p class="num">5</p>
            <p v-if="this.hotTown.length>0" class="name">
              <span>{{ this.hotTown[4].substring(0,1) }}</span>
              <span>{{ this.hotTown[4].substring(1,2) }}</span>
              <span>{{ this.hotTown[4].substring(2,3) }}</span>
            </p>
            <p v-else class="name">
              <span>沙</span>
              <span>溪</span>
              <span>镇</span>
            </p>
          </div>
        </div>
      </div>
      <!--旅游消费额变化趋势/类型分析-->
      <div class="edfl">
        <!--旅游消费额变化-->
        <div class="bh">
          <!--标题行-->
          <div class="zdjq-title-box">
            <p class="title">旅游消费额度变化趋势(万元)</p>
            <p class="title-right" @click="TwoLevelPages('/consumption/index')">
              <span>更多</span>
              <span class="el-icon-d-arrow-right"/>
            </p>
          </div>
          <!--内容区-->
          <div class="content-box">
            <div class="chart-container">
              <lvxf v-if="limits" :chartData='limit' height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--旅游消费类型分析-->
        <div class="lx">
          <!--标题行-->
          <div class="zdjq-title-box">
            <p class="title">旅游消费类型分析(万元)</p>
            <p class="title-right" @click="TwoLevelPages('/consumption/index')">
              <span>更多</span>
              <span class="el-icon-d-arrow-right"/>
            </p>
          </div>
          <!--内容区-->
          <div class="content-box">
            <div class="chart-wrapper">
              <bar-chart v-if="types" :chartData='type' height="100%" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--中-->
    <div class="middle">
      <!--main-->
      <div class="main">
        <!--全域客流-->
        <dt-view v-if="qykl" width="100%" height="100%"/>
        <!--旅游资源-->
        <lv-view v-if="lvzy" width="100%" height="100%"/>
        <!--按钮-->
        <div class="btn">
          <div class="btn-box">
            <p :class="{qyb: qyb}" class="qy" @click="qyEvent">全域客流</p>
            <p :class="{zyb: zyb}" class="zy" @click="lyEvent">旅游资源</p>
          </div>
        </div>
      </div>
      <!--main-bottom-->
      <div class="main-bottom">
        <!--客源地-->
        <div class="kyd">
          <!--标题行-->
          <div class="zdjq-title-box">
            <p class="title">客源来源地top5</p>
            <p class="title-right" @click="TwoLevelPages('/PassengerFlowAnalysis/index')">
              <span>更多</span>
              <span class="el-icon-d-arrow-right"/>
            </p>
          </div>
          <!--内容区-->
          <div class="content-box">
            <div class="chart-wrapper">
              <pie-chart-full
                v-if="getcity.length && getcity.length > 0"
                :chartData='shengqu'
                id="home-top5"
                height="100%"
                width="100%"/>
                <!--按钮-->
                <div class="btn">
                  <div class="btn-box">
                    <p :class="{qyb: qybs}" class="qy" @click="qyEvents"></p>
                    <p :class="{zyb: zybs}" class="zy" @click="lyEvents"></p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <!--进一周游客数-->
        <div class="yks">
          <!--标题行-->
          <div class="zdjq-title-box">
            <p class="title">近一周游客数</p>
            <p class="title-right" @click="TwoLevelPages('/PassengerFlowAnalysis/index')">
              <span>更多</span>
              <span class="el-icon-d-arrow-right"/>
            </p>
          </div>
          <!--内容区-->
          <div class="content-box">
            <div class="chart-wrapper">
              <yi-zhou v-if="weekly" :chartData="kydxq" id="kydxq" height="100%" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--右-->
    <div class="right">
      <!--sskl-->
      <div class="sskl">
        <div class="title">实时客流</div>
        <div class="num">67577</div>
      </div>
      <!--cyjc-->
      <div class="cyjc">
        <!--标题行-->
        <div class="zdjq-title-box">
          <p class="title">产业监测数据</p>
          <p class="title-right" @click="TwoLevelPages('/economicalOperation/index')">
            <span>更多</span>
            <span class="el-icon-d-arrow-right"/>
          </p>
        </div>
        <!--内容区-->
        <div class="content-box">
          <!--左-->
          <div class="left-box">
            <!--上-->
            <div class="top-box">
              <img src="@/assets/icon/pplb.png" alt="">
              <div class="text-box">
                <p class="title">游客接待数</p>
                <p class="content-box" v-if="base && base.length > 0">
                  <span class="num">{{ base[1].income.in + base[1].income.out }}</span>
                  <span class="unit">个</span>
                </p>
              </div>
            </div>
            <!--下-->
            <div class="bottom-box">
              <!--境外-->
              <p class="l-box" v-if="base && base.length > 0">
                <span class="name">境外游客</span>
                <span class="num">{{ base[0].tourNumber.out }}</span>
                <span class="unit">个</span>
              </p>
              <!--境内-->
              <p class="l-box" v-if="base && base.length > 0">
                <span class="name">境内游客</span>
                <span class="num">{{ base[0].tourNumber.in }}</span>
                <span class="unit">个</span>
              </p>
            </div>
          </div>
          <!--右-->
          <div class="right-box">
            <!--上-->
            <div class="top-box">
              <img src="@/assets/icon/incomor.png" alt="">
              <div class="text-box">
                <p class="title">旅游收入</p>
                <p class="content-box" v-if="base && base.length > 0">
                  <span class="num">{{ base[0].tourNumber.in + base[0].tourNumber.out }}</span>
                  <span class="unit">万元</span>
                </p>
              </div>
            </div>
            <!--下-->
            <div class="bottom-box">
              <!--境外-->
              <p class="l-box" v-if="base && base.length > 0">
                <span class="name">境外收入</span>
                <span class="num">{{ base[1].income.out }}</span>
                <span class="unit">万元</span>
              </p>
              <!--境内-->
              <p class="l-box" v-if="base && base.length > 0">
                <span class="name">境内收入</span>
                <span class="num">{{ base[1].income.in }}</span>
                <span class="unit">万元</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <!--zyfb-->
      <div class="zyfb">
        <!--标题行-->
        <div class="zdjq-title-box">
          <p class="title">资源分布</p>
          <p class="title-right" @click="TwoLevelPages('/weatherEnvironment/index')">
            <span>更多</span>
            <span class="el-icon-d-arrow-right"/>
          </p>
        </div>
        <!--内容区-->
        <div class="content-box">
          <!--上-->
          <div class="top">
            <div class="one">
              <img src="@/assets/icon/pk.png" alt="">
              <div class="text-box" v-if="resource && resource.length > 0">
                <p class="name">景区</p>
                <p class="num">{{ resource[0].value }}</p>
              </div>
            </div>
            <div class="one">
              <img src="@/assets/icon/cafe.png" alt="">
              <div class="text-box" v-if="resource && resource.length > 0">
                <p class="name">餐饮</p>
                <p class="num">{{ resource[1].value }}</p>
              </div>
            </div>
            <div class="one">
              <img src="@/assets/icon/hotel.png" alt="">
              <div class="text-box" v-if="resource && resource.length > 0">
                <p class="name">酒店</p>
                <p class="num">{{ resource[2].value }}</p>
              </div>
            </div>
          </div>
          <!--中-->
          <div class="middles">
            <div class="one">
              <img src="@/assets/icon/town.png" alt="">
              <div class="text-box text-box1" v-if="resource && resource.length > 0">
                <p class="name">A级村庄</p>
                <p class="num">{{ resource[3].value }}</p>
              </div>
            </div>
            <div class="one">
              <img src="@/assets/icon/tvlag.png" class="qg" alt="">
              <div class="text-box" v-if="resource && resource.length > 0">
                <p class="name">旅行社</p>
                <p class="num">{{ resource[4].value }}</p>
              </div>
            </div>
            <div class="one">
              <img src="@/assets/icon/minsu.png" class="ms" alt="">
              <div class="text-box" v-if="resource && resource.length > 0">
                <p class="name">民宿</p>
                <p class="num">{{ resource[5].value }}</p>
              </div>
            </div>
          </div>
          <!--下-->
          <div class="bottom">
            <div class="one">
              <img src="@/assets/icon/shop.png" alt="">
              <div class="text-box" v-if="resource && resource.length > 0">
                <p class="name">购物处</p>
                <p class="num">{{ resource[6].value }}</p>
              </div>
            </div>
            <div class="one one1">
              <img src="@/assets/icon/toilet.png" alt="">
              <div class="text-box" v-if="resource && resource.length > 0">
                <p class="name">景区公厕</p>
                <p class="num">{{ resource[7].value }}</p>
              </div>
            </div>
            <div class="one">
              <img src="@/assets/icon/daoyou.png" class="dy" alt="">
              <div class="text-box" v-if="resource && resource.length > 0">
                <p class="name">导游</p>
                <p class="num">{{ resource[8].value }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--rcph-->
      <div class="rcfb">
        <!--标题行-->
        <div class="zdjq-title-box">
          <p class="title">热词排行</p>
          <p class="title-right" @click="TwoLevelPages('/publicSentiment/index')">
            <span>更多</span>
            <span class="el-icon-d-arrow-right"/>
          </p>
        </div>
        <!--内容区-->
        <div class="content-box">
          <div class="chart-wrapper">
            <zi-fu-yun :chartData='zifuYun' height="100%" width="100%"/>
          </div>
        </div>
      </div>
      <!--yqfx-->
      <div class="yqfx">
        <!--标题行-->
        <div class="zdjq-title-box">
          <p class="title">舆情分析</p>
          <p class="title-right" @click="TwoLevelPages('/publicSentiment/index')">
            <span>更多</span>
            <span class="el-icon-d-arrow-right"/>
          </p>
        </div>
        <!--正负-->
        <div class="zfzf">
          <!--zheng-->
          <div class="zzzz">
            <p class="title">正面</p>
            <el-progress type="circle" :stroke-width='h' :width='w' :percentage="zhengz" color="#32cf35"/>
          </div>
          <!--fu-->
          <div class="ffff">
            <p class="title">负面</p>
            <el-progress type="circle" :stroke-width='h' :width='w' :percentage="fuz" color="#ea8ebc"/>
          </div>
        </div>
        <!--内容区-->
        <div class="content-box">
          <!--舆情 热门-->
          <div class="yr-box">
            <!--舆情信息-->
            <div class="yq-box">
              <img src="@/assets/icon/yuqing.png" alt="">
              <div class="text-box">
                <p class="title">舆情信息</p>
                <p class="num-box">
                  <span class="num">265</span>
                  <span class="unit">条</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lvxf from '@/components/Charts/lineMarkerOne'
import BarChart from '@/views/dashboard/admin/components/BarChart'
import PieChartFull from '@/views/dashboard/admin/components/PieChartFull'
import YiZhou from '@/views/dashboard/admin/components/YiZhou'
import ZiFuYun from '@/views/dashboard/admin/components/ZiFuYun'
import jdt from '@/views/dashboard/admin/components/jdt'
import dtView from './components/dt.vue'
import lvView from './components/lv.vue'
import { mapGetters } from 'vuex'
import { hotTown, weekly, base, limit, type, resource, importDfs, importSjf, countWithDate, getKeyword } from '@/api/home'
import { getTourNumberInPro, getTown } from '@/api/traffic'
export default {
  name: 'DashboardAdmin',
  components: {
    lvxf, BarChart, PieChartFull, YiZhou, ZiFuYun, jdt, dtView, lvView
  },
  data() {
    return {
      qyb: true,
      zyb: false,
      qybs: true,
      zybs: false,
      qykl: true,
      lvzy: false,
      kydxq: [],
      hotTown: [],
      weekly: false,
      base: [],
      limit: [],
      type: [],
      resource: [],
      limits: false,
      types: false,
      importDfs: [],
      importSjf: [],
      h: 10,
      w: 80,
      zhengz: 10,
      fuz: 20,
      shengqu: [],
      zifuYun: []
    }
  },
  computed: {
    ...mapGetters([
      'getcity'
    ])
  },
  mounted() {
    this.$store.dispatch('getCity')
    this.requestAll()
    this.shengneitop5()
  },
  methods: {
    qyEvent() {
      this.qykl = true
      this.lvzy = false
      this.qyb = true
      this.zyb = false
    },
    lyEvent() {
      this.qykl = false
      this.lvzy = true
      this.qyb = false
      this.zyb = true
    },
    qyEvents() {
      // this.qykl = true
      // this.lvzy = false
      this.qybs = true
      this.zybs = false
      this.shengneitop5()
    },
    lyEvents() {
      // this.qykl = false
      // this.lvzy = true
      this.qybs = false
      this.zybs = true
      this.xiantop5()
    },
    TwoLevelPages(place) {
      this.$router.push({
        path: place
      })
    },
    requestAll() {
      // 热门城市
      hotTown()
        .then(res => {
          const data = res.data.data
          if(res.status === 200) {
            this.hotTown = data
          }
        })
        .catch(err => {
          console.log(err)
        })
      // 近一周游客数
      weekly()
        .then(res => {
          const data = res.data.data
          if(res.status === 200) {
            this.kydxq = data
            this.weekly = true
          }
        })
        .catch(err => {
          console.log(err)
        })
      // 产业检测
      base()
        .then(res => {
          const data = res.data.data
          if (res.status === 200) {
            this.base = data
            // console.log(this.base)
          }
        })
        .catch(err => {
          console.log(err)
        })
      // 旅游消费额度变化趋势
      limit()
        .then(res => {
          const data = res.data.data
          if(res.status === 200) {
            // console.log(data, '111')
            this.limit = data
            this.limits = true
          }
        })
        .catch(err => {
          console.log(err)
        })
      // 旅游消费类型
      type()
        .then(res => {
          const data = res.data.data
          if(res.status === 200) {
            // console.log(data, '222')
            this.type = data
            this.types = true
          }
        })
        .catch(err => {
          console.log(err)
        })
      // 资源分布
      resource()
        .then(res => {
          const data = res.data.data
          if(res.status === 200) {
            this.resource = data
            // console.log(data, '111')
          }
        })
        .catch(err => {
          console.log(err)
        })
      // 重点景区大佛寺
      importDfs()
        .then(res => {
          const data = res.data.data
          if (res.status === 200) {
            this.importDfs = data
            // console.log(data, '111')
          }
        })
        .catch(err => {
          console.log(err)
        })
      // 重点景区十九峰
      importSjf()
        .then(res => {
          const data = res.data.data
          if (res.status === 200) {
            this.importSjf = data
            // console.log(data, '222')
          }
        })
        .catch(err => {
          console.log(err)
        })
      // 好评率差评率
      countWithDate()
        .then(res => {
          const data = res.data.data
          if (res.status === 200) {
            let bad = data.neg;
            let good = data.pos;
            this.fuz = Number((bad / (bad + good) * 100).toFixed(2));
            this.zhengz = Number((good / (bad + good) * 100).toFixed(2));
          }
        })
        .catch(err => {
          console.log(err)
        })
      getKeyword()
        .then(res => {
          let data = res.data.data
          if(res.status === 200) {
            this.zifuYun = data
            // console.log(data, '111')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    shengneitop5() {
      // 省内top
      getTourNumberInPro().then(res => {
        const data = res.data.data
        if (res.status === 200) {
          this.shengqu = data
          // console.log(data, 'shi')
        }
      }).catch(err => {
        console.log(err)
      })
    },
    xiantop5() {
      // 省内top
      getTown().then(res => {
        const data = res.data.data
        if (res.status === 200) {
          this.shengqu = data
          // console.log(data, 'qu')
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.dashboard-editor-container {
  padding: 5px;
  width: 100%;
  height: 100%;
  // background-color: #111a29;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 999;
  overflow: hidden;
  .el-progress__text {
    color: #e1dfdd;
    font-size: 14px;
    color: #ffffff;
    font-weight: bold;
    position: relative;
    top: -38px;
  }
  .left {
    flex: 1;
    // background: yellow;
    display: flex;
    flex-direction: column;
    .zdjq {
      flex: 1;
      background: rgba(255, 255, 255, 0.05);
      margin-bottom: 1.5%;
      display: flex;
      flex-direction: column;
      padding: 2% 3%;
      .zdjq-title-box {
        margin-bottom: 3%;
        // flex: 1;
        // background: red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 22px;
          color: #bbd5ff;
        }
        .title-right {
          margin-top: 1%;
          cursor: pointer;
          span {
            font-size: 18px;
            color: #bbd5ff;
          }
        }
      }
      .zdjq-content {
        flex: 6;
        // background: forestgreen;
        display: flex;
        justify-content: space-between;
        .dfs {
          flex: 1;
          background: #27303f;
          margin-right: 2%;
          display: flex;
          flex-direction: column;
          .dfs-title {
            font-size: 18px;
            font-weight: bold;
            color: #ffffff;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .dfs-content {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            .dfs-icon {
              width: 36px;
              height: 36px;
              margin-right: 3%;
            }
            .dfs-icons {
              position: relative;
              right: 5%;
            }
            .dfs-content-right {
              .dfs-text {
                font-size: 18px;
                color: #e6e6e6;
                margin-bottom: 2%;
              }
              .dfs-num-box {
                .dfs-num {
                  font-size: 15px;
                  color: #f69704;
                  font-weight: bold;
                }
                .dfs-unit {
                  font-size: 17px;
                  color: #e6e6e6;
                }
              }
            }
          }
        }
        .sjf {
          flex: 1;
          background: #27303f;
          margin-left: 2%;
          display: flex;
          flex-direction: column;
          .dfs-title {
            font-size: 18px;
            font-weight: bold;
            color: #ffffff;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .dfs-content {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            .dfs-icon {
              width: 36px;
              height: 36px;
              margin-right: 3%;
            }
            .dfs-icons {
              position: relative;
              left: 5%;
            }
            .dfs-content-right {
              .dfs-text {
                font-size: 18px;
                color: #e6e6e6;
                margin-bottom: 2%;
              }
              .dfs-num-box {
                .dfs-num {
                  font-size: 15px;
                  color: #f69704;
                  font-weight: bold;
                }
                .dfs-unit {
                  font-size: 17px;
                  color: #e6e6e6;
                }
              }
            }
          }
        }
      }
    }
    .xcly {
      padding: 2% 3%;
      flex: 1.3;
      background: rgba(255, 255, 255, 0.05);
      margin-bottom: 1.5%;
      display: flex;
      flex-direction: column;
      .zdjq-title-box {
        margin-bottom: 3%;
        flex: 1;
        // background: red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 22px;
          color: #bbd5ff;
        }
        .title-right {
          margin-top: 1%;
          cursor: pointer;
          span {
            font-size: 18px;
            color: #bbd5ff;
          }
        }
      }
      .xcly-content {
        flex: 3.5;
        // background: firebrick;
        padding-left: 5%;
        padding-right: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .xc-box {
          display: flex;
          justify-content: space-between;
          .num {
            flex: 1;
            background: #47b2d3;
            margin-right: 5%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            // padding-top: 1%;
            // padding-bottom: 1%;
          }
          .name {
            flex: 6;
            background: #47b2d3;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            padding-top: 1%;
            padding-bottom: 1%;
            span {
              margin: 0 6%;
            }
          }
        }
        .xc-box2 {
          display: flex;
          justify-content: space-between;
          .num {
            flex: 1;
            background: #38a6d6;
            margin-right: 5%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            // padding-top: 1%;
            // padding-bottom: 1%;
          }
          .name {
            flex: 6;
            background: #38a6d6;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            padding-top: 1%;
            padding-bottom: 1%;
            span {
              margin: 0 6%;
            }
          }
        }
        .xc-box3 {
          display: flex;
          justify-content: space-between;
          .num {
            flex: 1;
            background: #279ad9;
            margin-right: 5%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            // padding-top: 1%;
            // padding-bottom: 1%;
          }
          .name {
            flex: 6;
            background: #279ad9;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            padding-top: 1%;
            padding-bottom: 1%;
            span {
              margin: 0 6%;
            }
          }
        }
        .xc-box4 {
          display: flex;
          justify-content: space-between;
          .num {
            flex: 1;
            background: #188edb;
            margin-right: 5%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            // padding-top: 1%;
            // padding-bottom: 1%;
          }
          .name {
            flex: 6;
            background: #188edb;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            padding-top: 1%;
            padding-bottom: 1%;
            span {
              margin: 0 6%;
            }
          }
        }
        .xc-box5 {
          display: flex;
          justify-content: space-between;
          .num {
            flex: 1;
            background: #0982de;
            margin-right: 5%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            // padding-top: 1%;
            // padding-bottom: 1%;
          }
          .name {
            flex: 6;
            background: #0982de;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 17px;
            color: #2d3950;
            border-radius: 15px;
            padding-top: 1%;
            padding-bottom: 1%;
            span {
              margin: 0 6%;
            }
          }
        }
      }
    }
    .edfl {
      flex: 2.3;
      background: rgba(255, 255, 255, 0.05);
      display: flex;
      flex-direction: column;
      .bh {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 2% 3%;
        .zdjq-title-box {
          margin-bottom: 3%;
          flex: 1;
          // background: red;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .title {
            font-size: 22px;
            color: #bbd5ff;
          }
          .title-right {
            margin-top: 1%;
            cursor: pointer;
            span {
              font-size: 18px;
              color: #bbd5ff;
            }
          }
        }
        .content-box {
          flex: 6;
          // background: #0982de;
          .chart-container{
            margin-bottom: -10%;
            width: 100%;
            height: 100%;
          }
        }
      }
      .lx {
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 2% 3%;
        .zdjq-title-box {
          margin-bottom: 3%;
          flex: 1;
          // background: red;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .title {
            font-size: 22px;
            color: #bbd5ff;
          }
          .title-right {
            margin-top: 1%;
            cursor: pointer;
            span {
              font-size: 18px;
              color: #bbd5ff;
            }
          }
        }
        .content-box {
          flex: 6;
          // background: #0982de;
          .chart-wrapper {
            width: 100%;
            height: 100%;
            margin-bottom: -10%
          }
        }
      }
    }
  }
  .middle {
    flex: 2;
    // background: darkorchid;
    display: flex;
    flex-direction: column;
    .main {
      flex: 2.5;
      // background: rgba(255, 255, 255, 0.05);
      margin: 1%;
      padding: 2%;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
      .btn {
        position: absolute;
        right: 5%;
        bottom: 5%;
        width: 35%;
        display: flex;
        height: 9%;
        .btn-box {
          flex: 1;
          position: relative;
          display: flex;
          justify-content: space-between;
          width: 10%;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 30px;
          padding: 2%;
          .qy {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            font-size: 22px;
            // background: hotpink;
            border-radius: 30px;
            cursor: pointer;
          }
          .qyb { background: rgba(255, 255, 255, 0.2); }
          .zy {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #ffffff;
            font-size: 22px;
            // background: aquamarine;
            border-radius: 30px;
            cursor: pointer;
          }
          .zyb { background: rgba(255, 255, 255, 0.2); }
        }
      }
    }
    .main-bottom {
      flex: 1;
      // background: indianred;
      display: flex;
      .kyd {
        // flex: 1;
        width:49%;
        background: rgba(255, 255, 255, 0.05);
        margin-left: 1%;
        margin-right: 0.5%;
        display: flex;
        flex-direction: column;
        padding: 2% 3%;
        position: relative;
        .zdjq-title-box {
          margin-bottom: 3%;
          flex: 1;
          // background: red;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .title {
            font-size: 22px;
            color: #bbd5ff;
          }
          .title-right {
            margin-top: 1%;
            cursor: pointer;
            span {
              font-size: 18px;
              color: #bbd5ff;
            }
          }
        }
        .content-box {
          flex: 6;
          // background: #0982de;
          .chart-wrapper {
            width: 100%;
            height: 100%;
            .btn {
              position: absolute;
              right: 5%;
              bottom: 5%;
              width: 8%;
              display: flex;
              height: 5%;
              .btn-box {
                flex: 1;
                position: relative;
                display: flex;
                justify-content: space-between;
                width: 5%;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 30px;
                padding: 2%;
                .qy {
                  flex: 1;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: #ffffff;
                  font-size: 22px;
                  // background: hotpink;
                  border-radius: 30px;
                  cursor: pointer;
                }
                .qyb { background: rgba(255, 255, 255, 0.2); }
                .zy {
                  flex: 1;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  color: #ffffff;
                  font-size: 22px;
                  // background: aquamarine;
                  border-radius: 30px;
                  cursor: pointer;
                }
                .zyb { background: rgba(255, 255, 255, 0.2); }
              }
            }
          }
        }
      }
      .yks {
        // flex: 1;
        width:48%;
        background: rgba(255, 255, 255, 0.05);
        margin-left: 0.5%;
        margin-right: 1%;
        display: flex;
        flex-direction: column;
        padding: 2% 3%;
        .zdjq-title-box {
          margin-bottom: 3%;
          flex: 1;
          // background: red;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          // top: 7%;
          .title {
            font-size: 22px;
            color: #bbd5ff;
          }
          .title-right {
            margin-top: 1%;
            cursor: pointer;
            span {
              font-size: 18px;
              color: #bbd5ff;
            }
          }
        }
        .content-box {
          flex: 6;
          // background: #0982de;
          .chart-wrapper {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .right {
    flex: 1;
    // background: hotpink;
    display: flex;
    flex-direction: column;
    .sskl {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 1%;
      .title {
        color: #ffffff;
        font-size: 25px;
        font-weight: bold;
      }
      .num {
        color: #f69704;
        font-size: 35px;
        font-weight: bold;
      }
    }
    .cyjc {
      flex: 1;
      background: rgba(255, 255, 255, 0.05);
      margin-bottom: 1.5%;
      display: flex;
      flex-direction: column;
      padding: 2% 3%;
      .zdjq-title-box {
        margin-bottom: 3%;
        flex: 1;
        // background: red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 22px;
          color: #bbd5ff;
        }
        .title-right {
          margin-top: 1%;
          cursor: pointer;
          span {
            font-size: 18px;
            color: #bbd5ff;
          }
        }
      }
      .content-box {
        flex: 6;
        // background: #0982de;
        display: flex;
        justify-content: space-between;
        .left-box {
          flex: 1;
          // background: red;
          margin-right: 3%;
          .top-box {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8%;
            img {
              width: 58px;
              height: 58px;
            }
            .text-box {
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              .title {
                font-size: 18px;
                font-weight: bold;
                color: #ffffff;
                margin-bottom: 10%;
              }
              .content-box {
                display: flex;
                justify-content: space-between;
                .num {
                  font-size: 23px;
                  color: #f69704;
                  font-weight: bold;
                }
                .unit {
                  font-size: 19px;
                  color: #ffffff;
                }
              }
            }
          }
          .bottom-box {
            .l-box {
              display: flex;
              justify-content: space-between;
              margin-bottom: 8%;
              .name {
                font-size: 20px;
                color: #ffffff;
              }
              .num {
                font-size: 20px;
                color: #f69704;
              }
              .unit {
                font-size: 18px;
                color: #ffffff;
              }
            }
          }
        }
        .right-box {
          flex: 1;
          // background: #279ad9;
          margin-left: 3%;
          .top-box {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8%;
            img {
              width: 58px;
              height: 58px;
            }
            .text-box {
              display: flex;
              justify-content: space-between;
              flex-direction: column;
              .title {
                font-size: 18px;
                font-weight: bold;
                color: #ffffff;
                margin-bottom: 10%;
              }
              .content-box {
                display: flex;
                justify-content: space-between;
                .num {
                  font-size: 23px;
                  color: #f69704;
                  font-weight: bold;
                }
                .unit {
                  font-size: 19px;
                  color: #ffffff;
                }
              }
            }
          }
          .bottom-box {
            .l-box {
              display: flex;
              justify-content: space-between;
              margin-bottom: 8%;
              .name {
                font-size: 20px;
                color: #ffffff;
              }
              .num {
                font-size: 20px;
                color: #f69704;
              }
              .unit {
                font-size: 18px;
                color: #ffffff;
              }
            }
          }
        }
      }
    }
    .zyfb {
      flex: 1;
      background: rgba(255, 255, 255, 0.05);
      margin-bottom: 1.5%;
      display: flex;
      flex-direction: column;
      padding: 2% 3%;
      .zdjq-title-box {
        margin-bottom: 3%;
        // flex: 1;
        // background: red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 22px;
          color: #bbd5ff;
        }
        .title-right {
          margin-top: 1%;
          cursor: pointer;
          span {
            font-size: 18px;
            color: #bbd5ff;
          }
        }
      }
      .content-box {
        flex: 1;
        // background: #0982de;
        // background: rgba(255, 255, 255, 0.05);
        // padding: 3%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .top {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          // background: firebrick;
          .one {
            display: flex;
            width: 25%;
            justify-content: space-between;
            img {
              width: 40px;
              height: 40px;
            }
            .text-box {
              .name {
                font-size: 18px;
                color: #ffffff;
                margin-bottom: 5%;
              }
              .num {
                font-size: 18px;
                color: #f69704;
                font-weight: bold;
              }
            }
          }
        }
        .middles {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          // background: khaki;
          .one {
            display: flex;
            width: 31%;
            justify-content: space-between;
            img {
              width: 40px;
              height: 40px;
            }
            .qg {
              position: relative;
              left: 10%;
            }
            .ms {
              position: relative;
              left: 18%;
            }
            .text-box {
              .name {
                font-size: 18px;
                color: #ffffff;
                margin-bottom: 5%;
              }
              .num {
                font-size: 18px;
                color: #f69704;
                font-weight: bold;
              }
            }
            .text-box1 {
              position: relative;
              left: 4%;
            }
          }
        }
        .bottom {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          // background: palegreen;
          .one {
            display: flex;
            width: 31%;
            justify-content: space-between;
            img {
              width: 40px;
              height: 40px;
            }
            .dy {
              position: relative;
              left: 18%;
            }
            .text-box {
              .name {
                font-size: 18px;
                color: #ffffff;
                margin-bottom: 5%;
              }
              .num {
                font-size: 18px;
                color: #f69704;
                font-weight: bold;
              }
            }
          }
          .one1 {
            position: relative;
            left: 4%;
          }
        }
      }
    }
    .rcfb {
      flex: 1;
      background: rgba(255, 255, 255, 0.05);
      margin-bottom: 1.5%;
      display: flex;
      flex-direction: column;
      padding: 2% 3%;
      .zdjq-title-box {
        // margin-bottom: 3%;
        flex: 1;
        // background: red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 22px;
          color: #bbd5ff;
        }
        .title-right {
          margin-top: 1%;
          cursor: pointer;
          span {
            font-size: 18px;
            color: #bbd5ff;
          }
        }
      }
      .content-box {
        // flex: 4;
        // background: lightcyan;
      }
    }
    .yqfx {
      // flex: 1;
      background: rgba(255, 255, 255, 0.05);
      // display: flex;
      // flex-direction: column;
      padding: 2% 3%;
      .zdjq-title-box {
        // margin-bottom: 3%;
        // flex: 1;
        // background: red;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-size: 22px;
          color: #bbd5ff;
        }
        .title-right {
          margin-top: 1%;
          cursor: pointer;
          span {
            font-size: 18px;
            color: #bbd5ff;
          }
        }
      }
      .zfzf {
        display: flex;
        justify-content: space-around;
        .zzzz {
          text-align: center;
          .title {
            color: #e1e0dd;
            font-size: 16px;
            font-weight: bold;
            position: relative;
            top:50px;
          }
        }
        .ffff {
          text-align: center;
          .title {
            color: #e1e0dd;
            font-size: 16px;
            font-weight: bold;
            position: relative;
            top:50px;
          }
        }
      }
      .content-box {
        flex: 1;
        // background: #0982de;
        display: flex;
        flex-direction: column;
        .yr-box {
          display: flex;
          justify-content: center;
          // flex: 1;
          .yq-box {
            flex: 1;
            // background: forestgreen;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 30px;
              height: 30px;
              margin-right: 2%;
            }
            .text-box {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .title {
                font-size: 20px;
                color: #ffffff;
                font-weight: bold;
                margin-bottom: 5%;
                margin-top: 5px;
                margin-right: 3px;
              }
              .num-box {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                .num {
                  font-size: 28px;
                  color: #f69704;
                  font-weight: bold;
                  margin-right: 10%;
                }
                .unit {
                  font-size: 20px;
                  color: #ffffff;
                  font-weight: bold;
                }
              }
            }
          }
        }
        .jdt {
          // background: fuchsia;
          flex: 1;
          margin-top: 7%;
        }
      }
    }
  }
}
</style>
