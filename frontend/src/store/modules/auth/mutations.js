export default{
    CLEAR_AUTH(state){
        state.token = null;
        localStorage.removeItem("auth.token");
        state.user = null;
        localStorage.removeItem("auth.user");
    },
    CLEAR_TOKEN(state){
        state.token = null;
        localStorage.removeItem("auth.token");
    },
    CLEAR_USER(state){
        state.user = null;
        localStorage.removeItem("auth.user");
    },
    SET_TOKEN(state,token){
        state.token =token;
        localStorage.setItem("auth.token", token);
    },
    SET_USER(state,user){
        state.user=user;
        localStorage.setItem("auth.user", JSON.stringify(user));
    }
}