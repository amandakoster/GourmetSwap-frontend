import React from 'react'
import {connect} from 'react-redux'
import { render } from 'react-dom'
import { MemoryRouter, Route, Switch } from 'react-router-dom'
import * as route from '../../action/route.js'
import Landing from '../landing'
import Signup from '../signup'
import Login from '../login'
import Profile from '../profile'
import cookProfileForm from '../cook-profile-form'

export class App extends React.Component{
  componentDidMount(){
    console.log('Comp Did Mount', this.props)
  }

  render() {
    console.log('HIT APP', this.props)
    return(
      <div className='nav'>
        <h1> Nav </h1>
        <ul>
          <li><a onClick={this.props.goToLanding}>home</a></li>
          <li><a onClick={this.props.goToSignUp}>sign up</a></li>
          <li><a onClick={this.props.goToProfile}>profile</a></li>
          <li><a onClick={this.props.goToCookProfileForm}>cook profile form</a></li>
        </ul>

        <MemoryRouter>
          <Switch location={{pathname: this.props.route}}>
            <Route path='/landing' component={Landing} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={() => <p> profile</p>} />
            <Route path='/cook-profile-form' component={cookProfileForm} />
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
  // login: (token) => dispatch(auth.login(token)),
  goToLanding: () => dispatch(route.switchRoute('/landing')),
  goToSignUp: () => dispatch(route.switchRoute('/signup')),
  goToLogin: () => dispatch(route.switchRoute('/login')),
  goToProfile: () => dispatch(route.switchRoute('/profile')),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
