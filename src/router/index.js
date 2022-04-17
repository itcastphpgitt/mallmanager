import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Home from '@/components/home/Home'
import Users from '@/components/users/Users'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: '/users',
      name: 'Users',
      component: Users
    }]
  }, {
    path: '/login',
    name: 'Login',
    component: Login,

  }, ],
  mode: 'history'
})
