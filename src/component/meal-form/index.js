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
      description: '',
      pickupOffered: false,
      deliveryOffered: false,
      portions: '',
      photo: null,
      previewImg: '',
      ingredients: '',
      date: moment(),
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
    if(name === 'photo'){
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
          selected={this.state.date}
          onChange={this.handleDate} />
        <input
          type='file'
          name='photo'
          onChange={this.handleChange}
        />
        <img src={this.state.preview} />
        <button type='submit'> Submit </button>
      </form>
    )
  }
}

export default MealForm
