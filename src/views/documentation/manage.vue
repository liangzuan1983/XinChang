<template>
  <div class="manage">
    <!--添加点位-->
    <el-button type="primary" @click="addPoint">添加预案</el-button>
    <!--关键字搜索-->
    <div class="main">
      <span>关键词： </span>
      <el-input v-model="input" placeholder="请输入预案名称"></el-input>
      <!--查询-->
      <el-button size="mini" type="primary">搜索</el-button>
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
        width="55"/>
      <el-table-column
        fixed
        label="序号"
        width="80">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="预案名称"/>
      <el-table-column
        prop="province"
        label="添加时间"/>
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
            @click="handleDelete(scope.$index, tableData)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <div class="fen">
      <el-pagination
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        :total="400"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      tableData: [
        {
          date: '1',
          name: '客流超载预警',
          province: '2018-11-08 23:06:09'
        },
        {
          date: '2',
          name: '客流严重超载预警',
          province: '2018-11-08 23:06:09'
        },
        {
          date: '3',
          name: '客流严重超载预警',
          province: '2018-11-08 23:06:09'
        }
      ],
      currentPage4: 4
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row)
      this.$router.push({
        path: '/documentation/addWarn'
      })
    },
    handleDelete(index, rows) {
      rows.splice(index, 1)
    },
    // tabale颜色
    getRowClass({ row, column, rowIndex, columnIndex }) {
      return 'background:#3f5c6d2c;color:#000;'
    },
    // 分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    addPoint() {
      this.$router.push({
        path: '/documentation/addWarn'
      })
    }
  }
}
</script>

<style lang="scss">
  .manage {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 999;
    padding: 1%;
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
      .el-input--medium {
        width: 15%;
      }
      .el-button--mini {
        margin-left: 2%;
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

