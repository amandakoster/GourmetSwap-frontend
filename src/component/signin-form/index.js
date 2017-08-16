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
  
class SignInForm extends React.Component{
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
      return this.props.signup({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      })
    } else {
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
    return(
      <div className='signin-form'>
        <form onSubmit={this.handleSubmit}>
  
            
  
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
  }
}

export default SignInForm