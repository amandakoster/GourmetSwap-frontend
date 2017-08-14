import React from 'react'
import {connect} from 'react-redux'
import superagent from 'superagent'
import validator from 'validator'
// import zipcode from 'react-zipcode'
import * as querystring from 'querystring'


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
      zipCode:'',
      firstNameError: null,
      lastNameError: null,
      usernameError: null,
      phoneNumberError: null,
      zipCodeError: null,
      emailError: null,
      passswordError: null,
      usernameAvailable: false,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

  }

  usernameCheckAvailable(){
    return superagent.get(`${__API_URL__}/username/${this.state.username}`)
      .then(() => this.setState({usernameAvailable: true}))
      .catch(() => this.setState({usernameAvailable: false}))
  }

  handleSubmit(e){
    e.preventDefault()
    if(!this.state.usernameError && !this.set.passwordError && !this.state.emailError){
      return this.props.signup({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      })
    } else {
    }
  }
  //
  // this.setState({[`${name}Error`]: error})

  handleChange(e){

    let {name, value} = e.target
    this.setState({[name]: value})
    if(name === 'username')
      this.usernameCheckAvailable()
  }

  render(){
    return(
      <div className='signup'>
        <form onSubmit={this.handleSubmit}>


          <input
            name='firstName'
            type='text'
            placeholder='first name'
            value={this.state.firstName}
            onChange={this.handleChange}
          />


          <input
            name='lastName'
            type='text'
            placeholder='last name'
            value={this.state.lastName}
            onChange={this.handleChange}
          />


          <input
            name='username'
            type='text'
            placeholder='email'
            value={this.state.username}
            onChange={this.handleChange}
          />


          <input
            name='password'
            type='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
          />


          <input
            name='phone'
            type='tel'
            maxLength='10'
            placeholder='phone'
            value={this.state.phone}
            onChange={this.handleChange}
          />


          <input
            name='zipcode'
            type='number'
            placeholder='zipcode'
            value={this.state.zipcode}
            onChange={this.handleChange}
          />
          <button type='submit' > signup </button>
        </form>
      </div>
    )
  }
}


export default Signup
