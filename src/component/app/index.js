import React from 'react'
import {connect} from 'react-redux'
import { render } from 'react-dom'
import { MemoryRouter, Route, Switch } from 'react-router-dom'

import * as route from '../../action/route.js'
import * as util from '../../lib/util.js'
import auth from '../../action/auth.js'
import Landing from '../landing'
import Signup from '../signup'
import Signin from '../signin'
import CookApplication from '../cook-application'
import CookRegister from '../cook-register'
import MealForm from '../meal-form'


export class App extends React.Component{
  componentDidMount(){
    console.log('Comp Did Mount', this.props)
  }

  render() {
    console.log('HIT APP', this.props)
    return(
      <div className='app'>
        <div className='user-nav'>
          <h1> User Nav</h1>
          <ul>
            <li><a onClick={this.props.goToLanding}>Home</a></li>
            <li><a onClick={this.props.goToSignUp}>Sign Up</a></li>
            <li><a onClick={this.props.goToSignin}>Sign In</a></li>
            <li><a onClick={this.props.goToCookNav}>Cook Nav</a></li>
          </ul>

          <MemoryRouter>
            <Switch location={{pathname: this.props.route}}>
              <Route path='/landing' component={Landing} />
              <Route path='/signup' component={Signup} />
              <Route path='/signin' component={Signin} />
            </Switch>
          </MemoryRouter>
        </div>

        <div className='cook-nav'>
          <h1> Cook Nav </h1>
          <ul>
            <li><a onClick={this.props.goToCookApplication}>Apply to Cook</a></li>
            <li><a onClick={this.props.goToCookRegister}>Register To Cook</a></li>
            <li><a onClick={this.props.goToMealForm}>Meal Form</a></li>
          </ul>

          <MemoryRouter>
            <Switch location={{pathname: this.props.route}}>
              <Route path='/cook-register' component={CookRegister} />
              <Route path='/meal-form' component={MealForm} />
              <Route path='/cook-application' component={CookApplication} />
            </Switch>
          </MemoryRouter>
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  route: state.route,
})

let mapDispatchToProps = (dispatch) => ({
  // logout: () => dispatch(auth.logout()),
  // login: (token) => dispatch(route.login(token)),
  goToLanding: () => dispatch(route.switchRoute('/landing')),
  goToSignUp: () => dispatch(route.switchRoute('/signup')),
  goToSignin: () => dispatch(route.switchRoute('/signin')),
  goToCookRegister: () => dispatch(route.switchRoute('/cook-register')),
  goToMealForm: () => dispatch(route.switchRoute('/meal-form')),
  goToCookApplication: () => dispatch(route.switchRoute('/cook-application')),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
