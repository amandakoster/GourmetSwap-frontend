import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import * as route from '../../action/route.js'
import * as util from '../../lib/util.js'
import * as auth from '../../action/auth.js'
import Landing from '../landing'
import Signup from '../signup'
import Signin from '../signin'

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
  componentDidMount(){
    console.log('Comp Did Mount', this.props)
    let token = util.cookieFetch('Gourmet-Swap-Token')
    if(token){
      console.log('token', token)
      this.props.login(token)
      this.props.userFetch(token)

    }
  }

  render() {
    console.log('HIT APP', this.props)
    return(
      <div className='app'>
        <BrowserRouter>
          <div className='browser-router'>
            <div className='user-nav'>
              <h1> User Nav</h1>
              <ul>
                <li><Link to='/landing'> Landing </Link></li>
                <li><Link to='/signup'> Signup </Link></li>
                <li><Link to='/signin'> Signin </Link></li>
                <li><a onClick={this.props.logout}> Logout </a></li>
              </ul>
            </div>


            {util.renderIf(this.state.cook,
              <div className='cook-nav'>
                <h1> Cook Nav </h1>
                <ul>
                  <li><Link to='/cook-form'>Apply to Cook With Us!</Link></li>
                  <li><Link to='/meal-container'>Meals</Link></li>
                </ul>
                <Route exact path='/cook-form'
                  component={CookForm} />
                <Route exact path='/meal-container'
                  component={MealContainer} />
              </div>
            )}


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
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
