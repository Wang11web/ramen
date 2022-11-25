<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div class="container">
      <router-link class="navbar-brand logo_mobile" to="/index"><img src="../assets/img/logo-square.png" alt="" width="80"></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbartoggle" aria-controls="navbartoggle" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbartoggle">
        <ul class="navbar-nav me-3 w-50">
          <li class="nav-item mx-3 my-2 my-lg-0 flex_1 text-lg-end item_bg">
            <router-link class="navbar-brand fs-5 me-0 fw-bolder link_active position-relative" to="/index">首頁</router-link>
          </li>
          <li class="nav-item mx-3 my-2 my-lg-0 flex_1 text-lg-end item_bg">
            <router-link class="navbar-brand fs-5 me-0 fw-bolder link_active position-relative" to="/food">商品</router-link>
          </li>
          <li class="nav-item mx-3 my-2 my-lg-0 flex_1 text-lg-end item_bg">
            <a class="navbar-brand fs-5 me-0 fw-bolder link_active position-relative cupo" @click="openCartModal">
              購物車
              <span class="position-absolute rounded-circle cartnum text-white" v-if="cartLength!=0">{{ cartLength }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <CartModal ref="cartModal" :cart="tempCart"></CartModal>
  </nav>
  <router-view/>
  <footer>
    <div class="bg-bg p-4 text-center text-white-50">
      <p class="mb-0">
        本網站僅個人作品使用，並無任何商業用途
        <small class="d-block mt-2">Copyright &copy; 2021 TORIDOLL Holdings Corporation All rights reserved.</small>
      </p>
    </div>
  </footer>
</template>

<style lang="scss">
.navbar-toggler:focus{
  box-shadow: none;
}
.navbar-light .navbar-toggler{
  border: none;
}
.logo_mobile{
  margin-left: 50%;
  transform: translateX(-50%);
}
.flex_1{
  flex: 1;
}
.cupo{
  cursor: pointer;
}
.item_bg{
  .navbar-brand{
    color: #DC3545;
  }
}
.cartnum{
  width: 20px;
  height: 20px;
  bottom: -5px;
  right: -15px;
  line-height: 20px;
  font-size: 14px;
  text-align: center;
  background-color:#71141d;
}
.link_active::after{
  content: '';
  position: absolute;
  height: 2px;
  width: 0%;
  bottom: -2px;
  left: 0;
  background-color: #71141d;
  transition: .5s;
}
.link_active:hover{
  &::after{
    width: 100%;
    transition: .5s;
  }
}
@media (min-width: 992px){
  .logo_mobile{
    margin-left: 1rem;
    transform: initial;
  }
  .item_bg{
    background: url("../assets/img/Test.png");
    background-size: cover;
    background-position: center;
    padding: 8px 10px;
    border-radius: 10px;
    .navbar-brand{
      color: white;
      &:hover,&:focus{
        color: #71141d;
      }
    }
    .active{
      color: #71141d;
    }
  }
}
</style>
<script>
import emitter from '@/methods/emitter'
import CartModal from '../components/CartModal.vue'
export default {
  data () {
    return {
      tempCart: [],
      cartLength: 0
    }
  },
  components: {
    CartModal
  },
  provide () {
    return {
      emitter
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
          this.cartLength = res.data.data.carts.length
        })
    },
    openCartModal () {
      const cartComponent = this.$refs.cartModal
      cartComponent.isCart = !cartComponent.isCart
    }
  },
  created () {
    this.getCart()
    emitter.on('reset', this.getCart)
  }
}
</script>
