import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import * as route from '../../action/route.js'
import * as util from '../../lib/util.js'
import * as auth from '../../action/auth.js'
import Landing from '../landing'
import Signup from '../signup'
import Signin from '../signin'
import './app.scss'

import MealContainer from '../meal-container'
import CookForm from '../cook-container'
export class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      token: '',
      cook: this.props.cook,
    }
  }
  componentWillMount(){
    let token = util.cookieFetch('Gourmet-Swap-Token')
    if(token){
      this.props.setToken(token)
      this.props.login(token)
      this.props.userFetch(token)
    }
  }

  render() {
    return(
      <div className='app'>
        <BrowserRouter>
          <div className='browser-router'>
            <div className='user-nav'>
              <img src='src/assets/logo.svg'></img>
              <ul>
                <li><Link to='/landing'> Landing </Link></li>
                {util.renderIf(!this.props.token,
                  <li><Link to='/signup'> Signup </Link></li>
                )}
                {util.renderIf(!this.props.token,
                  <li><Link to='/signin'> Signin </Link></li>
                )}
                {util.renderIf(this.props.token,
                  <li><a onClick={this.props.logout}> Logout </a></li>
                )}
                {util.renderIf(this.props.token && !this.props.cook,
                  <li><Link to='/cook-form'>Apply to Cook With Us!</Link></li>
                )}
                {util.renderIf(this.props.cook,
                  <li><Link to='/meal-container'>Meals</Link></li>
                )}
              </ul>

              <Route exact path='/landing'
                component={Landing} />
              <Route exact path='/signup'
                component={Signup} />
              <Route exact path='/signin'
                component={Signin} />
              <Route exact path='/cook-form'
                component={CookForm} />
              <Route exact path='/meal-container'
                component={MealContainer} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  token: state.token,
  cook: state.cook,
})

let mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(auth.logout()),
  login: (token) => dispatch(auth.login(token)),
  userFetch: (token) => dispatch(auth.userFetch(token)),
  setToken: (token) => dispatch(auth.setToken(token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
