import React from 'react'
import * as util from '../../lib/util.js'
import * as auth from '../../action/auth.js'
import * as _ from 'lodash'

import {connect} from 'react-redux'
import superagent from'superagent'
import validator from 'validator'

class CookApplication extends React.Component{
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
      otherServices:'',
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
    // this.validateChange = this.validateChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    if(!this.state.passwordError && !this.state.emailError){
      return this.props.cookCreate({
        email: this.state.email,
        password: this.state.password,
      })
    }
  }

  handleChange(e){
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  validateChange(e){
    let {name, value} = e.target
    let error = null
    if(name ===
      'sigDishes' &&
      'numberOfResturants' &&
      'brand' &&
      'money' &&
      'flexWork' &&
      'student' &&
      'sellingFood' &&
      'otherInfo '&&
      'numDishes' &&
      'otherServices' &&
      'chooseCuisines' &&
      'deliver' &&
      'moreInfo' &&
      'fromCook' &&
      'fromCustomer' &&
      'fromRead' &&
      'fromOther')
    {
      if(!value){
        error = '{value} cannot be empty'
      } else if (!validator.isAlphanumeric(value)) {
        error = '{value} can only contain letters'
      }
    }
  }

  render(){
    return(
      <div className='cook-application'>
        <form onSubmit={this.handleSubmit}>

          <input
            name='sigDishes'
            type='text'
            placeholder='signature dishes'
            value={this.state.sigDishes}
            onChange={this.handleChange}
          />

          <input
            name='numberOfResturants'
            type='text'
            placeholder='number of resturants you have worked'
            value={this.state.numberOfResturants}
            onChange={this.handleChange}
          />

          <input
            name='money'
            type='text'
            placeholder='money'
            value={this.state.money}
            onChange={this.handleChange}
          />

          <input
            name='flexWork'
            type='text'
            placeholder='flexable work'
            value={this.state.flexWork}
            onChange={this.handleChange}
          />

          <input
            name='student'
            type='text'
            placeholder='are you a student'
            value={this.state.student}
            onChange={this.handleChange}
          />

          <input
            name='sellingFood'
            type='text'
            placeholder='are you sellingFood'
            value={this.state.sellingFood}
            onChange={this.handleChange}
          />

          <input
            name='otherInfo'
            type='text'
            placeholder='have any otherInfo'
            value={this.state.otherInfo}
            onChange={this.handleChange}
          />

          <input
            name='numDishes'
            type='text'
            placeholder='tel us numDishes'
            value={this.state.numDishes}
            onChange={this.handleChange}
          />

          <input
            name='otherServices'
            type='text'
            placeholder='otherServices'
            value={this.state.otherServices}
            onChange={this.handleChange}
          />

          <input
            name='chooseCuisines'
            type='text'
            placeholder='signature dishes'
            value={this.state.chooseCuisines}
            onChange={this.handleChange}
          />

          <input
            name='deliver'
            type='text'
            placeholder='deliver'
            value={this.state.deliver}
            onChange={this.handleChange}
          />

          <input
            name='moreInfo'
            type='text'
            placeholder='moreInfo'
            value={this.state.moreInfo}
            onChange={this.handleChange}
          />

          <input
            name='fromCook'
            type='text'
            placeholder='fromCook'
            value={this.state.fromCook}
            onChange={this.handleChange}
          />

          <input
            name='fromCustomer'
            type='text'
            placeholder='fromCustomer'
            value={this.state.fromCustomer}
            onChange={this.handleChange}
          />

          <input
            name='fromRead'
            type='text'
            placeholder='fromRead'
            value={this.state.fromRead}
            onChange={this.handleChange}
          />

          <input
            name='fromOther'
            type='text'
            placeholder='fromOther'
            value={this.state.fromOther}
            onChange={this.handleChange}
          />
          <button type='submit' className='cook-application-button'> submit </button>
        </form>
      </div>

    )
  }
}


export const mapStateToProps = (state) => ({})

export const mapDispatchToProps = (dispatch) => ({
  cookCreate: (user) => dispatch(auth.cookCreate(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CookApplication)
