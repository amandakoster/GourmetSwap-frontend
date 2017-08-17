export default (state=true, {type, payload}) => {
  console.log('set-cook payload', payload)
  switch(type){
  case 'SET_COOK': return payload
  default: return state
  }
}
