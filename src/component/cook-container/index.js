import React from 'react'
import {connect} from 'react-redux'
import CookForm from '../cook-form'
import {cookCreate} from '../../action/cook-form.js'

class CookContainer extends React.Component {
  constructor(props){
    super(props)
    this.handleCookCreate = this.handleCookCreate.bind(this)
  }

  handleCookCreate(cook){
    return this.props.cookCreate(cook)
  }

  render(){
    return(
      <div className='cook-container'>
        <h1>Cook Container - apply to cook with us</h1>
        <CookForm
          onComplete={this.handleCookCreate} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({})

let mapDispatchToProps = (dispatch) => ({
  cookCreate: (cook) => dispatch(cookCreate(cook)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CookContainer)
