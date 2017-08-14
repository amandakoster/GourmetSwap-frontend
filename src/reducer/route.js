export default (state='/landing', {type, payload}) => {

  switch(type){
  case 'LANDING': return '/landing'
  default: return state
  }
}
