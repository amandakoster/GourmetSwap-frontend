import React from 'react'
import {connect} from 'react-redux'
import * as util from '../../lib/util.js'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import {mealCreate} from '../../action/meal.js'

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

<<<<<<< HEAD
    if(name === 'cuisines'){
      this.setState({cuisines: e.target.value})
    }
    if(name === 'services'){
      this.setState({services: e.target.value})
    }
    if(name === 'title'){
      this.setState({title: e.target.value})
    }
    if(name === 'description'){
      this.setState({description: e.target.value})
    }
    if(name === 'portions'){
      this.setState({portions: e.target.value})
    }
    if(name === 'ingredients'){
      this.setState({ingredients: e.target.value})
    }
    if(name === 'price'){
      this.setState({price: e.target.value})
    }
    if(name === 'location'){
      this.setState({location: e.target.value})
    }
    if(name === 'photoURL'){
      let {files} = e.target
      let photo = files[0]
      this.setState({photo})
      util.photoToDataURL(photo)
        .then(preview => this.setState({preview}))
        .catch(console.error)
    }
=======
  handlePhotoUpload(e) {
    let {files} = e.target
    let photo = files[0]
    this.setState({photo})
    util.photoToDataURL(photo)
      .then(preview => this.setState({preview}))
      .catch(console.error)
>>>>>>> 5f706525c2dc82b2fdc9023d0c5c56c4c76b5a47
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
      <form className='meal-form' onSubmit={this.handleSubmit}>
        <h3> 1. The Service </h3>
        <h5>What Service will you provide?</h5>
        <p> Pick the services you would like to provide on our Gourmet Swap platform </p>
        <div className="dropdown">
          <select
            name='services'
            onChange={this.handleChange}>
            <option value="none"> none selected </option>
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
        <input
          className='number-box'
          name='portions'
          type='number'
          placeholder='portions'
          value={this.state.portions}
          onChange={this.handleChange} />
        <input
          name='ingredients'
          type='text'
          placeholder='ingredients'
          value={this.state.ingredients}
          onChange={this.handleChange} />
        <input
          name='price'
          type='number'
          placeholder='price'
          value={this.state.price}
          onChange={this.handleChange} />
        <input
          name='location'
          type='text'
          placeholder='location'
          value={this.state.location}
          onChange={this.handleChange} />
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleStartDate} />
        <DatePicker
          selected={this.state.endDate}
          onChange={this.handleStartDate} />
        <input
          type='file'
          name='photoURL'
          onChange={this.handlePhotoUpload}
        />
        <img src={this.state.preview} />
        <button id="file-upload" type='submit'> Submit </button>
      </form>
    )
  }
}

export default MealForm
