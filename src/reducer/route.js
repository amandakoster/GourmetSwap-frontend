export default (state='', {type, payload}) => {

  switch(type){
  case 'LANDING':   return '/landing'
  case 'SWITCH_ROUTE': return payload
  case 'PROFILE': return '/profile'
  case 'LOGOUT': return payload
  default: return state
  }
}
