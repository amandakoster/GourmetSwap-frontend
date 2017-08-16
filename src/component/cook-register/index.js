import React from 'react'
import {connect} from 'react-redux'
import * as util from '../../lib/util.js'
import * as auth from '../../action/auth.js'
import * as _ from 'lodash'
import {cookCreate} from '../../action/cook-register.js'

class CookRegister extends React.Component{
  constructor(props){
    super(props)
    this.state = {
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

  setMethod(e) {
    this.setState({
      method: e.currentTarget.value,
    })
    console.log(this.state.method)
  }

  handleChange(e){
    let {type, name, checked, value} = e.target

    if(name === 'dish one'){
      this.setState({title: e.target.value})
    }
    if(name === 'dish two'){
      this.setState({description: e.target.value})
    }
    if(name === 'dish three'){
      this.setState({portions: e.target.value})
    }
    if(name === 'other?'){
      this.setState({ingredients: e.target.value})

    }
  }

  handleSubmit(e){
    e.preventDefault()
    let {onComplete} = this.props
    let result = onComplete(this.state)
    if(result instanceof Promise){
      result.then(() => this.setState({error:null}))
        .catch(error => {
          util.log('CookRegsiter Error', error)
          this.setState({error})
        })
    }
  }

  render(){
    const {method} = this.state
    return(

      <form onSubmit={this.handleSubmit}>
        <h1>register-cooking</h1>

        <div className='cook-cuisines'>
          <h2> Tell us about your cooking! </h2>
          <p> List your three favorite signature dishes or cuisines. These are the type of dishes your friends and family beg for when there is a party or family gathering.</p>
          <input
            name='dish-one'
            type='text'
            placeholder='dish one'
            value={this.state.title}
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

        <div className='drop-down'>
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
          value={this.state.title}
          onChange={this.handleChange} />

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
          <button type='submit'> Submit </button>
        </div>
      </form>
    )
  }
}


export default CookRegister
