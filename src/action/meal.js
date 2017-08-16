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
