import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login'
import Logout from '../views/auth/Logout'
import IndexDashboard from '../views/dashboard/Index'
import IndexProject from '../views/dashboard/project/Index'
import Project from '../views/dashboard/project/Project'
import Store from '../store/index'
import IndexTimeline from '../views/timeline/Index'
// import IndexPost from '../views/timeline/post/Index'
import Post from '../views/timeline/Posts'
// import IndexComment from '../views/timeline/comment/Index'
// import Comment from '../views/timeline/comment/Comment'

Vue.use(VueRouter)

const routes = [
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
    path: '/dashboard',
    component: IndexDashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'project/',
        component: IndexProject,
        meta: { requiresAuth: true },
        children: [
          {
            path:'',
            name:'project',
            component: Project
          }
        ]
      },
      {
        path: 'home/',
        name: 'home',
        component: Home
      },
    ]
  },
  {
    path: '/',
    component: IndexTimeline,
    meta: { requiresAuth: true },
    children: [
      {
        path:'',
        name:'post',
        component: Post
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
