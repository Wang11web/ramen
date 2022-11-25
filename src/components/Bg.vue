<template>
  <div class="bg">
    <div class="mt_bar">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
  .bg {
    background: url("../assets/img/bg_yellow.jpg");
    background-size: cover;
    min-height: calc(100vh - 207px);
  }
  .mt_bar {
    margin-top: 106px;
  }
</style>
