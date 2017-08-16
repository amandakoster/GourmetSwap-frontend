import superagent from 'superagent'

export const cookCreate = (cook) => ({
  type: 'COOK_CREATE',
  payload: cook,
})

export const cookUpdate = (cook) => ({
  type: 'COOK_UPDATE',
  payload: cook,
})

export const cookDelete = (cook) => ({
  type: 'COOK_DELETE',
  payload: cook,
})
