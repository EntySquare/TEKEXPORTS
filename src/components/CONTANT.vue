<script setup lang="ts" name="HomeView">
const props = defineProps({
  location: {
    type: String,
    default: 'left'
  }
})
</script>
<template>
  <div class="contant" :class="props.location">
    <div class="top_right_Email">
      <div class="Email_icon">
        <img src="@/assets/svgs/call_O.svg" alt="" />
      </div>
      <div class="Email">
        <div class="Email_title">EMAIL US AT</div>
        <div class="Email_text">ABC@ABC.COM</div>
      </div>
    </div>
    <div class="line"></div>
    <div class="top_right_Chat">
      <div class="Chat_icon">
        <img src="@/assets/svgs/chat_O.svg" alt="" />
      </div>
      <div class="Chat">
        <div class="Chat_title">CLICK HERE TO</div>
        <div class="Chat_text">Live Chat</div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.contant {
  position: absolute;
  width: 126px;
  min-height: 180px;
  flex-shrink: 0;
  padding: 18px;
  background: #1e1e22;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
}
.top_right_Email,
.top_right_Chat {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.line {
  width: 88px;
  height: 1px;
  background: #fb653c;
}
.Email_title,
.Chat_title {
  color: #fff;
  font-family: Poppins;
  font-size: 8px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.4px;
}
.Email_text,
.Chat_text {
  color: #fff;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.6px;
}
.right {
  border-top-left-radius: 28px;
  border-bottom-left-radius: 28px;
  bottom: 0;
  right: 0;
}
.right_bottom {
  border-top-left-radius: 28px;
  border-bottom-left-radius: 28px;
  top: 0;
  right: 0;
}
.left {
  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;
  top: 0;
  left: 0;
}
@media (max-width: 1160px) {
  .contant {
    width: 100px !important;
    padding: 8px;
    .line {
      width: 84px;
    }
  }
}
@media (max-width: 834px) {
  .contant {
    width: 80px !important;
    min-height: 150px;
    padding: 4px;
    .top_right_Email,
    .top_right_Chat {
      gap: 2px;
    }
    .line {
      width: 66px;
      height: 1px;
      background: #fb653c;
    }
    .Email_title,
    .Chat_title {
      color: #fff;
      font-family: Poppins;
      font-size: 8px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.4px;
    }
    .Email_text,
    .Chat_text {
      color: #fff;
      font-family: Poppins;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.6px;

      //文字换行
      word-break: break-all;
    }
  }
}
</style>
