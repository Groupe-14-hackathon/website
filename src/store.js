import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    token: null
  }),
  getters: {
    token (state) {
      return state.token
    }
  },
  mutations: {
    updateToken (state, token) {
      state.token = token
    }
  }
})