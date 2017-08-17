import React from 'react'
import {connect} from 'react-redux'
import CookForm from '../cook-form'
import {cookCreateRequest} from '../../action/cook-form.js'
import * as util from '../../lib/util.js'

class CookContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tokenAuth: '',
    }
    this.handleCookCreate = this.handleCookCreate.bind(this)
  }

  componentDidMount(){
    console.log('hit componentDidMount')
    let token = util.cookieFetch('Gourmet-Swap-Token')
    console.log('token', token)
    this.setState({
      tokenAuth: token,
    })
    console.log('this.state', this.state)
  }

  handleCookCreate(cook){
    console.log('handleCookCreate', this.state.tokenAuth)
    let token = this.state.tokenAuth
    return this.props.cookCreateRequest(cook, token)
  }

  render(){
    return(
      <div className='cook-container'>
        <CookForm
          onComplete={this.handleCookCreate} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({})

let mapDispatchToProps = (dispatch) => ({
  cookCreateRequest: (cook, token) => dispatch(cookCreateRequest(cook, token)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CookContainer)
