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
import MealContainer from '../meal-container'
// import CookNav from '../cook-nav'

export class App extends React.Component{
  componentDidMount(){
    console.log('Comp Did Mount', this.props)
  }

  render() {
    console.log('HIT APP', this.props)
    return(
      <div className='nav'>
        <h1> Nav via App.js</h1>
        <ul>
          <li><a onClick={this.props.goToLanding}>Home</a></li>
          <li><a onClick={this.props.goToSignUp}>Sign Up</a></li>
          <li><a onClick={this.props.goToSignin}>Sign In</a></li>
          <li><a onClick={this.props.goToMealContainer}>Meal</a></li>
        </ul>

        <MemoryRouter>
          <Switch location={{pathname: this.props.route}}>
            <Route path='/landing' component={Landing} />
            <Route path='/signup' component={Signup} />
            <Route path='/signin' component={Signin} />
            <Route path='/meal-container' component={MealContainer} />
          </Switch>
        </MemoryRouter>
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
  goToMealContainer: () => dispatch(route.switchRoute('/meal-container')),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
