export default {
    
    token (state) {
    return state.token || localStorage.getItem('auth.token')
    },
    user (state) {
        return state.user || JSON.parse(localStorage.getItem('auth.user'));
    },
    authenticated(state){
        //if exists token =>  authenticated
        return state.token || localStorage.getItem('auth.token')
    }
  }