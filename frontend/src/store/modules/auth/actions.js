export default {
    // dispatch and commit are also localized for this module
    // they will accept `root` option for the root dispatch/commit
   
    setToken ({commit}, payload) { 
        commit('SET_TOKEN',payload)
     },
     setUser ({commit}, payload) { 
        commit('SET_USER',payload)
     },
     clearToken ({commit}) { 
        commit('CLEAR_TOKEN')
     },
     clearUser ({commit}) { 
        commit('CLEAR_USER')
     }
  }