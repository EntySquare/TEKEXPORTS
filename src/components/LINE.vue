<script setup lang="ts" name="HomeView">
const props = defineProps({
  color: {
    type: String,
    default: 'white'
  },
  length_left: {
    type: Number,
    default: 120
  },
  length_right: {
    type: Number,
    default: 80
  }
})
</script>
<template>
  <div class="con">
    <div class="line">
      <div
        class="line_left"
        :style="`width: ${props.length_left}px; background-color: ${props.color};`"
      ></div>
      <div class="line_right" :style="`width: ${props.length_right}px; `"></div>
    </div>
  </div>
</template>
<style scoped lang="less">
.con {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background: none;
}
.line {
  display: flex;
  align-items: center;
  justify-content: center;
  .line_left {
    height: 1px;
  }
  .line_right {
    height: 7px;
    background: #fb653c;
  }
}
@media (max-width: 834px) {
  .con {
    .line {
      .line_left {
        height: 3px;
      }
      .line_right {
        height: 9px;
      }
    }
  }
}
</style>
