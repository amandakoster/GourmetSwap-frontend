import React from 'react'
import {connect} from 'react-redux'
import { render } from 'react-dom'
import {MemoryRouter, Link, Switch, Route} from 'react-router-dom'

import * as util from '../../lib/util.js'
import * as route from  '../../action/route.js'
import * as auth from '../../action/auth.js'
import CookApplication from '../cook-application'
import switchRoute from '../../action/route.js'
// import CookProfileForm from '../cook-profile-form'
import MealForm from '../meal-form'
import CookRegister from '../cook-register'

class CookNav extends React.Component{
  constructor(props){
    super(props)
    this.state = {value: 'meal-form'}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    // return (
    //   <form onSubmit={this.handleSubmit}>
    //
    //     <select value={this.goToMealForm} onChange={this.handleChange}>
    //       <option value="meal-form">Meal Form</option>
    //     </select>
    //     <input type="submit" value="Submit" />
    //   </form>
    //
    // )

    return (
      <form onSubmit={ this.handleSubmit }>
        <ul onChange={ this.handleChange }>
          <li onClick={ this.goToMealForm }> bring me to meal form </li>
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
      </form>
    )
  }
}

let mapStateToProps = (state) => ({
  route: state.route,
})

let mapDispatchToProps = (dispatch) => ({
  goToCookApplication: () => dispatch(route.switchRoute('/cook-application')),
  goToMealForm: () => dispatch(route.switchRoute('/meal-form')),
  goToCookRegister: () => dispatch(route.switchRoute('/cook-register')),
  goToCookProfileForm: () => dispatch(route.switchRoute('/cook-profile-form')),
  goToCookMealForm: () => dispatch(route.switchRoute('/meal-form')),
  goToCookApplication: () => dispatch(route.switchRoute('/cook-application')),
})

export default connect(mapStateToProps, mapDispatchToProps)(CookNav)
