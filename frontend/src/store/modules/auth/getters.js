export default {
    
    token (state) {
    return state.token || localStorage.getItem('auth.token')
    },
    role (state) {
        return state.role || localStorage.getItem('auth.role')
    },
    sidebar (state) {
        return state.sidebar || localStorage.getItem('auth.sidebar')
    },
    user (state) {
        return state.user || JSON.parse(localStorage.getItem('auth.user'));
    },
    authenticated(state){
        //if exists token =>  authenticated
        return state.token || localStorage.getItem('auth.token')
    }
  }