export default (state=false, {type, payload}) => {
  switch(type){
  case 'SET_COOK': return payload
  default: return state
  }
}
