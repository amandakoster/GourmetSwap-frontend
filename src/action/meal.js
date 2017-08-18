import superagent from 'superagent'

export const mealCreate = (meal) => ({
  type: 'MEAL_CREATE',
  payload: meal,
})

export const mealUpdate = (meal) => ({
  type: 'MEAL_UPDATE',
  payload: meal,
})

export const mealDelete = (meal) => ({
  type: 'MEAL_DELETE',
  payload: meal,
})

export const cookMealsToState = (meals) => {
  console.log('meals', meals)
  return {
    type: 'COOK_MEALS_FETCH',
    payload: meals,
  }
}

export const mealCreateRequest = (meal) => (dispatch, getState) => {
  console.log('mealCreateRequest: ', meal)
  let {token} = getState()
  console.log(token)
  return superagent.post(`${__API_URL__}/api/meals`)
    .set('Authorization', `Bearer ${token}`)
    .field('title', meal.title)
    .field('cuisines', meal.cuisines)
    .field('description', meal.description)
    .field('pickupOffered', meal.pickupOffered)
    .field('deliveryOffered', meal.deliveryOffered)
    .field('portions', meal.portions)
    .field('ingredients', meal.ingredients)
    .field('startDate', meal.startDate._d)
    .field('endDate', meal.endDate._d)
    .field('location', meal.location)
    .field('price', meal.price)
    .attach('photoURL', meal.photo)
    .then(res => {
      console.log('posted to back end: ', res.body)
    })
    .catch()
}


export const mealFetchRequest = () => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/meals`)
  .then(res => {
    console.log('res', res)
    dispatch(cookMealsToState(res.body))
  })
}

export const cookMealsFetchRequest = (token) => (dispatch, getState) => {
  return superagent.get(`${__API_URL__}/api/cook/${token}`)
}
