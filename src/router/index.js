import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Registration from '../views/Registration.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      requiresAuthentication: true
    }
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about/:id',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta:{
      requiresAuthentication: true
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: "/"
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) =>{
  const isAdmin = true;
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if(requiresAdmin && !isAdmin) next({name:"Login"})
  else next();
})

export default router
