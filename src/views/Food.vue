<template>
  <Bg>
    <Loading :active="isLoading">
      <LoadingStyle></LoadingStyle>
    </Loading>
    <Inner></Inner>
    <div class="container">
      <div class="btn-group mb-4 d-flex">
        <input type="radio" class="btn-check" name="options" id="option1" autocomplete="off" checked @click="changeCategory('烏龍麵')">
        <label class="btn btn-outline-red" for="option1">烏龍麵</label>
        <input type="radio" class="btn-check" name="options" id="option2" autocomplete="off" @click="changeCategory('炸物')">
        <label class="btn btn-outline-red" for="option2">炸物</label>
        <input type="radio" class="btn-check" name="options" id="option3" autocomplete="off" @click="changeCategory('飯類')">
        <label class="btn btn-outline-red" for="option3">飯類</label>
        <input type="radio" class="btn-check" name="options" id="option4" autocomplete="off" @click="changeCategory('配料')">
        <label class="btn btn-outline-red" for="option4">配料</label>
      </div>
      <div class="row g-5">
        <div class="col-lg-4" v-for="(item, i) in classifyCategory" :key="i">
          <div class="row mb-4 img_bg pt-2">
            <div style="height: 210px;width: 68%" class=" text-center mx-auto d-flex align-items-center">
              <img :src="item.imageUrl" class="mx-auto" style="max-width:100%;max-height: 100%;background-size: cover; background-position: center">
            </div>
            <div class="d-flex flex-column mt-3 text-center">
              <h3 class="fs-3 fw-bolder mb-3">{{ item.title }}</h3>
              <p class="text-secondary">{{ item.description }}</p>
              <p class="text-secondary">
                <span>{{ item.price }} 元</span>
              </p>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-secondary btn-sm" @click="getProduct(item.id)" v-if="item.category!='配料'">查看更多</button>
                <button type="button" class="btn btn-outline-danger btn-sm" @click="addCart(item.id)" :disabled="isLoadingItem == item.id">
                  <div class="spinner-grow text-danger spinner-grow-sm align-text-bottom" role="status" v-if="isLoadingItem == item.id">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  加入購物車</button>
              </div>
            </div>
          </div>
          <!-- <Pagination :pages="pagination" @emit-page="getProducts"></Pagination> -->
        </div>
      </div>
    </div>
  </Bg>
</template>

<style lang="scss">
  .mt_bar{
    margin-top: 106px;
  }
  .jCE {
    justify-content: end;
  }
  .btn-check:focus + .btn-outline-red, .btn-outline-red:focus,.btn-check:checked + .btn-outline-red:focus, .btn-check:active + .btn-outline-red:focus, .btn-outline-red:active:focus, .btn-outline-red.active:focus, .btn-outline-red.dropdown-toggle.show:focus {
    box-shadow: none;
  }
  .img_bg {
    background: url("../assets/img/Japanese_Wave_Pattern.jpg") no-repeat top center;
    background-size: 100% auto;
  }
</style>

<script>
// import Pagination from '../components/Pagination.vue'
import Bg from '../components/Bg.vue'
import Inner from '../components/Inner.vue'
import LoadingStyle from '../components/LoadingStyle.vue'
export default {
  data () {
    return {
      products: [],
      isLoading: false,
      // pagination: {},
      isLoadingItem: '',
      menuCategory: '烏龍麵'
    }
  },
  components: {
    // Pagination
    Bg,
    Inner,
    LoadingStyle
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false
          this.products = res.data.products
          // this.pagination = res.data.pagination
        })
    },
    getProduct (id) {
      this.$router.push(`/info/${id}`)
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
    },
    changeCategory (item) {
      this.menuCategory = item
    }
  },
  created () {
    this.getProducts()
  },
  computed: {
    classifyCategory () {
      return this.products.filter(pro => pro.category === this.menuCategory)
    }
  },
  inject: ['emitter']
}
</script>
