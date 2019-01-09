<template>
  <div class="warnIcon">
    <button>{{text}}</button>
  </div>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="scss" scoped>
  .warnIcon {
    button {
      background: 'rgb(173, 47, 47)';
      color: '#eee';
    }
  }
</style>

