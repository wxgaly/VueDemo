import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoList from '@/components/TodoList'
import Login from '@/components/Login'

const Bar = {template: '<div>bar</div>'}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/TodoList',
      component: TodoList
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {path: '/bar', component: Bar},
    {
      path: '/Login',
      component: Login
    }
  ]
})
