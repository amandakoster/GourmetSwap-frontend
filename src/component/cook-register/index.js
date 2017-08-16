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
      describe: false,
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
          <h2> Tell us about your cooking! </h2>
          <label>
            List your your three favorite signature dishes or cuisines. These are the type of dishes your friends or family beg for when there is a party or a family gathering.
            <textarea value={this.state.value} onChange={this.setMethod} />
            <textarea value={this.state.value} onChange={this.handleChange} />
            <textarea value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />


          <div className='drop-down'>
            <h2> Tell us about your cooking experience! </h2>
            <p> How many resturants have you cooked in? </p>
            <select
              defaultValue="---"
              id='event-type'
              name='event-type'
              onChange={this.setMethod}>
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
            title='entrepreneur'
            type='radio'
            checked={method == 'entrepreneur'}
            onChange={this.setMethod}
            value='entrepreneur'
          /> Food Entrepreneur looking to build a brand?
        </label>

        <label>
          <input
            name='method'
            type='radio'
            checked={method == 'professional'}
            onChange={this.setMethod}
            value='professional'
          /> Food Professional looking to make money on own terms?
        </label>

        <label>
          <input
            name='method'
            type='radio'
            checked={method == 'flexible'}
            onChange={this.setMethod}
            value='flexible'
          /> Stay at home parent &sol person looking for flexible work?
        </label>

        <label>
          <input
            name='method'
            type='radio'
            checked={method == 'student'}
            onChange={this.setMethod}
            value='student'
          /> Cullinary arts student looking to hone your craft?
        </label>

        <label>
          <input
            name='method'
            type='radio'
            checked={method == 'selling'}
            onChange={this.setMethod}
            value='selling'
          /> Already selling food to local community via social media?
        </label>

        <input
          name='otherInfo'
          type='text'
          placeholder='have any otherInfo'
          value={this.state.otherInfo}
          onChange={this.handleChange}/>

        <div className='num-dish-drop-down'>
          <p> How many dishes do you plan on preparing a week? </p>
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
