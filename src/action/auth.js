import superagent from 'superagent'
import * as util from '../lib/util.js'

export const login = (token) => ({
  type: 'LOGIN',
  payload: token,
})

export const setCook = (cook) => {

  console.log('setCook cook', cook)
  return {
    type: 'SET_COOK',
    payload: cook,
  }
}

export const logout = () => {
  util.cookieDelete('Gourmet-Swap-Token')
  return { type: 'LOGOUT' }
}

export const userFetch = (token) => (dispatch) => {
  console.log('hit userFetch', token)
  return superagent.get(`${__API_URL__}/api/users/auth`)
  .set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token})
    .then(res => {
      if(res.text === 'true') {
        dispatch(setCook())
      }
    })
}


export const loginRequest = (user) => (dispatch) => {
  console.log('user.email: ', user.email)
  console.log('user.password: ', user.password)
  return superagent.get(`${__API_URL__}/api/signin`)
    .withCredentials()
    .auth(user.email, user.password)
    .then(res => {
      let token = util.cookieFetch('Gourmet-Swap-Token')
      if(token){
        dispatch(userFetch(token))
        dispatch(login(token))
      }
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
