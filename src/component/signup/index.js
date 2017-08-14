import React from 'react'
import {connect} from 'react-redux'

// import * as querystring from 'querystring'


class Signup extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      firstName:'',
      lastName:'',
      username:'',
      email:'',
      password:'',
      phoneNumber:'',
      zipCode:'',
      emailError: null,
      passswordError: null,
      usernameAvailable: false,
    }
  }
  render(){
    return(
      <div className='signup'>
        <form>
          <input
            name='email'
          />
        </form>
      </div>
    )
  }
}
export default Signup
