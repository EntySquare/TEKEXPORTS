<template>
  <div class="not-found">
    <div class="con">
      <div class="Not">404 - Page Not Found</div>
      <p style="font-size: 28px">
        Sorry, the page you are looking for does not exist.
      </p>
      <p>
        You will be redirected to the homepage in
        <span class="seconds">{{ countdown }}</span> seconds.
      </p>
      <button @click="goHome">Go to Homepage Now</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const countdown = ref(5) // 5秒倒计时
const router = useRouter()

// 倒计时函数
const startCountdown = () => {
  const interval = setInterval(() => {
    countdown.value -= 1
    if (countdown.value === 0) {
      clearInterval(interval)
      goHome()
    }
  }, 1000)
}

// 立即跳转到首页
const goHome = () => {
  router.push('/')
}

onMounted(() => {
  startCountdown()
})
</script>

<style scoped lang="less">
.not-found {
  width: 100%;
  height: 100%;
  background: #1e1e22;

}
.con {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgba(251, 101, 60, 0.27) 0%,
    rgba(251, 101, 60, 0) 50%
  );

  font-size: 18px;

  gap: 10px;
  color: #fefeff;
  padding: 0 20px;
  text-align: center;
  .Not {
    font-size: 40px;
    color: #fb653c;
  }
  .seconds {
    font-size: 30px;
    color: #fb653c;
  }
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fb653c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  box-shadow: 0 0 10px 1px #f5e7e3;
}
@media (max-width: 834px) {
  .not-found {
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
