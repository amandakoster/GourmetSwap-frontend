import React from 'react'
import {connect} from 'react-redux'
import { render } from 'react-dom'
import { MemoryRouter, Route, Switch } from 'react-router-dom'
import Dropdown  from 'react-simple-dropdown'

import * as route from '../../action/route.js'
import Landing from '../landing'
import Signup from '../signup'
import Signin from '../signin'
import Profile from '../profile'
import cookProfileForm from '../cook-profile-form'
import MealForm from '../meal-form'
import CookNav from '../cook-nav'
import auth from '../../action/auth.js'

let DropdownTrigger = Dropdown.DropdownTrigger
let DropdownContent = Dropdown.DropdownContent

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
          <li><a onClick={this.props.goToLanding}>home</a></li>
          <li><a onClick={this.props.goToSignUp}>sign up</a></li>
          <li><a onClick={this.props.goToProfile}>profile</a></li>
          <li><a onClick={this.props.goToSignin}>sign in</a></li>
          <li><a onClick={this.props.goTocookProfileForm}>cook profile form</a></li>
          <li><a onClick={this.props.goToMealForm}>Meal Form</a></li>
          <li><a onClick={this.props.goToCookNav}>cook nav</a></li>
        </ul>
        <MemoryRouter>
          <Switch location={{pathname: this.props.route}}>
            <Route path='/landing' component={Landing} />
            <Route path='/signup' component={Signup} />
            <Route path='/signin' component={Signin} />
            <Route path='/profile' component={() => <p> profile</p>} />
            <Route path='/cook-profile-form' component={cookProfileForm} />
            <Route path='/meal-form' component={MealForm} />
            <Route path='/cook-nav' component={CookNav} />
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
  goToProfile: () => dispatch(route.switchRoute('/profile')),
  goTocookProfileForm: () => dispatch(route.switchRoute('/cook-profile-form')),
  goToMealForm: () => dispatch(route.switchRoute('/meal-form')),
  goToCookNav: () => dispatch(route.switchRoute('/cook-nav')),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
