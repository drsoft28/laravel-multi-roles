export const routeOption = (route, key, value) => {


    return route.matched.some((m) => {
        
        return m.meta[key] === value || Object.values(m.components).some(
            component => component.options && component.options[key] === value
        ) || (m.components.default && m.components.default[key] === value)
      
    })
}


export default function(to, from, next,) {

let isNotAuth = !window.store.getters['auth/user'] && routeOption(to, 'auth', true);
let isNotguest = window.store.getters['auth/user'] && routeOption(to, 'auth', false);
console.log('isNotguest',isNotguest)
console.log('isNotAuth',isNotAuth)

if (isNotguest) {
   
    if (from != null && from.name == "dashboard") {
        next({ path: '/profil' })
    } else
        next({ name: 'dashboard' })

} else
if (isNotAuth) {

   
    next({ path: '/login' })

} else {

       
    next()
  

}
}