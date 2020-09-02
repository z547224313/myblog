import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articleTags:new Map(),
    isChangePage:false,
    isShowNavbar:true
  },
  mutations: {
    addArticleTags(state, payload){
      state.articleTags.set(payload.id,payload.tags)
    },
    changePage(state){
      state.isChangePage = true
    },
    showNavbar(state){
      state.isShowNavbar = !state.isShowNavbar
    }
  },
  actions: {
  },
  modules: {
  }
})
