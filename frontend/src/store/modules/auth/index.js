import state from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
//boolean,state,actions,getters,mutations
// or user key  like :
export default{
    namespaced: true,
    state:state,
    actions:actions,
    getters:getters,
    mutations:mutations
   
}