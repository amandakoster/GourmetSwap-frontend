import React from 'react'
import {connect} from 'react-redux'


class MealForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: '',
      description: '',
      method: 'pickup',
      portions: '',
      photos: null,
      ingredients: '',
      date: null,
      location: '',
      price: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    console.log('state', this.state)
  }
  handleSubmit(e){

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
      </form>
    )
  }
}
export default MealForm
