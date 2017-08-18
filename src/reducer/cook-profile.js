export default (state=null, action) => {
  let {type, payload} = action
  console.log('READ THIS:', payload)
  switch(type){
  case 'COOK_PROFILE':
    return payload
  default:
    return state
  }
}
