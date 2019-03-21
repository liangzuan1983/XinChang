<template>
  <div>
    <moduleTitle>节假日数据统计</moduleTitle>
    <div class="moduleDetails">
      <div v-for="(item, index) in data" :key="index" class="moduleDetailsItem">
        <img :src="item.icon1" class="icon1" >
        <div class="itemDetail">
          <div class="itemParam">{{ item.param }}</div>
          <div class="itemContent">
            <div class="itemCount">
              <span class="num">{{ item.num }}</span>
              <span class="unit">{{ item.unit }}</span>
            </div>
            <div v-if="item.ratio" class="itemRatio">
              <div>同比 {{ item.ratio }}</div>
              <img :src="item.icon2" class="icon2" alt="" >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moduleTitle from './moduleTitle'
export default {
  name: 'HolidayData',
  components: { moduleTitle },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">
.moduleDetails {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  .moduleDetailsItem {
    width: 50%;
    display: flex;
    padding: 1% 1.5%;
    .icon1 {
      width: 70px;
      height: 70px;
      margin-right: 10px;
    }
    .itemDetail {
      width: calc(100% - 80px);
      height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .itemParam {
        width: 100%;
        font-size: 24px;
        line-height: 35px;
      }
      .itemContent {
        width: 100%;
        display: flex;
        .itemCount {
          width: 60%;
          .num {
            color: #fa9903;
            font-size: 30px;
          }
          .unit {
            font-size: 20px;
          }
        }
        .itemRatio {
          width: 40%;
          display: flex;
          align-items: center;
          font-size: 22px;
          .icon2 {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
}
</style>
