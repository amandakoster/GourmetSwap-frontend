import React from 'react'
import {shallow, mount} from 'enzyme'
import MealForm from '../component/meal-form'
import moment from 'moment'

describe('MealForm', () => {
  test('intial state with out props', () => {
    let wrapper = mount(<MealForm />)
    expect(wrapper.state('title')).toBe('')
    expect(wrapper.state('services')).toBe('')
    expect(wrapper.state('cuisines')).toBe('')
    expect(wrapper.state('description')).toBe('')
    expect(wrapper.state('pickupOffered')).toBe(false)
    expect(wrapper.state('deliveryOffered')).toBe(false)
    expect(wrapper.state('portions')).toBe(0)
  
    // expect(wrapper.state('previewImg')).toBe('')
    expect(wrapper.state('ingredients')).toBe('')
    // expect(wrapper.state('date')).toBe(moment('YYYY-MM-DD'))
    // expect(wrapper.state('date')).toBe(moment('YYYY-MM-DD'))
    expect(wrapper.state('location')).toBe('')
    expect(wrapper.state('price')).toBe(0)
    
  })

  //   test('intial state with props', () => {
  //     let mockMeal = {
  //       _id: 'abc123',
  //       title: 'rqrerw',
  //       description: 'rwrerw',
  //       pickupOffered: false,
  //       deliveryOffered: false,
  //       portions: 'rwrewr',
  //       photo: '/wat.jpg',
  //       previewImg: 'rwre',
  //       ingredients: 'rwerew',
  //       //date: moment(),
  //       location: 'rwerwe',
  //       price: '4.56',
  //     }

  //     let wrapper = mount(<MealForm />)
  //     expect(wrapper.state()).toEqual(mockMeal)
  //   })

  test('description input  can update the state', () => {
    let wrapper = mount(<MealForm />)
    wrapper.find('input[name="description"]').simulate('change', {
      target: { 
        name: 'description',
        value: 'i love testing react',
      },
    })

    expect(wrapper.state('description')).toEqual('i love testing react')
  })

  test('cuisines input  can update the state', () => {
    let wrapper = mount(<MealForm />)
    wrapper.find('input[name="price"]').simulate('change', {
      target: { 
        name: 'price',
        value: '4.56',
      },
    })

    expect(wrapper.state('price')).toEqual('4.56')
  })

  test('cuisines input  can update the state', () => {
    let wrapper = mount(<MealForm />)
    wrapper.find('input[name="title"]').simulate('change', {
      target: { 
        name: 'title',
        value: 'Pickles',
      },
    })

    expect(wrapper.state('title')).toEqual('Pickles')
  })

  test('submit event should invoke onComplete with state', () => {
    let mockOnComplete = jest.fn(() => Promise.resolve())
    let mockState = {
      _id: 'abc123',
      title: 'fdsfs',
      services: 'fsfds',
      cuisines: 'fsdfs',
      description: 'fsdfd',
      pickupOffered: false,
      deliveryOffered: false,
      portions: 3434,
      // previewImg: '',
      ingredients: 'rewrr',
      startDate: moment(),
      endDate: moment().add(2, 'months'),
      location: 'rwere',
      price: 455,
    }

    let wrapper = mount(<MealForm onComplete={mockOnComplete} />)
    wrapper.setState(mockState)
    wrapper.find('form').simulate('submit')
    expect(mockOnComplete).toHaveBeenCalledWith(mockState)
  })

  test('button text should say what i want', () => {
    let mockButtonText = 'Submit'
    let wrapper = mount(<MealForm buttonText={mockButtonText} />)
    expect(wrapper.find('button').text()).toEqual(` ${mockButtonText} `)
  })

})