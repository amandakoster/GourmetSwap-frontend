import superagent from 'superagent'

export const mealCreate = (meal) => ({
  type: 'MEAL_CREATE',
  payload: meal,
})

export const mealeUpdate = (meal) => ({
  type: 'MEAL_UPDATE',
  payload: meal,
})
