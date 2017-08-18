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

export const cookMeals = (meals) => ({
  type: 'COOK_MEALS',
})

export const logout = () => {
  util.cookieDelete('Gourmet-Swap-Token')
  return { type: 'LOGOUT', payload: '/landing' }
}

export const userFetch = (token) => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/users/auth`)
  .set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token})
    .then(res => {
      if(res.text === 'true') {
        dispatch(cookMeals())
      }
    })
}

export const cookFetch = (token) => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/users/cook`)
  .set({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token})
    .then(res => {
      console.log('cookFetch res', JSON.parse(res.text))
      let auth = JSON.parse(res.text)._id
      console.log('auth', auth)
      return superagent.get(`${__API_URL__}/api/cook-meals/${auth}`)
      .then(res => {
        console.log('meal res', res.body)
        dispatch(setMeals(res.body))
      })
    })
}

// mealRouter.get('/api/meals/:id', (req, res, next) => {
//   Meal.findOne({ _id: req.params.id })
//     .then(meal => {
//       res.json(meal);
//     })
//     .catch(next);
// });


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
