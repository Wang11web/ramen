<template>
  <div class="inner mt_bar mb-4">
    <div class="inner_bg"></div>
    <div class="inner_wrap container position-relative">
      <h1 class="text-white position-absolute top-50 start-50 translate-middle fw-bolder">Menu</h1>
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss">
  .inner {
    position: relative;
  }
  .inner_bg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: url("../assets/img/food-inner.jpg") center center;
    background-size: cover;
    filter: blur(6px);
    z-index:0;
  }
  .inner_wrap {
    height: 320px;
    h1 {
      line-height: 320px;
      text-shadow: 2px 2px #888;
      letter-spacing: 6px;
    }
  }
</style>
