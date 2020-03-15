import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index.vue'
import CourseDetail from '../components/detail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/courseDetail/:id',
    name: 'courseDetail',
    component: CourseDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
