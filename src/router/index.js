import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  // 登录页面直接通过
  if (to.path === '/login') return next()

  // 其他页面验证 token 是否存在
  if (!window.sessionStorage.getItem('token')) {
    // 没有 token 跳转登录页面
    return next('/login')
  }
  // 有 token 则通过
  next()
})

export default router
