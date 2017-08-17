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
      signatureDishes: '',
      restaurantsCookedIn: 0,
      bestDescribes: '',
      mealsPerWeek: 0,
      services: '',
      cuisines: '',
      offerDelivery: false,
      community: '',
      hoursPerWeek: '',
      moreInfo: '',
      howDidYouHear: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.setMethod = this.setMethod.bind(this)
  }

  setMethod(e) {
    this.setState({
      bestDescribes: e.currentTarget.value,
    })

  }

  handleChange(e){
    let {name,value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit(e){
    e.preventDefault()
    // console.log(this.state.bestDescribes)
    let {onComplete} = this.props
    // console.log(this.state, 'COOK FORM STATE')
    let result = onComplete(this.state)
    // console.log(result, 'cookForm result')
    if(result instanceof Promise){
      result.then(() => this.setState({error:null}))
        .catch(error => {
          util.log('CookForm Error', error)
          this.setState({error})
        })
    }
  }

  render(){
    let {bestDescribes} = this.state
    return(

      <form onSubmit={this.handleSubmit}>

        <div className='cook-cuisines'>
          <h2> Tell us about your cooking! </h2>
          <p> List your three favorite signature dishes or cuisines. These are the type of dishes your friends and family beg for when there is a party or family gathering.</p>

          <input
            name='signatureDishes'
            type='text'
            placeholder='signature dishes'
            value={this.state.signatureDishes}
            onChange={this.handleChange} />
        </div>

        <div className='number-box'>
          <h2> Tell us about your cooking experience! </h2>
          <p> How many resturants have you cooked in? </p>

          <input
            name='restaurantsCookedIn'
            type='number'
            placeholder='number of resturants'
            value={this.state.restaurantsCookedIn}
            onChange={this.handleChange} />
        </div>

        <div className='radio-button'>
          <p> Which of the following best describes you?</p>
          <label>
          Food Entrepreneur looking to build a brand?

            <input
              name='bestDescribes'
              type='radio'
              onChange={this.setMethod}
              value='entrepreneur'
            />
          </label>

          <label>
          Food Professional looking to make money on own terms?
            <input
              name='bestDescribes'
              type='radio'
              onChange={this.setMethod}
              value='professional'
            />
          </label>

          <label>
          Stay at home parent &sol person looking for flexible work?
            <input
              name='bestDescribes'
              type='radio'
              onChange={this.setMethod}
              value='flexible'
            />
          </label>

          <label>
          Culinary arts student looking to hone your craft?
            <input
              name='bestDescribes'
              type='radio'
              onChange={this.setMethod}
              value='student'
            />
          </label>

          <label>
          Already selling food to local community via social media?
            <input
              name='bestDescribes'
              type='radio'
              onChange={this.setMethod}
              value='selling'
            />
          </label>
        </div>

        <label>
          Other?
          <input
            name='other'
            type='text'
            placeholder='other'
            value={this.state.otherInfo}
            onChange={this.handleChange} />
        </label>

        <div className='num-dish'>
          <p> How many dishes do you plan on preparing a week? </p>
          <input
            name='mealsPerWeek'
            type='number'
            placeholder='number of dishes'
            value={this.state.mealsPerWeek}
            onChange={this.handleChange} />
        </div>

        <div className='dropdown'>
          <p> What type of services would you like to provide on our platform? </p>
          <select
            name='services'
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
          <p> Please choose between six cuisines that you would liketo cook the most on our platform! </p>
          <select
            name='cuisines'
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
            name='offerDelivery'
            onChange={this.handleChange}>
            <option value="deliverYes"> Yes, I do. </option>
            <option value="deliverNo"> No, I do not. </option>
          </select>
        </div>

        <div className='community'>
          <p> If you needed to get 10 people over to eat your food tomorrow night, how would you reach out to your potential customers? (Explain in 250 characters) </p>
          <input
            name='community'
            type='textarea'
            onChange={this.handleChange}>
          </input>
        </div>

        <div className='community'>
          <p> Given your schedule, how much time would you be able to spend on Gourmet Swap each week? You will be booked based off your experience and how many hours you put in. </p>
          <select
            name='hoursPerWeek'
            onChange={this.handleChange}>
            <option value="0-3 hours per week"> 0-3 hours per week </option>
            <option value="4-6 hours per week"> 4-6 hours per week </option>
            <option value="7-9 hours per week"> 7-9 hours per week
            </option>
            <option value="10+ hours per week"> 10+ hours per week
            </option>
            <option value="Not Sure"> Not sure
            </option>
          </select>
        </div>

        <div className='moreInfo'>
          <p> Anything else you would like to tell us? </p>
          <input
            name='moreInfo'
            type='textarea'
            onChange={this.handleChange}>
          </input>
        </div>


        <div className='howDidYouHear'>
          <p> How did you hear about Gourmet Swap? </p>
          <input
            name='howDidYouHear'
            type='text'
            placeholder='who?'
            onChange={this.handleChange}>
          </input>
        </div>

        <button type='submit'> Submit </button>
      </form>
    )
  }
}

export const mapStateToProps = (state) => ({
})

export const mapDispatchToProps = (dispatch) => ({
  cookCreateRequest: (cook) => dispatch(auth.cookCreateRequest(cook)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CookForm)
