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

class Signup extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      firstName:'',
      lastName:'',
      username:'',
      email:'',
      password:'',
      phone:'',
      zipCode: '',
      firstNameError: null,
      lastNameError: null,
      usernameError: null,
      phoneError: null,
      zipCodeError: null,
      emailError: null,
      passswordError: null,
      usernameAvailable: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validateChange = this.validateChange.bind(this)
    this.usernameCheckAvailable = _.debounce(this.usernameCheckAvailable.bind(this),250)
  }

  usernameCheckAvailable(){
    return superagent.get(`${__API_URL__}/username/${this.state.username}`)
      .then(() => this.setState({usernameAvailable: true}))
      .catch(() => this.setState({usernameAvailable: false}))
  }

  handleSubmit(e){
    e.preventDefault()
    if(!this.state.usernameError && !this.state.passwordError && !this.state.emailError){
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
    if(name === 'firstName'){
      if(!value){
        error = 'first name cannot be empty'
      } else if (!validator.isAlphanumeric(value)) {
        error = 'first name can only contain letters'
      }
    }

    if(name === 'lastName'){
      if(!value){
        error = 'last name cannot be empty'
      } else if (!validator.isAlphanumeric(value)) {
        error = 'last name can only contain letters'
      }
    }

    if(name === 'username'){
      if(!value){
        error = 'username cannot be empty'
      } else if (!validator.isAlphanumeric(value)) {
        error = 'username can only contain letters and numbers'
      }
    }

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

    if(name === 'phone'){
      if(!value){
        error = 'phone cannot be empty'
      } else if (!validator.isMobilePhone(value)) {
        error = 'phone can only contain numbers'
      }
    }

    if(name === 'zipCode'){
      if(!value){
        error = 'zip code cannot be empty'
      } else if (!validator.isNumeric(value)) {
        error = 'zip code can only contain numbers'
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
      <div className='signup-form'>
        <form onSubmit={this.handleSubmit}>

          <Tooltip message={this.state.firstNameError} />
          <input
            name='firstName'
            type='text'
            placeholder='first name'
            value={this.state.firstName}
            onChange={this.handleChange}
          />

          <Tooltip message={this.state.lastNameError} />
          <input
            name='lastName'
            type='text'
            placeholder='last name'
            value={this.state.lastName}
            onChange={this.handleChange}
          />

          <Tooltip message={this.state.usernameError} />
          <input
            name='username'
            type='text'
            placeholder='username'
            value={this.state.username}
            onChange={this.handleChange}
          />

          <Tooltip message={this.state.usernameError} />
          <div className='username-feedback'>
            {util.renderIf(this.state.username,
              <span>
                {this.state.username} is
                {this.state.usernameAvailable ? ' available' : ' taken'}
              </span>
            )}
          </div>

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

          <Tooltip message={this.state.phoneError} />
          <input
            name='phone'
            type='tel'
            maxLength='10'
            placeholder='phone'
            value={this.state.phone}
            onChange={this.handleChange}
          />

          <Tooltip message={this.state.zipCodeError} />
          <input
            name='zipCode'
            type='number'
            placeholder='zipcode'
            value={this.state.zipCode}
            onChange={this.handleChange}
          />
          <button type='submit' className='signup-form-button'> signup </button>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({})

export const mapDispatchToProps = (dispatch) => ({signup: (user) => dispatch(auth.signupRequest(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup)
