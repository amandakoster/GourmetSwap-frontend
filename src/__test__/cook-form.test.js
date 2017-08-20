import React from 'react'
import {shallow, mount} from 'enzyme'
import CookForm from '../component/cook-form'
import moment from 'moment'

describe('CookForm', () => {

  test('intial state with out props', () => {
    let wrapper = mount(<CookForm />)
    expect(wrapper.state('signatureDishes')).toBe('')
    expect(wrapper.state('restaurantsCookedIn')).toBe(0)
    expect(wrapper.state('bestDescribes')).toBe('')
    expect(wrapper.state('mealsPerWeek')).toBe(0)
    expect(wrapper.state('services')).toBe('')
    expect(wrapper.state('cuisines')).toBe('')
    expect(wrapper.state('offerDelivery')).toBe(false)
    expect(wrapper.state('community')).toBe('')
    expect(wrapper.state('hoursPerWeek')).toBe('')
    expect(wrapper.state('moreInfo')).toBe('')
    expect(wrapper.state('howDidYouHear')).toBe('')
  })
  
  test('description input  can update the state', () => {
    let wrapper = mount(<CookForm />)
    wrapper.find('input[name="moreInfo"]').simulate('change', {
      target: {
        name: 'moreInfo',
        value: 'i love testing react',
      },
    })

    expect(wrapper.state('moreInfo')).toEqual('i love testing react')
  })

  test('submit event should invoke onComplete with state', () => {
    let mockOnComplete = jest.fn(() => Promise.resolve())
    let mockState = {
      _id: 'abc123',
      signatureDishes: 'fsdfsdf',
      restaurantsCookedIn: 4,
      bestDescribes: 'fdsfssd',
      mealsPerWeek: 5,
      services: 'fsfsfs',
      cuisines: 'fdsfsdf',
      offerDelivery: false,
      community: 'fsdfd',
      hoursPerWeek: 'fsdfs',
      moreInfo: 'fsf',
      howDidYouHear: 'fsdfdf',
    }

    let wrapper = mount(<CookForm onComplete={mockOnComplete} />)
    wrapper.setState(mockState)
    wrapper.find('form').simulate('submit')
    expect(mockOnComplete).toHaveBeenCalledWith(mockState)
  })
})
