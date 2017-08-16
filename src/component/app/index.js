import React from 'react'
import {connect} from 'react-redux'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import * as route from '../../action/route.js'
import * as util from '../../lib/util.js'
import * as auth from '../../action/auth.js'
import Landing from '../landing'
import Signup from '../signup'
import Signin from '../signin'
import CookApplication from '../cook-application'
import MealContainer from '../meal-container'
import CookRegister from '../cook-register'


export class App extends React.Component{
  componentDidMount(){
    console.log('Comp Did Mount', this.props)
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

              <Route exact path='/landing'
              component={Landing} />
              <Route exact path='/signup'
              component={Signup} />
              <Route exact path='/signin'
              component={Signin} />

            </div>

            <div className='cook-nav'>
              <h1> Cook Nav </h1>
              <ul>
                <li><Link to='/cook-register'>Register to Cook</Link></li>
                <li><Link to='/meal-container'>Meals</Link></li>
                <li><Link to='/cook-application'>Apply to Cook</Link></li>
              </ul>

              <Route exact path='/cook-register'
              component={CookRegister} />
              <Route exact path='/cook-application'
              component={CookApplication} />
              <Route exact path='/meal-container'
              component={MealContainer} />

            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({})

let mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(auth.logout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
