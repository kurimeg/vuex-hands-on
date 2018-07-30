// import Vue from 'vue'

const state = {
  users: []
}

const mutations = {
  fetchUsers (state, users) {
    state.users = users
  }
}

const actions = {
  fetchUsers ({ commit }, param) {
    // Vue.http.post('emp/FetchEmpInfo', param)
    //   .then((data) => {
    //     commit('fetchUsers', data.EmpInfo)
    //   })
    const users = [
      { EMP_NO: 47001, EMP_NM: '鈴木萌実' },
      { EMP_NO: 47002, EMP_NM: '加藤萌実' },
      { EMP_NO: 47003, EMP_NM: '中村萌実' },
      { EMP_NO: 47004, EMP_NM: '橋本萌実' },
      { EMP_NO: 47005, EMP_NM: '田中萌実' }
    ]
    commit('fetchUsers', users)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
