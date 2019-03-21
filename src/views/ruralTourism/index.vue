<template>
  <div class="ruralTourism">
    <div class="left">
      <div class="title">乡村实时客流</div>
      <div class="content">
        <div class="header">
          <div class="headerTitle">客流量</div>
        </div>
        <div v-for="(item, index) in realTimeRank" :key="index" class="listRow">
          <div class="rank">{{ index + 1 }}</div>
          <div class="rowContent">
            <div class="areaName">
              <span class="areaNameSpan">
                {{ item.name }}<i class="areaNameI" />
              </span>
            </div>
            <div
              :style="{ width: item.percent, backgroundColor: item.color }"
              class="bottomBorder"
            />
          </div>
          <div class="peopleCount">{{ item.count }}</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="title">乡村累计客流</div>
      <div class="content">
        <div class="searchBox">
          <span>时间选择：</span>
          <el-date-picker
            v-model="value"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
          <el-button type="primary" @click="getData">查询</el-button>
        </div>
        <div v-for="(item, index) in allFlowRank" :key="index" class="listTr">
          <div class="listTd1">
            <span class="areaNameSpan">
              {{ item.name }}<i class="areaNameI" />
            </span>
          </div>
          <div class="listTd2">{{ item.count }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { getVillagePassenger, getScenicVillage } from "../../api/rural";
export default {
  name: "RuralTourism",
  data() {
    return {
      value: [
        moment()
          .subtract("days", 6)
          .format("YYYY-MM-DD"),
        moment().format("YYYY-MM-DD")
      ],
      realTimeRank: [],
      allFlowRank: [],
      timer: null
    };
  },
  mounted() {
    const self = this;
    self.getRealTimeFlow();
    self.getData();
  },
  created() {
    const self = this;
    // 实时客流每10分钟刷新一次
    self.timer = setInterval(function() {
      self.getRealTimeFlow();
    }, 1000 * 60 * 10);
  },
  beforeDestroy() {
    // 如果定时器还在运行 或者直接关闭，不用判断
    if (this.timer) clearInterval(this.timer); // 关闭
  },
  methods: {
    getData() {
      const self = this;
      const param = {
        start: moment(self.value[0]).format("YYYY-MM-DD"),
        end: moment(self.value[1]).format("YYYY-MM-DD")
      };
      getScenicVillage(param).then(res => {
        if (res.status === 200) {
          const data = res.data.data || [];
          let allFlowRank = [];
          data.map(item => {
            allFlowRank.push({
              name: item.subject,
              count: item.value
            });
          });
          self.allFlowRank = allFlowRank.splice(0, 5);
        }
      });
    },
    getRealTimeFlow() {
      const self = this;
      const color = ["#fe6c78", "#ffa210", "#ffe249", "#72ff7d", "#35ffeb"];
      getVillagePassenger().then(res => {
        if (res.status === 200) {
          const data = res.data.data || [];
          let realTimeRank = [],
            max = data[0].value;
          data.map((item, index) => {
            realTimeRank.push({
              name: item.subject,
              count: item.value,
              percent: `${((item.value / max) * 100).toFixed(2)}%`,
              color: color[index]
            });
          });
          self.realTimeRank = [...realTimeRank];
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.ruralTourism {
  width: 97%;
  height: calc(100% - 50px);
  position: relative;
  z-index: 999;
  margin: 1.5%;
  background: rgba(255, 255, 255, 0.05);
  padding: 1%;
  display: flex;
  .left {
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
    margin-right: 1%;
    .header {
      width: 100%;
      padding: 1% 0;
      color: white;
      background: rgba(255, 255, 255, 0.05);
      display: flex;
      flex-direction: row-reverse;
      .headerTitle {
        width: 20%;
        text-align: center;
      }
    }
    .listRow {
      width: 100%;
      margin-top: 20px;
      color: white;
      display: flex;
      .rank {
        width: 60px;
        height: 60px;
        background: rgba(255, 255, 255, 0.05);
        font-size: 40px;
        text-align: center;
        line-height: 60px;
        margin-right: 15px;
      }
      .rowContent {
        width: calc(80% - 75px);
        height: 60px;
        background: rgba(255, 255, 255, 0.05);
        .areaName {
          width: 100%;
          height: 55px;
          font-size: 24px;
          font-weight: 600;
          line-height: 55px;
          padding: 0 3%;
        }
        .areaName span {
          height: 55px;
          line-height: 55px;
        }
        .bottomBorder {
          height: 5px;
          width: 100%;
        }
      }
      .peopleCount {
        width: 20%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 22px;
        background: rgba(255, 255, 255, 0.05);
      }
    }
  }
  .right {
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
    .searchBox {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 24px;
      .el-button {
        margin-left: 2%;
      }
    }
    .listTr {
      width: 100%;
      height: 60px;
      color: white;
      margin-top: 20px;
      background: rgba(255, 255, 255, 0.05);
      display: flex;
      .listTd1 {
        width: 80%;
        height: 60px;
        line-height: 60px;
        font-size: 24px;
        font-weight: 600;
        padding: 0 3%;
      }
      .listTd1 span {
        height: 60px;
        line-height: 60px;
      }
      .listTd2 {
        width: 20%;
        height: 60px;
        line-height: 60px;
        font-size: 24px;
        font-weight: 600;
        text-align: center;
      }
    }
  }
  .title {
    color: #cce8ff;
    background: rgba(255, 255, 255, 0.05);
    padding: 1% 2%;
    font-size: 24px;
  }
  .content {
    width: 100%;
    padding: 2%;
    font-size: 22px;
  }
  .areaNameSpan {
    display: inline-block;
    width: 150px;
    text-align: justify;
    .areaNameI {
      display: inline-block;
      width: 100%;
    }
  }
  .areaNameSpan:after {
    content: " ";
    display: inline-block;
    width: 100%;
  }
}
</style>
