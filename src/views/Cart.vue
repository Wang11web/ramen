<template>
  <Bg>
    <Loading :active="isLoading">
      <LoadingStyle></LoadingStyle>
    </Loading>
    <div class="container pt-4">
      <div class="row gx-5">
        <div class="col-6">
          <table class="table align-middle">
            <thead>
              <th></th>
              <th>品名</th>
              <th style="width: 110px">數量</th>
              <th class="text-end">單價</th>
            </thead>
            <tbody>
              <template v-if="cart.carts">
                <tr v-for="(item, i) in cart.carts" :key="i">
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
                      <input type="number" class="form-control" min="1" @change="updateCart(item)" :disabled="item.id === isLoadingItem" v-model.number="item.qty">
                      <div class="input-group-text">{{ item.product.unit }}</div>
                    </div>
                  </td>
                  <td class="text-end">
                    <div v-if="cart.final_total !== cart.total">
                      <del>{{ $filters.currency(item.total) }}</del>
                      <div class="text-success">折扣價 {{ $filters.currency(item.final_total) }}</div>
                    </div>
                    <div v-else>
                      {{ $filters.currency(item.final_total) }}
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ $filters.currency(cart.total) }}</td>
              </tr>
              <tr v-if="cart.final_total !== cart.total">
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
              </tr>
            </tfoot>
          </table>
          <div class="input-group input-group-sm mb-3">
            <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
            <div class="input-group-append">
              <button type="button" class="btn btn-outline-red" @click="addCoupon">套用優惠碼</button>
            </div>
          </div>
          <router-link class="btn btn-outline-red w-50" to="/food">繼續選購</router-link>
        </div>
        <div class="col-6">
          <Form v-slot="{ errors }" @submit="createOrder">
            <div class="mb-3">
              <label for="name" class="form-label">姓名</label>
              <Field id="name" name="姓名" type="text" class="form-control" rules="required" v-model="form.user.name" :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"></Field>
              <error-message class="invalid-feedback" name="姓名"></error-message>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <Field id="email" name="email" type="email" class="form-control" rules="email|required" v-model="form.user.email" :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"></Field>
              <error-message name="email" class="invalid-feedback"></error-message>
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">電話</label>
              <Field id="phone" name="電話" type="text" class="form-control" :rules="isPhone" v-model="form.user.tel" :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"></Field>
              <error-message class="invalid-feedback" name="電話"></error-message>
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">地址</label>
              <Field id="address" name="地址" type="text" class="form-control" v-model="form.user.address" :class="{ 'is-invalid': errors['地址'] }" rules="required"
              placeholder="請輸入地址"></Field>
              <error-message class="invalid-feedback" name="地址"></error-message>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">留言</label>
              <textarea name="" id="message" class="form-control" cols="30" rows="10"
              v-model="form.message"></textarea>
            </div>
            <button class="btn btn-primary">送出訂單</button>
          </Form>
        </div>
      </div>
    </div>
  </Bg>
</template>

<script>
import Bg from '../components/Bg.vue'
import LoadingStyle from '../components/LoadingStyle.vue'
export default {
  data () {
    return {
      cart: {},
      isLoading: false,
      isLoadingItem: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  components: {
    Bg,
    LoadingStyle
  },
  methods: {
    getCart () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false
          console.log(res.data.data)
          this.cart = res.data.data
        })
    },
    updateCart (item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      this.isLoadingItem = item.id
      const cart = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.$http.put(api, { data: cart })
        .then((res) => {
          this.getCart()
          this.emitter.emit('reset')
          this.isLoadingItem = ''
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
    },
    addCoupon () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`
      this.isLoading = true
      const coupon = {
        code: this.coupon_code
      }
      this.$http.post(api, { data: coupon })
        .then((res) => {
          this.isLoading = false
          this.getCart()
        })
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    createOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(api, { data: order })
        .then((res) => {
          console.log(res.data.orderId)
          this.$router.push(`/checkout/${res.data.orderId}`)
        })
    }
  },
  created () {
    this.getCart()
  },
  inject: ['emitter']
}
</script>
