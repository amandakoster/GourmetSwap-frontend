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

export const mealCreateRequest = (meal) => (dispatch, getState) => {
  let {auth} = getState()
  return superagent.post(`${__API_URL__}/api/meals`)
    .set('Authorization', `Bearer ${auth}`)
    .then(res => {
      dispatch(mealCreate(res.body))
      console.log('posting to back end', res.body)
      return res
    })
}
