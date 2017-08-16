export default (state=null, action) => {
  let {type, payload} = action
  switch(type){
  case 'MEAL_CREATE':
    return payload
  case 'MEAL_UPDATE':
    return [...state, ...payload]
  default:
    return state
  }
}
