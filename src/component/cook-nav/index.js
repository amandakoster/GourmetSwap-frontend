import React from 'react'
import {connect} from 'react-redux'
import {MemoryRouter, Link, Switch, Route} from 'react-router-dom'

import * as util from '../../lib/util.js'
import * as route from  '../../action/route.js'
import * as auth from '../../action/auth.js'
import switchRoute from '../../action/route.js'
// import CookProfileForm from '../cook-profile-form'
import MealForm from '../meal-form'

class CookNav extends React.Component{
  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({value: event.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render(){
    return (
      <div className='cook-nav'>
        <ul
          defaultValue="---"
          id='event-type'
          name='event-type'
          onChange={this.handleChange}>
          <li value="cook-profile-form" onClick={this.props.goToCookProfileForm}> Cook Profile </li>
          <li value="meal-form" onClick={this.props.goToMealForm}> Meal Form </li>
          <li value="cook-application" onClick={this.props.goCookApplication}> Cook Application </li>
        </ul>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  route: state.route,
})

let mapDispatchToProps = (dispatch) => ({
  goToCookProfileForm: () => dispatch(route.switchRoute('/cook-profile-form')),
  goToCookMealForm: () => dispatch(route.switchRoute('/meal-form')),
  goToCookApplication: () => dispatch(route.switchRoute('/cook-application')),
})

export default connect(mapStateToProps, mapDispatchToProps)(CookNav)
