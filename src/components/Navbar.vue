<template>
  <div class="d-flex flex-column navbar-dark bg-bg" style="width: 300px;">
    <img src="../assets/img/logo.png" alt="" class="p-5">
    <ul class="navbar-nav flex-column mt-3">
      <li class="nav-item mb-2">
        <router-link to="/manage/product" class="nav-link px-5">
          <i class="bi bi-grid me-3"></i>
          <span class="fs-4">產品</span>
        </router-link>
      </li>
      <li class="nav-item mb-2">
        <router-link to="/manage/order" class="nav-link px-5">
          <i class="bi bi-archive me-3"></i>
          <span class="fs-4">訂單</span>
        </router-link>
      </li>
      <li class="nav-item mb-2">
        <router-link to="/manage/coupon" class="nav-link px-5">
          <i class="bi bi-gift me-3"></i>
          <span class="fs-4">優惠券</span>
        </router-link>
      </li>
      <li class="nav-item mb-2">
        <a class="nav-link px-5" href="#" @click.prevent="logout">
          <i class="bi bi-box-arrow-right me-3"></i>
          <span class="fs-4">登出</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`
      console.log(api)
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/login')
          }
        })
    }
  }
}
</script>
