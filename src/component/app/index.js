import React from 'react'
import {connect} from 'react-redux'
import { render } from 'react-dom'
import { MemoryRouter, Route, Switch } from 'react-router-dom'
import * as route from '../../action/route.js'
import Landing from '../landing'
import Signup from '../signup'
import Signin from '../signin'
import Profile from '../profile'
import auth from '../../action/auth.js'

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
          <li><a onClick={this.props.goToSignin}>sign in</a></li>
        </ul>

        <MemoryRouter>
          <Switch location={{pathname: this.props.route}}>
            <Route path='/landing' component={Landing} />
            <Route path='/signup' component={Signup} />
            <Route path='/signin' component={Signin} />
            <Route path='/profile' component={() => <p> profile</p>} />
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
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
