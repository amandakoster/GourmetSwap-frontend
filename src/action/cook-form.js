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

export const cookCreateRequest = (cook, token) => (dispatch, getState) => {

  return superagent.post(`${__API_URL__}/api/cooks`)
    .set('Authorization', `Bearer ${token}`)
    .send(cook)
    .then(res => {
      console.log('cookCreateRequest res.body', res.body)
    })
    .catch()
}
