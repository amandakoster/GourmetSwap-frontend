export default (state=false, {type, payload}) => {
  switch(type){
  case 'SET_COOK': return true
  default: return state
  }
}
