<template>
  <Bg>
    <Loading :active="isLoading">
      <LoadingStyle></LoadingStyle>
    </Loading>
    <Inner>
      <nav aria-label="breadcrumb" class="position-absolute end-0 mt-4 me-4">
        <ol class="breadcrumb justify-content-end">
          <li class="breadcrumb-item text-white"><router-link to="/index">首頁</router-link></li>
          <li class="breadcrumb-item text-white"><router-link to="/food">菜單</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>
    </Inner>
    <div class="container py-4">
      <div class="row mb-4 gx-5">
        <article class="col-md-6">
          <img :src="product.imageUrl" alt="" class="img-fluid w-100">
        </article>
        <div class="col-md-6 mt-5">
          <h2 class="fw-bolder fz_title ls_6 mb-4">{{ product.title }}</h2>
          <div class="fw-bold fs-4 ls_4 mb-3">{{ product.description }}</div>
          <div class="ls_2 mb-2">{{ product.content }}</div>
          <div class="fs-6" v-if="!product.price">{{ product.origin_price }} 元</div>
          <template v-else>
            <div>
              <div class="fs-6" v-if="product.price"> {{ product.price }} 元</div>
            </div>
          </template>
          <hr>
          <button type="button" class="btn btn-outline-danger btn-sm" @click="addCart(product.id)" :disabled="isLoadingItem == product.id">
            <div class="spinner-grow text-danger spinner-grow-sm align-text-bottom" role="status" v-if="isLoadingItem == product.id">
              <span class="visually-hidden">Loading...</span>
            </div>
            加入購物車</button>
        </div>
      </div>
    </div>
  </Bg>
</template>

<style lang="scss" scoped>
  a {
    color: #fff;
    &:hover {
      color: #dc3545;
    }
  }
  .fz_title {
    font-size: 48px;
  }
  .ls_2 {
    letter-spacing: 2px;
  }
  .ls_4 {
    letter-spacing: 4px;
  }
  .ls_6 {
    letter-spacing: 6px;
  }
</style>

<script>
import Bg from '../components/Bg.vue'
import Inner from '../components/Inner.vue'
import LoadingStyle from '../components/LoadingStyle.vue'
export default {
  data () {
    return {
      product: {},
      id: '',
      isLoading: false,
      isLoadingItem: ''
    }
  },
  components: {
    Bg,
    Inner,
    LoadingStyle
  },
  methods: {
    getProduct () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false
          if (res.data.success) {
            this.product = res.data.product
          }
        })
    },
    addCart (id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: 1
      }
      this.isLoadingItem = id
      this.$http.post(api, { data: cart })
        .then((res) => {
          console.log(res)
          this.isLoadingItem = ''
          this.emitter.emit('reset')
        })
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  },
  inject: ['emitter']
}
</script>
