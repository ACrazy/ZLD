<template>
  <div id="app">
    <transition name="fade1">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { XHeader } from "vux";
export default {
  components: {
    XHeader,
  },
};
</script>

<style lang="scss">
@import "assets/reset.css";
@import "assets/mixin.scss";
#app {
  min-width: 100vw;
  min-height: 100vh;
}
html {
  width: 100%;
  height: 100%;
  overflow: hidden
}
/* 子路由进去动画 */
.fade1-enter-active {
  transition: all 0.2s;
}
.fade1-enter {
  opacity: 0;
  transform: translate3d(20%, 0, 0);
}
.fade1-enter {
  opacity: 0.9;
}
</style>
