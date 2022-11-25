<template>
  <div class="d-flex flex-wrap" style="height: 100vh">
    <Navbar></Navbar>
    <div class="flex-grow-1">
      <ToastMessages></ToastMessages>
      <router-view/>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter'
import pushMessageState from '@/methods/pushMessageState'
import Navbar from '../components/Navbar.vue'
import ToastMessages from '../components/ToastMessages.vue'
export default {
  components: {
    Navbar,
    ToastMessages
  },
  provide () {
    return {
      emitter,
      pushMessageState
    }
  },
  created () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    console.log(token)
    this.$http.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api).then((res) => {
      console.log(res)
      if (!res.data.success) {
        this.$router.push('/login')
      }
    })
    this.$router.push('/manage/product')
  }
}
</script>
