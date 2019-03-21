<template>
  <div class="statistics">
    <!--关键字搜索-->
    <div class="main">
      <span>选择时间： </span>
      <el-date-picker
        v-model="dateValue1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      />
      <span class="fuckyou">选择事件状态： </span>
      <el-select
        v-model="status"
        placeholder="请选择"
        value-key="key"
        @change="changeStatus"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <!--查询-->
      <el-button size="mini" type="primary" @click="getEvents">查询</el-button>
    </div>
    <!--图表-->
    <el-table
      :data="tableData"
      border
      :max-height="400"
      :row-style="getRowClass"
      :header-row-style="getRowClass"
      :header-cell-style="getRowClass"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column fixed label="序号" width="80">
        <template slot-scope="scope">
          {{ scope.$index + 1 + pageSize * (currentPage - 1) }}
        </template>
      </el-table-column>
      <el-table-column prop="id" label="事件编号" width="120">
      </el-table-column>
      <el-table-column prop="schemeName" label="事件描述"> </el-table-column>
      <el-table-column prop="stateStr" label="事件状态描述" width="120">
      </el-table-column>
      <el-table-column prop="gmtCreate" label="事件发生时间"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row, tableData)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <div class="fen">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      />
    </div>
    <!--关键字搜索-->
    <div class="main1">
      <div class="top-box">
        <span>选择时间： </span>
        <el-date-picker
          v-model="dateValue2"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
        <!--查询-->
        <el-button size="mini" type="primary" @click="getData">查询</el-button>
      </div>
      <!--两个图-->
      <div class="two-box">
        <!--事件统计-->
        <div class="left-box">
          <!--标题-->
          <div class="title">事件处理情况统计</div>
          <div class="content">
            <div class="chart-wrapper">
              <Holiday-sjcl
                height="100%"
                width="100%"
                :chart-data="chartData1"
              />
            </div>
          </div>
        </div>
        <!--事件处理率-->
        <div class="right-box">
          <!--标题-->
          <div class="title">事件处理率</div>
          <div class="content">
            <div class="chart-wrapper">
              <yi-zhous
                id="yktype"
                height="100%"
                width="100%"
                :chart-data="chartData2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HolidaySjcl from "@/components/Charts/holiday-sjcl";
