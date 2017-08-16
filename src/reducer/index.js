import  {combineReducers} from 'redux'

import route from './route.js'
import meal from './meal.js'
import cook from './set-cook.js'

export default combineReducers({route, meal, cook})
