export default (state=null, {type, payload}) => {
  switch(type){
  case 'LOGIN': return payload
  case 'SET_TOKEN': return payload
  case 'LOGOUT': return null
  default: return state
  }
}
