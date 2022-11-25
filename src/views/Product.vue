<template>
  <Loading :active="isLoading">
    <LoadingStyle></LoadingStyle>
  </Loading>
  <div class="p-4">
    <div class="text-end">
      <button class="btn btn-primary" type="button" @click="openModal(true)">
        增加一個產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>分類</th>
          <th>產品名稱</th>
          <th>圖片</th>
          <th>售價</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td>
            <div style="width: 100px">
              <img :src="item.imageUrl" alt="" class=" img-fluid">
            </div>
          </td>
          <td class="text-right">
            {{ $filters.currency(item.price) }}
          </td>
          <td>
            <div class="form-check form-switch">
              <label class="form-check-label" :for="`enableCheckbox${item.id}`">
                <span v-if="item.is_enabled" class="text-success">已啟用</span>
                <span v-else class="text-muted">未啟用</span>
              </label>
              <input class="form-check-input" type="checkbox" :id="`enableCheckbox${item.id}`" v-model="item.is_enabled" @change="updateProduct(item)">
            </div>
          </td>
          <td>
            <div class="btn-group">
              <div class="btn btn-outline-primary btn-sm" @click="openModal(false, item)">編輯</div>
              <div class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <Pagination :pages="pagination" @emit-page="getProducts"></Pagination>
  <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></ProductModal>
  <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"></DelModal>
</template>

<script>
import ProductModal from '../components/ProductModal.vue'
import DelModal from '../components/DelModal.vue'
import Pagination from '../components/Pagination.vue'
import LoadingStyle from '../components/LoadingStyle.vue'
export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isLoading: false,
      isNew: false
    }
  },
  components: {
    ProductModal,
    DelModal,
    Pagination,
    LoadingStyle
  },
  inject: ['emitter', 'pushMessageState'],
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            console.log(res.data)
            this.products = res.data.products
            this.pagination = res.data.pagination
          }
        })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    updateProduct (item) {
      this.tempProduct = item
      this.isLoading = true
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }
      const productComponent = this.$refs.productModal
      this.$http[httpMethod](api, { data: this.tempProduct })
        .then((res) => {
          this.isLoading = false
          console.log(res)
          productComponent.hideModal()
          this.getProducts()
          this.pushMessageState(res)
        })
    },
    openDelModal (item) {
      this.tempProduct = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delProduct () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
      this.$http.delete(url).then((response) => {
        this.isLoading = false
        console.log(response.data)
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getProducts()
        this.pushMessageState(response, '刪除')
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
