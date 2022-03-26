import Vue from 'vue'
import Router from 'vue-router'
import store from "./store"

Vue.use(Router)
const rejectAuthUser = (to, from, next) => {
  if ( store.state.isLogin === true) {
    //로그인 완료된 유저는 막아야 
    alert('이미 로그인 되었습니다.')
    next("/")
  } else {
    next()
  }
}

const onlyAuthUser = (to, from, next) => {
  if ( store.state.isLogin === false) {
    // 아직 로그인 안된 유저는 막아야 
    alert('로그인이 안되었습니다.')
    next("/")
  } else {
    next()
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import(/* webpackChunkName: "users" */ './views/Users.vue')
    },
    {
      path: '/login',
      beforeEnter: rejectAuthUser,
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/mypage',
      beforeEnter: onlyAuthUser,
      name: 'mypage',
      component: () => import(/* webpackChunkName: "mypage" */ './views/Mypage.vue')
    }
  ]
})
