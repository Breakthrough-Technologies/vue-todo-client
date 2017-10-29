const state = {
  main: 0
}

const mutations = {
  MY_MUTATION (state) {
    state.main++
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('MY_MUTATION')
  }
}

export default {
  state,
  mutations,
  actions
}
