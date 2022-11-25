<template>
  <Loading :active="isLoading"></Loading>
  <div class="position-absolute cartpos bg-light" :class="{opencart: isCart}">
    <div class="carttitle px-3 fw-bold">
      <i class="bi bi-arrow-return-right pe-2 cupo" @click="isCart=!isCart"></i>
      購物車
    </div>
    <div class="d-flex align-items-center flex-column">
      <template v-if="tempCart.carts!=0">
        <table class="table align-middle">
          <thead>
            <th></th>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
          </thead>
          <tbody>
            <tr v-for="(item, i) in tempCart.carts" :key="i">
              <td>
                <button type="button" class="btn btn-outline-danger btn-sm" @click="delCart(item)">
                  <i class="bi bi-x"></i>
                </button>
              </td>
              <td>
                {{ item.product.title }}
                <div v-if="item.coupon" class="text-success">已套用優惠券</div>
              </td>
              <td>
                <div class="input-group input-group-sm">
                  {{ item.qty }}
                </div>
              </td>
              <td>
                <div v-if="cart.final_total !== cart.total">
                  <del>{{ $filters.currency(item.total) }}</del>
                  <div class="text-success">折扣價 {{ $filters.currency(item.final_total) }}</div>
                </div>
                <div v-else>
                  {{ $filters.currency(item.final_total) }}
                </div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>總計</td>
              <td>{{ $filters.currency(tempCart.total) }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-success">{{ $filters.currency(tempCart.final_total) }}</td>
            </tr>
          </tfoot>
        </table>
        <router-link class="btn btn-outline-red w-75" @click="isCart=false" to="/cart">訂購去</router-link>
      </template>
      <template v-else>
        <p>
          購物車是空的呦
        </p>
        <router-link class="btn btn-outline-red w-75" @click="isCart=false" to="/food">前往選購</router-link>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
  .cartpos{
    top: 0;
    right: 0;
    width: 100%;
    padding: 20px;
    min-height: calc(100vh);
    transform: scaleX(0);
    transform-origin: right;
    transition: .2s ease-in-out;
  }
  .carttitle{
    height: 106px;
    line-height: 106px;
    font-size: 20px;
  }
  .opencart{
    transform: scaleX(1);
    transition: .2s ease-in-out;
  }
  .cupo{
    cursor: pointer;
  }
  @media (min-width: 992px) {
    .cartpos {
      width: 400px;
      padding: 0;
    }
  }
</style>

<script>
export default {
  props: {
    cart: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  watch: {
    cart () {
      this.tempCart = this.cart
    }
  },
  data () {
    return {
      isCart: false,
      tempCart: {},
      isLoading: false,
      isLoadingItem: ''
    }
  },
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false
          console.log(res.data.data)
          this.tempCart = res.data.data
        })
    },
    delCart (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoading = true
      this.$http.delete(api)
        .then((res) => {
          this.isLoading = false
          this.emitter.emit('reset')
          this.getCart()
        })
    }
  },
  inject: ['emitter']
}
</script>
