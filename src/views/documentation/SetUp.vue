<template>
  <div class="setup">
    <!--添加点位-->
    <!--<el-button type="primary" @click="addPoint">添加点位</el-button>-->
    <!--关键字搜索-->
    <div class="main">
      <span>关键词： </span>
      <el-input v-model="keyword" placeholder="请输入点位名称"></el-input>
      <!--查询-->
      <el-button size="mini" type="primary" @click="getData">搜索</el-button>
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
      <el-table-column type="selection" width="55" />
      <el-table-column fixed label="序号" width="80">
        <template slot-scope="scope">
          {{ scope.$index + 1 + (pageNo - 1) * pageSize }}
        </template>
      </el-table-column>
      <el-table-column prop="name" label="点位名称" width="120" />
      <el-table-column prop="coordinate" label="点位坐标" />
      <el-table-column prop="typeStr" label="点位类别" width="120" />
      <el-table-column prop="grouping" label="分组" />
      <el-table-column prop="gmtCreate" label="最近修改时间" />
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >设置预警预案</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
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
        :current-page="pageNo"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      />
    </div>
  </div>
</template>

<script>
import { getScenicSpots, deleteScenicSpots } from "../../api/documentation";
export default {
  data() {
    return {
      keyword: "",
      pageNo: 1,
      pageSize: 10,
      tableData: [],
      total: 0
    };
  },
  mounted() {
    const self = this;
    self.getData();
  },
  methods: {
    getData() {
      const self = this;
      getScenicSpots({
        keyword: self.keyword,
        limit: self.pageSize,
        offset: self.pageNo
      }).then(res => {
        if (res.status === 200) {
          const data = res.data.data[0] || [];
          data.map(item => {
            item.typeStr = item.type || "";
          });
          self.tableData = data;
          self.total = res.data.total || 0;
        }
      });
    },
    handleEdit(index, row) {
      this.$router.push({
        path: "/documentation/addPoint",
        query: { scenicId: row.id }
      });
    },
    handleDelete(index, row) {
      this.$confirm("此操作将删除该条记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteScenicSpots(row.id).then(res => {
            if(res.status === 204){
              this.getData();
              this.$message({
                type: "success",
                message: "删除成功!"
              });
            }
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
      self.getData();
    },
    handleCurrentChange(val) {
      const self = this;
      self.pageNo = val;
      self.getData();
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
.setup {
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
