import superagent from 'superagent'
import * as util from '../lib/util.js'

export const login = (token) => ({
  type: 'LOGIN',
  payload: token,
})

export const setToken = (token) => ({
  payload: token,
  type: 'SET_TOKEN',
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
  .set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token})
    .then(res => {
      if(res.text === 'true') {
        dispatch(setCook())
      }
    })
}


export const loginRequest = (user) => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/signin`)
    .auth(user.email, user.password)
    .then(res => {
      console.log('res', res)
      let token = util.cookieCreate('Gourmet-Swap-Token', res.text, 7)
      if(res.text){
        dispatch(userFetch(res.text))
        dispatch(login(res.text))
      }
      return res
    })
    .catch(util.logError)
}

export const signupRequest = (user) => (dispatch) => {
  return superagent.post(`${__API_URL__}/api/signup`)
    .send(user)
    .then(res => {
      util.cookieCreate('Gourmet-Swap-Token', res.text, 7)
      // let token = util.cookieFetch('Gourmet-Swap-Token')
      if(res.text)
        dispatch(login(res.text))
      return res
    })
    .catch(util.logError)
}


// use export const cookieCreate = (name, value, days) => {
//   let expires = days ? ` ${cookieTime(days)};` : ''
//   document.cookie = `${name}=${value};${expires} path='/'`
// }