import YiZhous from "@/views/dashboard/admin/components/YiZhou2";
import moment from "moment";
import {
  getWarningEvents,
  getEventsStatistics,
  getRate,
  getDeleteEvent
} from "../../api/documentation";
export default {
  data() {
    return {
      input: "",
      tableData: [],
      total: 0,
      dateValue1: [
        moment().format("YYYY-MM-DD"),
        moment().format("YYYY-MM-DD")
      ],
      dateValue2: [
        moment().format("YYYY-MM-DD"),
        moment().format("YYYY-MM-DD")
      ],
      options: [
        { value: 0, label: "待处理" },
        { value: 1, label: "已处理" },
        { value: 2, label: "处理中" }
      ],
      status: 0,
      chartData1: {},
      chartData2: {},
      pageSize: 10,
      currentPage: 1
    };
  },
  components: {
    HolidaySjcl,
    YiZhous
  },
  mounted() {
    this.getEvents();
    this.getData();
  },
  methods: {
    getEvents() {
      const self = this;
      const dateValue1 = self.dateValue1 || [];
      getWarningEvents({
        start: dateValue1[0] ? moment(dateValue1[0]).format("YYYY-MM-DD") : "",
        end: dateValue1[1]
          ? moment(self.dateValue1[1]).format("YYYY-MM-DD")
          : "",
        state: self.status,
        pageNo: self.currentPage,
        pageSize: self.pageSize
      }).then(res => {
        if (res.status === 200) {
          const data = res.data.data || [];
          data.map(item => {
            item.stateStr =
              item.state === 0
                ? "待处理"
                : item.state === 1
                ? "已处理"
                : item.state === 2
                ? "处理中"
                : "";
          });
          self.tableData = [...data];
          self.total = res.data.total || 0;
        }
      });
    },
    getData() {
      const self = this;
      const dateValue2 = self.dateValue2 || [];
      getEventsStatistics({
        start: dateValue2[0] ? moment(dateValue2[0]).format("YYYY-MM-DD") : "",
        end: dateValue2[1] ? moment(dateValue2[1]).format("YYYY-MM-DD") : ""
      }).then(res => {
        if (res.status === 200) {
          const data = res.data.data || [];
          let xAxisData = [],
            seriesData1 = [],
            seriesData2 = [],
            seriesData3 = [];
          data.map(item => {
            xAxisData.push(item.subject);
            seriesData1.push(item.value[0]["待处理"]);
            seriesData2.push(item.value[1]["处理中"]);
            seriesData3.push(item.value[2]["已完成"]);
          });
          self.chartData1 = {
            xAxisData,
            seriesData1,
            seriesData2,
            seriesData3
          };
        }
      });
      getRate({
        start: moment(self.dateValue2[0]).format("YYYY-MM-DD"),
        end: moment(self.dateValue2[1]).format("YYYY-MM-DD")
      }).then(res => {
        if (res.status === 200) {
          const data = res.data.data || [];
          let xAxisData = [],
            seriesData = [];
          data.map(item => {
            xAxisData.push(item.subject);
            seriesData.push(item.value);
          });
          self.chartData2 = { xAxisData, seriesData };
        }
      });
    },
    changeStatus(option) {
      console.log(option);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      this.$confirm("此操作将删除该条记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          getDeleteEvent(row.id);
          this.getEvents();
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // tabale颜色
    getRowClass({ row, column, rowIndex, columnIndex }) {
      return "background:#3f5c6d2c;color:#000;";
    },
    // 分页
    handleSizeChange(val) {
      const self = this;
      self.pageSize = val;
      self.getEvents();
    },
    handleCurrentChange(val) {
      const self = this;
      self.currentPage = val;
      self.getEvents();
    },
    addPoint() {
      this.$router.push({
        path: "/documentation/addPoint"
      });
    }
  }
};
</script>

<style lang="scss">
.statistics {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 999;
  padding: 1%;
  overflow-y: auto;
  margin-top: 1%;
  .el-date-editor .el-range-separator {
    padding: 0 !important;
    color: #000 !important;
  }
  .main {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    margin: 1% 0;
    padding: 1%;
    span {
      color: #ffffff;
      margin-right: 2%;
      font-size: 20px;
    }
    .fuckyou {
      margin-left: 3%;
    }
    .el-button--mini {
      margin-left: 2%;
    }
  }
  .main1 {
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.05);
    padding: 0 1%;
    .top-box {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin: 1% 0;
      span {
        color: #ffffff;
        margin-right: 2%;
        font-size: 20px;
      }
      .fuckyou {
        margin-left: 3%;
      }
      .el-button--mini {
        margin-left: 2%;
      }
    }
    .two-box {
      display: flex;
      justify-content: space-between;
      .left-box {
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-right: 1%;
        background: rgba(255, 255, 255, 0.05);
        height: 320px;
        .title {
          font-size: 22px;
          color: #bbd5ff;
          background: #45404d;
          padding: 1%;
        }
        .content {
          flex: 1;
          .chart-wrapper {
            width: 100%;
            height: 100%;
          }
        }
      }
      .right-box {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 320px;
        background: rgba(255, 255, 255, 0.05);
        .title {
          font-size: 22px;
          color: #bbd5ff;
          background: #45404d;
          padding: 1%;
        }
        .content {
          flex: 1;
          .chart-wrapper {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  // .el-table,
  // .el-table__expanded-cell {
  //     background-color: #3f5c6d2c;
  // }
  .fen {
    margin: 2% 0;
    display: flex;
    justify-content: flex-end;
    .el-pagination__total {
      color: #ffffff;
    }
    .el-pagination__jump {
      color: #ffffff;
    }
  }
}
</style>
