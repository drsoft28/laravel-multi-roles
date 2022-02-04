export default{
    CLEAR_AUTH(state){
        state.token = null;
        localStorage.removeItem("auth.token");
        state.user = null;
        localStorage.removeItem("auth.user");
        state.role = null;
        localStorage.removeItem("auth.role");
        state.roles = [];
        localStorage.removeItem("auth.roles");
        state.sidebar = [];
        localStorage.removeItem("auth.sidebar");
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
    },
    SET_ROLE(state,role){
        state.role =role;
        localStorage.setItem("auth.role", role);
    },
    SET_ROLES(state,roles){
        state.roles =roles;
        localStorage.setItem("auth.roles", roles);
    },
    SET_SIDEBAR(state,payload){
        state.sidebar =payload;
        localStorage.setItem("auth.sidebar", payload);
    }

}