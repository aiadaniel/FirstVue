import Vue from 'vue'
import Router from 'vue-router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element)
Vue.use(Router)

const home = () => import(/* webpackChunkName: "home" */ '../pages/Home')
const blog = () => import(/* webpackChunkName: "blog" */ '../components/BlogDetail')
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/blog',
      component: blog
    }
  ]
})
