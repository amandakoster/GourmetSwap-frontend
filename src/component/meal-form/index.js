import React from 'react'
import {connect} from 'react-redux'
import * as util from '../../lib/util.js'
import moment from 'moment'
import DatePicker from 'react-datepicker'


class MealForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      method: 'pickup',
      portions: '',
      photo: null,
      previewImg: '',
      ingredients: '',
      date: moment(),
      location: '',
      price: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setMethod = this.setMethod.bind(this)
    this.handleDate = this.handleDate.bind(this)
  }

  setMethod(e) {
    this.setState({
      method: e.currentTarget.value,
    })
    console.log(this.state.method)
  }
  handleChange(e){
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
    console.log(this.props)
    this.props.onComplete(this.state)
  }
  render(){
    const {method} = this.state
    return(
      <form className='meal-form' onSubmit={this.handleSubmit}>
        <h1> Ninja </h1>
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
        <label>
          <input
            name='method'
            type='radio'
            checked={method == 'pickup'}
            onChange={this.setMethod}
            value='pickup'
          /> Pickup
        </label>
        <label>
          <input
            name='method'
            type='radio'
            checked={method == 'delivery'}
            onChange={this.setMethod}
            value='delivery'
          /> Delivery
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
