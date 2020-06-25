import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Editor from './views/Editor.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
})