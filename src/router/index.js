import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoList from '@/components/TodoList'
import Login from '@/components/Login'

const Bar = {template: '<el-card class="box-card" shadow="hover"><div>bar</div></el-card>'}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
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
