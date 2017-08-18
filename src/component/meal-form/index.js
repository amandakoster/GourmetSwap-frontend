import React from 'react'
import {connect} from 'react-redux'
import * as util from '../../lib/util.js'
import moment from 'moment'
import {mealCreate} from '../../action/meal.js'
import './datepicker.scss'

class MealForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      services: '',
      cuisines: '',
      description: '',
      pickupOffered: false,
      deliveryOffered: false,
      portions: 0,
      // previewImg: '',
      ingredients: '',
      startDate: moment(),
      endDate: moment().add(2, 'months'),
      location: '',
      price: 0,
    }
    console.log(this.state)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setPickup = this.setPickup.bind(this)
    this.setDelivery = this.setDelivery.bind(this)
    this.handleStartDate = this.handleStartDate.bind(this)
    this.handleEndDate = this.handleEndDate.bind(this)
    this.handlePhotoUpload = this.handlePhotoUpload.bind(this)
  }

  setPickup(e) {
    this.setState({
      pickupOffered: !this.state.pickupOffered,
    })
    console.log('pickupOffered: ', !this.state.pickupOffered)
  }
  setDelivery(e) {
    this.setState({
      deliveryOffered: !this.state.deliveryOffered,
    })
    console.log('deliveryOffered: ', !this.state.deliveryOffered)
  }

  handleChange(e){
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  handlePhotoUpload(e) {
    let {files} = e.target
    let photo = files[0]
    this.setState({photo})
    util.photoToDataURL(photo)
      .then(preview => this.setState({preview}))
      .catch(console.error)

  }

  handleStartDate(e) {
    this.setState({startDate: e})
    console.log(this.state.startDate)
  }

  handleEndDate(e) {
    this.setState({endDate: e})
    console.log(this.state.endDate)
  }

  handleSubmit(e){
    e.preventDefault()
    let {onComplete} = this.props
    let result = onComplete(this.state)
    console.log(this.state)
    if(result instanceof Promise){
      result.then(() => this.setState({error:null}))
        .catch(error => {
          util.log('MealForm Error', error)
          this.setState({error})
        })
    }
  }
  render(){
    const {pickupOffered} = this.state
    const {deliveryOffered} = this.state
    return(
      <body>
        <form className='meal-form' onSubmit={this.handleSubmit}>
          <h1> Post Your Meal </h1>
          <h2> 1. The Service </h2>
          <h5>What Service will you provide?</h5>
          <p> Pick the services you would like to provide on our Gourmet Swap platform </p>
          <select
            className="dropdown"
            name='services'
            onChange={this.handleChange}>
            <option value="none"> --- </option>
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

          <input
            name='title'
            type='text'
            placeholder='title'
            value={this.state.title}
            onChange={this.handleChange} />
          <input
            name='description'
            type='text'
            placeholder='description'
            value={this.state.description}
            onChange={this.handleChange} />

          <h5>Will your meal be for pick up?
            <input
              name='pickupOffered'
              type='checkbox'
              checked={this.state.pickupOffered}
              onChange={this.setPickup}
            />
          </h5>
          <h5> Will your meal be for delivery?
            <input
              name='deliveryOffered'
              type='checkbox'
              checked={this.state.deliveryOffered}
              onChange={this.setDelivery}
            />
          </h5>
          <p> Please choose between six cuisines that you would liketo cook the most on our platform! </p>
          <select
            className='dropdown'
            name='cuisines'
            onChange={this.handleChange}>
            <option value='null'> --- </option>
            <option value="cuisine1"> cuisine1. </option>
            <option value="cuisine2"> cuisine2. </option>
            <option value="cuisine3"> cuisine3. </option>
            <option value="cuisine4"> cuisine4. </option>
            <option value="cuisine5"> cuisine5. </option>
            <option value="cuisine6"> cuisine6. </option>
          </select>

          <h5> What items are going to be for sale for your service?</h5>
          <p>Enter your meal items here, and how many of each your planning to make. If your meal has an entree please enter it first</p>
          <input
            className='number-box'
            min="0"
            name='portions'
            type='number'
            placeholder='portions'
            value={this.state.portions}
            onChange={this.handleChange} />
          <input
            className='number-box'
            min="0"
            name='ingredients'
            type='text'
            placeholder='ingredients'
            value={this.state.ingredients}
            onChange={this.handleChange} />
          <input
            className='number-box'
            min="0"
            name='price'
            type='number'
            placeholder='price'
            value={this.state.price}
            onChange={this.handleChange} />
          <input
            className='number-box'
            min="0"
            name='location'
            type='text'
            placeholder='location'
            value={this.state.location}
            onChange={this.handleChange} />

          <p> Upload photos of your meals here: </p>
          <input
            className='photo-upload'
            type='file'
            name='photoURL'
            onChange={this.handlePhotoUpload}
          />
          <p> Submit your meal! </p>
          <img src={this.state.preview} />
          <button id="file-upload" type='submit'> Submit </button>
        </form>
      </body>
    )
  }
}

export default MealForm
