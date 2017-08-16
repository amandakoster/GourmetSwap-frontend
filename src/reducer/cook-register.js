export default (state=[], action) => {
  let {type, payload} = action
  switch(type){
  case 'COOK_CREATE':
    return [payload, ...state]
  case 'COOK_UPDATE':
    return [...state, ...payload]
  default:
    return state
  }
}
