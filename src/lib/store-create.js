import reducer from '../reducer/route.js'
import {createStore} from 'redux'

export default() => createStore(reducer)
