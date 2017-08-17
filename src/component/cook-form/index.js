import React from 'react'
import {connect} from 'react-redux'
import * as util from '../../lib/util.js'
import * as auth from '../../action/auth.js'
import * as _ from 'lodash'
import {cookCreate} from '../../action/cook-form.js'
import './cook-form.scss'

class CookForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dishOne:'',
      dishTwo:'',
      dishThree:'',
      method: 'entrepreneur',
      otherInfo: '',
      numDishes:'',
      otherServices:'',
      deliver: null,
      service: null,
      describe: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.setMethod = this.setMethod.bind(this)
  }

  setMethod(e) {
    this.setState({
      method: e.currentTarget.value,
    })
    console.log(this.state.method)
  }

  handleChange(e){
    let {type, name, checked, value} = e.target

    if(name === 'dish-one'){
      this.setState({dishOne: e.target.value})
    }
    if(name === 'dish-two'){
      this.setState({dishTwo: e.target.value})
    }
    if(name === 'dish-three'){
      this.setState({dishThree: e.target.value})
    }
    if(name === 'other-info'){
      this.setState({otherInfo: e.target.value})
    }
    if(name === 'numResturants'){
      this.setState({numResturants: e.target.value})
    }
    if(name === 'numDishes'){
      this.setState({numDishes: e.target.value})
    }
    if(name === 'service'){
      this.setState({service: e.target.value})
    }
    if(name === 'cuisine'){
      this.setState({cuisine: e.target.value})
    }
    if(name === 'deliver'){
      this.setState({deliver: e.target.value})
    }
  }

  handleSubmit(e){
    e.preventDefault()
    let {onComplete} = this.props
    console.log(this.state, 'COOK FORM STATE')
    let result = onComplete(this.state)
    console.log(result, 'cookForm result')
    if(result instanceof Promise){
      result.then(() => this.setState({error:null}))
        .catch(error => {
          util.log('CookForm Error', error)
          this.setState({error})
        })
    }
  }

  render(){
    let {method} = this.state
    return(

      <form onSubmit={this.handleSubmit}>
        <div className='cook-cuisines'>
          <h2> Tell us about your cooking! </h2>
          <p> List your three favorite signature dishes or cuisines. These are the type of dishes your friends and family beg for when there is a party or family gathering.</p>
          <input
            name='dish-one'
            type='text'
            placeholder='dish one'
            value={this.state.dishOne}
            onChange={this.handleChange} />
          <input
            name='dish-two'
            type='text'
            placeholder='dish two'
            value={this.state.title}
            onChange={this.handleChange} />
          <input
            name='dish-three'
            type='text'
            placeholder='dish three'
            value={this.state.title}
            onChange={this.handleChange} />
        </div>

        <div className='number-box'>
          <h2> Tell us about your cooking experience! </h2>
          <p> How many resturants have you cooked in? </p>
          <input
            name='numResturants'
            type='number'
            placeholder='number of resturants'
            value={this.state.numResturants}
            onChange={this.handleChange} />
        </div>

        <div className='radio-button'>
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
        </div>

        <input
          name='other-info'
          type='text'
          placeholder='other info?'
          value={this.state.otherInfo}
          onChange={this.handleChange} />

        <div className='num-dish'>
          <p> How many dishes do you plan on preparing a week? </p>
          <input
            name='numDishes'
            type='number'
            placeholder='number of dishes'
            value={this.state.numDishes}
            onChange={this.handleChange} />
        </div>

        <div className='dropdown'>
          <p> Would you like to deliver your own food to customers to earn extra cash? </p>
          <select
            name='service'
            onChange={this.handleChange}>
            <option value="meal-prep"> meal-prep </option>
            <option value="meal-prep recipes"> meal-prep recipes </option>
            <option value="baked goods"> baked goods </option>
            <option value="catering"> catering </option>
            <option value="cooking classes"> cooking classes </option>
            <option value="personal chefs"> personal chefs </option>
            <option value="special diets"> special diets </option>
            <option value="free food experience"> free food experience </option>
            <option value="event chefs"> event chefs </option>

          </select>
        </div>

        <div className='dropdown'>
          <p> Would you like to deliver your own food to customers to earn extra cash? </p>
          <select
            name='cuisine'
            onChange={this.handleChange}>
            <option value="cuisine1"> cuisine1. </option>
            <option value="cuisine2"> cuisine2. </option>
            <option value="cuisine3"> cuisine3. </option>
            <option value="cuisine4"> cuisine4. </option>
            <option value="cuisine5"> cuisine5. </option>
            <option value="cuisine6"> cuisine6. </option>
          </select>
        </div>

        <div className='dropdown'>
          <p> Would you like to deliver your own food to customers to earn extra cash? </p>
          <select
            name='deliver'
            onChange={this.handleChange}>
            <option value="deliverYes"> Yes, I do. </option>
            <option value="deliverNo"> No, I do not. </option>
          </select>
        </div>

        <button type='submit'> Submit </button>
      </form>
    )
  }
}


export default CookForm
