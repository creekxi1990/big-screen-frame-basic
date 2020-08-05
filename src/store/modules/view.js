const state = {
  resizeValue: null // 界面大小变化
}

const mutations = {
  SET_RESIZE: (state, status) => {
    state.resizeValue = status
  }
}

const actions = {
  setResize ({ commit }, val) {
    commit('SET_RESIZE', val)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
