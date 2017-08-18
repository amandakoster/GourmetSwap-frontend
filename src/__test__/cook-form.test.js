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
    // expect(wrapper.state('price')).toBe('')
    
  })
})