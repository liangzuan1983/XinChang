<template>
  <div :style="getStyle()" class="scale-container">
    <slot/>
    <img class="ysj" src="@/assets/10.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'ScaleView',
  props: {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      ScaleWidth: '',
      ScaleHeight: ''
    }
  },
  computed: {
    scale() {
      return this.width / this.height
    }
  },
  mounted() {
    this.cale()
    window.addEventListener('resize', this.cale.bind(this))
  },
  methods: {
    getStyle() {
      return {
        width: this.ScaleWidth + 'px',
        height: this.ScaleHeight + 'px'
      }
    },
    cale() {
      let h, w
      const width = document.body.offsetWidth
      const height = document.body.offsetHeight
      const s = width / height
      if (s > this.scale) {
        h = height
        w = this.scale * height
      } else if (s < this.scale) {
        w = width
        h = width / this.scale
      }
      this.ScaleWidth = w
      this.ScaleHeight = h
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.scale-container {
  background: #111a29;
  position: relative;
  // background: red;
  .ysj {
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
