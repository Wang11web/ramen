<template>
  <Loading :active="isLoading">
    <LoadingStyle></LoadingStyle>
  </Loading>
  <div class="p-4">
    <div class="text-end">
      <button class="btn btn-primary" type="button" @click="openCouponModal(true)">
        建立新的優惠券
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in coupons" :key="i">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td>
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <div class="btn btn-outline-primary btn-sm" @click="openCouponModal(false, item)">編輯</div>
              <div class="btn btn-outline-danger btn-sm" @click="openDelCouponModal(item)">刪除</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <CouponModal ref="couponModal" :coupon="tempCoupon" @update-coupon="updateCoupon"></CouponModal>
  <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon"></DelModal>
</template>

<script>
import CouponModal from '../components/CouponModal.vue'
import DelModal from '../components/DelModal.vue'
import LoadingStyle from '../components/LoadingStyle.vue'
export default {
  data () {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: ''
      },
      isLoading: false,
      isNew: false
    }
  },
  components: {
    CouponModal,
    DelModal,
    LoadingStyle
  },
  inject: ['emitter', 'pushMessageState'],
  methods: {
    getCoupons (page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false
          this.coupons = res.data.coupons
        })
    },
    openCouponModal (isNew, item) {
      if (isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
      } else {
        this.tempCoupon = { ...item }
      }
      this.isNew = isNew
      const couponComponent = this.$refs.couponModal
      couponComponent.showModal()
    },
    updateCoupon (item) {
      this.tempCoupon = item
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`
        httpMethod = 'put'
      }
      const couponComponent = this.$refs.couponModal
      this.isLoading = true
      this.$http[httpMethod](api, { data: this.tempCoupon })
        .then((res) => {
          this.isLoading = false
          console.log(res)
          couponComponent.hideModal()
          this.pushMessageState(res, '新增優惠券')
          this.getCoupons()
        })
    },
    openDelCouponModal (item) {
      this.tempCoupon = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delCoupon () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
      this.isLoading = true
      this.$http.delete(url).then((response) => {
        this.isLoading = false
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getCoupons()
        this.pushMessageState(response, '刪除優惠券')
      })
    }
  },
  created () {
    this.getCoupons()
  }
}
</script>
