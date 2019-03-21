<template>
  <div class="relation">
    <div class="spotListBox">
      <span
        v-for="(item, index) in scenicSpotList"
        :key="index"
        :class="defaultName === item && 'selected'"
        @click="getRelationData(item)"
      >
        {{ item }}
      </span>
    </div>
    <div class="forceBox">
      <force :options="forceData" />
    </div>
  </div>
</template>

<script>
import force from '@/components/Charts/force'
import { getCorrelation } from '../../api/relation'
export default {
  name: 'Relation',
  components: { force },
  data() {
    return {
      defaultName: '大佛寺景区',
      scenicSpotList: [
        '大佛寺景区',
        '十九峰景区',
        '七盘仙谷',
        '天烛仙境',
        '下岩贝村',
        '外婆坑村',
        '安山',
        '斑竹村',
        '董村',
        '达利丝绸世界'
      ],
      forceData: {}
    }
  },
  mounted() {
    const self = this
    self.getRelationData(self.defaultName)
  },
  methods: {
    getRelationData(name) {
      const self = this
      self.defaultName = name
      getCorrelation({ name }).then(res => {
        if (res.status === 200) {
          const data = res.data.data || {}
          let antity = [],
            relation = []
          setAntty(data)
          setRelation(data)
          function setAntty(obj, a = 4, b = 'name') {
            antity.push({
              name: b,
              showName: obj.name,
              symbolSize: 25 * a
            })
            if (obj.children && obj.children.length > 0) {
              const children = obj.children
              children.map((item, index) => {
                setAntty(item, a - 1, `${b}_${index}`)
              })
            }
          }
          function setRelation(obj, b = 'name') {
            if (obj.children && obj.children.length > 0) {
              const children = obj.children
              children.map((item, index) => {
                const newB = `${b}_${index}`
                relation.push({
                  source: b,
                  target: newB,
                  name: item.value
                })
                setRelation(item, newB)
              })
            }
          }
          self.forceData = { relation, antity }
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.relation {
  width: 97%;
  height: calc(100% - 50px);
  position: relative;
  z-index: 999;
  margin: 1.5%;
  background: rgba(255, 255, 255, 0.05);
  padding: 1%;
  .spotListBox {
    display: flex;
    width: 100%;
    height: 60px;
    span {
      width: 150px;
      height: 100%;
      background: #999999;
      font-size: 22px;
      line-height: 60px;
      text-align: center;
      border-right: 1px solid #2d2f33;
    }
    .selected {
      color: white;
      background-color: #1e6abc;
    }
  }
  .forceBox {
    width: 100%;
    height: calc(100% - 70px);
  }
}
</style>
