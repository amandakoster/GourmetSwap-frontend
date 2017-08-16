import React from 'react'
import * as util from '../../lib/util.js'
import * as auth from '../../action/auth.js'
import * as _ from 'lodash'

import {connect} from 'react-redux'
import superagent from'superagent'
import validator from 'validator'

class CookRegister extends React.Component{
  constructor(props){
    super(props)
    this.state={
      sigDishes:'',
      numberOfResturants:'',
      method: 'entrepreneur',
      otherInfo: '',
      numDishes:'',
      otherServices:'',
      chooseCuisines:'',
      deliver:false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.setMethod = this.setMethod.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
  }
  setMethod(e) {
    this.setState({
      method: e.currentTarget.value,
    })
    console.log(this.state.method)
  }
  handleChange(e){
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  render(){
    const {method} = this.state
    return(

      <form onSubmit={this.handleSubmit}>
        <h1>register-cooking</h1>

        <div className='cook-cuisines'>
          <lable> Signature Dishes:
            <textarea value={this.state.sigDishes}
              onChange={this.handleChange} />
          </lable>
          <input type='submit' value="Submit" />
          <p> Tell us about your cooking! </p>

          <div className='drop-down'>
            <select
              defaultValue="---"
              id='event-type'
              name='event-type'
              onChange={this.handleChange}>
              <option value="---"> --- </option>
              <option value="0-2"> 0-2 </option>
              <option value="3-5"> 3-5 </option>
              <option value="6-9"> 6-9 </option>
              <option value="10+"> 10+ </option>
            </select>
          </div>
        </div>

        <label>
          <input
            name='method'
            type='radio'
            checked={method == 'entrepreneur'}
            onChange={this.setMethod}
            value='entrepreneur'
          /> Pickup
        </label>

        <label>
          <input
            name='method'
            type='radio'
            checked={method == 'professional'}
            onChange={this.setMethod}
            value='professional'
          /> Delivery
        </label>

        <label>
          <input
            name='method'
            type='radio'
            checked={method == 'flexible'}
            onChange={this.setMethod}
            value='flexible'
          /> Pickup
        </label>

        <label>
          <input
            name='method'
            type='radio'
            checked={method == 'student'}
            onChange={this.setMethod}
            value='student'
          /> Delivery
        </label>

        <label>
          <input
            name='method'
            type='radio'
            checked={method == 'selling'}
            onChange={this.setMethod}
            value='selling'
          /> Delivery
        </label>

        <input
          name='otherInfo'
          type='text'
          placeholder='have any otherInfo'
          value={this.state.otherInfo}
          onChange={this.handleChange}/>

        <div className='num-dish'>
          <lable> Signature Dishes:
            <textarea value={this.state.sigDishes}
              onChange={this.handleChange} />
          </lable>
          <input type='submit' value="Submit" />
          <p> How many dishes do you plan on preparing a week? </p>
        </div>

        <div className='drop-down'>
          <select
            defaultValue="---"
            id='event-type'
            name='event-type'
            onChange={this.handleChange}>
            <option value="---"> --- </option>
            <option value="0-2"> 0-2 </option>
            <option value="3-5"> 3-5 </option>
            <option value="6-9"> 6-9 </option>
            <option value="10+"> 10+ </option>
          </select>
        </div>
      </form>

    )
  }
}


export default CookRegister
