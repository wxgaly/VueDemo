import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoList from '@/components/TodoList'
import Login from '@/components/Login'
import IViewLayout from '@/components/IViewLayout'

const Bar = {template: '<el-tooltip content="这是一个文字提示" placement="top">' +
  '<el-card class="box-card" shadow="hover">' +
  '<div>bar</div>' +
  '</el-card>' +
  '</el-tooltip>'}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IViewLayout',
      component: IViewLayout
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
    },
    {
      path: '/IViewLayout',
      component: IViewLayout
    }
  ]
})
