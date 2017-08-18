export default (state=null, action) => {
  let {type, payload} = action
  switch(type){
  case 'COOK_PROFILE':
    return payload
  default:
    return state
  }
}
