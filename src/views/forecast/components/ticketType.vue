<template>
  <div>
    <moduleTitle>票型统计</moduleTitle>
    <div class="chartBox">
      <div v-for="(item, index) in data" :key="index" class="item">
        <div>
          <div class="itemBox">
            <img :src="item.icon" alt="" >
            <div class="detail">
              <div class="type">{{ item.name }}</div>
              <div class="num">{{ item.num }}</div>
            </div>
          </div>
          <div class="rate">
            <div class="param">占比</div>
            <div class="percent">{{ item.percent }}%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moduleTitle from './moduleTitle'
export default {
  name: 'TicketType',
  components: { moduleTitle },
  props: {
    name: { type: String, default: '' },
    data: { type: Array, default: () => [] }
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.chartBox {
  width: 100%;
  height: 400px;
  display: flex;
  .item {
    width: calc(100% / 3);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .itemBox {
      display: flex;
      margin-bottom: 20px;
      img {
        width: 80px;
        height: 80px;
        margin-right: 10px;
      }
      .detail {
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .type {
          font-size: 26px;
          line-height: 40px;
        }
        .num {
          font-size: 34px;
          line-height: 50px;
        }
      }
    }
    .rate {
      display: flex;
      align-items: center;
      .param {
        width: 80px;
        font-size: 26px;
      }
      .percent {
        font-size: 36px;
        color: #fa9903;
      }
    }
  }
}
</style>
