<template>
  <div class="position-relative video overflow-hidden">
    <video muted loop autoplay playsinline id="movie" src="../assets/video/movie_pc.mp4"></video>
    <h1 class="position-absolute top-50 start-50 translate-middle fs-1 text-white bg-secondary bg-opacity-50 p-4 rounded-2">
      <img src="../assets/img/logo.png" alt="">
    </h1>
  </div>
  <div class="bg pb-5">
    <div class="text-center py-4"><h2 class="ls_2">《從麵粉到烏龍麵》</h2></div>
    <div class="container">
      <div class="row mb-lg-5">
        <div class="col-lg-7" data-aos="flip-down" data-aos-duration="600">
          <div class="d-flex w-100">
            <img src="../assets/img/index-pic1.jpg" alt="" class="w-100 h-auto">
          </div>
        </div>
        <div class="col-lg-5 d-flex justify-content-center flex-column p-5 text-center lh-lg" data-aos="flip-down" data-aos-duration="600">
          <h3 class="fs-4 ls_1">手工揉製而成的麵團</h3>
          需要經歷一個晚上的低溫發酵<br>才能發揮最佳的風味
        </div>
      </div>
      <div class="row mb-lg-5">
        <div class="col-lg-7 order-lg-2" data-aos="flip-down" data-aos-duration="600">
          <div class="d-flex w-100">
            <img src="../assets/img/index-pic2.jpg" alt="" class="w-100 h-auto">
          </div>
        </div>
        <div class="col-lg-5 d-flex justify-content-center flex-column p-5 text-center lh-lg order-lg-1" data-aos="flip-down" data-aos-duration="600">
          <h3 class="fs-4 ls_1">現點現做的烏龍麵</h3>
          採用自助點餐取餐方式<br>半開放式廚房
        </div>
      </div>
      <div class="row">
        <div class="col-lg-7" data-aos="flip-down" data-aos-duration="600">
          <div class="d-flex w-100">
            <img src="../assets/img/index-pic3.jpg" alt="" class="w-100 h-auto">
          </div>
        </div>
        <div class="col-lg-5 d-flex justify-content-center flex-column p-5 text-center lh-lg" data-aos="flip-down" data-aos-duration="600">
          <h3 class="fs-4 ls_1">麵條的勁道</h3>
          冷水冰鎮過的烏龍麵<br>是讓麵條Q彈滑順的訣竅<br>淋上看似簡單實為究極特製祕傳湯頭<br>不同凡響的美味
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .video {
    height: 100vh;
  }
  video {
    width: auto;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .bg {
    background: url("../assets/img/bg_yellow.jpg");
    background-size: cover;
  }
  .ls_1 {
    letter-spacing: 2.5px;
  }
  .ls_2 {
    letter-spacing: 5px;
  }
</style>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init({
  easing: 'linear',
  once: 'true'
})
export default {
}
</script>
