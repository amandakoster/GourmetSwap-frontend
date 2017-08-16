import React from 'react'
import {connect} from 'react-redux'
import CookRegister from '../cook-register'
import {cookCreate} from '../../action/cook-register.js'

class CookContainer extends React.Component {
  render(){
    return(
      <div className='cook-container'>
        <h1>Cook Container - apply to cook with us</h1>
        <CookForm
          onComplete={(data) => {this.props.cookCreate(data)}} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
})

let mapDispatchToProps = (dispatch) => ({
  cookCreate: (cook) => dispatch(cookCreate(cook)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CookContainer)
