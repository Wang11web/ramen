<template>
  <Loading :active="isLoading">
    <LoadingStyle></LoadingStyle>
  </Loading>
  <div class="p-4">
    <table class="table mt-4">
      <thead>
        <tr>
          <th>購買時間</th>
          <th>Email</th>
          <th>購買款項</th>
          <th>應付金額</th>
          <th>是否付款</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, i) in orders" :key="i">
          <tr v-if="orders.length" :class="{'text-secondary': !item.is_paid}">
            <td>{{ $filters.date(item.create_at) }}</td>
            <td><span v-text="item.user.email" v-if="item.user"></span></td>
            <td>
              <ul>
                <li v-for="(product, i) in item.products" :key="i">
                  {{ product.product.title }} 數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td class="text-right">
              {{ $filters.currency(item.total) }}
            </td>
            <td>
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" :id="`paidCheckbox${item.id}`" v-model="item.is_paid" @change="updateOrder(item)">
                <label class="form-check-label" :for="`paidCheckbox${item.id}`">
                  <span v-if="item.is_paid">已付款</span>
                  <span v-else>未付款</span>
                </label>
              </div>
            </td>
            <td>
              <div class="btn-group">
                <div class="btn btn-outline-primary btn-sm" @click="openModal(item)">檢視</div>
                <div class="btn btn-outline-danger btn-sm" @click="openDelOrderModal(item)">刪除</div>
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
  <Pagination :pages="pagination" @emit-page="getOrders"></Pagination>
  <OrderModal ref="orderModal" :order="tempOrder" @update-order="updateOrder"></OrderModal>
  <DelModal :item="tempOrder" ref="delModal" @del-item="delOrder"></DelModal>
</template>

<script>
import DelModal from '../components/DelModal.vue'
import Pagination from '../components/Pagination.vue'
import OrderModal from '../components/OrderModal.vue'
import LoadingStyle from '../components/LoadingStyle.vue'
export default {
  data () {
    return {
      orders: {},
      pagination: {},
      isLoading: false,
      tempOrder: {},
      currentPage: 1
    }
  },
  components: {
    DelModal,
    Pagination,
    OrderModal,
    LoadingStyle
  },
  methods: {
    getOrders (page = 1) {
      this.currentPage = page
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders/?page=${page}`
      this.isLoading = true
      this.$http.get(api)
        .then((res) => {
          console.log(res)
          this.isLoading = false
          if (res.data.success) {
            this.orders = res.data.orders
            this.pagination = res.data.pagination
          }
        })
    },
    openModal (item) {
      this.tempOrder = { ...item }
      const orderComponent = this.$refs.orderModal
      orderComponent.showModal()
    },
    updateOrder (item) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`
      const paid = { is_paid: item.is_paid }
      this.$http.put(api, { data: paid })
        .then((res) => {
          this.isLoading = false
          this.getOrders(this.currentPage)
          this.pushMessageState(res, '更新付款狀態')
        })
    },
    openDelOrderModal (item) {
      this.tempOrder = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${this.tempOrder.id}`
      this.isLoading = true
      this.$http.delete(url).then((response) => {
        this.isLoading = false
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.pushMessageState(response, '刪除')
        this.getOrders(this.currentPage)
      })
    }
  },
  created () {
    this.getOrders()
  },
  inject: ['emitter', 'pushMessageState']
}
</script>
