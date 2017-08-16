import superagent from 'superagent'
import * as util from '../lib/util.js'

export const login = (token) => ({
  type: 'LOGIN',
  payload: token,
})

export const setCook = (cook) => ({
  type: 'SET_COOK',
  payload: cook,
})

export const logout = () => {
  util.cookieDelete('Gourmet-Swap-Token')
  return { type: 'LOGOUT' }
}

export const userFetch = (token) => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/users/auth`)
  .set('Authorization', `Bearer ${token}`)
  .then(res => {
    console.log('userFetch res', res.text)
    if(res.text === 'true') {
      dispatch(setCook(true))
    }
  })
}

export const loginRequest = (user) => (dispatch) => {
  return superagent.get(`${__API_URL__}/login`)
    .withCredentials()
    .auth(user.username, user.password)
    .then(res => {
      let token = util.cookieFetch('Gourmet-Swap-Token')
      if(token)
        dispatch(login(token))
      return res
    })
    .catch(util.logError)
}

export const signupRequest = (user) => (dispatch) => {
  console.log('user', user)
  return superagent.post(`${__API_URL__}/api/signup`)
    .withCredentials()
    .send(user)
    .then(res => {
      let token = util.cookieFetch('Gourmet-Swap-Token')
      if(token)
        dispatch(login(token))
      return res
    })
    .catch(util.logError)
}
