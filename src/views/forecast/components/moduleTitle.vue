<template>
  <div class="moduleTitle">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'ModuleTitle'
}
</script>

<style scoped>
.moduleTitle {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  background: rgba(255, 255, 255, 0.05);
  color: #abc2e8;
  padding: 0 1.5%;
}
</style>
