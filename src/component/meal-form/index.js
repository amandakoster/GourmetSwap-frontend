import React from 'react'
import {connect} from 'react-redux'
import * as util from '../../lib/util.js'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import {mealCreate} from '../../action/meal.js'

import './meal-form.scss'


class MealForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      cuisines: '',
      description: '',
      pickupOffered: false,
      deliveryOffered: false,
      portions: '',
      photoURL: null,
      previewImg: '',
      ingredients: '',
      startDate: moment(),
      endDate: moment().add(2, 'months'),
      // endDate: moment(),
      location: '',
      price: '',
    }
    console.log(this.state)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setPickup = this.setPickup.bind(this)
    this.setDelivery = this.setDelivery.bind(this)
    this.handleDate = this.handleDate.bind(this)
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
    // console.log(this.state)
    let {type, name, checked, value} = e.target

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
  }

  handleDate(e) {
    this.setState({date: e})
    console.log(this.state.date)
  }

  handleSubmit(e){
    e.preventDefault()
    let {onComplete} = this.props
    let result = onComplete(this.state)
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
        <h1> 1. The Service </h1>
        <div className='dropdown'>
          <h2>What Service will you provide?</h2>
          <p> Pick the services you would like to provide on our gourmet swap platform </p>
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
        <label>Offer Pickup?
          <input
            name='pickupOffered'
            type='checkbox'
            checked={this.state.pickupOffered}
            onChange={this.setPickup}
          />
        </label>
        <label> Offer Delivery?
          <input
            name='deliveryOffered'
            type='checkbox'
            checked={this.state.deliveryOffered}
            onChange={this.setDelivery}
          />
        </label>
        <input
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
          type='text'
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
          onChange={this.handleDate} />
        <DatePicker
          selected={this.state.endDate}
          onChange={this.handleDate} />
        <input
          type='file'
          name='photoURL'
          onChange={this.handleChange}
        />
        <img src={this.state.preview} />
        <button type='submit'> Submit </button>
      </form>
    )
  }
}

export default MealForm
