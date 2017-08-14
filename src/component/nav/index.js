import React from 'react'
import {connect} from 'react-redux'
import { render } from 'react-dom'
import { MemoryRouter, Route, Link, Switch } from 'react-router'

export class Nav extends React.Component{
  render() {
    return(
      <div className='nav'>
        <ul>
          <li><a onClick={this.props.goToLanding}>home</a></li>
          <li><a onClick={this.props.goToSignUp}>sign up</a></li>
          <li><a onClick={this.props.goToProfile}>profile</a></li>
        </ul>

        <MemoryRouter>
          <Switch location={{pathname: this.props.route}}>
            <Route path='/landing' component={Landing} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/profile' component={Profile} />
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
  logout: () => dispatch(auth.logout()),
  login: (token) => dispatch(auth.login(token)),
  goToLanding: () => dispatch(route.switchRoute('/landing')),
  goToSignUp: () => dispatch(route.switchRoute('/signup')),
  goToLogin: () => dispatch(route.switchRoute('/login')),
  goToProfile () => dispatch(route.switchRoute('/profile')),
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
