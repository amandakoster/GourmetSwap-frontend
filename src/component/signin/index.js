import React from 'react'
import {connect} from 'react-redux'
import * as querystring from 'querystring'


class Signin extends React.Component{
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
        <a href={googleLoginURL} > login with google </a>
      </div>
    )
  }
}
export default Signin
