<template>
  <div>
    <div class="el-icon-menu fang" @click="toggleClick"/>
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    toggleClick: {
      type: Function,
      default: null
    }
  }
}
</script>

<style scoped>
.fang {
  font-size: 28px;
  color: #ffffff;
  cursor: pointer;
}
</style>
