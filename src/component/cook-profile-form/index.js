import React from 'react'
import * as util from '../../lib/util.js'
import * as auth from '../../action/auth.js'
import * as _ from 'lodash'

import {connect} from 'react-redux'
import superagent from'superagent'
import validator from 'validator'

class cookProfileForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      sigDishes:'',
      numberOfResturants:'',
      brand:'',
      money:'',
      flexWork:'',
      student:'',
      sellingFood:'',
      otherInfo:'',
      numDishes:'',
      typeServices:'',
      chooseCuisines:'',
      deliver:'',
      moreInfo:'',
      fromCook:'',
      fromCustomer:'',
      fromRead:'',
      fromOther:'',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validateChange = this.validateChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
  }

  handleChange(e){
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  render(){
    return(
      <div className='chef-profile-form'>
        <form onSubmit={this.handleSubmit}>

          <input
            name='sigDishes'
            type='text'
            placeholder='signature dishes'
            value={this.state.sigDishes}
            onChange={this.handleChange}
          />
        </form>
      </div>

    )
  }
}

export default cookProfileForm
