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
    let token = util.cookieFetch('Gourmet-Swap-Token')
    this.setState({
      tokenAuth: token,
    })
  }

  handleCookCreate(cook){
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
