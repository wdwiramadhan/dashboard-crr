import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login'
import Logout from '../views/auth/Logout'
import IndexProject from '../views/project/Index'
import Project from '../views/project/Project'
import Store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/project',
    component: IndexProject,
    meta: { requiresAuth: true },
    children: [
      {
        path:'',
        name:'project',
        component: Project
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!Store.getters.isLogedIn) {
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
