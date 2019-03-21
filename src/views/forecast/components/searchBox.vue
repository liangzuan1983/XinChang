<template>
  <div class="searchBox">
    <span>
      时间选择：
    </span>
    <el-date-picker
      v-model="value"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    />
    <el-button type="primary" @click="searchData">查询</el-button>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'SearchBox',
  data() {
    return {
      value: [
        moment()
          .subtract('days', 6)
          .format('YYYY-MM-DD'),
        moment().format('YYYY-MM-DD')
      ]
    }
  },
  mounted() {
    this.searchData()
  },
  methods: {
    searchData() {
      const param = {
        start: moment(this.value[0]).format('YYYY-MM-DD'),
        end: moment(this.value[1]).format('YYYY-MM-DD')
      }
      this.$emit('search', param)
    }
  }
}
</script>

<style scoped lang="scss">
.searchBox {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  padding: 1%;
  margin-bottom: 1%;
  width: 100%;
  span {
    font-size: 22px;
  }
  .el-button {
    margin-left: 1%;
    font-size: 18px;
  }
}
</style>
