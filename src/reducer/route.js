export default (state='/landing', {type, payload}) => {

  switch(type){
  case 'LANDING':   return '/landing'
  case 'SWITCH_ROUTE': return payload
  case 'POFILE': return '/profile'
  default: return state
  }
}
