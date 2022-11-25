import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'User',
    component: () => import('../views/User.vue'),
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/index',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/food',
        component: () => import('../views/Food.vue')
      },
      {
        path: '/info/:productId',
        component: () => import('../views/ProductMore.vue')
      },
      {
        path: '/cart',
        component: () => import('../views/Cart.vue')
      },
      {
        path: '/checkout/:orderId',
        component: () => import('../views/Checkout.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import('../views/Management.vue'),
    children: [
      {
        path: 'product',
        name: 'Product',
        component: () => import('../views/Product.vue')
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/Order.vue')
      },
      {
        path: 'coupon',
        name: 'Coupon',
        component: () => import('../views/Coupon.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
