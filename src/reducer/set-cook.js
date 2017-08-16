export default (state=true, {type, payload}) => {

  switch(type){
  case 'SET_COOK': return payload
  default: return state
  }
}
