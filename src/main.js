// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import { fetch, post, patch, put } from './api/fetch'
import {getBlogList} from './api/getData';
// import { post, fetch, patch, put } from './api/fetch'

Vue.config.productionTip = false
// 定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  mounted() {
    // axios.defaults.baseURL = 'http://localhost:9191/microblog/';
    this.GetMainList();
  },
  methods: {
    GetMainList() {
      getBlogList().then(res => {
        console.log('===>' + res)
        this.$store.commit('updateMainBlogList', res)
      })
    }
  },
  components: {App},
  template: '<App/>'
})
