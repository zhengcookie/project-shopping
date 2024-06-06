<template>
  <div id="app">
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <!-- 设置 登录 模板 -->
    <div class="box">
      <div class="square" style="--i: 0"></div>
      <div class="square" style="--i: 1"></div>
      <div class="square" style="--i: 2"></div>
      <div class="square" style="--i: 3"></div>
      <div class="square" style="--i: 4"></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
/* 开启flex布局 添加渐变样式 */

.color {
  position: absolute;
  filter: blur(150px);
}

.color:nth-child(1) {
  top: -350px;
  right: 250px;
  width: 600px;
  height: 600px;
  background: #9335ffc2;
}

.color:nth-child(2) {
  bottom: -150px;
  left: 150px;
  width: 500px;
  height: 500px;
  background: #fffd87;
}

.color:nth-child(3) {
  bottom: 150px;
  right: 100px;
  width: 300px;
  height: 300px;
  background: #00dfff;
}

.box {
  position: relative;
}

.box .square {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 60px;
  /* 添加装饰动画 */
  animation: animate 10s linear infinite;
  animation-delay: calc(-1s * var(--i));
}

@keyframes animate {
  0%,
  100% {
    transform: translateY(-40px);
  }

  50% {
    transform: translateY(40px);
  }
}

.box .square:nth-child(1) {
  top: -30px;
  left: 140px;
  width: 60px;
  height: 60px;
}

.box .square:nth-child(2) {
  top: -50px;
  right: -60px;
  width: 100px;
  height: 100px;
}

.box .square:nth-child(3) {
  bottom: -10px;
  right: -80px;
  width: 100px;
  height: 100px;
}

.box .square:nth-child(4) {
  bottom: -80px;
  left: 140px;
  width: 50px;
  height: 50px;
}

/* 控制最左边元素 */
.box .square:nth-child(5) {
  bottom: 50px;
  left: -100px;
  width: 120px;
  height: 120px;
}
</style>
