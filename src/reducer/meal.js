export default (state=[], action) => {
  let {type, payload} = action
  switch(type){
  case 'MEAL_CREATE':
    return [payload, ...state]
  case 'MEAL_UPDATE':
    return [...state, ...payload]
  case 'COOK_MEALS_FETCH':
    return [...payload, ...state]
  default:
    return state
  }
}
