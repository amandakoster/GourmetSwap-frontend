import React from 'react'
import {connect} from 'react-redux'
import {MemoryRouter, Link, Switch, Route} from 'react-router-dom'

import * as util from '../../lib/util.js'
import * as route from  '../../action/route.js'
import * as auth from '../../action/auth.js'
import switchRoute from '../../action/route.js'
import CookApplication from '../cook-application'
import MealForm from '../meal-form'

class CookNav extends React.Component{
  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render(){
    return (
      <div className='drop-down'>
        <ul
          defaultValue="---"
          id='event-type'
          name='event-type'
          onChange={this.handleChange}>
          <li value="cook-application" onClick={this.props.goToCookApplication}> Cook Profile </li>
          <li value="meal-form" onClick={this.props.goToMealForm}> Meal Form </li>
        </ul>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  route: state.route,
})

let mapDispatchToProps = (dispatch) => ({
  goToCookApplication: () => dispatch(route.switchRoute('/cook-application')),
  goToCookMealForm: () => dispatch(route.switchRoute('/meal-form')),
})

export default connect(mapStateToProps, mapDispatchToProps)(CookNav)
