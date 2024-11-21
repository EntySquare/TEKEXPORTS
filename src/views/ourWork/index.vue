<script setup lang="ts" name="ourWork"></script>
<template>
  <div class="home_view">
    <div class="con">待开放</div>
    <!-- <div class="container">待开放</div> -->
  </div>
</template>
<style scoped lang="less">
.home_view {
  width: 100%;
  height: 100%;
  background: #1e1e22;
}
.con {
  width: 100%;
  height: 100%;
  display: flex;
  background: linear-gradient(
    90deg,
    rgba(251, 101, 60, 0.27) 0%,
    rgba(251, 101, 60, 0) 50%
  );
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: #fb653c;
}
@media (max-width: 834px) {
  .home_view {
    .con {
      background: linear-gradient(
        to right,
        rgba(251, 101, 60, 0.27) 0%,
        rgba(251, 101, 60, 0) 100%
      );
    }
  }
}
</style>
