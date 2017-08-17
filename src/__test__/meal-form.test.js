import React from 'react'
import {shallow, mount} from 'enzyme'
import MealForm from '../component/meal-form'
import moment from 'moment'

describe('MealForm', () => {
  test('intial state with out props', () => {
    let wrapper = mount(<MealForm />)
    expect(wrapper.state('title')).toBe('')
    expect(wrapper.state('description')).toBe('')
    expect(wrapper.state('pickupOffered')).toBe(false)
    expect(wrapper.state('deliveryOffered')).toBe(false)
    expect(wrapper.state('portions')).toBe('')
    expect(wrapper.state('photo')).toBe(null)
    expect(wrapper.state('previewImg')).toBe('')
    expect(wrapper.state('ingredients')).toBe('')
    // expect(wrapper.state('date')).toBe(moment('YYYY-MM-DD'))
    expect(wrapper.state('location')).toBe('')
    expect(wrapper.state('price')).toBe('')
    
  })

  test('intial state with props', () => {
    let mockMeal = {
      _id: 'abc123',
      title: 'rqrerw',
      description: 'rwrerw',
      pickupOffered: false,
      deliveryOffered: false,
      portions: 'rwrewr',
      photo: '/wat.jpg',
      previewImg: 'rwre',
      ingredients: 'rwerew',
      //date: moment(),
      location: 'rwerwe',
      price: '4.56',
    }

    let wrapper = mount(<MealForm meal={mockMeal} />)
    expect(wrapper.state()).toEqual(mockMeal)
  })

})