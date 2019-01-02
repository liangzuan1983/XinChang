<template>
  <div class="statistics">
    <!--关键字搜索-->
    <div class="main">
      <span>选择时间： </span>
      <el-date-picker
        v-model="value4"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"/>
      <span class="fuckyou">选择事件状态： </span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <!--查询-->
      <el-button size="mini" type="primary">查询</el-button>
    </div>
    <!--图表-->
    <el-table
      :data="tableData"
      border
      :row-style="getRowClass"
      :header-row-style="getRowClass"
      :header-cell-style="getRowClass"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        fixed
        prop="date"
        label="序号"
        width="80">
      </el-table-column>
      <el-table-column
        prop="name"
        label="事件编号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="事件描述">
      </el-table-column>
      <el-table-column
        prop="city"
        label="事件状态描述"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="事件发生时间">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <div class="fen">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"/>
    </div>
    <!--关键字搜索-->
    <div class="main1">
      <div class="top-box">
        <span>选择时间： </span>
        <el-date-picker
          v-model="value4"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"/>
        <!--查询-->
        <el-button size="mini" type="primary">查询</el-button>
      </div>
      <!--两个图-->
      <div class="two-box">
        <!--事件统计-->
        <div class="left-box">
          <!--标题-->
          <div class="title">事件处理情况统计</div>
          <div class="content">
            <div class="chart-wrapper">
              <Holiday-sjcl height="100%" width="100%"/>
            </div>
          </div>
        </div>
        <!--事件处理率-->
        <div class="right-box">
          <!--标题-->
          <div class="title">事件处理率</div>
          <div class="content">
            <div class="chart-wrapper">
              <yi-zhou :fatherData="yktype" height="100%" width="100%"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HolidaySjcl from '@/components/Charts/holiday-sjcl'
import YiZhou from '@/views/dashboard/admin/components/YiZhou'
export default {
  data() {
    return {
      input: '',
      tableData: [
        {
          date: '1',
          name: '0001',
          province: '十九峰客流预警',
          city: '待处理',
          address: '2018-11-04 23:06:09'
        },
        {
          date: '2',
          name: '0002',
          province: '大佛寺客流预警',
          city: '未处理',
          address: '2018-11-04 23:06:09'
        },
        {
          date: '3',
          name: '0003',
          province: '双峰客流预警',
          city: '已处理',
          address: '2018-11-04 23:06:09'
        }
      ],
      currentPage4: 4,
      value4: [new Date(), new Date()],
      options: [
        {
          value: '选项1',
          label: '已处理'
        },
        {
          value: '选项2',
          label: '待处理'
        },
        {
          value: '选项3',
          label: '处理中'
        },
        {
          value: '选项4',
          label: '已完结'
        }
      ],
      value: '选项1'
    }
  },
  components: {
    HolidaySjcl, YiZhou
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    // tabale颜色
    getRowClass({ row, column, rowIndex, columnIndex }) {
      return "background:#3f5c6d2c;color:#000;";
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    addPoint() {
      this.$router.push({
        path: '/documentation/addPoint'
      })
    }
  }
}
</script>

<style lang="scss">
  .statistics {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 999;
    padding: 1%;
    .el-date-editor .el-range-separator {
      padding: 0!important;
      color: #000!important;
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

