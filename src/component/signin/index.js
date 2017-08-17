import React from 'react'
import * as _ from 'lodash'
import * as util from '../../lib/util.js'
import * as auth from '../../action/auth.js'
import * as querystring from 'querystring'

import {connect} from 'react-redux'
import superagent from 'superagent'
import validator from 'validator'


const Tooltip = (props) => {
  return (
    <div className='tooltip'>
      {props.message}
    </div>
  )
}
class Signin extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email:'',
      password:'',
      emailError: null,
      passswordError: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validateChange = this.validateChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    if(!this.state.passwordError && !this.state.emailError){
      return this.props.login({
        email: this.state.email,
        password: this.state.password,
      })
    }
  }

  validateChange(e){
    let {name, value} = e.target
    let error = null


    if(name === 'email'){
      if(!value){
        error = 'email cannot be empty'
      } else if (!validator.isEmail(value)) {
        error = 'username can only contain letters and numbers'
      }
    }

    if(name === 'password'){
      if(!value){
        error = 'password cannot be empty'
      } else if (!validator.isAlphanumeric(value)) {
        error = 'password can only contain letters and numbers'
      }
    }

    this.setState({[`${name}Error`]: error})
  }

  handleChange(e){

    let {name, value} = e.target
    this.setState({[name]: value})
    if(name === 'username')
      this.usernameCheckAvailable()
  }
  render(){
    console.log('login', this.props)
    let googleLoginBaseURL='https://accounts.google.com/o/oauth2/v2/auth'
    let googleLoginQuery = querystring.stringify({
      client_id: __GOOGLE_CLIENT_ID__,
      response_type: 'code',
      redirect_uri:`${__API_URL__}/oauth/google/code`,
      scope: 'openid profile email',
      prompt: __DEBUG__ ? 'consent' : undefined,
    })

    let googleLoginURL = `${googleLoginBaseURL}?${googleLoginQuery}`
    return(
      <div className='login'>
        <a className='login-with-google' href={googleLoginURL} > login with google </a>


        <form className='sign-in-form' onSubmit={this.handleSubmit}>



          <Tooltip message={this.state.emailError} />
          <input
            name='email'
            type='text'
            placeholder='email'
            value={this.state.email}
            onChange={this.handleChange}
          />

          <Tooltip message={this.state.passwordError} />
          <input
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type='submit' className='signin-form-button'> sign in </button>
        </form>
      </div>
    )
    //reder code here ******

  }
}
// export default Signin
export const mapStateToProps = (state) => ({})

export const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(auth.loginRequest(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Signin)
