import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  bloglist: []
}

const mutations = {
  updateMainBlogList(state, list) {
    state.bloglist = list;
  }
}

const actions = {

}

const modules = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules
})
