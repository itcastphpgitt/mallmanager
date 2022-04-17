import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/Login'
import Home from '@/components/home/Home'
import Users from '@/components/users/Users'
import use from '@/components/users/use'
import Stu from '@/components/users/Stu'

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

    },
    {
      path: '/use',
      name: 'use',
      component: use,

    },
    {
      path: '/stu',
      name: 'Stu',
      component: Stu,

    },
  ],
  mode: 'history'
})
