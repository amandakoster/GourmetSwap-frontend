import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import * as route from '../../action/route.js'
import * as util from '../../lib/util.js'
import auth from '../../action/auth.js'
import Landing from '../landing'
import Signup from '../signup'
import Signin from '../signin'

import MealContainer from '../meal-container'
import CookForm from '../cook-container'


export class App extends React.Component{
  componentDidMount(){
    let token = util.cookieFetch('Gourmet-Swap-Token')
    if(token){
      this.props.login(token)
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
              </ul>

              <Route exact path='/landing'
                component={Landing} />
              <Route exact path='/signup'
                component={Signup} />
              <Route exact path='/signin'
                component={Signin} />
            </div>              <div className='cook-nav'>
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
            {util.renderIf(this.props.token,
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

let mapStateToProps = (state) => ({})

let mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
