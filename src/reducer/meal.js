
export default (state=[], action) => {
  let {type, payload} = action
  switch(type){
  case 'MEAL_CREATE':
    return [payload, ...state]
  case 'MEAL_UPDATE':
    return [...state, ...payload]
  default:
    return state
  }
}
